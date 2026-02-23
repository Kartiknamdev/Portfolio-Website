import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

export default function Navbar() {
  const { accentObj } = useTheme();
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  // Hide navbar on scroll down, show on scroll up
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    // Only trigger hide/show if scrolling significantly and not at the very top
    if (latest > previous && latest > 150) {
      setHidden(true);
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
          <div className="flex items-center justify-between h-14 md:h-16">

            <div className="flex items-center">
              <h1 className="text-lg md:text-3xl font-bold text-white truncate drop-shadow-sm">Portfolio</h1>
            </div>

            {/* Permanent horizontal inline links (Scale down on mobile) */}
            <div className="flex space-x-3 md:space-x-6">
              {links.map(link => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative text-white/80 font-medium text-[11px] md:text-sm tracking-wide transition-colors duration-200 py-1 hover:text-white
                    after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-gradient-to-r ${accentObj.from} ${accentObj.to} after:transition-all after:duration-300 hover:after:w-full`}
                  style={{ scrollBehavior: 'smooth' }}
                >
                  {link.name}
                </a>
              ))}
            </div>

          </div>
        </div>
      </motion.nav>
    </>
  );
}
