import { useState, useEffect } from "react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight, Flame, TrendingUp } from "lucide-react";

interface Builder {
  id: number;
  name: string;
  handle: string;
  avatar: string;
  bio: string;
  joinDate: string;
  currentDay: number;
  metrics: {
    followers: number;
    posts: number;
    commits: number;
    revenue: number;
    consistencyScore: number;
  };
  trending: boolean;
}

interface BuilderCarouselProps {
  builders: Builder[];
}

export default function BuilderCarousel({ builders }: BuilderCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(2); // Start with middle item focused
  
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % builders.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + builders.length) % builders.length);
  };

  // Auto-advance carousel every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % builders.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [builders.length]);

  const getVisibleBuilders = () => {
    const visible = [];
    for (let i = -2; i <= 2; i++) {
      const index = (currentIndex + i + builders.length) % builders.length;
      visible.push({
        builder: builders[index],
        position: i,
        isCenter: i === 0
      });
    }
    return visible;
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      <div className="flex items-center justify-center space-x-4 overflow-hidden py-8">
        {getVisibleBuilders().map(({ builder, position, isCenter }) => (
          <div
            key={`${builder.id}-${position}`}
            className={`transition-all duration-500 ease-out ${
              isCenter 
                ? "scale-100 opacity-100 z-10" 
                : "scale-75 opacity-70"
            }`}
            style={{
              transform: `translateX(${position * 20}px) scale(${isCenter ? 1 : 0.75})`,
            }}
          >
            <Card className="w-64 h-80 cursor-pointer hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center h-full flex flex-col justify-between">
                <div>
                  <ImageWithFallback
                    src={builder.avatar}
                    alt={builder.name}
                    className="w-16 h-16 rounded-full object-cover mx-auto mb-3"
                  />
                  <h3 className="font-semibold mb-1">{builder.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{builder.handle}</p>
                  <div className="flex items-center justify-center space-x-1 mb-4">
                    <Badge variant="secondary" className="text-xs">
                      <Flame className="w-3 h-3 mr-1 text-orange-500" />
                      Day {builder.currentDay}
                    </Badge>
                    {builder.trending && (
                      <Badge variant="secondary" className="text-xs">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        Trending
                      </Badge>
                    )}
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3 text-center">
                  <div>
                    <div className="text-sm font-semibold">{builder.metrics.followers.toLocaleString()}</div>
                    <div className="text-xs text-muted-foreground">Followers</div>
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{builder.metrics.commits}</div>
                    <div className="text-xs text-muted-foreground">Commits</div>
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{builder.currentDay}</div>
                    <div className="text-xs text-muted-foreground">Days</div>
                  </div>
                  <div>
                    <div className="text-sm font-semibold">
                      {builder.metrics.revenue > 0 ? `$${builder.metrics.revenue}` : '$0'}
                    </div>
                    <div className="text-xs text-muted-foreground">Revenue</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <Button 
        variant="outline" 
        size="icon" 
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20"
        onClick={prevSlide}
      >
        <ChevronLeft className="w-4 h-4" />
      </Button>
      
      <Button 
        variant="outline" 
        size="icon" 
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20"
        onClick={nextSlide}
      >
        <ChevronRight className="w-4 h-4" />
      </Button>


    </div>
  );
}