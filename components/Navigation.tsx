import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import UserDropdown from "./UserDropdown";
import { 
  Home, 
  User, 
  LogIn
} from "lucide-react";

interface NavigationProps {
  currentView: string;
  onViewChange: (view: string) => void;
  isAuthenticated?: boolean;
  user?: {
    id?: string;
    email?: string;
    name?: string;
    handle?: string;
    avatar?: string;
  };
  onLogin?: () => void;
  onLogout?: () => void;
}

export default function Navigation({ 
  currentView, 
  onViewChange, 
  isAuthenticated = false,
  user,
  onLogin,
  onLogout 
}: NavigationProps) {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'dashboard', label: 'My Profile', icon: User },
  ];

  // Mock user data for demonstration
  const defaultUser = {
    name: "Alex Chen",
    handle: "@alexchen",
    avatar: "https://images.unsplash.com/photo-1617386124435-9eb3935b1e11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGVudHJlcHJlbmV1ciUyMHBvcnRyYWl0fGVufDF8fHx8MTc1NjMwNzUzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  };

  const currentUser = user || defaultUser;

  return (
    <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and wordmark */}
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => onViewChange('home')}>
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold">0</span>
            </div>
            <span className="font-semibold">From Zero Club</span>
          </div>

          {/* Navigation Links - Only show for authenticated users */}
          {isAuthenticated && (
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Button
                    key={item.id}
                    variant={currentView === item.id ? "secondary" : "ghost"}
                    onClick={() => onViewChange(item.id)}
                    className="flex items-center space-x-2"
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </Button>
                );
              })}
            </div>
          )}

          {/* Right side actions */}
          <div className="flex items-center space-x-3">
            {isAuthenticated ? (
              // Authenticated state: avatar only
              <>
                <UserDropdown 
                  user={currentUser} 
                  onLogout={onLogout || (() => {})} 
                />
              </>
            ) : (
              // Unauthenticated state: login and join buttons
              <>
                <Button variant="ghost" onClick={onLogin}>
                  Login
                </Button>
                <Button onClick={() => window.location.href = '/signup'}>
                  Join Club
                </Button>
              </>
            )}
          </div>
        </div>

        {/* Mobile Navigation - Only show for authenticated users */}
        {isAuthenticated && (
          <div className="md:hidden flex items-center justify-around py-2 border-t border-border">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Button
                  key={item.id}
                  variant={currentView === item.id ? "secondary" : "ghost"}
                  size="sm"
                  onClick={() => onViewChange(item.id)}
                  className="flex flex-col items-center space-y-1 h-auto py-2"
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-xs">{item.label}</span>
                </Button>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
}