import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, User, Tag, Share2, CheckCircle2, ChevronRight } from 'lucide-react';
import { BLOG_POSTS } from '../data/blogs';
import { SEOHead } from '../components/SEOHead';
import { useState } from 'react';

export function BlogDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const [copied, setCopied] = useState(false);

  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blogs" replace />;
  }

  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: '2026-10-04T08:00:00+05:30',
    dateModified: '2026-10-09T10:00:00+05:30',
    author: {
      '@type': 'Person',
      name: post.author.name,
    },
    publisher: {
      '@type': 'Organization',
      name: 'TheBizz360',
      logo: {
        '@type': 'ImageObject',
        url: 'https://thebizz360.com/logo.png',
      },
    },
    mainEntityOfPage: `https://thebizz360.com/blogs/${post.slug}`,
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <SEOHead
        title={`${post.title} | TheBizz360 Insights`}
        description={post.excerpt}
        canonicalUrl={`https://thebizz360.com/blogs/${post.slug}`}
        ogType="article"
        publishedTime={post.publishedAt}
        author={post.author.name}
        jsonLd={articleJsonLd}
      />

      <article className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back link */}
          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#7a6a5c] hover:text-[#d9480f] mb-8 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to all publications
          </Link>

          {/* Header Metadata */}
          <header className="space-y-4 mb-8">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-[#ffe8d6] text-[#d9480f]">
                {post.category}
              </span>
              <span className="flex items-center gap-1.5 text-xs text-[#7a6a5c]">
                <Clock className="w-3.5 h-3.5 text-[#d9480f]" /> {post.readTime}
              </span>
              <span className="text-gray-300">&bull;</span>
              <span className="flex items-center gap-1.5 text-xs text-[#7a6a5c]">
                <Calendar className="w-3.5 h-3.5" /> {post.publishedAt}
              </span>
            </div>

            <h1 className="font-display text-2xl sm:text-4xl md:text-5xl font-black text-[#10161a] leading-tight">
              {post.title}
            </h1>

            <p className="text-base sm:text-lg text-[#7a6a5c] leading-relaxed pt-1">
              {post.excerpt}
            </p>

            {/* Author bar & share button */}
            <div className="pt-4 pb-2 border-t border-b border-[#f6ddc5] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#ffe8d6] border border-[#f6ddc5] flex items-center justify-center text-sm font-bold text-[#d9480f]">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-[#10161a]">
                    {post.author.name}
                  </div>
                  <div className="text-xs text-[#7a6a5c]">
                    {post.author.role}
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={handleCopyLink}
                className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-white border border-[#f6ddc5] text-xs font-bold text-[#10161a] hover:bg-[#fff5ec] transition-colors cursor-pointer"
              >
                <Share2 className="w-3.5 h-3.5 text-[#d9480f]" />
                {copied ? 'Link Copied!' : 'Share Publication'}
              </button>
            </div>
          </header>

          {/* Hero Cover Image */}
          {post.coverImage && (
            <div className="w-full h-64 sm:h-80 rounded-3xl overflow-hidden mb-10 border border-[#f6ddc5] shadow-sm">
              <img
                src={post.coverImage}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Key Takeaways Callout */}
          <div className="bg-[#fff5ec] rounded-3xl p-6 sm:p-8 border border-[#f6ddc5] shadow-xs mb-10">
            <h2 className="font-display text-sm font-black text-[#10161a] uppercase tracking-wider mb-3 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#d9480f]" />
              Executive Takeaways
            </h2>
            <ul className="space-y-2.5">
              {post.keyTakeaways.map((takeaway, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-[#10161a]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Main Article Content */}
          <div className="prose prose-lg max-w-none text-[#10161a] leading-relaxed space-y-6">
            {post.content.map((paragraph, idx) => (
              <p key={idx} className="text-base sm:text-lg text-[#241a12] leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Tags */}
          <div className="mt-10 pt-6 border-t border-[#f6ddc5] flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-[#7a6a5c] mr-2">Topic Tags:</span>
            {post.tags.map((tag, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-white border border-[#f6ddc5] text-[#10161a]"
              >
                <Tag className="w-3 h-3 text-[#d9480f]" />
                {tag}
              </span>
            ))}
          </div>

          {/* Related Articles */}
          {relatedPosts.length > 0 && (
            <div className="mt-16 pt-10 border-t border-[#f6ddc5]">
              <h2 className="font-display text-xl font-bold text-[#10161a] mb-6">
                Related Insights &amp; Publications
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {relatedPosts.map((related) => (
                  <Link
                    key={related.slug}
                    to={`/blogs/${related.slug}`}
                    className="group bg-white rounded-3xl p-5 border border-[#f6ddc5] shadow-xs hover:shadow-md transition-all flex flex-col justify-between overflow-hidden"
                  >
                    <div>
                      {related.coverImage && (
                        <div className="w-full h-32 rounded-xl overflow-hidden mb-3 bg-[#fff5ec] border border-[#f6ddc5]/60">
                          <img
                            src={related.coverImage}
                            alt={related.title}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            loading="lazy"
                          />
                        </div>
                      )}
                      <span className="text-[11px] font-bold text-[#d9480f] uppercase tracking-wider block mb-1.5">
                        {related.category}
                      </span>
                      <h3 className="font-display text-sm font-bold text-[#10161a] group-hover:text-[#d9480f] transition-colors leading-snug mb-2">
                        {related.title}
                      </h3>
                      <p className="text-xs text-[#7a6a5c] line-clamp-2">
                        {related.excerpt}
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] text-[#7a6a5c]">
                      <span>{related.readTime}</span>
                      <span className="text-[#d9480f] font-bold inline-flex items-center gap-1">
                        Read full <ChevronRight className="w-3 h-3" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </>
  );
}
