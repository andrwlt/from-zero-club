import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import BuilderCarousel from "./BuilderCarousel";
import {
  ArrowRight,
  Github,
  Twitter,
  TrendingUp,
  Calendar,
  Users,
  DollarSign,
  Flame,
  Award,
  Code,
  X,
} from "lucide-react";

interface HomePageProps {
  isAuthenticated?: boolean;
}

export default function HomePage({
  isAuthenticated = false,
}: HomePageProps) {
  const builders = [
    {
      id: 1,
      name: "Sarah Kim",
      handle: "@sarahbuilds",
      avatar:
        "https://images.unsplash.com/photo-1617386124435-9eb3935b1e11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGVudHJlcHJlbmV1ciUyMHBvcnRyYWl0fGVufDF8fHx8MTc1NjMwNzUzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      bio: "Launched my SaaS tool and hit first $1K MRR! Building in the open.",
      joinDate: "Oct 15, 2023",
      currentDay: 123,
      metrics: {
        followers: 3456,
        posts: 123,
        commits: 567,
        revenue: 1200,
        consistencyScore: 96,
      },
      trending: true,
      lastUpdate: "2 hours ago",
      updateType: "revenue",
      updateText: "Reached $1K MRR milestone! 🎉",
    },
    {
      id: 2,
      name: "Alex Chen",
      handle: "@alexchen",
      avatar:
        "https://images.unsplash.com/photo-1617386124435-9eb3935b1e11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGVudHJlcHJlbmV1ciUyMHBvcnRyYWl0fGVufDF8fHx8MTc1NjMwNzUzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      bio: "Building an AI-powered note-taking app. Day 47 of coding in public.",
      joinDate: "Jan 1, 2024",
      currentDay: 47,
      metrics: {
        followers: 1247,
        posts: 47,
        commits: 289,
        revenue: 0,
        consistencyScore: 98,
      },
      trending: false,
      lastUpdate: "4 hours ago",
      updateType: "commit",
      updateText: "Hit 1000 followers on X! 🚀",
    },
    {
      id: 3,
      name: "Marcus Johnson",
      handle: "@marcusdev",
      avatar:
        "https://images.unsplash.com/photo-1617386124435-9eb3935b1e11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGVudHJlcHJlbmV1ciUyMHBvcnRyYWl0fGVufDF8fHx8MTc1NjMwNzUzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      bio: "30 days of learning React and building projects. From zero coding experience.",
      joinDate: "Feb 1, 2024",
      currentDay: 30,
      metrics: {
        followers: 543,
        posts: 30,
        commits: 145,
        revenue: 0,
        consistencyScore: 100,
      },
      trending: false,
      lastUpdate: "6 hours ago",
      updateType: "milestone",
      updateText: "Finished 100 days streak of coding! 💪",
    },
    {
      id: 4,
      name: "Emma Rodriguez",
      handle: "@emmabuilds",
      avatar:
        "https://images.unsplash.com/photo-1617386124435-9eb3935b1e11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGVudHJlcHJlbmV1ciUyMHBvcnRyYWl0fGVufDF8fHx8MTc1NjMwNzUzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      bio: "Design system evangelist building component libraries and design tools.",
      joinDate: "Dec 1, 2023",
      currentDay: 89,
      metrics: {
        followers: 2100,
        posts: 89,
        commits: 445,
        revenue: 450,
        consistencyScore: 92,
      },
      trending: false,
      lastUpdate: "1 day ago",
      updateType: "post",
      updateText: "Launched my first open source project! ⭐",
    },
    {
      id: 5,
      name: "David Park",
      handle: "@davidcodes",
      avatar:
        "https://images.unsplash.com/photo-1617386124435-9eb3935b1e11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGVudHJlcHJlbmV1ciUyMHBvcnRyYWl0fGVufDF8fHx8MTc1NjMwNzUzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      bio: "Full-stack developer building productivity tools for developers.",
      joinDate: "Nov 10, 2023",
      currentDay: 78,
      metrics: {
        followers: 1890,
        posts: 78,
        commits: 334,
        revenue: 250,
        consistencyScore: 94,
      },
      trending: false,
      lastUpdate: "3 hours ago",
      updateType: "milestone",
      updateText: "Shipped 10 projects in 10 weeks! 🚢",
    },
  ];

  // Separate updates data for the updates section
  const recentUpdates = [
    {
      id: 1,
      name: "Sarah Kim",
      handle: "@sarahbuilds",
      avatar:
        "https://images.unsplash.com/photo-1617386124435-9eb3935b1e11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGVudHJlcHJlbmV1ciUyMHBvcnRyYWl0fGVufDF8fHx8MTc1NjMwNzUzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      time: "2 hours ago",
      updateType: "revenue",
      achievement: "Reached $1K MRR milestone! 🎉",
    },
    {
      id: 2,
      name: "Alex Chen",
      handle: "@alexchen",
      avatar:
        "https://images.unsplash.com/photo-1617386124435-9eb3935b1e11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGVudHJlcHJlbmV1ciUyMHBvcnRyYWl0fGVufDF8fHx8MTc1NjMwNzUzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      time: "4 hours ago",
      updateType: "commit",
      achievement: "Hit 1000 followers on X! 🚀",
    },
    {
      id: 3,
      name: "Marcus Johnson",
      handle: "@marcusdev",
      avatar:
        "https://images.unsplash.com/photo-1617386124435-9eb3935b1e11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGVudHJlcHJlbmV1ciUyMHBvcnRyYWl0fGVufDF8fHx8MTc1NjMwNzUzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      time: "6 hours ago",
      updateType: "milestone",
      achievement: "Finished 100 days streak of coding! 💪",
    },
    {
      id: 4,
      name: "Emma Rodriguez",
      handle: "@emmabuilds",
      avatar:
        "https://images.unsplash.com/photo-1617386124435-9eb3935b1e11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGVudHJlcHJlbmV1ciUyMHBvcnRyYWl0fGVufDF8fHx8MTc1NjMwNzUzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      time: "1 day ago",
      updateType: "post",
      achievement: "Launched my first open source project! ⭐",
    },
    {
      id: 5,
      name: "David Park",
      handle: "@davidcodes",
      avatar:
        "https://images.unsplash.com/photo-1617386124435-9eb3935b1e11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGVudHJlcHJlbmV1ciUyMHBvcnRyYWl0fGVufDF8fHx8MTc1NjMwNzUzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      time: "3 hours ago",
      updateType: "milestone",
      achievement: "Shipped 10 projects in 10 weeks! 🚢",
    },
    {
      id: 6,
      name: "Lisa Wang",
      handle: "@lisabuilds",
      avatar:
        "https://images.unsplash.com/photo-1617386124435-9eb3935b1e11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGVudHJlcHJlbmV1ciUyMHBvcnRyYWl0fGVufDF8fHx8MTc1NjMwNzUzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      time: "2 days ago",
      updateType: "revenue",
      achievement: "First customer signed up! 💰",
    },
  ];

  const getUpdateIcon = (type: string) => {
    switch (type) {
      case "revenue":
        return (
          <DollarSign className="w-4 h-4 text-green-600" />
        );
      case "commit":
        return <Code className="w-4 h-4 text-blue-600" />;
      case "milestone":
        return <Award className="w-4 h-4 text-purple-600" />;
      case "post":
        return <X className="w-4 h-4 text-black" />;
      default:
        return (
          <Calendar className="w-4 h-4 text-muted-foreground" />
        );
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {!isAuthenticated ? (
        // Hero Section for unauthenticated users
        <section className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4" variant="secondary">
              For builders starting from zero
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Prove your consistency.
              <br />
              <span className="text-muted-foreground">
                Build in public.
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
              A public metrics dashboard that tracks your
              journey from first follower to first customer to
              first revenue. Show the world your commitment to
              building.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="text-lg px-8">
                Get started{" "}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>127 builders building right now</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4" />
                <span>1,247 builders</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-4 h-4" />
                <span>$2.3M tracked revenue</span>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      {/* Builder Profiles Carousel */}
      <section className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            {isAuthenticated
              ? "Top Builders"
              : "Featured builders"}
          </h2>
          <p className="text-xl text-muted-foreground">
            {isAuthenticated
              ? "Discover the most consistent builders in your network"
              : "Real builders, real progress, real transparency"}
          </p>
        </div>

        <BuilderCarousel builders={builders} />
      </section>

      {/* Recent Updates Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">
            Recent Updates
          </h2>
          <p className="text-xl text-muted-foreground">
            {isAuthenticated
              ? "Latest achievements from builders in your network"
              : "Latest achievements from builders in the community"}
          </p>
        </div>

        <div className="max-w-2xl mx-auto space-y-4">
          {recentUpdates.map((update) => (
            <Card
              key={update.id}
              className="hover:shadow-lg transition-shadow cursor-pointer"
            >
              <CardContent className="p-4">
                <div className="flex items-center space-x-3">
                  <ImageWithFallback
                    src={update.avatar}
                    alt={update.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h4 className="font-semibold text-sm">
                        {update.name}
                      </h4>
                      <span className="text-xs text-muted-foreground">
                        {update.handle}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        •
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {update.time}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      {getUpdateIcon(update.updateType)}
                      <p className="text-sm">
                        {update.achievement}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button variant="outline" size="lg">
            {isAuthenticated
              ? "Load more updates"
              : "View all updates"}
          </Button>
        </div>
      </section>

      {/* CTA Section for unauthenticated users */}
      {!isAuthenticated && (
        <section className="container mx-auto px-4 py-20 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              Ready to build in public?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join the community of builders who are proving
              their consistency every single day.
            </p>
            <Button size="lg" className="text-lg px-8">
              Start your journey{" "}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </section>
      )}

      {/* Footer with moved navigation links */}
      <footer className="border-t border-border bg-muted/30">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Logo and description */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-6 h-6 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground text-sm font-bold">
                    0
                  </span>
                </div>
                <span className="font-semibold">
                  From Zero Club
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                A public metrics dashboard for builders proving
                their consistency from zero to success.
              </p>
            </div>

            {/* Product */}
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <a
                  href="#"
                  className="block hover:text-foreground"
                >
                  How it works
                </a>
                <a
                  href="#"
                  className="block hover:text-foreground"
                >
                  Features
                </a>
                <a
                  href="#"
                  className="block hover:text-foreground"
                >
                  Pricing
                </a>
                <a
                  href="#"
                  className="block hover:text-foreground"
                >
                  API
                </a>
              </div>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <a
                  href="#"
                  className="block hover:text-foreground"
                >
                  Blog
                </a>
                <a
                  href="#"
                  className="block hover:text-foreground"
                >
                  Explore
                </a>
                <a
                  href="#"
                  className="block hover:text-foreground"
                >
                  Community
                </a>
                <a
                  href="#"
                  className="block hover:text-foreground"
                >
                  Help Center
                </a>
              </div>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <a
                  href="#"
                  className="block hover:text-foreground"
                >
                  About
                </a>
                <a
                  href="#"
                  className="block hover:text-foreground"
                >
                  Privacy
                </a>
                <a
                  href="#"
                  className="block hover:text-foreground"
                >
                  Terms
                </a>
                <a
                  href="#"
                  className="block hover:text-foreground"
                >
                  Support
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
              <p>
                &copy; 2024 From Zero Club. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-foreground">
                  Twitter
                </a>
                <a href="#" className="hover:text-foreground">
                  GitHub
                </a>
                <a href="#" className="hover:text-foreground">
                  Discord
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}