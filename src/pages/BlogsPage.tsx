import { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';

interface StickyBlogNote {
  id: string;
  category: string;
  boldLines: string[];
  tag: string;
  bgGradient: string;
  rotation: string;
}

const STICKY_NOTES: StickyBlogNote[] = [
  {
    id: 'lunch-rush-preorder',
    category: 'Dining Logistics',
    boldLines: ['Lunch Rush?', 'Pre-Order 15m Ahead.', 'Zero Queue Desk Drop.'],
    tag: '⚡ 10-15m Express',
    bgGradient: 'linear-gradient(135deg, #ff7a1a 0%, #ea580c 100%)',
    rotation: '-rotate-1',
  },
  {
    id: 'zero-flash-drives',
    category: 'Work & Productivity',
    boldLines: ['Zero Flash Drives.', 'Direct Cloud Queue.', 'Print In 4 Mins.'],
    tag: '📄 Color & Spiral Binding',
    bgGradient: 'linear-gradient(135deg, #ff8c38 0%, #d9480f 100%)',
    rotation: 'rotate-2',
  },
  {
    id: 'one-cart-four-stalls',
    category: 'Dining Logistics',
    boldLines: ['1 Single Cart.', '4 Food Stalls.', 'One Single Delivery.'],
    tag: '🍱 Combined Drop',
    bgGradient: 'linear-gradient(135deg, #ff6b35 0%, #c2410c 100%)',
    rotation: '-rotate-2',
  },
  {
    id: 'in-building-directory',
    category: 'Commercial Services',
    boldLines: ['In-Building Pros.', 'Verified CA & IT Desk.', 'Same-Floor Access.'],
    tag: '🏢 Wing & Floor Directory',
    bgGradient: 'linear-gradient(135deg, #f97316 0%, #b45309 100%)',
    rotation: 'rotate-1',
  },
  {
    id: 'local-vendor-power',
    category: 'Merchant Operations',
    boldLines: ['Local Vendor Cockpit.', 'Live Menu & Queue.', 'Zero Commissions.'],
    tag: '🏪 Independent Stalls',
    bgGradient: 'linear-gradient(135deg, #fb923c 0%, #ea580c 100%)',
    rotation: '-rotate-1',
  },
  {
    id: 'instant-tokens',
    category: 'Work & Productivity',
    boldLines: ['4-Min Token Pickup.', 'Ready Alerts On Mobile.', 'No Lobby Waiting.'],
    tag: '🔔 Live App Tokens',
    bgGradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
    rotation: 'rotate-2',
  },
  {
    id: 'dietary-filters',
    category: 'Dining Logistics',
    boldLines: ['Pure Veg & Jain.', 'Strict Separate Prep.', '100% Clear Tags.'],
    tag: '🥗 Verified Dietary',
    bgGradient: 'linear-gradient(135deg, #ea580c 0%, #9a3412 100%)',
    rotation: '-rotate-2',
  },
  {
    id: 'it-repair-on-call',
    category: 'Commercial Services',
    boldLines: ['On-Site IT Support.', 'Walk-In Or Desk Fix.', 'Under 30 Minutes.'],
    tag: '💻 Hardware & WiFi',
    bgGradient: 'linear-gradient(135deg, #ff7a1a 0%, #c2410c 100%)',
    rotation: 'rotate-1',
  },
];

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

  const filteredNotes = useMemo(() => {
    return STICKY_NOTES.filter((note) => {
      const matchesCategory =
        selectedCategory === 'All' || note.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        note.boldLines.some((line) => line.toLowerCase().includes(searchQuery.toLowerCase())) ||
        note.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        note.tag.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const blogsJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'TheBizz360 Campus Sticky Notes & Insights',
    description:
      'Sticky note board with bite-sized tips on campus food court ordering, print queue digitization, and in-building business services.',
    url: 'https://thebizz360.com/blogs',
  };

  return (
    <>
      <SEOHead
        title="Campus Notice Board | TheBizz360 Sticky Notes"
        description="Bite-sized sticky notes on food court automation, office desk delivery, digital print workflows, and commercial service directories."
        canonicalUrl="https://thebizz360.com/blogs"
        jsonLd={blogsJsonLd}
      />

      <div className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#ff7a1a] block mb-1">
              📌 Campus Pinboard
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-black tracking-tight text-[#10161a]">
              Sticky Notes &amp; Quick Tips.
            </h1>
            <p className="mt-2 text-sm sm:text-base text-[#7a6a5c]">
              Zero corporate fluff. Quick, bold sticky notes on campus dining, printing, and building services.
            </p>
          </div>

          {/* Filter Pills & Search */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-12">
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-[#d9480f] text-white shadow-xs font-bold'
                      : 'bg-white border border-[#f6ddc5] text-[#7a6a5c] hover:text-[#10161a] hover:bg-[#fff5ec]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="relative min-w-[280px]">
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search sticky notes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-10 py-2.5 rounded-full text-xs sm:text-sm bg-white border border-[#f6ddc5] text-[#10161a] placeholder-[#7a6a5c] focus:outline-hidden focus:ring-2 focus:ring-[#d9480f]"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-gray-200 cursor-pointer"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Sticky Notes Wall: Pure Bold Post-It Paper Grid */}
          {filteredNotes.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 sm:gap-8 pt-4">
              {filteredNotes.map((note) => (
                <div
                  key={note.id}
                  className={`relative p-6 sm:p-7 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:rotate-0 flex flex-col justify-between text-white cursor-default group min-h-[220px] ${note.rotation}`}
                  style={{
                    background: note.bgGradient,
                  }}
                >
                  {/* Frosted Tape at Top */}
                  <div className="w-14 h-4 bg-white/40 backdrop-blur-xs rounded-xs mx-auto -mt-9 mb-4 border border-white/30 rotate-1 shadow-2xs" />

                  <div>
                    {/* Header tag */}
                    <span className="text-[11px] font-extrabold text-white/80 uppercase tracking-widest block mb-3">
                      {note.category}
                    </span>

                    {/* Bold Lines Only */}
                    <h2 className="font-display text-xl sm:text-2xl font-black text-white leading-snug uppercase tracking-tight space-y-1">
                      <span className="block">{note.boldLines[0]}</span>
                      <span className="block text-white/95">{note.boldLines[1]}</span>
                      <span className="block text-yellow-200">{note.boldLines[2]}</span>
                    </h2>
                  </div>

                  {/* Bottom Tag */}
                  <div className="pt-3 mt-4 border-t border-white/25 text-[11px] font-black uppercase tracking-wider text-white/90">
                    {note.tag}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white/50 rounded-3xl border border-dashed border-[#f6ddc5]">
              <p className="text-sm font-semibold text-[#7a6a5c]">
                No sticky notes match your search. Try a different keyword!
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
