import { Link } from 'react-router-dom';
import { Mail, Clock, ExternalLink } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#10161a] text-white border-t border-[#241a12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 items-start pb-8 border-b border-white/10">
          {/* 1. Brand */}
          <div className="space-y-3">
            <Link to="/" className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="TheBizz360"
                className="h-9 w-9 rounded-xl object-contain"
              />
              <span className="font-display font-bold text-xl text-white">
                TheBizz<span className="text-[#ff7a1a]">360</span>
              </span>
            </Link>
            <p className="text-sm text-gray-400 font-medium">
              Food. Work. Everything Connected.
            </p>
            <div className="pt-1">
              <a
                href="https://www.thebizz360.com/login"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#d9480f] hover:bg-[#b8380a] text-white text-xs font-bold transition-all shadow-xs"
              >
                <span>Campus Login</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* 2. Quick Navigation */}
          <div>
            <h3 className="font-display text-xs font-bold tracking-wider text-gray-300 uppercase mb-3">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/blogs" className="text-gray-400 hover:text-white transition-colors">
                  Blogs
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* 3. Verified Contact / Support */}
          <div>
            <h3 className="font-display text-xs font-bold tracking-wider text-gray-300 uppercase mb-3">
              Support Desk
            </h3>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#ff7a1a] shrink-0" />
                <a
                  href="mailto:support@thebizz360.com"
                  className="hover:text-white transition-colors"
                >
                  support@thebizz360.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#ff7a1a] shrink-0" />
                <span>Mon – Sat: 8:30 AM – 9:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-400">
          <p>&copy; {currentYear} TheBizz360. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link to="/contact" className="hover:text-white transition-colors">
              Help &amp; Inquiries
            </Link>
            <span>&bull;</span>
            <a
              href="https://www.thebizz360.com/login"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ff7a1a] hover:underline font-semibold"
            >
              Sign In
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
