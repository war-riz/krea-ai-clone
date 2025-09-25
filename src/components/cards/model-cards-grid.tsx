'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { GENERATE_MODELS } from '@/constants/constants';

interface ModelCardsGridProps {
  isLoading?: boolean;
}

function ModelCardSkeleton() {
  return (
    <Card className="group relative overflow-hidden border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 animate-pulse backdrop-blur-sm rounded-xl">
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-3 flex-1">
            <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-xl"></div>
            <div className="space-y-2 flex-1">
              <div className="h-5 w-20 bg-gray-200 dark:bg-gray-700 rounded"></div>
              <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded"></div>
            </div>
          </div>
          <div className="h-8 w-16 bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
        </div>
      </CardContent>
    </Card>
  );
}

export function ModelCardsGrid({ isLoading = false }: ModelCardsGridProps) {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  if (isLoading) {
    return (
      <section className="py-6">
        <div className="flex items-center justify-between mb-6">
          <div className="h-7 w-24 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse"></div>
          <div className="h-6 w-16 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[...Array(8)].map((_, i) => (
            <ModelCardSkeleton key={i} />
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold">Generate</h2>
        <Button 
          variant="ghost" 
          size="sm" 
          className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 text-sm flex items-center gap-1 cursor-pointer"
        >
          <ArrowUpRight className="h-4 w-4" />
          Show all
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {GENERATE_MODELS.map((model, index) => {
          const IconComponent = model.icon;
          
          return (
            <Card
              key={model.id}
              className={cn(
                "group relative overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg animate-slide-up",
                "border-2 border-gray-200 dark:border-gray-700 backdrop-blur-sm",
                model.backgroundColor,
                "hover:scale-[1.02] hover:-translate-y-1 rounded-xl"
              )}
              style={{
                animationDelay: `${index * 30}ms`
              }}
              onMouseEnter={() => setHoveredCard(model.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3 flex-1">
                    {/* Icon */}
                    <div className={cn(
                      "w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-200 shrink-0",
                      model.iconWrapper,
                      hoveredCard === model.id && "scale-110"
                    )}>
                      <IconComponent className={cn("h-6 w-6", model.iconColor)} />
                    </div>

                    {/* Content */}
                    <div className="space-y-2 flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <h3 className={cn(
                          "font-semibold text-base transition-colors duration-200 truncate",
                          "text-white-300 dark:text-black-100",
                          hoveredCard === model.id && "text-blue-600 dark:text-blue-400"
                        )}>
                          {model.name}
                        </h3>
                        {model.isNew && (
                          <Badge 
                            variant="new" 
                            className={cn(
                              "text-xs px-2 py-1 transition-all duration-300 shrink-0 rounded-md",
                              "bg-blue-500 text-white hover:bg-blue-600 font-medium",
                              hoveredCard === model.id && "scale-105"
                            )}
                          >
                            New
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-white-300 dark:text-black-400 leading-relaxed line-clamp-2">
                        {model.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Open Button */}
                  <Button 
                    size="sm" 
                    variant="outline"
                    className={cn(
                      "transition-all duration-200 text-sm h-8 px-4 ml-2 shrink-0 rounded-lg font-medium",
                      "border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800",
                      "hover:bg-gray-50 hover:border-gray-400 text-gray-700 dark:text-gray-300",
                      "dark:hover:bg-gray-700 dark:hover:border-gray-500",
                      hoveredCard === model.id && "scale-105 shadow-sm border-gray-400 dark:border-gray-500"
                    )}
                  >
                    {model.buttonText}
                  </Button>
                </div>
              </CardContent>

              {/* Hover effect border */}
              <div className={cn(
                "absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
              )}></div>
            </Card>
          );
        })}
      </div>
    </section>
  );
}