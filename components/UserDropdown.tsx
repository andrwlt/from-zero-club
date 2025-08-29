import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Settings, Newspaper, LogOut } from "lucide-react";

interface UserDropdownProps {
  user: {
    name: string;
    handle: string;
    avatar: string;
  };
  onLogout: () => void;
}

export default function UserDropdown({ user, onLogout }: UserDropdownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="relative h-8 w-8 rounded-full cursor-pointer hover:opacity-75 transition-opacity">
          <ImageWithFallback
            src={user.avatar}
            alt={user.name}
            className="h-8 w-8 rounded-full object-cover"
          />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        {/* Group 1: User Info */}
        <DropdownMenuLabel className="font-normal">
          <div className="flex items-center space-x-3 py-2">
            <ImageWithFallback
              src={user.avatar}
              alt={user.name}
              className="h-10 w-10 rounded-full object-cover"
            />
            <div className="flex flex-col space-y-1">
              <p className="font-medium leading-none">{user.name}</p>
              <p className="text-sm text-muted-foreground leading-none">
                {user.handle}
              </p>
            </div>
          </div>
        </DropdownMenuLabel>
        
        <DropdownMenuSeparator />
        
        {/* Group 2: Preferences and What's news */}
        <DropdownMenuItem>
          <Settings className="mr-2 h-4 w-4" />
          <span>Preferences</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Newspaper className="mr-2 h-4 w-4" />
          <span>What&apos;s new</span>
        </DropdownMenuItem>
        
        <DropdownMenuSeparator />
        
        {/* Group 3: Logout */}
        <DropdownMenuItem onClick={onLogout}>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}