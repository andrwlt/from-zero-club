-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create profiles table
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  username TEXT UNIQUE,
  full_name TEXT,
  avatar_url TEXT,
  bio TEXT,
  website TEXT,
  twitter_handle TEXT,
  github_handle TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()) NOT NULL
);

-- Create auth_connections table
CREATE TABLE IF NOT EXISTS public.auth_connections (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  provider TEXT CHECK (provider IN ('twitter', 'github')) NOT NULL,
  access_token TEXT NOT NULL,
  refresh_token TEXT,
  expires_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()) NOT NULL,
  UNIQUE(user_id, provider)
);

-- Create metrics_snapshots table
CREATE TABLE IF NOT EXISTS public.metrics_snapshots (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  date DATE NOT NULL,
  twitter_followers INTEGER,
  twitter_posts INTEGER,
  github_commits INTEGER,
  github_repos INTEGER,
  github_stars INTEGER,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()) NOT NULL,
  UNIQUE(user_id, date)
);

-- Create streaks table
CREATE TABLE IF NOT EXISTS public.streaks (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  type TEXT CHECK (type IN ('posting', 'coding', 'overall')) NOT NULL,
  current_streak INTEGER DEFAULT 0 NOT NULL,
  longest_streak INTEGER DEFAULT 0 NOT NULL,
  last_activity_date DATE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()) NOT NULL,
  UNIQUE(user_id, type)
);

-- Create milestones table
CREATE TABLE IF NOT EXISTS public.milestones (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  type TEXT NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  value INTEGER NOT NULL,
  achieved_at TIMESTAMP WITH TIME ZONE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()) NOT NULL
);

-- Create indexes for performance
CREATE INDEX idx_metrics_snapshots_user_date ON public.metrics_snapshots(user_id, date DESC);
CREATE INDEX idx_milestones_user_achieved ON public.milestones(user_id, achieved_at DESC);
CREATE INDEX idx_auth_connections_user ON public.auth_connections(user_id);
CREATE INDEX idx_streaks_user ON public.streaks(user_id);

-- Enable Row Level Security
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.auth_connections ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.metrics_snapshots ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.streaks ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.milestones ENABLE ROW LEVEL SECURITY;

-- Create policies for profiles
CREATE POLICY "Public profiles are viewable by everyone" ON public.profiles
  FOR SELECT USING (true);

CREATE POLICY "Users can update own profile" ON public.profiles
  FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Users can insert own profile" ON public.profiles
  FOR INSERT WITH CHECK (auth.uid() = id);

-- Create policies for auth_connections
CREATE POLICY "Users can view own connections" ON public.auth_connections
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own connections" ON public.auth_connections
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own connections" ON public.auth_connections
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own connections" ON public.auth_connections
  FOR DELETE USING (auth.uid() = user_id);

-- Create policies for metrics_snapshots
CREATE POLICY "Public metrics are viewable by everyone" ON public.metrics_snapshots
  FOR SELECT USING (true);

CREATE POLICY "System can insert metrics" ON public.metrics_snapshots
  FOR INSERT WITH CHECK (true);

-- Create policies for streaks
CREATE POLICY "Public streaks are viewable by everyone" ON public.streaks
  FOR SELECT USING (true);

CREATE POLICY "System can manage streaks" ON public.streaks
  FOR ALL USING (true);

-- Create policies for milestones
CREATE POLICY "Public milestones are viewable by everyone" ON public.milestones
  FOR SELECT USING (true);

CREATE POLICY "System can insert milestones" ON public.milestones
  FOR INSERT WITH CHECK (true);

-- Create function to handle user creation
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, full_name, avatar_url)
  VALUES (
    new.id,
    new.raw_user_meta_data->>'full_name',
    new.raw_user_meta_data->>'avatar_url'
  );
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger for new user creation
CREATE OR REPLACE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = TIMEZONE('utc', NOW());
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for updated_at
CREATE TRIGGER handle_profiles_updated_at BEFORE UPDATE ON public.profiles
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

CREATE TRIGGER handle_auth_connections_updated_at BEFORE UPDATE ON public.auth_connections
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

CREATE TRIGGER handle_streaks_updated_at BEFORE UPDATE ON public.streaks
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();