'use client';

import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { FEATURED_MODELS } from '@/constants/constants';
import { useCallback } from 'react';

interface FeaturedCardsProps {
  isLoading?: boolean;
}

export function FeaturedCards({ isLoading = false }: FeaturedCardsProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    
    const cardWidth = 924;
    const newIndex = direction === 'right' 
      ? Math.min(currentIndex + 1, FEATURED_MODELS.length - 1)
      : Math.max(currentIndex - 1, 0);
    
    setCurrentIndex(newIndex);
    
    scrollRef.current.scrollTo({
      left: newIndex * cardWidth,
      behavior: 'smooth'
    });
  };

  const scrollToIndex = (index: number) => {
    if (!scrollRef.current) return;
    
    const cardWidth = 924;
    setCurrentIndex(index);
    
    scrollRef.current.scrollTo({
      left: index * cardWidth,
      behavior: 'smooth'
    });
  };

  const updateCurrentIndex = useCallback(() => {
    if (!scrollRef.current) return;
    
    const cardWidth = 924;
    const scrollLeft = scrollRef.current.scrollLeft;
    const newIndex = Math.round(scrollLeft / cardWidth);
    
    if (newIndex !== currentIndex) {
      setCurrentIndex(newIndex);
    }
  }, [currentIndex]);

  const handleScroll = useCallback(() => {
    if (!scrollRef.current) return;
    
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    
    updateCurrentIndex();
  }, [updateCurrentIndex]);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
      handleScroll();
      return () => scrollContainer.removeEventListener('scroll', handleScroll);
    }
  }, [handleScroll]);

  if (isLoading) {
    return (
      <section className="py-2 relative">
        <div className="flex items-center justify-between mb-6">
          <div className="h-8 w-48 bg-muted rounded-lg animate-pulse"></div>
          <div className="flex space-x-2">
            <div className="h-8 w-8 bg-muted rounded-lg animate-pulse"></div>
            <div className="h-8 w-8 bg-muted rounded-lg animate-pulse"></div>
          </div>
        </div>
        
        <div className="flex space-x-6 pb-4">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex-none w-[900px] h-80 bg-muted rounded-3xl animate-pulse">
              <div className="h-full p-8 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div className="space-y-3">
                    <div className="h-4 w-20 bg-muted-foreground/20 rounded animate-pulse"></div>
                    <div className="h-4 w-16 bg-muted-foreground/20 rounded animate-pulse"></div>
                  </div>
                  <div className="h-8 w-8 bg-muted-foreground/20 rounded animate-pulse"></div>
                </div>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="h-8 w-48 bg-muted-foreground/20 rounded animate-pulse"></div>
                    <div className="h-5 w-36 bg-muted-foreground/20 rounded animate-pulse"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-4 w-full bg-muted-foreground/20 rounded animate-pulse"></div>
                    <div className="h-4 w-3/4 bg-muted-foreground/20 rounded animate-pulse"></div>
                  </div>
                  <div className="h-9 w-32 bg-muted-foreground/20 rounded animate-pulse"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Skeleton dots */}
        <div className="flex justify-center space-x-2 mt-6">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-2 w-2 bg-muted rounded-full animate-pulse"></div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="py-2 relative">

      <div 
        ref={scrollRef}
        className="flex space-x-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none'
        }}
      >
        {FEATURED_MODELS.map((model, index) => (
          <Card
            key={model.id}
            className={cn(
              "flex-none w-[900px] h-[500px] relative overflow-hidden cursor-pointer group transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl border-0 snap-start rounded-3xl",
              "animate-slide-up"
            )}
            style={{
              animationDelay: `${index * 100}ms`,
              backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url(${model.backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="relative h-full flex flex-col justify-between p-8">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <Badge variant="featured" className="text-xs px-3 py-1 font-medium">
                    {model.tags?.[0] || 'AI Model'}
                  </Badge>
                  {model.version && (
                    <Badge variant="secondary" className="text-xs px-3 py-1 bg-white/20 text-white border-white/30 backdrop-blur-sm">
                      v{model.version}
                    </Badge>
                  )}
                </div>
                
                <div className="p-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 group-hover:bg-white/20 transition-colors">
                  <Sparkles className="h-4 w-4 text-white" />
                </div>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-3xl font-bold text-white group-hover:text-blue-200 transition-colors">
                    {model.title}
                  </h3>
                  <p className="text-lg text-white/90 font-medium">
                    {model.subtitle}
                  </p>
                </div>
                <p className="text-sm text-white/80 leading-relaxed max-w-md">
                  {model.description}
                </p>
                
                <Button
                  size="default"
                  className="mt-4 bg-white text-black hover:bg-gray-100 transition-all duration-200 group-hover:scale-105 font-medium px-6 rounded-full"
                >
                  Try {model.name}
                </Button>
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-white/10 to-transparent rounded-bl-full transform translate-x-20 -translate-y-20 group-hover:scale-110 transition-transform duration-500"></div>
          </Card>
        ))}
      </div>
      
      {/* Bottom navigation section with dots and arrows */}
      <div className="flex items-center justify-between mt-6">
        <div className="flex-1 flex justify-center space-x-2">
          {FEATURED_MODELS.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              className={cn(
                "h-2 w-2 rounded-full transition-all duration-300",
                currentIndex === index 
                  ? "bg-gray-800 w-3" 
                  : "bg-gray-400/50 hover:bg-gray-400"
              )}
            />
          ))}
        </div>

        {/* Navigation arrows */}
        {!isMobile && (
          <div className="flex space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={cn(
                "h-10 w-10 rounded-full bg-black/10 backdrop-blur-sm border border-gray-300 text-gray-700 hover:bg-black/20 transition-all duration-200 shadow-sm",
                !canScrollLeft && "opacity-50 cursor-not-allowed"
              )}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={cn(
                "h-10 w-10 rounded-full bg-black/10 backdrop-blur-sm border border-gray-300 text-gray-700 hover:bg-black/20 transition-all duration-200 shadow-sm",
                !canScrollRight && "opacity-50 cursor-not-allowed"
              )}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        )}
      </div>
      
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}