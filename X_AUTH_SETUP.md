# X (Twitter) Authentication Setup Guide

## Prerequisites
- Supabase account
- Twitter Developer account

## Step 1: Set up Supabase Project

1. Create a new Supabase project at [supabase.com](https://supabase.com)
2. Once created, go to **Settings > API**
3. Copy your:
   - Project URL (looks like: `https://xxxxx.supabase.co`)
   - Anon/Public Key (a long JWT token)

## Step 2: Configure Twitter/X OAuth App

1. Go to [Twitter Developer Portal](https://developer.twitter.com/en/portal/dashboard)
2. Create a new App or use an existing one
3. Configure OAuth 2.0 settings:
   - **Callback URL**: `https://YOUR_PROJECT.supabase.co/auth/v1/callback`
   - **Website URL**: Your app URL
   - **Type of App**: Web App
   - **App permissions**: Read (minimum)

4. Copy your:
   - Client ID
   - Client Secret

## Step 3: Enable Twitter Provider in Supabase

1. In Supabase Dashboard, go to **Authentication > Providers**
2. Find **Twitter** in the list and enable it
3. Enter your Twitter OAuth credentials:
   - API Key (Client ID)
   - API Secret Key (Client Secret)
4. Save the configuration

## Step 4: Set up Environment Variables

Create a `.env.local` file in your project root:

```env
NEXT_PUBLIC_SUPABASE_URL=https://YOUR_PROJECT.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

## Step 5: Run Database Migrations

The migration file already exists at `supabase/migrations/001_initial_schema.sql`

To apply it:
1. Go to Supabase Dashboard > SQL Editor
2. Copy and paste the entire migration file
3. Run the query

## Step 6: Test the Authentication Flow

1. Start your development server: `npm run dev`
2. Navigate to `http://localhost:3000`
3. Click "Sign in with X"
4. Authorize the app on Twitter
5. You should be redirected to the dashboard

## Troubleshooting

### "Redirect URI mismatch" error
- Ensure the callback URL in Twitter App settings exactly matches: `https://YOUR_PROJECT.supabase.co/auth/v1/callback`

### User not being created in profiles table
- Check that the database trigger `on_auth_user_created` is active
- Verify RLS policies are correctly set

### Session not persisting
- Check that middleware is running (should see logs in terminal)
- Ensure cookies are enabled in browser
- Verify environment variables are loaded correctly

## Security Notes

- Never commit `.env.local` to version control
- Keep your Supabase service role key secret (not used in client)
- Use Row Level Security (RLS) for all database tables
- Regularly rotate your OAuth credentials