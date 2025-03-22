
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  slug: string;
}

interface NewsCardProps {
  news: NewsItem;
  className?: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ news, className }) => {
  return (
    <article 
      className={cn(
        "group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300",
        "border border-border/50 hover:border-blue-200",
        "transform-gpu hover:translate-y-[-5px]",
        className
      )}
    >
      <div className="aspect-video overflow-hidden">
        <img 
          src={news.image} 
          alt={news.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      
      <div className="p-6">
        <div className="flex items-center text-muted-foreground text-sm mb-3">
          <Calendar className="h-4 w-4 mr-2" />
          <time dateTime={news.date}>{news.date}</time>
        </div>
        
        <h3 className="font-heading font-semibold text-xl mb-2 group-hover:text-primary transition-colors duration-200">
          <Link to={`/news/${news.slug}`}>{news.title}</Link>
        </h3>
        
        <p className="text-foreground/80 text-sm mb-4 line-clamp-3">{news.excerpt}</p>
        
        <Link 
          to={`/news/${news.slug}`}
          className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
        >
          Czytaj więcej
          <ArrowRight className="ml-1 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
};

export default NewsCard;
