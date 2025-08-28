import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowRight, Github, Twitter, TrendingUp, Calendar, Users, DollarSign } from "lucide-react";

export default function LandingPage() {
  const featuredBuilders = [
    {
      id: 1,
      name: "Alex Chen",
      handle: "@alexchen",
      avatar: "https://images.unsplash.com/photo-1617386124435-9eb3935b1e11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGVudHJlcHJlbmV1ciUyMHBvcnRyYWl0fGVufDF8fHx8MTc1NjMwNzUzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      joinDate: "Day 1",
      currentDay: 47,
      metrics: {
        followers: 1247,
        posts: 47,
        commits: 289,
        revenue: 0
      },
      description: "Building an AI-powered note-taking app. Day 47 of coding in public.",
      trending: true
    },
    {
      id: 2,
      name: "Sarah Kim",
      handle: "@sarahbuilds",
      avatar: "https://images.unsplash.com/photo-1617386124435-9eb3935b1e11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGVudHJlcHJlbmV1ciUyMHBvcnRyYWl0fGVufDF8fHx8MTc1NjMwNzUzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      joinDate: "Day 1",
      currentDay: 123,
      metrics: {
        followers: 3456,
        posts: 123,
        commits: 567,
        revenue: 1200
      },
      description: "Launched my SaaS tool and hit first $1K MRR! 123 days of consistent building.",
      trending: false
    },
    {
      id: 3,
      name: "Marcus Johnson",
      handle: "@marcusdev",
      avatar: "https://images.unsplash.com/photo-1617386124435-9eb3935b1e11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGVudHJlcHJlbmV1ciUyMHBvcnRyYWl0fGVufDF8fHx8MTc1NjMwNzUzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      joinDate: "Day 1",
      currentDay: 30,
      metrics: {
        followers: 543,
        posts: 30,
        commits: 145,
        revenue: 0
      },
      description: "30 days of learning React and building projects. From zero coding experience.",
      trending: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge className="mb-4" variant="secondary">
              For builders starting from zero
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Prove your consistency.
              <br />
              <span className="text-muted-foreground">Build in public.</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              A public metrics dashboard that tracks your journey from first follower to first customer to first revenue. 
              Show the world your commitment to building.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8">
                Start tracking <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                View demo
              </Button>
            </div>
            <div className="mt-8 flex items-center space-x-6 text-sm text-muted-foreground">
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
          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1566915896913-549d796d2166?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjB3b3Jrc3BhY2UlMjBkZXZlbG9wZXJ8ZW58MXx8fHwxNzU2Mjg3MzE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Developer workspace"
              className="w-full h-96 object-cover rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-4 -right-4 bg-card border border-border rounded-lg p-4 shadow-lg">
              <div className="flex items-center space-x-2 text-sm">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>127 builders building right now</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="container mx-auto px-4 py-20 bg-muted/30">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">How From Zero Club works</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Connect your accounts and let transparency do the talking. No gaming the system, just real metrics.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Twitter className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Connect your X/Twitter</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Link your Twitter account to track followers, posts, and engagement. Keep building your audience where they are.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Github className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Connect GitHub</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Show your coding consistency with commit streaks, contributions, and project progress. Let your code speak.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Track revenue</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Share your revenue milestones as you grow. From $0 to $1 to $1,000+ MRR. Transparency builds trust.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Featured Builders */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Featured builders</h2>
          <p className="text-xl text-muted-foreground">
            Real builders, real progress, real transparency
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {featuredBuilders.map((builder) => (
            <Card key={builder.id} className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
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
                <p className="text-sm text-muted-foreground mb-4">{builder.description}</p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold">{builder.currentDay}</div>
                    <div className="text-xs text-muted-foreground">Days</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">{builder.metrics.followers.toLocaleString()}</div>
                    <div className="text-xs text-muted-foreground">Followers</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">{builder.metrics.commits}</div>
                    <div className="text-xs text-muted-foreground">Commits</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">
                      {builder.metrics.revenue > 0 ? `$${builder.metrics.revenue}` : '$0'}
                    </div>
                    <div className="text-xs text-muted-foreground">Revenue</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to build in public?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join the community of builders who are proving their consistency every single day.
          </p>
          <Button size="lg" className="text-lg px-8">
            Start your journey <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-6 h-6 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground text-sm font-bold">0</span>
              </div>
              <span className="font-semibold">From Zero Club</span>
            </div>
            <div className="flex space-x-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground">About</a>
              <a href="#" className="hover:text-foreground">Privacy</a>
              <a href="#" className="hover:text-foreground">Terms</a>
              <a href="#" className="hover:text-foreground">Support</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}