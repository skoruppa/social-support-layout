
import React from 'react';
import NewsCard from '@/components/NewsCard';
import { cn } from '@/lib/utils';

export interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
  slug: string;
}

interface NewsGridProps {
  news: NewsItem[];
  className?: string;
}

const NewsGrid: React.FC<NewsGridProps> = ({ news, className }) => {
  if (!news || news.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-foreground/70">Brak aktualności do wyświetlenia.</p>
      </div>
    );
  }

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", className)}>
      {news.map((item, index) => (
        <NewsCard
          key={item.id}
          news={item}
          className="animate-fade-up"
          style={{ animationDelay: `${index * 0.05}s` }}
        />
      ))}
    </div>
  );
};

export default NewsGrid;
