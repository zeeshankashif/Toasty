import React, { useState } from 'react';
import { Utensils, CupSoda, Cake, Coffee, Apple, Soup } from 'lucide-react';

interface RecipeImageProps {
  src?: string;
  category?: string;
  alt: string;
  className?: string;
}

const CATEGORY_FALLBACK_IMAGES: Record<string, string> = {
  breakfast: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=800',
  lunch: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800',
  dinner: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800',
  dessert: 'https://images.unsplash.com/photo-1624371414361-e6e8ea737730?auto=format&fit=crop&q=80&w=800',
  snack: 'https://images.unsplash.com/photo-1599490659213-e2b9527bb087?auto=format&fit=crop&q=80&w=800',
  drink: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=800',
  other: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80&w=800',
};

export const RecipeImage: React.FC<RecipeImageProps> = ({ src, category = 'Other', alt, className = '' }) => {
  const [currentSrc, setCurrentSrc] = useState<string | undefined>(src);
  const [errorCount, setErrorCount] = useState<number>(0);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const normalizedCategory = category.toLowerCase();

  const handleImageError = () => {
    if (errorCount === 0) {
      // Step 1: Try category fallback
      setErrorCount(1);
      const fallback = CATEGORY_FALLBACK_IMAGES[normalizedCategory] || CATEGORY_FALLBACK_IMAGES.other;
      setCurrentSrc(fallback);
    } else if (errorCount === 1) {
      // Step 2: Try general food fallback
      setErrorCount(2);
      setCurrentSrc(CATEGORY_FALLBACK_IMAGES.other);
    } else {
      // Step 3: Stop trying and render clean CSS/SVG
      setErrorCount(3);
    }
  };

  // If we have hit maximum error retries or never had a URL to begin with
  if (!currentSrc || errorCount >= 3) {
    let IconComponent = Utensils;
    let bgGradient = 'from-amber-100 to-orange-100 dark:from-amber-950/20 dark:to-orange-950/20 text-orange-600 dark:text-orange-400';

    if (normalizedCategory.includes('drink')) {
      IconComponent = CupSoda;
      bgGradient = 'from-blue-100 to-teal-100 dark:from-blue-950/20 dark:to-teal-950/20 text-teal-600 dark:text-teal-400';
    } else if (normalizedCategory.includes('dessert')) {
      IconComponent = Cake;
      bgGradient = 'from-pink-100 to-rose-100 dark:from-pink-950/20 dark:to-rose-950/20 text-rose-600 dark:text-rose-400';
    } else if (normalizedCategory.includes('breakfast')) {
      IconComponent = Coffee;
      bgGradient = 'from-yellow-100 to-amber-100 dark:from-yellow-950/20 dark:to-amber-950/20 text-amber-600 dark:text-amber-400';
    } else if (normalizedCategory.includes('snack')) {
      IconComponent = Apple;
      bgGradient = 'from-emerald-100 to-green-100 dark:from-emerald-950/20 dark:to-green-950/20 text-green-600 dark:text-green-400';
    } else if (normalizedCategory.includes('lunch') || normalizedCategory.includes('dinner')) {
      IconComponent = Soup;
      bgGradient = 'from-red-100 to-orange-100 dark:from-red-950/20 dark:to-orange-950/20 text-red-600 dark:text-red-400';
    }

    return (
      <div 
        id="fallback-svg-container"
        className={`w-full h-full flex flex-col items-center justify-center bg-gradient-to-br ${bgGradient} p-4 transition-all duration-300`}
      >
        <IconComponent id="fallback-svg-icon" className="w-8 h-8 sm:w-12 sm:h-12 mb-2 animate-pulse" />
        <span id="fallback-svg-label" className="text-[10px] sm:text-xs font-medium uppercase tracking-wider opacity-75">{category}</span>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full bg-stone-100 dark:bg-stone-900 overflow-hidden">
      {!isLoaded && (
        <div 
          id="loading-skeleton"
          className="absolute inset-0 w-full h-full bg-stone-200 dark:bg-stone-800 animate-pulse flex items-center justify-center"
        >
          <Utensils className="w-6 h-6 sm:w-8 sm:h-8 text-stone-300 dark:text-stone-700 animate-spin" />
        </div>
      )}
      <img
        src={currentSrc}
        alt={alt}
        referrerPolicy="no-referrer"
        onLoad={() => setIsLoaded(true)}
        onError={handleImageError}
        className={`${className} ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} transition-all duration-300 w-full h-full object-cover`}
      />
    </div>
  );
};
