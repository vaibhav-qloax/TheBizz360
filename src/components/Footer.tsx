import { Link } from 'react-router-dom';
import { Utensils, Briefcase, Mail, MapPin, Clock } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#10161a] text-white border-t border-[#241a12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand Info */}
          <div className="md:col-span-1 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="TheBizz360"
                className="h-10 w-10 rounded-xl object-contain bg-white p-1"
              />
              <span className="font-display font-bold text-xl text-white">
                TheBizz<span className="text-[#ff7a1a]">360</span>
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              The unified platform connecting commercial complexes, business parks, and campus communities with instant food court ordering and essential work services.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#ff7a1a]/15 text-[#ff7a1a] border border-[#ff7a1a]/30">
                <Utensils className="w-3 h-3" /> Food Space
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#2F4BD8]/20 text-[#7ba4ff] border border-[#2F4BD8]/40">
                <Briefcase className="w-3 h-3" /> Work Space
              </span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h3 className="font-display text-sm font-semibold tracking-wider text-gray-200 uppercase mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Home Overview
                </Link>
              </li>
              <li>
                <Link to="/blogs" className="text-gray-400 hover:text-white transition-colors">
                  Complex Insights &amp; Blogs
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact &amp; Partnerships
                </Link>
              </li>
            </ul>
          </div>

          {/* Platform Pillars */}
          <div>
            <h3 className="font-display text-sm font-semibold tracking-wider text-gray-200 uppercase mb-4">
              Platform Pillars
            </h3>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff7a1a]"></span>
                Food Court Stalls &amp; Cafes
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff7a1a]"></span>
                Live Queue &amp; Desk Delivery
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2F4BD8]"></span>
                Digital Print &amp; Xerox Queue
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2F4BD8]"></span>
                IT &amp; Commercial Directory
              </li>
            </ul>
          </div>

          {/* Complex Hub Contact Details */}
          <div>
            <h3 className="font-display text-sm font-semibold tracking-wider text-gray-200 uppercase mb-4">
              Complex Desk
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#ff7a1a] shrink-0 mt-0.5" />
                <span>Central Commercial Food Court &amp; Business Liaison Desk</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#ff7a1a] shrink-0" />
                <span>support@thebizz360.com</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#ff7a1a] shrink-0" />
                <span>Mon – Sat: 8:30 AM – 9:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>
            &copy; {currentYear} TheBizz360. All rights reserved. A unified commercial &amp; campus complex platform.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-gray-400">Designed with authentic Food &amp; Work design tokens</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
