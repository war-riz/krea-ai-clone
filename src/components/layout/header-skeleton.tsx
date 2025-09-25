export function HeaderSkeleton() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="w-full max-w-none flex h-14 items-center justify-between px-4 lg:px-6">
        {/* Left Section Skeleton */}
        <div className="flex items-center space-x-3">
          <div className="h-6 w-6 rounded bg-muted/50 animate-pulse"></div>
          <div className="hidden sm:flex items-center space-x-2 bg-muted/30 rounded-full px-3 py-1.5">
            <div className="h-5 w-5 rounded-full bg-muted/50 animate-pulse"></div>
            <div className="h-4 w-24 bg-muted/50 rounded animate-pulse"></div>
            <div className="h-3 w-3 bg-muted/50 rounded animate-pulse"></div>
          </div>
        </div>

        {/* Center Navigation Skeleton */}
        <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex">
          <nav className="flex items-center bg-muted/30 rounded-full p-1 shadow-sm border border-border/20">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="w-8 h-8 rounded-full bg-muted/50 animate-pulse mx-0.5"></div>
            ))}
          </nav>
        </div>

        {/* Right Section Skeleton */}
        <div className="flex items-center space-x-1">
          <div className="hidden sm:flex items-center space-x-2 mr-3">
            <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-muted/30 border border-border/20">
              <div className="w-3.5 h-3.5 bg-muted/50 rounded animate-pulse"></div>
              <div className="h-3 w-12 bg-muted/50 rounded animate-pulse"></div>
            </div>
            <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-muted/30 border border-border/20">
              <div className="w-3.5 h-3.5 bg-muted/50 rounded animate-pulse"></div>
              <div className="h-3 w-12 bg-muted/50 rounded animate-pulse"></div>
            </div>
          </div>

          <div className="h-8 w-8 rounded-lg bg-muted/50 animate-pulse"></div>
          <div className="h-8 w-8 rounded-lg bg-muted/50 animate-pulse"></div>
          <div className="h-8 w-8 rounded-full bg-muted/50 animate-pulse"></div>
          <div className="md:hidden h-8 w-8 rounded-lg bg-muted/50 animate-pulse ml-2"></div>
        </div>
      </div>
    </header>
  );
}