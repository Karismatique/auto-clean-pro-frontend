
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import { BlogPost } from '../data/blog';
import { useTranslation } from 'react-i18next';

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  const { t } = useTranslation();
  const { title, excerpt, date, author, category, imageUrl, slug } = post;

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden flex flex-col h-full">
      <div className="relative">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-48 object-cover"
        />
        <span className="absolute top-4 right-4 bg-primary text-white text-xs font-semibold px-2 py-1 rounded">
          {category}
        </span>
      </div>
      
      <div className="p-5 flex-grow flex flex-col">
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{excerpt}</p>
        
        <div className="flex justify-between items-center text-sm text-gray-500 mb-3">
          <span>{author}</span>
          <div className="flex items-center">
            <Calendar size={14} className="mr-1" />
            <span>{date}</span>
          </div>
        </div>
        
        <Link 
          to={`/blog/${slug}`} 
          className="text-primary font-medium hover:underline"
        >
          {t('readMore')} →
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
