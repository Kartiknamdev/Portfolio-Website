import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const { accentObj } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact' },
  ];
  return (
    <nav className="bg-gray-900 bg-opacity-50 backdrop-blur-lg shadow-lg fixed top-0 right-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-xl md:text-3xl font-bold text-white truncate">My Portfolio</h1>
          </div>
          {/* Desktop links */}
          <div className="hidden md:flex space-x-6">
            {links.map(link => (
              <a
                key={link.name}
                href={link.href}
                className={`relative text-white font-medium transition-colors duration-200 px-2 py-1
                  after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-gradient-to-r ${accentObj.from} ${accentObj.to} after:transition-all after:duration-300 hover:after:w-full hover:after:h-0.5`}
                style={{ scrollBehavior: 'smooth' }}
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
          {/* Mobile menu button - only show when menu is closed */}
          {!menuOpen && (
            <button
              className="md:hidden flex flex-col items-center justify-center w-10 h-10 rounded focus:outline-none focus:ring-2 focus:ring-white bg-transparent"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              {/* Hamburger icon: 3 lines */}
              <span className="block w-7 h-0.5 bg-white rounded transition-all duration-300"></span>
              <span className="block w-7 h-0.5 bg-white rounded my-1 transition-all duration-300"></span>
              <span className="block w-7 h-0.5 bg-white rounded transition-all duration-300"></span>
            </button>
          )}
        </div>
        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden fixed inset-0 z-40">
            {/* Overlay - starts below navbar */}
            <div className="absolute top-16 left-0 right-0 bottom-0 bg-black bg-opacity-40 backdrop-blur-sm" onClick={() => setMenuOpen(false)}></div>
            {/* Menu panel - glassmorphism, anchored below navbar */}
            <div className="absolute top-0 right-0 h-[calc(100vh-rem)] w-4/5 max-w-xs bg-black/50 backdrop-blur-2xl shadow-2xl border-l border-white/30 rounded-l-2xl flex flex-col py-1 px-2 animate-slide-in-right" style={{boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)', border: '1px solid rgba(255,255,255,0.18)'}}>
              <button
                className="self-end mb-6 text-white hover:text-gray-300 focus:outline-none"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <nav className="flex flex-col items-start space-y-6 mt-2">
                {links.map(link => (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`relative text-xl text-white font-bold px-3 py-2 rounded-lg transition-colors duration-200 text-left
                      after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-gradient-to-r ${accentObj.from} ${accentObj.to} after:transition-all after:duration-300 hover:after:w-full hover:after:h-0.5`}
                    style={{ scrollBehavior: 'smooth' }}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

// Add animation for slide-in
// In your global CSS (e.g., index.css or App.css):
// @keyframes slide-in-right {
//   from { transform: translateX(100%); opacity: 0; }
//   to { transform: translateX(0); opacity: 1; }
// }
// .animate-slide-in-right { animation: slide-in-right 0.3s cubic-bezier(0.4,0,0.2,1) both; }
