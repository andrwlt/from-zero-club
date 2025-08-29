import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';
import { 
  Calendar, 
  Github, 
  Twitter, 
  TrendingUp, 
  Users, 
  MessageSquare, 
  Code, 
  DollarSign,
  Target,
  Flame,
  Award
} from "lucide-react";

interface BuilderDashboardProps {
  user?: {
    id: string;
    email?: string;
    name?: string;
    handle?: string;
    avatar?: string;
  };
  profile?: {
    id: string;
    full_name?: string;
    avatar_url?: string;
    bio?: string;
    website?: string;
    twitter_handle?: string;
    github_username?: string;
    created_at?: string;
  };
}

export default function BuilderDashboard({ user, profile }: BuilderDashboardProps) {
  // Combine user and profile data
  const builderData = {
    name: profile?.full_name || user?.name || 'Builder',
    handle: profile?.twitter_handle || user?.handle || user?.email?.split('@')[0] || 'builder',
    avatar: profile?.avatar_url || user?.avatar || '',
    bio: profile?.bio || '',
    website: profile?.website || '',
    joinDate: profile?.created_at ? new Date(profile.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : 'Recently',
    currentDay: profile?.created_at ? Math.floor((Date.now() - new Date(profile.created_at).getTime()) / (1000 * 60 * 60 * 24)) : 1
  };

  const currentMetrics = {
    followers: 1247,
    posts: 47,
    commits: 289,
    revenue: 0,
    streak: 47,
    repositories: 12
  };

  const milestones = [
    { id: 1, title: "First follower", completed: true, day: 1 },
    { id: 2, title: "100 followers", completed: true, day: 23 },
    { id: 3, title: "1000 followers", completed: true, day: 42 },
    { id: 4, title: "First commit", completed: true, day: 1 },
    { id: 5, title: "100 commits", completed: true, day: 15 },
    { id: 6, title: "First customer", completed: false, day: null },
    { id: 7, title: "First revenue", completed: false, day: null },
    { id: 8, title: "$1000 MRR", completed: false, day: null }
  ];

  const followerData = [
    { day: 1, followers: 0 },
    { day: 5, followers: 23 },
    { day: 10, followers: 87 },
    { day: 15, followers: 156 },
    { day: 20, followers: 298 },
    { day: 25, followers: 456 },
    { day: 30, followers: 678 },
    { day: 35, followers: 892 },
    { day: 40, followers: 1089 },
    { day: 47, followers: 1247 }
  ];

  const commitData = [
    { day: 1, commits: 0 },
    { day: 5, commits: 12 },
    { day: 10, commits: 34 },
    { day: 15, commits: 67 },
    { day: 20, commits: 123 },
    { day: 25, commits: 156 },
    { day: 30, commits: 198 },
    { day: 35, commits: 234 },
    { day: 40, commits: 267 },
    { day: 47, commits: 289 }
  ];

  const postData = [
    { day: 1, posts: 0 },
    { day: 5, posts: 5 },
    { day: 10, posts: 10 },
    { day: 15, posts: 15 },
    { day: 20, posts: 20 },
    { day: 25, posts: 25 },
    { day: 30, posts: 30 },
    { day: 35, posts: 35 },
    { day: 40, posts: 40 },
    { day: 47, posts: 47 }
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex items-center space-x-4">
            <ImageWithFallback
              src={builderData.avatar}
              alt={builderData.name}
              className="w-20 h-20 rounded-full object-cover"
            />
            <div>
              <div className="flex items-center space-x-2 mb-1">
                <h1 className="text-2xl font-bold">{builderData.name}</h1>
                <Badge variant="secondary">
                  <Flame className="w-3 h-3 mr-1 text-orange-500" />
                  Day {builderData.currentDay}
                </Badge>
              </div>
              <p className="text-muted-foreground">{builderData.handle.startsWith('@') ? builderData.handle : `@${builderData.handle}`}</p>
              {builderData.bio && (
                <p className="text-sm mt-2 max-w-md">{builderData.bio}</p>
              )}
            </div>
          </div>
          {/* Removed Twitter Follow and GitHub buttons */}
        </div>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center">
              <Calendar className="w-4 h-4 mr-2 text-muted-foreground" />
              Days Building
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{currentMetrics.streak}</div>
            <p className="text-xs text-muted-foreground">Since {builderData.joinDate}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center">
              <Users className="w-4 h-4 mr-2 text-muted-foreground" />
              Followers
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{currentMetrics.followers.toLocaleString()}</div>
            <p className="text-xs text-green-600">+89 this week</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center">
              <Code className="w-4 h-4 mr-2 text-muted-foreground" />
              Commits
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{currentMetrics.commits}</div>
            <p className="text-xs text-green-600">+23 this week</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center">
              <DollarSign className="w-4 h-4 mr-2 text-muted-foreground" />
              Revenue
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              ${currentMetrics.revenue.toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground">Working towards first $</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Charts */}
        <div className="lg:col-span-2 space-y-6">
          <Tabs defaultValue="followers" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="followers">Followers</TabsTrigger>
              <TabsTrigger value="commits">Commits</TabsTrigger>
              <TabsTrigger value="posts">Posts</TabsTrigger>
            </TabsList>
            
            <TabsContent value="followers">
              <Card>
                <CardHeader>
                  <CardTitle>Follower Growth</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={followerData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="day" />
                      <YAxis />
                      <Tooltip />
                      <Area 
                        type="monotone" 
                        dataKey="followers" 
                        stroke="hsl(var(--primary))" 
                        fill="hsl(var(--primary))" 
                        fillOpacity={0.1}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="commits">
              <Card>
                <CardHeader>
                  <CardTitle>Commit Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={commitData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="day" />
                      <YAxis />
                      <Tooltip />
                      <Line 
                        type="monotone" 
                        dataKey="commits" 
                        stroke="hsl(var(--primary))" 
                        strokeWidth={2}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="posts">
              <Card>
                <CardHeader>
                  <CardTitle>Daily Posts</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={postData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="day" />
                      <YAxis />
                      <Tooltip />
                      <Area 
                        type="monotone" 
                        dataKey="posts" 
                        stroke="hsl(var(--chart-2))" 
                        fill="hsl(var(--chart-2))" 
                        fillOpacity={0.1}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-muted-foreground">2 hours ago</span>
                  <span>Pushed 3 commits to ai-notes-app</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-muted-foreground">4 hours ago</span>
                  <span>Posted update on X/Twitter</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-muted-foreground">1 day ago</span>
                  <span>Reached 1,200 followers milestone</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-muted-foreground">2 days ago</span>
                  <span>Created new repository: react-hooks-lib</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Milestones */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Target className="w-5 h-5 mr-2" />
                Milestones
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {milestones.map((milestone) => (
                  <div key={milestone.id} className="flex items-center space-x-3">
                    <div className={`w-4 h-4 rounded-full ${
                      milestone.completed 
                        ? 'bg-green-500' 
                        : 'bg-muted border-2 border-muted-foreground'
                    }`}>
                      {milestone.completed && (
                        <div className="w-full h-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <p className={`text-sm ${
                        milestone.completed ? 'line-through text-muted-foreground' : ''
                      }`}>
                        {milestone.title}
                      </p>
                      {milestone.completed && milestone.day && (
                        <p className="text-xs text-muted-foreground">Day {milestone.day}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Progress */}
          <Card>
            <CardHeader>
              <CardTitle>Progress to Next Milestone</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>First Customer</span>
                    <span>0/1</span>
                  </div>
                  <Progress value={0} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>$1K MRR</span>
                    <span>$0/$1,000</span>
                  </div>
                  <Progress value={0} className="h-2" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Consistency Score */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Award className="w-5 h-5 mr-2" />
                Consistency Score
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">98%</div>
                <p className="text-sm text-muted-foreground mb-4">
                  Posted 46 out of 47 days
                </p>
                <div className="grid grid-cols-7 gap-1">
                  {Array.from({ length: 49 }, (_, i) => (
                    <div
                      key={i}
                      className={`w-3 h-3 rounded-sm ${
                        i < 46 
                          ? 'bg-green-500' 
                          : i === 46 
                          ? 'bg-red-500' 
                          : 'bg-muted'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Last 7 weeks
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}