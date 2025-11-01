import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { BlogPost } from '../types/blog.types';

interface BlogCardProps {
  post: BlogPost;
}

export const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  const formatDate = (dateString: string): string => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const description = post.description || post.excerpt || post.intro || '';
  const authorName = post.author?.full_name || post.author?.name || 'Unknown Author';

  return (
    <article className="group bg-white rounded-xl shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-blue-200 hover:-translate-y-2">
      {/* Image Container */}
      {post.cover?.url && (
        <div className="relative w-full h-56 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
          <img
            src={`${process.env.REACT_APP_API_BASE_URL}${post.cover.url}`}
            alt={post.cover.alternativeText || post.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      )}

      {/* Content */}
      <div className="p-6">
        {/* Categories */}
        {post.blogpost_categories && post.blogpost_categories.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {post.blogpost_categories.slice(0, 2).map((cat) => (
              <span
                key={cat.id}
                className="px-3 py-1 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 rounded-full text-xs font-semibold border border-blue-100"
              >
                {cat.name}
              </span>
            ))}
          </div>
        )}

        {/* Title */}
        <h2 className="text-xl font-bold mb-3 text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300 cursor-pointer leading-tight">
          {post.title}
        </h2>

        {/* Description */}
        <p className="text-gray-600 mb-5 line-clamp-3 text-sm leading-relaxed">
          {description}
        </p>

        {/* Metadata Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <div className="flex items-center gap-1.5">
              <Calendar size={14} className="text-gray-400" />
              <span className="font-medium">{formatDate(post.publication_date)}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <User size={14} className="text-gray-400" />
              <span className="font-medium">{authorName}</span>
            </div>
          </div>

          {/* Read More Arrow */}
          <div className="flex items-center text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </article>
  );
};