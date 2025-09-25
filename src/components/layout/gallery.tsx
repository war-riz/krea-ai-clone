import React, { useState } from 'react';
import { ChevronRight, Scale, DollarSign } from 'lucide-react';
import Image from 'next/image';
import { GALLERY_ITEMS, GALLERY_CATEGORIES } from '@/constants/constants';

interface GalleryProps {
  isLoading?: boolean;
}

export function Gallery({ isLoading = false }: GalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredItems = selectedCategory === 'all' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => 
        item.tags.some(tag => tag.toLowerCase().includes(selectedCategory.toLowerCase()))
      );

  if (isLoading) {
    return (
      <section className="py-6">
        <div className="flex items-center justify-between mb-8">
          <div className="h-8 bg-gray-200 dark:bg-gray-700 animate-pulse rounded-lg w-32"></div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="aspect-square bg-gray-200 dark:bg-gray-700 animate-pulse rounded-xl"></div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="py-6 animate-fade-in">
      {/* Gallery Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-semibold">Gallery</h1>
        </div>
        
        <div className="flex items-center space-x-2">
          <a
            href="/legal"
            className="flex items-center space-x-1.5 px-3 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 rounded-full border shadow-sm"
          >
            <Scale className="w-3.5 h-3.5" />
            <span className="text-xs">Legal</span>
          </a>
          <a
            href="/pricing"
            className="flex items-center space-x-1.5 px-3 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 rounded-full border shadow-sm"
          >
            <DollarSign className="w-3.5 h-3.5" />
            <span className="text-xs">Pricing</span>
            <ChevronRight className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap gap-2 mb-8">
        {GALLERY_CATEGORIES.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
              selectedCategory === category
                ? 'bg-blue-500 text-white shadow-lg scale-105 border-blue-500'
                : 'bg-white dark:bg-gray-800/50 backdrop-blur-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/70 hover:scale-102 border-gray-200 dark:border-gray-700 shadow-sm'
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>
      
      {/* Gallery Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="group relative aspect-square rounded-2xl overflow-hidden bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:scale-105 border border-gray-200 dark:border-gray-700"
          >
            {/* Image */}
            <div className="absolute inset-0">
              <Image 
                src={item.imageUrl} 
                alt={item.title}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 16vw"
                className="object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement!.innerHTML += `
                    <div class="w-full h-full bg-gradient-to-br from-blue-400/20 via-purple-500/20 to-pink-500/20 flex items-center justify-center">
                      <div class="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                        <span class="text-2xl">🎨</span>
                      </div>
                    </div>
                  `;
                }}
              />
            </div>
            
            {/* Content overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-3">
              <div className="text-white space-y-1 w-full">
                <p className="text-sm font-semibold truncate">{item.title}</p>
                <p className="text-xs text-white/80 truncate">by {item.creator}</p>
                <div className="flex flex-wrap gap-1 mt-2">
                  {item.tags.slice(0, 2).map((tag) => (
                    <span 
                      key={tag} 
                      className="text-xs bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Hover effect indicator */}
            <div className="absolute top-3 right-3 w-8 h-8 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <ChevronRight className="w-4 h-4 text-white" />
            </div>
          </div>
        ))}
      </div>

      {/* Results count */}
      <div className="flex justify-center mt-8">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Showing {filteredItems.length} {filteredItems.length === 1 ? 'item' : 'items'} 
          {selectedCategory !== 'all' && ` in ${selectedCategory}`}
        </p>
      </div>
    </section>
  );
}