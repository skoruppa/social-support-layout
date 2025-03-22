
import React from 'react';
import { Calendar, Clock, Tag } from 'lucide-react';

export interface ArticleContentProps {
  title: string;
  date: string;
  readingTime?: string;
  image: string;
  tags?: string[];
  content: React.ReactNode;
}

const ArticleContent: React.FC<ArticleContentProps> = ({
  title,
  date,
  readingTime,
  image,
  tags,
  content
}) => {
  return (
    <article className="max-w-3xl mx-auto animate-fade-in">
      <header className="mb-8">
        <h1 className="heading-2 mb-4">{title}</h1>
        
        <div className="flex flex-wrap items-center text-sm text-muted-foreground gap-4 mb-6">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-2" />
            <time dateTime={date}>{date}</time>
          </div>
          
          {readingTime && (
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              <span>{readingTime}</span>
            </div>
          )}
        </div>
        
        <div className="aspect-video rounded-lg overflow-hidden mb-6">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover"
          />
        </div>
        
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {tags.map((tag, index) => (
              <span 
                key={index}
                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700"
              >
                <Tag className="h-3 w-3 mr-1" />
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>
      
      <div className="prose prose-blue max-w-none">
        {content}
      </div>
    </article>
  );
};

export default ArticleContent;
