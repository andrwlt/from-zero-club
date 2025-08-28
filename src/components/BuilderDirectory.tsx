import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { 
  Search, 
  Filter, 
  TrendingUp, 
  Calendar, 
  Users, 
  Code, 
  DollarSign,
  Flame,
  Award,
  ArrowUpRight
} from "lucide-react";

export default function BuilderDirectory() {
  const builders = [
    {
      id: 1,
      name: "Sarah Kim",
      handle: "@sarahbuilds",
      avatar: "https://images.unsplash.com/photo-1617386124435-9eb3935b1e11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGVudHJlcHJlbmV1ciUyMHBvcnRyYWl0fGVufDF8fHx8MTc1NjMwNzUzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      bio: "Launched my SaaS tool and hit first $1K MRR! Building in the open.",
      joinDate: "Oct 15, 2023",
      currentDay: 123,
      metrics: {
        followers: 3456,
        posts: 123,
        commits: 567,
        revenue: 1200,
        consistencyScore: 96
      },
      trending: true,
      rank: 1,
      tags: ["SaaS", "React", "Node.js"]
    },
    {
      id: 2,
      name: "Alex Chen",
      handle: "@alexchen",
      avatar: "https://images.unsplash.com/photo-1617386124435-9eb3935b1e11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGVudHJlcHJlbmV1ciUyMHBvcnRyYWl0fGVufDF8fHx8MTc1NjMwNzUzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      bio: "Building an AI-powered note-taking app. Day 47 of coding in public.",
      joinDate: "Jan 1, 2024",
      currentDay: 47,
      metrics: {
        followers: 1247,
        posts: 47,
        commits: 289,
        revenue: 0,
        consistencyScore: 98
      },
      trending: false,
      rank: 2,
      tags: ["AI", "React", "Python"]
    },
    {
      id: 3,
      name: "Marcus Johnson",
      handle: "@marcusdev",
      avatar: "https://images.unsplash.com/photo-1617386124435-9eb3935b1e11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGVudHJlcHJlbmV1ciUyMHBvcnRyYWl0fGVufDF8fHx8MTc1NjMwNzUzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      bio: "30 days of learning React and building projects. From zero coding experience.",
      joinDate: "Feb 1, 2024",
      currentDay: 30,
      metrics: {
        followers: 543,
        posts: 30,
        commits: 145,
        revenue: 0,
        consistencyScore: 100
      },
      trending: false,
      rank: 3,
      tags: ["Learning", "React", "Web Dev"]
    },
    {
      id: 4,
      name: "Emma Rodriguez",
      handle: "@emmabuilds",
      avatar: "https://images.unsplash.com/photo-1617386124435-9eb3935b1e11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGVudHJlcHJlbmV1ciUyMHBvcnRyYWl0fGVufDF8fHx8MTc1NjMwNzUzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      bio: "Design system evangelist building component libraries and design tools.",
      joinDate: "Dec 1, 2023",
      currentDay: 89,
      metrics: {
        followers: 2100,
        posts: 89,
        commits: 445,
        revenue: 450,
        consistencyScore: 92
      },
      trending: false,
      rank: 4,
      tags: ["Design", "UI/UX", "Components"]
    },
    {
      id: 5,
      name: "David Park",
      handle: "@davidcodes",
      avatar: "https://images.unsplash.com/photo-1617386124435-9eb3935b1e11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGVudHJlcHJlbmV1ciUyMHBvcnRyYWl0fGVufDF8fHx8MTc1NjMwNzUzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      bio: "Building mobile apps with React Native. Just shipped my second app!",
      joinDate: "Nov 15, 2023",
      currentDay: 104,
      metrics: {
        followers: 1890,
        posts: 104,
        commits: 623,
        revenue: 780,
        consistencyScore: 89
      },
      trending: false,
      rank: 5,
      tags: ["Mobile", "React Native", "iOS"]
    },
    {
      id: 6,
      name: "Lisa Chang",
      handle: "@lisabuilds",
      avatar: "https://images.unsplash.com/photo-1617386124435-9eb3935b1e11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGVudHJlcHJlbmV1ciUyMHBvcnRyYWl0fGVufDF8fHx8MTc1NjMwNzUzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      bio: "Full-stack developer building e-commerce solutions for small businesses.",
      joinDate: "Jan 15, 2024",
      currentDay: 32,
      metrics: {
        followers: 876,
        posts: 32,
        commits: 198,
        revenue: 0,
        consistencyScore: 94
      },
      trending: false,
      rank: 6,
      tags: ["E-commerce", "Full-stack", "Next.js"]
    }
  ];

  const leaderboardCategories = [
    { label: "Most Consistent", icon: Award, description: "Highest posting consistency" },
    { label: "Most Revenue", icon: DollarSign, description: "Highest monthly revenue" },
    { label: "Most Followers", icon: Users, description: "Largest following" },
    { label: "Most Active", icon: Code, description: "Most commits this month" }
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Builder Directory</h1>
        <p className="text-muted-foreground">
          Discover builders who are proving their consistency and building in public
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-muted-foreground" />
              <div>
                <div className="text-2xl font-bold">1,247</div>
                <div className="text-sm text-muted-foreground">Total Builders</div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <DollarSign className="w-5 h-5 text-muted-foreground" />
              <div>
                <div className="text-2xl font-bold">$2.3M</div>
                <div className="text-sm text-muted-foreground">Total Revenue</div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Code className="w-5 h-5 text-muted-foreground" />
              <div>
                <div className="text-2xl font-bold">45K</div>
                <div className="text-sm text-muted-foreground">Total Commits</div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Calendar className="w-5 h-5 text-muted-foreground" />
              <div>
                <div className="text-2xl font-bold">89%</div>
                <div className="text-sm text-muted-foreground">Avg Consistency</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Leaderboard Categories */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Leaderboards</h2>
        <div className="grid md:grid-cols-4 gap-4">
          {leaderboardCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{category.label}</h3>
                      <p className="text-sm text-muted-foreground">{category.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input placeholder="Search builders..." className="pl-10" />
        </div>
        <Select defaultValue="all">
          <SelectTrigger className="w-full md:w-48">
            <SelectValue placeholder="Filter by tag" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All tags</SelectItem>
            <SelectItem value="saas">SaaS</SelectItem>
            <SelectItem value="ai">AI</SelectItem>
            <SelectItem value="mobile">Mobile</SelectItem>
            <SelectItem value="design">Design</SelectItem>
            <SelectItem value="learning">Learning</SelectItem>
          </SelectContent>
        </Select>
        <Select defaultValue="rank">
          <SelectTrigger className="w-full md:w-48">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="rank">Overall rank</SelectItem>
            <SelectItem value="consistency">Consistency</SelectItem>
            <SelectItem value="followers">Followers</SelectItem>
            <SelectItem value="revenue">Revenue</SelectItem>
            <SelectItem value="recent">Recently joined</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Builder Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {builders.map((builder) => (
          <Card key={builder.id} className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <ImageWithFallback
                    src={builder.avatar}
                    alt={builder.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="flex items-center space-x-2">
                      <h3 className="font-semibold">{builder.name}</h3>
                      {builder.trending && (
                        <Badge variant="secondary" className="text-xs">
                          <TrendingUp className="w-3 h-3 mr-1" />
                          Trending
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">{builder.handle}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-primary">#{builder.rank}</div>
                  <div className="text-xs text-muted-foreground">Rank</div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-4">{builder.bio}</p>
              <div className="flex flex-wrap gap-1 mb-4">
                {builder.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="text-center">
                  <div className="text-lg font-semibold">{builder.currentDay}</div>
                  <div className="text-xs text-muted-foreground">Days</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold">{builder.metrics.consistencyScore}%</div>
                  <div className="text-xs text-muted-foreground">Consistency</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold">{builder.metrics.followers.toLocaleString()}</div>
                  <div className="text-xs text-muted-foreground">Followers</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold">
                    {builder.metrics.revenue > 0 ? `$${builder.metrics.revenue}` : '$0'}
                  </div>
                  <div className="text-xs text-muted-foreground">Revenue</div>
                </div>
              </div>
              <Button className="w-full" variant="outline">
                View Profile
                <ArrowUpRight className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center mt-8">
        <Button variant="outline" size="lg">
          Load more builders
        </Button>
      </div>
    </div>
  );
}