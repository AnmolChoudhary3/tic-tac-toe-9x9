import { useState } from 'react';
import { Outlet, NavLink, Link } from 'react-router-dom';
import { ScrollToTop } from './ScrollToTop';
import { SITE_NAME } from '../config';

const navLinks = [
  { to: '/', label: 'Play' },
  { to: '/how-to-play', label: 'How to Play' },
  { to: '/about', label: 'About' },
];

const footerQuickLinks = [
  { to: '/', label: 'Home' },
  { to: '/how-to-play', label: 'How to Play' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

const footerLegalLinks = [
  { to: '/privacy-policy', label: 'Privacy Policy' },
  { to: '/terms', label: 'Terms of Service' },
];

export function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <ScrollToTop />
      <div className="min-h-screen bg-slate-900 text-white flex flex-col">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">
            <Link to="/" className="text-lg font-bold tracking-tight hover:text-slate-200 transition-colors">
              {SITE_NAME}
            </Link>

            {/* Desktop nav */}
            <nav className="hidden sm:flex items-center gap-6">
              {navLinks.map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) =>
                    `text-sm font-medium transition-colors ${isActive ? 'text-white' : 'text-slate-400 hover:text-slate-200'}`
                  }
                >
                  {label}
                </NavLink>
              ))}
            </nav>

            {/* Mobile hamburger */}
            <button
              type="button"
              className="sm:hidden p-2 text-slate-400 hover:text-white transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile nav dropdown */}
          {menuOpen && (
            <nav className="sm:hidden border-t border-slate-800 bg-slate-900/95 backdrop-blur">
              {navLinks.map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={to === '/'}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `block px-4 py-3 text-sm font-medium border-b border-slate-800 transition-colors ${isActive ? 'text-white bg-slate-800/50' : 'text-slate-400 hover:text-white'}`
                  }
                >
                  {label}
                </NavLink>
              ))}
            </nav>
          )}
        </header>

        {/* Main content */}
        <main className="flex-1">
          <Outlet />
        </main>

        {/* Footer */}
        <footer className="border-t border-slate-800 bg-slate-950">
          <div className="max-w-7xl mx-auto px-4 py-10">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {/* Brand */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300 mb-3">{SITE_NAME}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  A free online strategy game that takes classic tic-tac-toe to the next level with nine interconnected boards.
                </p>
              </div>

              {/* Quick links */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300 mb-3">Quick Links</h3>
                <ul className="space-y-2">
                  {footerQuickLinks.map(({ to, label }) => (
                    <li key={to}>
                      <Link to={to} className="text-sm text-slate-500 hover:text-slate-300 transition-colors">
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Legal */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300 mb-3">Legal</h3>
                <ul className="space-y-2">
                  {footerLegalLinks.map(({ to, label }) => (
                    <li key={to}>
                      <Link to={to} className="text-sm text-slate-500 hover:text-slate-300 transition-colors">
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800 text-center">
              <p className="text-xs text-slate-600">
                &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
