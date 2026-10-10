import { Link } from 'react-router-dom';
import {
  Utensils,
  Briefcase,
  Zap,
  ArrowRight,
  ExternalLink,
  Sparkles,
  Clock,
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';

export function HomePage() {
  const DISCOVERY_ITEMS = [
    { name: 'Breakfast', image: '/dishes/breakfast.png' },
    { name: 'Lunch', image: '/dishes/lunch.png' },
    { name: 'Thali', image: '/dishes/thali.png' },
    { name: 'Biryani', image: '/dishes/biryani.png' },
    { name: 'North Indian', image: '/dishes/north-indian.png' },
    { name: 'South Indian', image: '/dishes/south-indian.png' },
    { name: 'Chinese', image: '/dishes/chinese.png' },
    { name: 'Pizza', image: '/dishes/pizza.png' },
    { name: 'Burgers', image: '/dishes/burgers.png' },
    { name: 'Sandwiches', image: '/dishes/sandwiches.png' },
    { name: 'Healthy', image: '/dishes/healthy.png' },
    { name: 'Juices & Shakes', image: '/dishes/juices-shakes.png' },
    { name: 'Coffee & Tea', image: '/dishes/coffee-tea.png' },
    { name: 'Desserts', image: '/dishes/desserts.png' },
  ];

  const homeJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'TheBizz360',
    url: 'https://thebizz360.com/',
    logo: 'https://thebizz360.com/logo-clean.png',
    description:
      'The unified campus & commercial hub connecting business parks and universities with instant food ordering and essential work services.',
  };

  return (
    <>
      <SEOHead
        title="TheBizz360 | Food, Work & Campus Life Connected"
        description="Consolidated multi-stall food court dining and zero-queue commercial print services delivered straight to your office desk."
        canonicalUrl="https://thebizz360.com/"
        jsonLd={homeJsonLd}
      />

      {/* 1. HERO SECTION: Full-Viewport Above-The-Fold Stage (Darker Warm Orange Bg) */}
      <section className="relative overflow-hidden min-h-screen flex flex-col justify-center pt-24 pb-12 sm:pt-28 sm:pb-16 bg-linear-to-b from-[#ffeedd] via-[#ffe3cc] to-[#ffeedd] border-b border-[#f3c29f]">
        {/* Vibrant Cafe Dining Background Image with Warm Dark Orange Directional Scrim */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <img
            src="/hero-food-bg.jpg"
            alt="Campus Dining"
            className="w-full h-full object-cover object-[70%_center] lg:object-right opacity-80 sm:opacity-85 lg:opacity-90"
          />
          {/* Warm Dark Orange left-to-right gradient fade: soft backing behind text on left, completely transparent across center & right */}
          <div className="absolute inset-0 bg-linear-to-r from-[#ffd8be]/95 via-[#ffd8be]/60 to-transparent" />
          {/* Warm Dark Orange top and bottom gradient fades */}
          <div className="absolute inset-x-0 top-0 h-16 bg-linear-to-b from-[#ffeedd]/80 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-16 bg-linear-to-t from-[#ffeedd]/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-2">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Left: Punchy Headline & Immediate CTAs */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/95 border border-[#f3c29f] shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#d9480f] animate-pulse" />
                <span className="text-xs font-extrabold text-[#10161a] uppercase tracking-wider">
                  Campus &amp; Complex Platform
                </span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[62px] font-black text-[#10161a] tracking-tight leading-[1.08]">
                Food. Work.<br />
                <span className="whitespace-nowrap">
                  <span className="text-[#d9480f]">Everything</span>{' '}
                  <span className="text-[#2F4BD8]">Connected.</span>
                </span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-[#3d2e23] font-semibold max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Consolidated food court dining and zero-queue commercial services delivered straight to your office desk.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-1">
                <a
                  href="https://www.thebizz360.com/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#d9480f] text-white text-sm sm:text-base font-bold hover:bg-[#b8380a] transition-all shadow-md hover:scale-105"
                >
                  <span>Explore Platform</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <a
                  href="#showcase"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white border border-[#f3c29f] text-[#10161a] text-sm sm:text-base font-bold hover:bg-[#fff5ec] hover:border-[#d9480f] transition-all shadow-xs"
                >
                  <span>How It Works</span>
                  <ArrowRight className="w-4 h-4 text-[#d9480f]" />
                </a>
              </div>
            </div>

            {/* Right: 2D Cartoon Mascot Sticker (Clean, No Box) */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              {/* Subtle Ambient Warm Glow */}
              <div className="absolute w-72 h-72 sm:w-88 sm:h-88 rounded-full bg-linear-to-tr from-[#ff7a1a]/25 via-[#2F4BD8]/12 to-transparent blur-3xl pointer-events-none" />

              {/* Floating Speed Sticker (Badge) */}
              <div className="absolute -top-3 right-2 sm:right-6 z-20 w-22 h-22 sm:w-28 sm:h-28 hover:scale-110 transition-transform duration-300">
                <img
                  src="/stickers/speed-badge.png"
                  alt="Superfast Badge Sticker"
                  className="w-full h-full object-contain drop-shadow-xl"
                />
              </div>

              {/* Main Hero Mascot Sticker without Box */}
              <div className="relative z-10 w-72 h-72 sm:w-88 sm:h-88 md:w-[400px] md:h-[400px] transition-transform duration-300 hover:scale-105">
                <img
                  src="/stickers/hero-mascot.png"
                  alt="TheBizz360 Campus Hero Mascot"
                  className="w-full h-full object-contain drop-shadow-2xl"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom 3 Features Bar: Positioned lower down, text-only, no cutting border line */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-4 sm:pb-6 pt-2">
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-14 md:gap-18 text-[#10161a]">
            <div className="flex items-center gap-2.5 text-base sm:text-lg font-black tracking-tight">
              <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-[#d9480f] shrink-0" />
              <span>10–15m Desk Drop</span>
            </div>
            <span className="hidden sm:inline text-[#d9480f]/40 text-xl font-bold">•</span>
            <div className="flex items-center gap-2.5 text-base sm:text-lg font-black tracking-tight">
              <Utensils className="w-5 h-5 sm:w-6 sm:h-6 text-[#ff7a1a] shrink-0" />
              <span>1 Combined Cart</span>
            </div>
            <span className="hidden sm:inline text-[#2F4BD8]/40 text-xl font-bold">•</span>
            <div className="flex items-center gap-2.5 text-base sm:text-lg font-black tracking-tight">
              <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-[#2F4BD8] shrink-0" />
              <span>Live Token Status</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CAMPUS DISCOVERY: Authentic Dishes Marquee (Warm Dark Orange Theme, No White Fade) */}
      <section className="py-7 sm:py-9 bg-linear-to-b from-[#ffeedd] via-[#ffe8d6] to-[#fff5ec] border-b border-[#f3c29f] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4 sm:mb-5 text-center">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#d9480f] block mb-0.5">
            Verified Food Court Stalls
          </span>
          <h2 className="font-display text-base sm:text-xl font-bold text-[#10161a]">
            Popular Dishes &amp; Daily Specials
          </h2>
        </div>

        {/* Continuous Left-Scrolling Marquee Rail */}
        <div className="marquee-track relative w-full overflow-hidden py-8 sm:py-10 bg-linear-to-r from-[#ffdcc2]/90 via-[#ffe8d6] to-[#ffdcc2]/90 border-t border-b border-[#f3c29f]">
          {/* Warm Dark Orange Side Curtains (No White Washout) */}
          <div className="absolute left-0 top-0 bottom-0 w-10 sm:w-28 bg-linear-to-r from-[#ffdcc2] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-10 sm:w-28 bg-linear-to-l from-[#ffdcc2] to-transparent z-10 pointer-events-none" />

          <div className="animate-marquee-left flex items-center gap-6 sm:gap-10">
            {/* First set */}
            {DISCOVERY_ITEMS.map((item, idx) => (
              <div
                key={`item-1-${idx}`}
                className="shrink-0 flex flex-col items-center gap-2 group cursor-pointer relative z-10 hover:z-30"
              >
                <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full p-1 bg-white border-2 border-[#f3c29f] shadow-xs group-hover:scale-130 group-hover:-translate-y-1 group-hover:border-[#d9480f] group-hover:shadow-xl group-hover:ring-4 group-hover:ring-[#d9480f]/20 transition-all duration-300 ease-out origin-center overflow-hidden flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover rounded-full transition-transform duration-300 ease-out group-hover:scale-115"
                    loading="lazy"
                  />
                </div>
                <span className="text-[11px] sm:text-xs font-bold text-[#10161a] group-hover:text-[#d9480f] group-hover:translate-y-0.5 transition-all duration-300 whitespace-nowrap">
                  {item.name}
                </span>
              </div>
            ))}

            {/* Duplicate set for infinite loop */}
            {DISCOVERY_ITEMS.map((item, idx) => (
              <div
                key={`item-2-${idx}`}
                className="shrink-0 flex flex-col items-center gap-2 group cursor-pointer relative z-10 hover:z-30"
              >
                <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full p-1 bg-white border-2 border-[#f3c29f] shadow-xs group-hover:scale-130 group-hover:-translate-y-1 group-hover:border-[#d9480f] group-hover:shadow-xl group-hover:ring-4 group-hover:ring-[#d9480f]/20 transition-all duration-300 ease-out origin-center overflow-hidden flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover rounded-full transition-transform duration-300 ease-out group-hover:scale-115"
                    loading="lazy"
                  />
                </div>
                <span className="text-[11px] sm:text-xs font-bold text-[#10161a] group-hover:text-[#d9480f] group-hover:translate-y-0.5 transition-all duration-300 whitespace-nowrap">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SHOWCASE: Two Distinct Zepto-Style Promotional Cards */}
      <section id="showcase" className="py-14 sm:py-20 bg-transparent scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#d9480f] block mb-1">
              Two Dedicated Spaces
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#10161a] tracking-tight">
              Food &bull; Work &bull; Done Right.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            {/* Card 1: Food Space Showcase */}
            <div className="relative rounded-3xl p-6 sm:p-8 bg-linear-to-br from-[#fffaf4] via-[#fff5ec] to-[#ffe8d6]/50 border-2 border-[#f6ddc5] shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between">
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#ffe8d6] text-[#d9480f]">
                    <Utensils className="w-3.5 h-3.5" /> Food Space
                  </span>
                  <span className="text-[11px] font-bold text-[#d9480f] bg-white px-3 py-1 rounded-full border border-[#f6ddc5]">
                    Food &amp; Dining
                  </span>
                </div>

                {/* Headline & Sticker Graphic */}
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center mb-5">
                  <div className="sm:col-span-7">
                    <h3 className="font-display text-2xl sm:text-3xl font-black text-[#10161a] leading-tight">
                      One Delivery.<br />Every Food Stall.
                    </h3>
                  </div>
                  <div className="sm:col-span-5 flex justify-center">
                    <img
                      src="/stickers/food-box.png"
                      alt="Food Space Sticker"
                      className="w-32 h-32 sm:w-40 sm:h-40 object-contain drop-shadow-md hover:scale-108 transition-transform duration-300"
                    />
                  </div>
                </div>

                {/* Highlighted Service Keyline with Stylish Arrows */}
                <div className="pt-2 pb-2 flex justify-center">
                  <div className="inline-flex flex-wrap items-center justify-center gap-1.5 sm:gap-2.5 px-3.5 sm:px-4 py-2.5 rounded-2xl bg-linear-to-r from-[#ffe8d6] via-white to-[#ffe8d6] border-2 border-[#f6ddc5] text-[#d9480f] text-xs sm:text-sm font-extrabold shadow-xs">
                    <span>Food Court Pre-Ordering</span>
                    <ArrowRight className="w-3.5 h-3.5 shrink-0 text-[#d9480f]" />
                    <span>Desk Delivery</span>
                    <ArrowRight className="w-3.5 h-3.5 shrink-0 text-[#d9480f]" />
                    <span>Live Token Status</span>
                  </div>
                </div>
              </div>

              {/* Bottom Centered Action Button */}
              <div className="pt-5 sm:pt-6 flex items-center justify-center">
                <a
                  href="https://www.thebizz360.com/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#d9480f] text-white text-sm sm:text-base font-bold shadow-md hover:bg-[#b8380a] transition-all hover:scale-105"
                >
                  <span>Explore Food</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Card 2: Work Space Showcase */}
            <div className="relative rounded-3xl p-6 sm:p-8 bg-linear-to-br from-[#F5F7FB] via-[#EEF1FE]/60 to-white border-2 border-[#E3E7EF] shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between">
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#EEF1FE] text-[#2F4BD8]">
                    <Briefcase className="w-3.5 h-3.5" /> Work Space
                  </span>
                  <span className="text-[11px] font-bold text-[#2F4BD8] bg-white px-3 py-1 rounded-full border border-[#E3E7EF]">
                    Commercial Services
                  </span>
                </div>

                {/* Headline & Sticker Graphic */}
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center mb-5">
                  <div className="sm:col-span-7">
                    <h3 className="font-display text-2xl sm:text-3xl font-black text-[#0E1525] leading-tight">
                      Zero Lines.<br />Direct Print &amp; Work.
                    </h3>
                  </div>
                  <div className="sm:col-span-5 flex justify-center">
                    <img
                      src="/stickers/work-station.png"
                      alt="Work Space Sticker"
                      className="w-32 h-32 sm:w-40 sm:h-40 object-contain drop-shadow-md hover:scale-108 transition-transform duration-300"
                    />
                  </div>
                </div>

                {/* Highlighted Service Keyline with Stylish Arrows */}
                <div className="pt-2 pb-2 flex justify-center">
                  <div className="inline-flex flex-wrap items-center justify-center gap-1.5 sm:gap-2.5 px-3.5 sm:px-4 py-2.5 rounded-2xl bg-linear-to-r from-[#EEF1FE] via-white to-[#EEF1FE] border-2 border-[#d6defa] text-[#2F4BD8] text-xs sm:text-sm font-extrabold shadow-xs">
                    <span>Print &amp; Xerox Queue</span>
                    <ArrowRight className="w-3.5 h-3.5 shrink-0 text-[#2F4BD8]" />
                    <span>Courier Dispatch</span>
                    <ArrowRight className="w-3.5 h-3.5 shrink-0 text-[#2F4BD8]" />
                    <span>IT &amp; Legal Desk</span>
                  </div>
                </div>
              </div>

              {/* Bottom Centered Action Button */}
              <div className="pt-5 sm:pt-6 flex items-center justify-center">
                <a
                  href="https://www.thebizz360.com/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#2F4BD8] text-white text-sm sm:text-base font-bold shadow-md hover:bg-[#1E2F8F] transition-all hover:scale-105"
                >
                  <span>Explore Work</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CAMPUS PINBOARD: Sticky Paper UI (Orange Post-It Notes with Bold Lines Only) */}
      <section className="py-14 sm:py-20 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 sm:mb-12 gap-3">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#d9480f] block mb-1">
                📌 Campus Notice Board
              </span>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#10161a] tracking-tight">
                Sticky Notes &amp; Quick Tips
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-[#7a6a5c]">
                Bite-sized hacks and practical reminders for dining and workplace productivity.
              </p>
            </div>
            <Link
              to="/blogs"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#d9480f] hover:underline"
            >
              All sticky notes <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Sticky Notes Pinboard Grid: Bold Lines Only */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 pt-4">
            {/* Note 1: Vibrant Orange Sticky */}
            <div
              className="relative p-6 sm:p-7 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:rotate-0 flex flex-col justify-between text-white -rotate-1 cursor-default group min-h-[220px]"
              style={{
                background: 'linear-gradient(135deg, #ff7a1a 0%, #ea580c 100%)',
              }}
            >
              {/* Frosted Tape at Top */}
              <div className="w-12 h-3.5 bg-white/40 backdrop-blur-xs rounded-xs mx-auto -mt-8 mb-4 border border-white/30 rotate-1 shadow-2xs" />
              <div>
                <span className="text-[11px] font-extrabold text-white/80 uppercase tracking-widest block mb-3">
                  #DiningLogistics
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-black text-white leading-snug uppercase tracking-tight space-y-1">
                  <span className="block">Lunch Rush?</span>
                  <span className="block text-white/95">Pre-Order 15m Ahead.</span>
                  <span className="block text-yellow-200">Zero Queue Desk Drop.</span>
                </h3>
              </div>
              <div className="pt-3 border-t border-white/25 text-[11px] font-black uppercase tracking-wider text-white/90">
                ⚡ 10-15m Express
              </div>
            </div>

            {/* Note 2: Warm Amber-Orange Sticky */}
            <div
              className="relative p-6 sm:p-7 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:rotate-0 flex flex-col justify-between text-white rotate-2 cursor-default group min-h-[220px]"
              style={{
                background: 'linear-gradient(135deg, #ff8c38 0%, #d9480f 100%)',
              }}
            >
              {/* Frosted Tape at Top */}
              <div className="w-12 h-3.5 bg-white/40 backdrop-blur-xs rounded-xs mx-auto -mt-8 mb-4 border border-white/30 -rotate-2 shadow-2xs" />
              <div>
                <span className="text-[11px] font-extrabold text-white/80 uppercase tracking-widest block mb-3">
                  #WorkplaceHacks
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-black text-white leading-snug uppercase tracking-tight space-y-1">
                  <span className="block">Zero Flash Drives.</span>
                  <span className="block text-white/95">Direct Cloud Queue.</span>
                  <span className="block text-yellow-200">Print In 4 Mins.</span>
                </h3>
              </div>
              <div className="pt-3 border-t border-white/25 text-[11px] font-black uppercase tracking-wider text-white/90">
                📄 Color &amp; Spiral Binding
              </div>
            </div>

            {/* Note 3: Warm Coral-Orange Sticky */}
            <div
              className="relative p-6 sm:p-7 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:rotate-0 flex flex-col justify-between text-white -rotate-2 cursor-default group min-h-[220px]"
              style={{
                background: 'linear-gradient(135deg, #ff6b35 0%, #c2410c 100%)',
              }}
            >
              {/* Frosted Tape at Top */}
              <div className="w-12 h-3.5 bg-white/40 backdrop-blur-xs rounded-xs mx-auto -mt-8 mb-4 border border-white/30 rotate-2 shadow-2xs" />
              <div>
                <span className="text-[11px] font-extrabold text-white/80 uppercase tracking-widest block mb-3">
                  #CampusDining
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-black text-white leading-snug uppercase tracking-tight space-y-1">
                  <span className="block">1 Single Cart.</span>
                  <span className="block text-white/95">4 Food Stalls.</span>
                  <span className="block text-yellow-200">One Single Delivery.</span>
                </h3>
              </div>
              <div className="pt-3 border-t border-white/25 text-[11px] font-black uppercase tracking-wider text-white/90">
                🍱 Combined Drop
              </div>
            </div>

            {/* Note 4: Golden Honey-Orange Sticky */}
            <div
              className="relative p-6 sm:p-7 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:rotate-0 flex flex-col justify-between text-white rotate-1 cursor-default group min-h-[220px]"
              style={{
                background: 'linear-gradient(135deg, #f97316 0%, #b45309 100%)',
              }}
            >
              {/* Frosted Tape at Top */}
              <div className="w-12 h-3.5 bg-white/40 backdrop-blur-xs rounded-xs mx-auto -mt-8 mb-4 border border-white/30 -rotate-1 shadow-2xs" />
              <div>
                <span className="text-[11px] font-extrabold text-white/80 uppercase tracking-widest block mb-3">
                  #InBuildingPro
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-black text-white leading-snug uppercase tracking-tight space-y-1">
                  <span className="block">In-Building Pros.</span>
                  <span className="block text-white/95">Verified CA &amp; IT Desk.</span>
                  <span className="block text-yellow-200">Same-Floor Access.</span>
                </h3>
              </div>
              <div className="pt-3 border-t border-white/25 text-[11px] font-black uppercase tracking-wider text-white/90">
                🏢 Wing &amp; Floor Directory
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FINAL PROMOTIONAL CTA BANNER: Zepto-Style High Energy */}
      <section className="py-14 sm:py-20 bg-[#10161a] text-white border-t border-[#241a12]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl p-8 sm:p-12 md:p-16 bg-linear-to-r from-[#1c140e] via-[#241a12] to-[#1c140e] border border-[#3d2b1f] overflow-hidden text-center">
            {/* Ambient Radial Accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#d9480f]/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#ff7a1a]/20 text-[#ff7a1a] border border-[#ff7a1a]/30">
                <Sparkles className="w-3.5 h-3.5" /> Your World, Made Simpler
              </span>

              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
                Ready to Upgrade Your Workday?
              </h2>

              <p className="text-sm sm:text-base text-gray-300 font-medium">
                Skip the queues. Order multi-stall lunches and digital print services directly to your building desk.
              </p>

              <div className="pt-4 flex flex-wrap items-center justify-center gap-3.5">
                <a
                  href="https://www.thebizz360.com/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#d9480f] text-white text-sm sm:text-base font-bold shadow-lg hover:bg-[#ff7a1a] transition-all hover:scale-105"
                >
                  <span>Launch TheBizz360</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-sm sm:text-base font-semibold transition-all"
                >
                  <span>Contact Operations</span>
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
