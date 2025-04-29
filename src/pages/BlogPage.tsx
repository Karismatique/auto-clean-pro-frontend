
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import BlogCard from '../components/BlogCard';
import { blogPosts } from '../data/blog';

const BlogPage: React.FC = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  
  // Simple pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 4;
  
  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);
  
  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  
  // Categories
  const categories = Array.from(new Set(blogPosts.map(post => post.category)));
  
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically submit to an API
    console.log('Newsletter signup:', email);
    alert('Merci pour votre inscription à notre newsletter!');
    setEmail('');
  };

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">{t('latestArticles')}</h1>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Conseils professionnels, nouvelles tendances et astuces pour garder votre véhicule impeccable.
        </p>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <button className="bg-primary text-white px-4 py-2 rounded-full text-sm">
            Tous
          </button>
          {categories.map(category => (
            <button 
              key={category}
              className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-full text-sm transition-colors"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {currentPosts.map(post => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center gap-2 mb-16">
          {Array.from({ length: Math.ceil(blogPosts.length / postsPerPage) }).map((_, index) => (
            <button
              key={index}
              onClick={() => paginate(index + 1)}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                currentPage === index + 1
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-primary text-white rounded-lg p-8 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-center">{t('subscribe')}</h2>
          <p className="mb-6 text-center text-white/80">
            Recevez nos derniers articles, conseils et offres spéciales directement dans votre boîte de réception.
          </p>
          <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Votre adresse email"
              className="flex-grow px-4 py-3 rounded-lg text-black"
              required
            />
            <button
              type="submit"
              className="bg-white text-primary hover:bg-gray-100 font-medium px-6 py-3 rounded-lg transition-colors sm:whitespace-nowrap"
            >
              S'abonner
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
