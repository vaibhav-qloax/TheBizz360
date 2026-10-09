import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, Clock, ArrowRight, Tag, BookOpen, AlertCircle, Sparkles } from 'lucide-react';
import { BLOG_POSTS } from '../data/blogs';
import { SEOHead } from '../components/SEOHead';

export function BlogsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'All',
    'Dining Logistics',
    'Commercial Services',
    'Work & Productivity',
    'Merchant Operations',
  ];

  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchesCategory =
        selectedCategory === 'All' || post.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const featuredPost = BLOG_POSTS.find((p) => p.isFeatured) || BLOG_POSTS[0];

  const blogsJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'TheBizz360 Insights & Research',
    description:
      'Logistics analysis, food court operations, and workplace productivity guides for commercial complexes and campus ecosystems.',
    url: 'https://thebizz360.com/blogs',
  };

  return (
    <>
      <SEOHead
        title="Commercial & Campus Insights | TheBizz360"
        description="Explore articles on food court automation, office desk delivery, digital print workflows, and commercial service directories."
        canonicalUrl="https://thebizz360.com/blogs"
        jsonLd={blogsJsonLd}
      />

      <div className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Heading */}
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ffe8d6] text-[#d9480f] text-xs font-bold uppercase tracking-wider mb-3">
              <BookOpen className="w-3.5 h-3.5" />
              Publications &amp; Insights
            </div>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-[#10161a] tracking-tight">
              Complex Operations &amp; Technology Insights
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#7a6a5c] leading-relaxed">
              Real-world insights on food court logistics, queue management, and modern commercial services.
            </p>
          </div>

          {/* Featured Blog Section */}
          {selectedCategory === 'All' && searchQuery.trim() === '' && featuredPost && (
            <div className="mb-14">
              <div className="relative rounded-3xl bg-white border border-[#f6ddc5] p-6 sm:p-8 md:p-10 shadow-sm overflow-hidden hover:shadow-lg transition-all">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-8 space-y-4">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-[#d9480f] text-white">
                        Featured Publication
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#ffe8d6] text-[#d9480f]">
                        {featuredPost.category}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-[#7a6a5c]">
                        <Clock className="w-3 h-3 text-[#d9480f]" /> {featuredPost.readTime}
                      </span>
                    </div>

                    <h2 className="font-display text-2xl sm:text-3xl font-black text-[#10161a] leading-snug">
                      <Link
                        to={`/blogs/${featuredPost.slug}`}
                        className="hover:text-[#d9480f] transition-colors"
                      >
                        {featuredPost.title}
                      </Link>
                    </h2>

                    <p className="text-sm sm:text-base text-[#7a6a5c] leading-relaxed">
                      {featuredPost.excerpt}
                    </p>

                    <div className="pt-2 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-[#ffe8d6] flex items-center justify-center text-xs font-bold text-[#d9480f]">
                          TB
                        </div>
                        <div>
                          <div className="text-xs font-bold text-[#10161a]">
                            {featuredPost.author.name}
                          </div>
                          <div className="text-[11px] text-[#7a6a5c]">
                            {featuredPost.author.role} &bull; {featuredPost.publishedAt}
                          </div>
                        </div>
                      </div>

                      <Link
                        to={`/blogs/${featuredPost.slug}`}
                        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#d9480f] text-white text-xs sm:text-sm font-semibold hover:bg-[#b8380a] transition-all shadow-xs"
                      >
                        Read Article <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>

                  <div className="lg:col-span-4 rounded-2xl overflow-hidden border border-[#f6ddc5] bg-[#fff5ec] p-2">
                    <div className="w-full h-48 rounded-xl overflow-hidden mb-3">
                      <img
                        src={featuredPost.coverImage}
                        alt={featuredPost.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-3 bg-white rounded-xl space-y-2">
                      <div className="text-xs font-bold text-[#10161a] uppercase tracking-wider">
                        Core Takeaways
                      </div>
                      <ul className="space-y-1.5 text-xs text-[#7a6a5c]">
                        {featuredPost.keyTakeaways.slice(0, 2).map((takeaway, idx) => (
                          <li key={idx} className="flex items-start gap-1.5">
                            <span className="text-[#d9480f] font-bold">&bull;</span>
                            <span>{takeaway}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Search & Filter Toolbar: Clean Minimal Pills */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8">
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-[#10161a] text-white shadow-xs'
                      : 'bg-white border border-[#f6ddc5] text-[#7a6a5c] hover:text-[#10161a] hover:bg-[#fff5ec]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="relative min-w-[280px]">
              <Search className="w-4 h-4 text-[#7a6a5c] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search articles by title or keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-10 py-2.5 bg-white border border-[#f6ddc5] rounded-full text-xs sm:text-sm text-[#10161a] placeholder-[#7a6a5c] focus:outline-hidden focus:border-[#d9480f] focus:ring-1 focus:ring-[#d9480f]"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-gray-600 cursor-pointer"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Articles Listing Grid */}
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post) => (
                <article
                  key={post.slug}
                  className="bg-white rounded-3xl border border-[#f6ddc5] p-5 shadow-xs hover:shadow-lg hover:border-[#ff7a1a]/60 transition-all duration-200 flex flex-col justify-between group overflow-hidden"
                >
                  <div>
                    {/* Visual Cover Photo with Category Tag */}
                    <div className="w-full h-44 rounded-2xl overflow-hidden mb-4 bg-[#fff5ec] relative border border-[#f6ddc5]/60">
                      <img
                        src={post.coverImage}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-white/95 backdrop-blur-xs text-[#d9480f] shadow-2xs border border-[#f6ddc5]/80">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-[#7a6a5c] mb-2 font-medium">
                      <Clock className="w-3.5 h-3.5 text-[#d9480f]" />
                      <span>{post.readTime}</span>
                      <span className="text-gray-300">&bull;</span>
                      <span>{post.publishedAt}</span>
                    </div>

                    <h3 className="font-display text-base sm:text-lg font-bold text-[#10161a] group-hover:text-[#d9480f] transition-colors leading-snug mb-2.5 line-clamp-2">
                      <Link to={`/blogs/${post.slug}`}>{post.title}</Link>
                    </h3>

                    <p className="text-xs sm:text-sm text-[#7a6a5c] line-clamp-2 leading-relaxed mb-4">
                      {post.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {post.tags.slice(0, 3).map((tag, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center gap-1 text-[11px] px-2.5 py-0.5 rounded-full bg-[#fff5ec] text-[#7a6a5c] border border-[#f6ddc5]/40"
                        >
                          <Tag className="w-2.5 h-2.5 text-[#d9480f]" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3.5 border-t border-gray-100 flex items-center justify-between text-xs">
                    <span className="text-[#7a6a5c] font-medium">{post.author.name}</span>
                    <Link
                      to={`/blogs/${post.slug}`}
                      className="text-[#d9480f] font-bold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1"
                    >
                      Read full <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-3xl border border-[#f6ddc5] p-12 text-center max-w-lg mx-auto my-8">
              <div className="w-12 h-12 rounded-full bg-[#ffe8d6] flex items-center justify-center text-[#d9480f] mx-auto mb-4">
                <AlertCircle className="w-6 h-6" />
              </div>
              <h3 className="font-display text-lg font-bold text-[#10161a] mb-2">
                No matching articles found
              </h3>
              <p className="text-sm text-[#7a6a5c] mb-6">
                We couldn't find any articles matching your query.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
                className="px-6 py-2.5 rounded-full bg-[#d9480f] text-white text-xs font-semibold hover:bg-[#b8380a] transition-all cursor-pointer shadow-xs"
              >
                Reset Search Filters
              </button>
            </div>
          )}

          {/* User-friendly engagement banner */}
          <div className="mt-16 rounded-3xl bg-[#fff5ec] border border-[#f6ddc5] p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#d9480f] uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" /> Have questions or insights?
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-[#10161a]">
                Interested in Onboarding Your Food Stall or Business?
              </h3>
              <p className="text-sm text-[#7a6a5c] max-w-xl">
                Our complex operations desk helps cafeterias, retail counters, and service providers join TheBizz360 platform smoothly.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#d9480f] text-white text-sm font-semibold hover:bg-[#b8380a] transition-all shadow-xs shrink-0"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
