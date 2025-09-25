// src/components/ui/theme-toggle.tsx
'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/contexts/theme-provider';
import { Button } from './button';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="icon"
        className={cn(
          'h-9 w-9 rounded-lg border border-input/50 bg-background/50 backdrop-blur-sm hover:bg-accent/50 hover:text-accent-foreground transition-all duration-200',
          className
        )}
        disabled
      >
        <Sun className="h-4 w-4 transition-all duration-200" />
      </Button>
    );
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className={cn(
        'h-9 w-9 rounded-lg border border-input/50 bg-background/50 backdrop-blur-sm hover:bg-accent/50 hover:text-accent-foreground transition-all duration-200 hover:scale-105 active:scale-95',
        className
      )}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <Moon className="h-4 w-4 transition-all duration-200" />
      ) : (
        <Sun className="h-4 w-4 transition-all duration-200 rotate-0 scale-100 dark:rotate-90 dark:scale-0" />
      )}
      <Sun className="absolute h-4 w-4 transition-all duration-200 rotate-90 scale-0 dark:rotate-0 dark:scale-100" />
    </Button>
  );
}