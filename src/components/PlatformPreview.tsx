import { useState } from 'react';
import { Utensils, Briefcase, CheckCircle2, ArrowRight, Printer } from 'lucide-react';
import { Link } from 'react-router-dom';

export function PlatformPreview() {
  const [activeTab, setActiveTab] = useState<'food' | 'work'>('food');

  return (
    <div className="w-full max-w-5xl mx-auto rounded-2xl sm:rounded-3xl bg-white border border-[#f6ddc5] shadow-xs overflow-hidden">
      {/* Minimal Header Bar */}
      <div className="px-5 py-3.5 sm:px-7 sm:py-4 border-b border-[#f6ddc5]/70 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-[#fffaf4]">
        <div>
          <span className="text-[10px] sm:text-[11px] font-bold text-[#d9480f] uppercase tracking-wider block mb-0.5">
            Platform Preview
          </span>
          <h3 className="font-display text-sm sm:text-base font-bold text-[#10161a]">
            {activeTab === 'food'
              ? 'Food Space • Multi-Stall Desk Delivery'
              : 'Work Space • Print Queue & Commercial Services'}
          </h3>
        </div>

        {/* Minimal Segmented Pill Toggle */}
        <div className="inline-flex items-center p-1 bg-white border border-[#f6ddc5] rounded-full shadow-2xs self-start sm:self-auto">
          <button
            type="button"
            onClick={() => setActiveTab('food')}
            className={`flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
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
            className={`flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
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
        <div className="p-5 sm:p-7 bg-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            {/* Left Description */}
            <div className="lg:col-span-6 space-y-3.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#ffe8d6] text-[#d9480f]">
                <span>Multi-Outlet Cart</span>
                <span className="opacity-40">•</span>
                <span>Single Delivery</span>
              </span>
              <h4 className="font-display text-xl sm:text-2xl font-bold text-[#10161a] leading-tight tracking-tight">
                Order From Multiple Outlets In One Delivery
              </h4>
              <p className="text-xs sm:text-sm text-[#7a6a5c] leading-relaxed">
                Workday lunch breaks are tight. TheBizz360 allows office tenants to combine items from different food court stalls into a single synchronized order delivered straight to their desk.
              </p>

              <div className="space-y-2 pt-1">
                <div className="flex items-center gap-2.5 text-xs font-medium text-[#10161a]">
                  <CheckCircle2 className="w-4 h-4 text-[#d9480f] shrink-0" />
                  <span>Real-time kitchen queue tracking and ready pickup alerts</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs font-medium text-[#10161a]">
                  <CheckCircle2 className="w-4 h-4 text-[#d9480f] shrink-0" />
                  <span>Curated dietary filters: Pure Veg, Non-Veg, and Jain options</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs font-medium text-[#10161a]">
                  <CheckCircle2 className="w-4 h-4 text-[#d9480f] shrink-0" />
                  <span>Consolidated desk delivery across building wings and floors</span>
                </div>
              </div>

              <div className="pt-1.5">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#d9480f] hover:text-[#b8380a] transition-colors"
                >
                  Onboard your food stall on TheBizz360 <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Right Visual Representation (Minimal Native Order Mock) */}
            <div className="lg:col-span-6 bg-[#fffaf4] rounded-2xl p-4 sm:p-5 border border-[#f6ddc5]/80 space-y-3 shadow-2xs">
              {/* Minimal Order Header Card */}
              <div className="bg-white rounded-xl p-3 sm:p-3.5 border border-[#f6ddc5] flex items-center justify-between shadow-2xs">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#fff5ec] border border-[#f6ddc5] flex items-center justify-center text-[#d9480f] shrink-0">
                    <Utensils className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#10161a] flex items-center gap-1.5">
                      <span>Desk Delivery Order</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    </div>
                    <p className="text-[10px] sm:text-[11px] text-[#7a6a5c]">Combined from 3 outlets • Floor 4 Desk 12</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-[#fff5ec] text-[#d9480f] text-[10px] sm:text-[11px] font-bold border border-[#f6ddc5]">
                  Single Drop
                </span>
              </div>

              {/* Minimal Dishes Grid */}
              <div className="grid grid-cols-4 gap-2 text-center">
                <div className="bg-white p-2 rounded-xl border border-[#f6ddc5]/70 shadow-2xs">
                  <img src="/dishes/thali.png" alt="Thali" className="w-8 h-8 sm:w-10 sm:h-10 mx-auto rounded-full object-cover mb-1" />
                  <span className="text-[11px] font-bold text-[#10161a] block truncate">Thali</span>
                  <span className="text-[10px] text-[#7a6a5c]">From ₹99</span>
                </div>
                <div className="bg-white p-2 rounded-xl border border-[#f6ddc5]/70 shadow-2xs">
                  <img src="/dishes/south-indian.png" alt="Dosa" className="w-8 h-8 sm:w-10 sm:h-10 mx-auto rounded-full object-cover mb-1" />
                  <span className="text-[11px] font-bold text-[#10161a] block truncate">Dosa</span>
                  <span className="text-[10px] text-[#7a6a5c]">From ₹30</span>
                </div>
                <div className="bg-white p-2 rounded-xl border border-[#f6ddc5]/70 shadow-2xs">
                  <img src="/dishes/chinese.png" alt="Chinese" className="w-8 h-8 sm:w-10 sm:h-10 mx-auto rounded-full object-cover mb-1" />
                  <span className="text-[11px] font-bold text-[#10161a] block truncate">Chinese</span>
                  <span className="text-[10px] text-[#7a6a5c]">From ₹140</span>
                </div>
                <div className="bg-white p-2 rounded-xl border border-[#f6ddc5]/70 shadow-2xs">
                  <img src="/dishes/biryani.png" alt="Biryani" className="w-8 h-8 sm:w-10 sm:h-10 mx-auto rounded-full object-cover mb-1" />
                  <span className="text-[11px] font-bold text-[#10161a] block truncate">Biryani</span>
                  <span className="text-[10px] text-[#7a6a5c]">From ₹170</span>
                </div>
              </div>

              {/* Minimal Outlet Status Strip */}
              <div className="p-2.5 sm:p-3 bg-white rounded-xl border border-[#f6ddc5] flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <img src="/logos/curry-house.svg" alt="Curry House" className="w-4 h-4 object-contain" />
                  <span className="text-[11px] font-semibold text-[#10161a]">Curry House + Outlets</span>
                </div>
                <span className="text-emerald-700 font-semibold bg-emerald-50 border border-emerald-200/60 px-2.5 py-0.5 rounded-full text-[10px]">
                  Prep: 10–12m
                </span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="p-5 sm:p-7 bg-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            {/* Left Description */}
            <div className="lg:col-span-6 space-y-3.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#EEF1FE] text-[#2F4BD8]">
                <span>Digital Office Desk</span>
                <span className="opacity-40">•</span>
                <span>Fast Pickup</span>
              </span>
              <h4 className="font-display text-xl sm:text-2xl font-bold text-[#0E1525] leading-tight tracking-tight">
                Streamline Printing, Xerox &amp; Commercial Services
              </h4>
              <p className="text-xs sm:text-sm text-[#5B6475] leading-relaxed">
                Beyond dining, TheBizz360 digitizes daily commercial office operations. Upload PDFs directly for printing without flash drives, and connect with verified in-complex business services.
              </p>

              <div className="space-y-2 pt-1">
                <div className="flex items-center gap-2.5 text-xs font-medium text-[#0E1525]">
                  <CheckCircle2 className="w-4 h-4 text-[#2F4BD8] shrink-0" />
                  <span>Online PDF upload queue with color &amp; spiral binding options</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs font-medium text-[#0E1525]">
                  <CheckCircle2 className="w-4 h-4 text-[#2F4BD8] shrink-0" />
                  <span>Directory of in-complex IT firms, consultants &amp; service providers</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs font-medium text-[#0E1525]">
                  <CheckCircle2 className="w-4 h-4 text-[#2F4BD8] shrink-0" />
                  <span>Commercial building vendors for courier, legal, tax, and office repairs</span>
                </div>
              </div>

              <div className="pt-1.5">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2F4BD8] hover:text-[#1E2F8F] transition-colors"
                >
                  List your commercial business on TheBizz360 <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Right Visual Representation (Minimal Work Mock) */}
            <div className="lg:col-span-6 bg-[#F5F7FB] rounded-2xl p-4 sm:p-5 border border-[#E3E7EF] space-y-3 shadow-2xs">
              {/* Minimal Status Strip */}
              <div className="bg-white rounded-xl p-3 sm:p-3.5 border border-[#E3E7EF] flex items-center justify-between shadow-2xs">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#EEF1FE] border border-[#E3E7EF] flex items-center justify-center text-[#2F4BD8] shrink-0">
                    <Printer className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#0E1525] flex items-center gap-1.5">
                      <span>Digital Print Queue</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                    </div>
                    <p className="text-[10px] sm:text-[11px] text-[#5B6475]">Direct PDF upload • Token #P-18</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-[#EEF1FE] text-[#2F4BD8] text-[10px] sm:text-[11px] font-bold border border-[#2F4BD8]/20">
                  Ready in 8m
                </span>
              </div>

              {/* Document Specs Card */}
              <div className="p-3 bg-white rounded-xl border border-[#E3E7EF] space-y-1.5 text-xs shadow-2xs">
                <div className="flex justify-between items-center font-semibold text-[#0E1525]">
                  <span className="truncate pr-2 text-xs">Corporate_Proposal_Final.pdf</span>
                  <span className="text-[11px] text-[#2F4BD8] font-bold shrink-0">48 Pages</span>
                </div>
                <div className="text-[11px] text-[#5B6475] flex items-center gap-2">
                  <span>Spiral Bound</span>
                  <span>•</span>
                  <span>Color Cover</span>
                  <span>•</span>
                  <span>Double-sided</span>
                </div>
              </div>

              {/* Directory Card */}
              <div className="p-2.5 sm:p-3 bg-white rounded-xl border border-[#E3E7EF] flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-[#2F4BD8]" />
                  <span className="text-[11px] font-semibold text-[#0E1525]">Commercial Business Directory</span>
                </div>
                <span className="text-blue-700 font-semibold bg-blue-50 border border-blue-200/60 px-2.5 py-0.5 rounded-full text-[10px]">
                  26+ Categories
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
