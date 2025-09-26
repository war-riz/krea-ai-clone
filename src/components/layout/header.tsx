'use client';

import { useState, useEffect } from 'react';
import { 
  Bell,
  Sun,
  Moon,
  Menu,
  Folder,
  X,
  ChevronDown,
  Grid3X3
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CENTER_NAVIGATION_ITEMS, RIGHT_NAVIGATION_ITEMS } from '@/constants/constants';
import { cn } from '@/lib/utils';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [activeItem, setActiveItem] = useState('home');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldUseDark = savedTheme === 'dark' || (!savedTheme && systemPrefersDark);
    
    setIsDark(shouldUseDark);
    document.documentElement.classList.toggle('dark', shouldUseDark);
  }, []);

  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', newTheme);
  };

  // Dynamic text color
  const getTextColor = () => {
    if (isDark) return 'text-white';
    return 'text-gray-700';
  };

  // Dynamic background for interactive elements
  const getInteractiveBackground = () => {
    if (isDark) return 'bg-white/10 border-white/20 hover:bg-white/20';
    return 'bg-black/10 border-gray-300 hover:bg-black/20';
  };

  // Special styling for center navigation to be more visible when scrolled
  const getCenterNavStyles = () => {
    if (isDark) {
      return 'bg-white/15 border-white/25';
    }
    return isScrolled 
      ? 'bg-black/30 border-black/40 backdrop-blur-md' 
      : 'bg-black/10 border-gray-300';
  };

  // Text color for center navigation icons
  const getCenterNavTextColor = () => {
    if (isDark) return 'text-white';
    return isScrolled ? 'text-white' : 'text-gray-700';
  };

  return (
    <header className="sticky top-0 z-50 w-full border-border/40 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/80">
      <div className="w-full max-w-none flex h-14 items-center justify-between px-4 lg:px-6">
        {/* Left Section - Logo and User */}
        <div className="flex items-center space-x-3">
          {/* Logo */}
          <div className={cn(
            "h-6 w-6 rounded flex items-center justify-center",
            isDark ? "bg-white" : "bg-foreground"
          )}>
            <div className={cn(
              "text-xs font-bold",
              isDark ? "text-black" : "text-background"
            )}>✱</div>
          </div>
          
          {/* User Dropdown */}
          <div className="relative">
            <div 
              className={cn(
                "hidden sm:flex items-center space-x-2 backdrop-blur-sm border rounded-full px-3 py-1.5 cursor-pointer transition-all duration-200 shadow-sm",
                getInteractiveBackground()
              )}
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <div className="h-5 w-5 rounded-full bg-gradient-to-br from-purple-400 to-blue-500"></div>
              <span className={cn("text-sm", getTextColor())}>My Workspace</span>
              <ChevronDown className={cn(
                "h-3 w-3 transition-transform", 
                getTextColor(),
                isDropdownOpen && "rotate-180"
              )} />
            </div>
            
            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-background border border-border rounded-lg shadow-2xl p-2 z-50">
                <div className="flex items-center space-x-2 px-3 py-2 hover:bg-muted/50 rounded-md cursor-pointer">
                  <Grid3X3 className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Gallery</span>
                </div>
                <div className="flex items-center space-x-2 px-3 py-2 hover:bg-muted/50 rounded-md cursor-pointer">
                  <Folder className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Folder</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Center Navigation */}
        <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex">
          <nav className={cn(
            "flex items-center backdrop-blur-sm border rounded-full p-1 shadow-sm transition-all duration-300",
            getCenterNavStyles()
          )}>
            {CENTER_NAVIGATION_ITEMS.map((item) => {
              const IconComponent = item.icon!;
              const isActive = activeItem === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveItem(item.id);
                  }}
                  className={cn(
                    'flex items-center justify-center w-8 h-8 rounded-2xl mx-3 transition-all duration-200',
                    isActive 
                      ? (isDark ? 'bg-white text-black shadow-sm' : isScrolled ? 'bg-white text-black shadow-sm' : 'bg-foreground text-background shadow-sm')
                      : cn(getCenterNavTextColor(), 'hover:text-foreground hover:bg-background/80')
                  )}
                  title={item.label}
                >
                  <IconComponent className="h-4 w-4" />
                </a>
              );
            })}
          </nav>
        </div>

        {/* Right Actions */}
        <div className="flex items-center space-x-1">
          <div className="hidden sm:flex items-center space-x-2 mr-3">
            {RIGHT_NAVIGATION_ITEMS.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={cn(
                  "flex items-center space-x-1.5 px-3 py-1.5 text-sm font-medium transition-all duration-200 rounded-full backdrop-blur-sm border shadow-sm",
                  getTextColor(),
                  getInteractiveBackground()
                )}
              >
                {item.id === 'gallery' && (
                  <div className="w-3.5 h-3.5 grid grid-cols-2 gap-0.5">
                    <div className="w-1.5 h-1.5 bg-current rounded-sm"></div>
                    <div className="w-1.5 h-1.5 bg-current rounded-sm"></div>
                    <div className="w-1.5 h-1.5 bg-current rounded-sm"></div>
                    <div className="w-1.5 h-1.5 bg-current rounded-sm"></div>
                  </div>
                )}
                {item.id === 'support' && (
                  <Folder className="w-3.5 h-3.5" />
                )}
                <span className="text-xs">{item.label}</span>
              </a>
            ))}
          </div>

          {/* Notification Bell */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-8 w-8 hover:bg-muted/50 relative"
          >
            <Bell className={cn("h-4 w-4", getTextColor())} />
            <span className="sr-only">Notifications</span>
          </Button>

          {/* Theme Toggle */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-8 w-8 hover:bg-muted/50"
            onClick={toggleTheme}
          >
            {isDark ? (
              <Sun className={cn("h-4 w-4", getTextColor())} />
            ) : (
              <Moon className={cn("h-4 w-4", getTextColor())} />
            )}
            <span className="sr-only">Toggle theme</span>
          </Button>

          {/* User Avatar */}
          <Button 
            variant="ghost" 
            size="icon"
            className="h-8 w-8 hover:bg-muted/50 rounded-full"
          >
            <div className="h-6 w-6 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
              <span className="text-xs text-white font-medium">U</span>
            </div>
            <span className="sr-only">User menu</span>
          </Button>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden h-8 w-8 hover:bg-muted/50 ml-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className={cn("h-4 w-4", getTextColor())} />
            ) : (
              <Menu className={cn("h-4 w-4", getTextColor())} />
            )}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {isDropdownOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setIsDropdownOpen(false)}
        />
      )}

      {/* Mobile Navigation */}
      <div className={cn(
        "md:hidden transition-all duration-300 ease-in-out overflow-hidden border-t border-border/40 mb-0",
        isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
      )}>
        <div className="bg-background p-0.5">
          <nav className="space-y-2">
            {CENTER_NAVIGATION_ITEMS.map((item) => {
              const IconComponent = item.icon!;
              const isActive = activeItem === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveItem(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={cn(
                    'flex items-center space-x-3 px-3 py-2.5 text-sm font-medium rounded-lg transition-all duration-200',
                    isActive 
                      ? 'bg-foreground text-background' 
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/30'
                  )}
                >
                  <IconComponent className="h-4 w-4" />
                  <span>{item.label}</span>
                </a>
              );
            })}
            
            <div className="border-t border-border/40 pt-2 mt-2">
              {RIGHT_NAVIGATION_ITEMS.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  className="block px-3 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}