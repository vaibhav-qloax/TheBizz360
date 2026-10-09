import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  UtensilsCrossed,
  Printer,
  Wrench,
  Code2,
  Briefcase,
  Layers,
  Zap,
  ShieldCheck,
  Activity,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Store,
  Clock,
  Sparkles,
  ExternalLink,
} from 'lucide-react';
import { OFFERINGS } from '../data/offerings';
import { BENEFITS } from '../data/benefits';
import { BLOG_POSTS } from '../data/blogs';
import { SEOHead } from '../components/SEOHead';
import { PlatformPreview } from '../components/PlatformPreview';
import { SpaceType } from '../types';

export function HomePage() {
  const [activeSpaceTab, setActiveSpaceTab] = useState<SpaceType>('all');

  const filteredOfferings = OFFERINGS.filter((item) => {
    if (activeSpaceTab === 'all') return true;
    return item.space === activeSpaceTab;
  });

  const DISCOVERY_ITEMS = [
    { name: 'Breakfast', image: '/dishes/breakfast.png' },
    { name: 'Lunch', image: '/dishes/lunch.png' },
    { name: 'Thali', image: '/dishes/thali.png' },
    { name: 'Biryani', image: '/dishes/biryani.png' },
    { name: 'North Indian', image: '/dishes/north-indian.png' },
    { name: 'South Indian', image: '/dishes/south-indian.png' },
    { name: 'Chinese', image: '/dishes/chinese.png' },
    { name: 'Starters', image: '/dishes/starters.png' },
    { name: 'Pizza', image: '/dishes/pizza.png' },
    { name: 'Burgers', image: '/dishes/burgers.png' },
    { name: 'Sandwiches', image: '/dishes/sandwiches.png' },
    { name: 'Fast Food', image: '/dishes/fast-food.png' },
    { name: 'Healthy', image: '/dishes/healthy.png' },
    { name: 'Juices & Shakes', image: '/dishes/juices-shakes.png' },
    { name: 'Coffee & Tea', image: '/dishes/coffee-tea.png' },
    { name: 'Print & Xerox', image: '/services/print-xerox.jpg' },
    { name: 'IT & Web Services', image: '/services/student-it.jpg' },
  ];

  const renderOfferingIcon = (iconName: string) => {
    switch (iconName) {
      case 'UtensilsCrossed':
        return <UtensilsCrossed className="w-6 h-6 text-[#d9480f]" />;
      case 'Clock':
        return <Clock className="w-6 h-6 text-[#d9480f]" />;
      case 'Printer':
        return <Printer className="w-6 h-6 text-[#2F4BD8]" />;
      case 'Wrench':
        return <Wrench className="w-6 h-6 text-[#2F4BD8]" />;
      case 'Code2':
        return <Code2 className="w-6 h-6 text-[#2F4BD8]" />;
      case 'Briefcase':
        return <Briefcase className="w-6 h-6 text-[#2F4BD8]" />;
      default:
        return <Store className="w-6 h-6 text-[#d9480f]" />;
    }
  };

  const renderBenefitIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layers':
        return <Layers className="w-6 h-6 text-[#d9480f]" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-[#ff7a1a]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[#2F4BD8]" />;
      case 'Activity':
        return <Activity className="w-6 h-6 text-[#17803d]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#d9480f]" />;
    }
  };

  const homeJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'TheBizz360',
    url: 'https://thebizz360.com/',
    logo: 'https://thebizz360.com/logo.png',
    description:
      'The unified campus & commercial hub connecting business parks and university communities with instant food ordering and essential work services.',
  };

  return (
    <>
      <SEOHead
        title="TheBizz360 | Campus & Commercial Hub for Food, Services & Work"
        description="TheBizz360 connects campus and commercial communities with multi-outlet food ordering, desk delivery, on-demand printing, and verified in-building services."
        canonicalUrl="https://thebizz360.com/"
        jsonLd={homeJsonLd}
      />

      {/* 1. HERO SECTION: Explain TheBizz360 & Prominent Link to www.thebizz360.com */}
      <section className="relative overflow-hidden pt-28 pb-16 sm:pt-32 md:pt-36 md:pb-24 border-b border-[#f6ddc5]/60 bg-[#fff5ec] min-h-[85vh] flex items-center">
        {/* Softly Faded Food Background (Tinted to match site's warm palette) */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src="/hero-food-bg.jpg"
            alt="Campus Dining Background"
            className="w-full h-full object-cover object-center opacity-30"
          />
          {/* Subtle gradient wash matching #fff5ec */}
          <div className="absolute inset-0 bg-linear-to-b from-[#fff5ec]/50 via-transparent to-[#fff5ec]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-4 sm:py-6">
          {/* Direct Text on Background (No box container) */}
          <div className="text-center max-w-4xl mx-auto space-y-5 sm:space-y-6">


            {/* Primary H1 */}
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-black text-[#10161a] tracking-tight leading-[1.18] sm:leading-[1.14]">
              Connecting Complex Communities With{' '}
              <span className="text-[#d9480f]">
                Seamless Dining
              </span>{' '}
              &amp;{' '}
              <span className="text-[#2F4BD8]">
                Work Services
              </span>
            </h1>

            {/* Clear Description */}
            <p className="text-sm sm:text-base md:text-lg text-[#3d332a] max-w-2xl mx-auto leading-relaxed font-medium px-2 sm:px-0">
              TheBizz360 unifies campus and commercial complex life into one clean platform. Combine meals from multiple food stalls into a single desk delivery to your office, skip queues with digital print uploads, and connect with verified in-house businesses and IT services.
            </p>

            {/* Minimal, Cohesive Hero CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <a
                href="https://www.thebizz360.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#d9480f] text-white text-sm font-semibold hover:bg-[#b8380a] transition-all shadow-xs cursor-pointer"
              >
                <span>Visit Platform</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-90" />
              </a>

              <a
                href="#offerings"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white border border-[#f6ddc5] text-[#10161a] text-sm font-semibold hover:bg-[#fff5ec] hover:border-[#d9480f] transition-all shadow-xs cursor-pointer"
              >
                <span>What We Offer</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#d9480f]" />
              </a>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-1.5 px-6 py-3 rounded-full bg-white/70 hover:bg-white border border-[#f6ddc5] text-[#7a6a5c] hover:text-[#10161a] text-sm font-semibold transition-all shadow-2xs"
              >
                <span>Get in Touch</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CAMPUS DISCOVERY: Dishes & Services Left-Scrolling Rail */}
      <section className="py-8 sm:py-10 bg-white border-y border-[#f6ddc5] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-5 sm:mb-6 text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-[#d9480f] block mb-1">
            Verified On-Premises Partners &bull; Food &amp; Work
          </span>
          <h2 className="font-display text-lg sm:text-xl md:text-2xl font-bold text-[#10161a]">
            Serving Food Courts, Cafeterias &amp; Commercial Centers
          </h2>
        </div>

        {/* Continuous Left-Scrolling Dish & Service Line */}
        <div className="marquee-track relative w-full overflow-hidden py-8 sm:py-10 bg-linear-to-r from-[#fff5ec]/80 via-white to-[#fff5ec]/80 border-t border-[#f6ddc5]/50">
          {/* Subtle gradient edges for smooth fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-24 bg-linear-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-24 bg-linear-to-l from-white to-transparent z-10 pointer-events-none" />

          <div className="animate-marquee-left flex items-center gap-6 sm:gap-10">
            {/* First set of items */}
            {DISCOVERY_ITEMS.map((item, idx) => (
              <div
                key={`item-1-${idx}`}
                className="shrink-0 flex flex-col items-center gap-2 group cursor-pointer relative z-10 hover:z-30"
              >
                <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full p-1 bg-white border-2 border-[#f6ddc5] shadow-xs group-hover:scale-150 group-hover:-translate-y-2 group-hover:border-[#d9480f] group-hover:shadow-2xl group-hover:ring-4 group-hover:ring-[#d9480f]/20 transition-all duration-300 ease-out origin-center overflow-hidden flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover rounded-full transition-transform duration-300 ease-out group-hover:scale-120"
                    loading="lazy"
                  />
                </div>
                <span className="text-[11px] sm:text-xs font-bold text-[#10161a] group-hover:text-[#d9480f] group-hover:translate-y-1 transition-all duration-300 whitespace-nowrap">
                  {item.name}
                </span>
              </div>
            ))}

            {/* Duplicate set for seamless continuous infinite loop */}
            {DISCOVERY_ITEMS.map((item, idx) => (
              <div
                key={`item-2-${idx}`}
                className="shrink-0 flex flex-col items-center gap-2 group cursor-pointer relative z-10 hover:z-30"
              >
                <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full p-1 bg-white border-2 border-[#f6ddc5] shadow-xs group-hover:scale-150 group-hover:-translate-y-2 group-hover:border-[#d9480f] group-hover:shadow-2xl group-hover:ring-4 group-hover:ring-[#d9480f]/20 transition-all duration-300 ease-out origin-center overflow-hidden flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover rounded-full transition-transform duration-300 ease-out group-hover:scale-120"
                    loading="lazy"
                  />
                </div>
                <span className="text-[11px] sm:text-xs font-bold text-[#10161a] group-hover:text-[#d9480f] group-hover:translate-y-1 transition-all duration-300 whitespace-nowrap">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE PLATFORM PREVIEW */}
      <section className="py-12 sm:py-16 bg-[#fffaf4] border-b border-[#f6ddc5]/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#d9480f] block mb-1">
              Live Platform Experience
            </span>
            <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-extrabold text-[#10161a] tracking-tight">
              See How It Works in Practice
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[#7a6a5c]">
              Toggle between Food Space and Work Space to preview combined orders and streamlined commercial services.
            </p>
          </div>

          <PlatformPreview />
        </div>
      </section>

      {/* 3. SHOW WHAT WE OFFER: Highlight Food and Work Sections */}
      <section id="offerings" className="py-14 sm:py-20 bg-transparent scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#f6ddc5] text-xs font-bold text-[#d9480f] mb-3">
              Platform Modules
            </div>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#10161a] tracking-tight">
              What We Offer
            </h2>
            <p className="mt-2 sm:mt-3 text-sm sm:text-base text-[#7a6a5c]">
              Carefully designed capabilities built for the everyday rhythms of tenants, employees, and on-premises commercial vendors.
            </p>

            {/* Filter Toggle: Mobile friendly with wrap/scroll protection */}
            <div className="mt-6 sm:mt-8 inline-flex flex-wrap sm:flex-nowrap justify-center items-center p-1 sm:p-1.5 bg-white border border-[#f6ddc5] rounded-2xl shadow-xs max-w-full gap-1">
              <button
                type="button"
                onClick={() => setActiveSpaceTab('all')}
                className={`px-3.5 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeSpaceTab === 'all'
                    ? 'bg-[#10161a] text-white shadow-xs'
                    : 'text-[#7a6a5c] hover:text-[#10161a]'
                }`}
              >
                All ({OFFERINGS.length})
              </button>
              <button
                type="button"
                onClick={() => setActiveSpaceTab('food')}
                className={`px-3.5 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                  activeSpaceTab === 'food'
                    ? 'bg-[#d9480f] text-white shadow-xs'
                    : 'text-[#7a6a5c] hover:text-[#d9480f]'
                }`}
              >
                <UtensilsCrossed className="w-3.5 h-3.5" />
                Food Space
              </button>
              <button
                type="button"
                onClick={() => setActiveSpaceTab('work')}
                className={`px-3.5 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                  activeSpaceTab === 'work'
                    ? 'bg-[#2F4BD8] text-white shadow-xs'
                    : 'text-[#7a6a5c] hover:text-[#2F4BD8]'
                }`}
              >
                <Briefcase className="w-3.5 h-3.5" />
                Work Space
              </button>
            </div>
          </div>

          {/* Offerings Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {filteredOfferings.map((offering) => {
              const isFood = offering.space === 'food';
              return (
                <div
                  key={offering.id}
                  className="bg-white rounded-3xl p-5 sm:p-6 border transition-all duration-200 hover:-translate-y-1 hover:shadow-md flex flex-col justify-between"
                  style={{
                    borderColor: isFood ? '#f6ddc5' : '#E3E7EF',
                  }}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
                        style={{
                          backgroundColor: isFood ? '#ffe8d6' : '#EEF1FE',
                        }}
                      >
                        {renderOfferingIcon(offering.icon)}
                      </div>
                      <span
                        className="text-[11px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider"
                        style={{
                          backgroundColor: isFood ? '#fff1e8' : '#F5F7FB',
                          color: offering.accentColor,
                          border: `1px solid ${isFood ? '#f6ddc5' : '#E3E7EF'}`,
                        }}
                      >
                        {offering.tag}
                      </span>
                    </div>

                    <div className="text-xs font-bold text-[#7a6a5c] uppercase tracking-wider mb-1">
                      {offering.category}
                    </div>
                    <h3 className="font-display text-base sm:text-lg font-bold text-[#10161a] leading-snug mb-2">
                      {offering.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#7a6a5c] leading-relaxed mb-4">
                      {offering.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-gray-100 space-y-2">
                    {offering.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-[#10161a]">
                        <CheckCircle2
                          className="w-3.5 h-3.5 shrink-0 mt-0.5"
                          style={{ color: offering.accentColor }}
                        />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. BUILD TRUST: Why Choose TheBizz360 */}
      <section className="py-14 sm:py-20 bg-white border-y border-[#f6ddc5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ffe8d6] text-xs font-bold text-[#d9480f] mb-3">
              Why Campus &amp; Complex Communities Choose Us
            </div>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#10161a] tracking-tight">
              Why Choose TheBizz360
            </h2>
            <p className="mt-2 sm:mt-3 text-sm sm:text-base text-[#7a6a5c]">
              Built ground-up around the real logistical realities of high-density commercial complexes, office towers, and campus environments.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {BENEFITS.map((benefit) => (
              <div
                key={benefit.id}
                className="bg-[#fff5ec]/50 rounded-3xl p-5 sm:p-6 border border-[#f6ddc5] shadow-2xs hover:shadow-md transition-all duration-200"
              >
                <div className="w-12 h-12 rounded-2xl bg-white border border-[#f6ddc5] flex items-center justify-center mb-4 shadow-2xs shrink-0">
                  {renderBenefitIcon(benefit.icon)}
                </div>

                {benefit.stat && (
                  <div className="mb-2">
                    <span className="font-display text-xl sm:text-2xl font-black text-[#10161a]">
                      {benefit.stat}
                    </span>
                    <span className="block text-xs font-bold text-[#d9480f]">
                      {benefit.statLabel}
                    </span>
                  </div>
                )}

                <h3 className="font-display text-sm sm:text-base font-bold text-[#10161a] mb-1.5 sm:mb-2">
                  {benefit.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#7a6a5c] leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SHARE BLOGS: Organic Search Visibility */}
      <section className="py-14 sm:py-18 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4">
            <div>
              <div className="text-xs font-bold text-[#d9480f] uppercase tracking-wider mb-1.5 sm:mb-2">
                Complex Publications &bull; Tech Blog
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#10161a]">
                Latest Logistics &amp; Product Updates
              </h2>
            </div>
            <Link
              to="/blogs"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-[#d9480f] hover:text-[#b8380a]"
            >
              Browse all publications <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {BLOG_POSTS.slice(0, 3).map((post) => (
              <Link
                key={post.slug}
                to={`/blogs/${post.slug}`}
                className="group bg-white rounded-3xl p-5 border border-[#f6ddc5] shadow-xs hover:shadow-lg hover:border-[#ff7a1a]/60 transition-all duration-200 flex flex-col justify-between overflow-hidden"
              >
                <div>
                  {/* Visual Cover Image */}
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
                    {post.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#7a6a5c] line-clamp-2 leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-3.5 border-t border-gray-100 flex items-center justify-between text-xs">
                  <span className="text-[#7a6a5c] font-medium">{post.author.name}</span>
                  <span className="text-[#d9480f] font-bold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    Read article <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. GENERATE ENQUIRIES: Call-to-Action Section */}
      <section className="py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-linear-to-r from-[#992804] via-[#b8380a] to-[#d9480f] text-white p-6 sm:p-12 md:p-16 overflow-hidden shadow-xl border border-[#ff7a1a]/50">
            <div className="relative z-10 max-w-3xl mx-auto text-center space-y-4 sm:space-y-6">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/20 text-xs font-bold text-yellow-300 border border-white/20">
                <Sparkles className="w-3.5 h-3.5" /> Ready to Partner?
              </span>

              <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
                Bring TheBizz360 to Your Complex or Food Outlets
              </h2>

              <p className="text-sm sm:text-base text-white/90 max-w-xl mx-auto leading-relaxed">
                Whether you run an on-premises food stall, provide commercial printing services, or manage commercial building facilities, get in touch with our team today.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                <a
                  href="https://www.thebizz360.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 sm:py-4 rounded-full bg-white text-[#d9480f] font-bold text-sm sm:text-base shadow-lg hover:bg-yellow-50 transition-all transform hover:-translate-y-0.5 cursor-pointer"
                >
                  <span>Visit Platform</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <Link
                  to="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 sm:py-4 rounded-full bg-black/25 border border-white/30 text-white font-semibold text-sm sm:text-base hover:bg-black/35 transition-all"
                >
                  Contact Operations Team
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
