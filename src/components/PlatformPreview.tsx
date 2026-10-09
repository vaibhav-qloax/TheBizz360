import { useState } from 'react';
import { Utensils, Briefcase, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function PlatformPreview() {
  const [activeTab, setActiveTab] = useState<'food' | 'work'>('food');

  return (
    <div className="w-full max-w-5xl mx-auto rounded-3xl bg-white border border-[#f6ddc5] shadow-xl overflow-hidden">
      {/* Space Switcher Tabs Header */}
      <div className="bg-[#fff5ec] px-4 py-3 sm:px-6 sm:py-4 border-b border-[#f6ddc5] flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
        <div>
          <span className="text-[10px] sm:text-[11px] font-bold text-[#7a6a5c] uppercase tracking-wider block mb-0.5 sm:mb-1">
            Platform Preview
          </span>
          <h3 className="font-display text-sm sm:text-base md:text-lg font-bold text-[#10161a]">
            {activeTab === 'food'
              ? 'Food Space — Complex Dining & Desk Delivery'
              : 'Work Space — Print Services & Commercial Directory'}
          </h3>
        </div>

        {/* Tab switcher */}
        <div className="w-full sm:w-auto grid grid-cols-2 sm:flex items-center p-1 bg-white border border-[#f6ddc5] rounded-full shadow-2xs">
          <button
            type="button"
            onClick={() => setActiveTab('food')}
            className={`flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'food'
                ? 'bg-[#d9480f] text-white shadow-xs'
                : 'text-[#7a6a5c] hover:text-[#10161a]'
            }`}
          >
            <Utensils className="w-3.5 h-3.5" /> Food Space
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('work')}
            className={`flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'work'
                ? 'bg-[#2F4BD8] text-white shadow-xs'
                : 'text-[#7a6a5c] hover:text-[#10161a]'
            }`}
          >
            <Briefcase className="w-3.5 h-3.5" /> Work Space
          </button>
        </div>
      </div>

      {/* Tab Content Display */}
      {activeTab === 'food' ? (
        <div className="p-5 sm:p-8 bg-linear-to-b from-[#fffaf4] to-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            {/* Left Description */}
            <div className="lg:col-span-6 space-y-3.5 sm:space-y-4">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#ffe8d6] text-[#d9480f]">
                Multi-Shop &bull; Single Delivery
              </span>
              <h4 className="font-display text-xl sm:text-2xl md:text-3xl font-extrabold text-[#10161a] leading-tight">
                Order From Multiple Outlets In One Delivery
              </h4>
              <p className="text-xs sm:text-sm text-[#7a6a5c] leading-relaxed">
                Workday lunch breaks are tight. TheBizz360 lets office tenants and employees combine items from different food court stalls—from South Indian dosas to fresh juices—into a single synchronized order delivered straight to their office unit or desk.
              </p>

              <div className="space-y-2 sm:space-y-2.5 pt-1">
                <div className="flex items-center gap-2.5 text-xs font-semibold text-[#10161a]">
                  <CheckCircle2 className="w-4 h-4 text-[#d9480f] shrink-0" />
                  <span>Real-time kitchen queue tracking and ready pickup alerts</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs font-semibold text-[#10161a]">
                  <CheckCircle2 className="w-4 h-4 text-[#d9480f] shrink-0" />
                  <span>Curated dietary filters: Pure Veg, Non-Veg, and Jain options</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs font-semibold text-[#10161a]">
                  <CheckCircle2 className="w-4 h-4 text-[#d9480f] shrink-0" />
                  <span>Consolidated desk delivery across building wings and floors</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#d9480f] hover:text-[#b8380a]"
                >
                  Onboard your food stall on TheBizz360 <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Right Visual Representation (Clean UI Mock) */}
            <div className="lg:col-span-6 bg-[#fff5ec] rounded-2xl p-4 sm:p-5 border border-[#f6ddc5] space-y-3.5 sm:space-y-4 shadow-sm">
              {/* Promo Banner Representation */}
              <div className="bg-linear-to-r from-[#992804] to-[#d9480f] text-white p-3.5 sm:p-4 rounded-xl flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-yellow-300 font-bold uppercase tracking-wider block">
                    Complex Feature
                  </span>
                  <div className="font-display font-extrabold text-base sm:text-lg text-white">
                    ONE DELIVERY
                  </div>
                  <span className="text-[10px] sm:text-[11px] text-white/80">Order multiple stalls at once</span>
                </div>
                <span className="px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full bg-white text-[#d9480f] text-[11px] sm:text-xs font-extrabold shadow-xs">
                  Desk Delivery
                </span>
              </div>

              {/* Real Category Pills: 2 cols on mobile, 4 on sm+ */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center">
                <div className="bg-white p-2 rounded-xl border border-[#f6ddc5] shadow-2xs">
                  <img src="/dishes/thali.png" alt="Thali" className="w-9 h-9 sm:w-10 sm:h-10 mx-auto rounded-full object-cover mb-1" />
                  <span className="text-[11px] font-bold text-[#10161a] block">Thali</span>
                  <span className="text-[9px] text-[#7a6a5c]">From ₹99</span>
                </div>
                <div className="bg-white p-2 rounded-xl border border-[#f6ddc5] shadow-2xs">
                  <img src="/dishes/south-indian.png" alt="Dosa" className="w-9 h-9 sm:w-10 sm:h-10 mx-auto rounded-full object-cover mb-1" />
                  <span className="text-[11px] font-bold text-[#10161a] block">Dosa</span>
                  <span className="text-[9px] text-[#7a6a5c]">From ₹30</span>
                </div>
                <div className="bg-white p-2 rounded-xl border border-[#f6ddc5] shadow-2xs">
                  <img src="/dishes/chinese.png" alt="Chinese" className="w-9 h-9 sm:w-10 sm:h-10 mx-auto rounded-full object-cover mb-1" />
                  <span className="text-[11px] font-bold text-[#10161a] block">Chinese</span>
                  <span className="text-[9px] text-[#7a6a5c]">From ₹140</span>
                </div>
                <div className="bg-white p-2 rounded-xl border border-[#f6ddc5] shadow-2xs">
                  <img src="/dishes/biryani.png" alt="Biryani" className="w-9 h-9 sm:w-10 sm:h-10 mx-auto rounded-full object-cover mb-1" />
                  <span className="text-[11px] font-bold text-[#10161a] block">Biryani</span>
                  <span className="text-[9px] text-[#7a6a5c]">From ₹170</span>
                </div>
              </div>

              {/* Sample Verified Partner Outlets */}
              <div className="p-3 bg-white rounded-xl border border-[#f6ddc5] flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <img src="/logos/curry-house.svg" alt="Curry House" className="w-5 h-5 object-contain" />
                  <span className="font-bold text-[#10161a]">Curry House</span>
                </div>
                <span className="text-[#17803d] font-semibold bg-[#dcf5e3] px-2 py-0.5 rounded-full text-[10px]">
                  10-15m prep
                </span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="p-5 sm:p-8 bg-linear-to-b from-[#F5F7FB] to-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            {/* Left Description */}
            <div className="lg:col-span-6 space-y-3.5 sm:space-y-4">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#EEF1FE] text-[#2F4BD8]">
                Work &bull; Commercial &bull; Services
              </span>
              <h4 className="font-display text-xl sm:text-2xl md:text-3xl font-extrabold text-[#0E1525] leading-tight">
                Streamline Printing, Xerox &amp; Commercial Services
              </h4>
              <p className="text-xs sm:text-sm text-[#5B6475] leading-relaxed">
                Beyond dining, TheBizz360 digitizes commercial and office operations. Upload documents directly for printing without flash-drive lineups, and connect with verified in-complex businesses for IT, tax, legal, and maintenance services.
              </p>

              <div className="space-y-2 sm:space-y-2.5 pt-1">
                <div className="flex items-center gap-2.5 text-xs font-semibold text-[#0E1525]">
                  <CheckCircle2 className="w-4 h-4 text-[#2F4BD8] shrink-0" />
                  <span>Online PDF upload queue with color &amp; spiral binding options</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs font-semibold text-[#0E1525]">
                  <CheckCircle2 className="w-4 h-4 text-[#2F4BD8] shrink-0" />
                  <span>Directory of in-complex IT firms, consultants &amp; service providers</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs font-semibold text-[#0E1525]">
                  <CheckCircle2 className="w-4 h-4 text-[#2F4BD8] shrink-0" />
                  <span>Commercial building vendors for courier, legal, tax, and office repairs</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#2F4BD8] hover:text-[#1E2F8F]"
                >
                  List your commercial business on TheBizz360 <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Right Visual Representation */}
            <div className="lg:col-span-6 bg-white rounded-2xl p-4 sm:p-5 border border-[#E3E7EF] space-y-3 sm:space-y-3.5 shadow-sm">
              <div className="bg-linear-to-r from-[#1E2F8F] to-[#2F4BD8] text-white p-3.5 sm:p-4 rounded-xl flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-blue-200 font-bold uppercase tracking-wider block">
                    Commercial Hub
                  </span>
                  <div className="font-display font-extrabold text-base sm:text-lg text-white">
                    PRINT &amp; XEROX
                  </div>
                  <span className="text-[10px] sm:text-[11px] text-white/80">Direct PDF Upload &bull; No flash drives</span>
                </div>
                <span className="px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full bg-white text-[#2F4BD8] text-[11px] sm:text-xs font-extrabold shadow-xs">
                  Ready Token
                </span>
              </div>

              <div className="p-3 bg-[#F5F7FB] rounded-xl border border-[#E3E7EF] space-y-1.5 text-xs">
                <div className="flex justify-between items-center font-semibold text-[#0E1525]">
                  <span className="truncate pr-2">Corporate_Proposal_Final.pdf (48 Pages)</span>
                  <span className="text-[#2F4BD8] font-bold shrink-0">Token #P-18</span>
                </div>
                <div className="text-[10px] sm:text-[11px] text-[#5B6475]">
                  Spiral Bound &bull; Color Cover &bull; 8 min pickup
                </div>
              </div>

              <div className="p-3 bg-[#F5F7FB] rounded-xl border border-[#E3E7EF] flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span className="font-bold text-[#0E1525]">Commercial Business Directory</span>
                </div>
                <span className="text-[#2F4BD8] font-semibold text-[10px] sm:text-[11px]">26+ Categories</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
