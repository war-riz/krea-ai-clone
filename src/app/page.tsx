'use client';

import { useState, useEffect } from 'react';
import { Header, HeaderSkeleton, Footer, Gallery } from '@/components/layout';
import { FeaturedCards } from '@/components/cards/featured-cards';
import { ModelCardsGrid } from '@/components/cards/model-cards-grid';

export default function HomePage() {
  const [isHeaderLoading, setIsHeaderLoading] = useState(true);
  const [isFeaturedLoading, setIsFeaturedLoading] = useState(true);
  const [isModelsLoading, setIsModelsLoading] = useState(true);
  const [isGalleryLoading, setIsGalleryLoading] = useState(true);

  useEffect(() => {
    const headerTimer = setTimeout(() => setIsHeaderLoading(false), 800);
    const featuredTimer = setTimeout(() => setIsFeaturedLoading(false), 1200);
    const modelsTimer = setTimeout(() => setIsModelsLoading(false), 1600);
    const galleryTimer = setTimeout(() => setIsGalleryLoading(false), 2000);

    return () => {
      clearTimeout(headerTimer);
      clearTimeout(featuredTimer);
      clearTimeout(modelsTimer);
      clearTimeout(galleryTimer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      {isHeaderLoading ? <HeaderSkeleton /> : <Header />}
      
      {/* Main Content */}
      <main className="container mx-auto px-4 lg:px-6 py-8 space-y-12">
        <FeaturedCards isLoading={isFeaturedLoading} />
        <ModelCardsGrid isLoading={isModelsLoading} />
        <Gallery isLoading={isGalleryLoading} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}