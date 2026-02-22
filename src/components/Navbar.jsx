import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const { accentObj } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  // Hide navbar on scroll down, show on scroll up
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    // Only trigger hide/show if scrolling significantly and not at the very top
    if (latest > previous && latest > 150) {
      setHidden(true);
      setMenuOpen(false); // Close menu if scrolling down
    } else if (latest < previous) {
      setHidden(false);
    }
  });

  const links = [
    { name: 'Home', href: '#' },
    
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Journey', href: '#resume' },
  ];

  return (
    <>
      {/* Auto-hiding Top Navbar */}
      <motion.nav
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: "-100%", opacity: 0 }
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="bg-gray-900/50 backdrop-blur-lg shadow-lg fixed top-0 right-0 left-0 z-50 border-b border-white/5"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl md:text-3xl font-bold text-white truncate drop-shadow-sm">My Portfolio</h1>
            </div>

            {/* Desktop links */}
            <div className="hidden md:flex space-x-6">
              {links.map(link => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative text-white/90 font-medium transition-colors duration-200 px-2 py-1 hover:text-white
                    after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-gradient-to-r ${accentObj.from} ${accentObj.to} after:transition-all after:duration-300 hover:after:w-full hover:after:h-0.5`}
                  style={{ scrollBehavior: 'smooth' }}
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden flex flex-col items-center justify-center w-10 h-10 rounded focus:outline-none focus:ring-2 focus:ring-white/50 bg-white/5 hover:bg-white/10 transition-colors backdrop-blur-sm relative z-[110]"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {/* Animated Hamburger Icon */}
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="block w-6 h-0.5 bg-white rounded transition-transform origin-center"
              />
              <motion.span
                animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="block w-6 h-0.5 bg-white rounded my-1 transition-opacity"
              />
              <motion.span
                animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className="block w-6 h-0.5 bg-white rounded transition-transform origin-center"
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* "Zoom Slider" Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Click-away backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="md:hidden fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm"
              onClick={() => setMenuOpen(false)}
            />

            {/* Radial Slider Menu Container */}
            {/* Radial Slider Menu Container */}
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 50, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="md:hidden fixed top-24 bottom-24 right-3 z-[105] flex flex-col justify-center py-6 px-5 bg-gray-900/60 backdrop-blur-3xl border border-white/20 rounded-[2rem] shadow-2xl overflow-y-auto no-scrollbar"
              style={{ boxShadow: "0 0 40px rgba(0,0,0,0.5), inset 0 0 20px rgba(255,255,255,0.05)" }}
            >
              <div className="flex flex-col items-center justify-center space-y-8 my-auto h-full min-h-max">
                {links.map((link, i) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.3, ease: "easeOut" }}
                    className={`relative text-white/70 hover:text-white font-bold text-xs tracking-widest uppercase transition-all duration-300 py-2 px-1 mx-1 block hover:scale-110 flex-shrink-0 text-center
                      after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-gradient-to-r ${accentObj.from} ${accentObj.to} after:transition-all after:duration-300 hover:after:w-full`}
                    style={{ writingMode: 'vertical-rl' }}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>

              {/* Decorative radial line marking center */}
              <div className="absolute top-1/2 left-0 w-2 h-0.5 bg-white/30 -translate-y-1/2 rounded-r-full" />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
