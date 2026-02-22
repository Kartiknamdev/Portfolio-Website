import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette, X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function ThemeToggleMenu() {
  const { theme, setTheme, colorThemes, setAccent } = useTheme();
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const menuRef = useRef(null);

  // Sync currentIndex with active theme on open
  useEffect(() => {
    if (open) {
      const activeIdx = colorThemes.findIndex(t => t.name === theme.name);
      if (activeIdx !== -1) setCurrentIndex(activeIdx);
    }
  }, [open, theme.name, colorThemes]);

  // Click outside to close
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  const handleSelectTheme = (t) => {
    setTheme(t);
    if (t.accentName) setAccent(t.accentName);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => {
      const nextIdx = (prev + 1) % colorThemes.length;
      handleSelectTheme(colorThemes[nextIdx]);
      return nextIdx;
    });
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => {
      const prevIdx = (prev - 1 + colorThemes.length) % colorThemes.length;
      handleSelectTheme(colorThemes[prevIdx]);
      return prevIdx;
    });
  };

  // Helper to get relative offset for 3D positioning
  const getOffset = (index) => {
    const diff = index - currentIndex;
    const total = colorThemes.length;
    // Handle wrap-around math to keep cards looking circular
    if (diff > total / 2) return diff - total;
    if (diff < -total / 2) return diff + total;
    return diff;
  };

  return (
    <div className="fixed bottom-6 right-6 md:right-8 z-[110] flex flex-col items-end" ref={menuRef}>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="mb-4 bg-gray-200/90 dark:bg-black/80 backdrop-blur-2xl rounded-[2rem] shadow-2xl overflow-hidden w-[360px] px-2 py-6 relative border border-white/20 dark:border-white/10"
            style={{
              background: 'rgba(230, 230, 230, 0.85)', // Light premium glass backing
              backdropFilter: 'blur(30px) saturate(180%)'
            }}
          >
            {/* Header */}
            <div className="flex justify-between items-center px-4 mb-4">
              <h3 className="text-gray-800 font-medium tracking-wide">Theme</h3>
              <span className="text-gray-500 font-mono text-xs">
                {String(currentIndex + 1).padStart(2, '0')}<span className="text-gray-400">/{colorThemes.length}</span>
              </span>
            </div>

            {/* Carousel Container */}
            <div className="relative h-56 w-full flex items-center justify-center perspective-[1000px]">

              {/* Controls */}
              <button
                onClick={handlePrev}
                className="absolute left-1 z-30 w-8 h-8 rounded-full bg-white/70 backdrop-blur shadow-sm flex items-center justify-center text-gray-700 hover:bg-white transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-1 z-30 w-8 h-8 rounded-full bg-white/70 backdrop-blur shadow-sm flex items-center justify-center text-gray-700 hover:bg-white transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Cards */}
              <div className="relative w-36 h-48">
                {colorThemes.map((t, i) => {
                  const offset = getOffset(i);
                  const isCenter = offset === 0;
                  if (Math.abs(offset) > 2) return null; // Only render nearby cards for performance

                  return (
                    <motion.div
                      key={t.name}
                      drag="x"
                      dragConstraints={{ left: 0, right: 0 }}
                      dragElastic={0.2}
                      onDragEnd={(e, { offset }) => {
                        const swipe = offset.x;
                        if (swipe < -50) {
                          handleNext();
                        } else if (swipe > 50) {
                          handlePrev();
                        }
                      }}
                      onClick={() => {
                        if (isCenter) handleSelectTheme(t);
                        else setCurrentIndex(i);
                      }}
                      animate={{
                        x: offset * 100, // Distance between cards
                        scale: isCenter ? 1 : 0.8,
                        zIndex: 10 - Math.abs(offset),
                        opacity: Math.abs(offset) >= 2 ? 0 : isCenter ? 1 : 0.6,
                        rotateY: -offset * 0, // Keep them facing forward like the reference image
                      }}
                      transition={{ type: "spring", damping: 20, stiffness: 200 }}
                      className={`absolute top-0 left-0 w-full h-full rounded-2xl shadow-xl overflow-hidden flex flex-col justify-end p-4 ${isCenter ? 'cursor-grab active:cursor-grabbing ring-2 ring-white/60' : 'cursor-pointer'}`}
                      style={{
                        background: t.bgGradient || t.player,
                        boxShadow: isCenter ? '0 20px 40px -10px rgba(0,0,0,0.5)' : '0 10px 20px -5px rgba(0,0,0,0.3)'
                      }}
                    >
                      {/* Decorative inner gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent pointer-events-none opacity-50 block" />

                      {/* Theme Name label inside card */}
                      <div className="relative z-10 w-full text-center">
                        <h4 className="text-white font-medium text-xl leading-tight tracking-tight drop-shadow-md pointer-events-none">
                          {t.name.split(' ').map((word, idx) => (
                            <span key={idx} className="block lowercase">{word}</span>
                          ))}
                        </h4>
                      </div>

                      {/* Selected Indicator */}
                      {theme.name === t.name && isCenter && (
                        <div className="absolute top-3 right-3 w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-1.5 mt-6">
              {colorThemes.map((_, i) => (
                <div
                  key={i}
                  className={`h-1 rounded-full transition-all duration-300 ${i === currentIndex ? 'w-6 bg-gray-600' : 'w-2 bg-gray-300'}`}
                />
              ))}
            </div>

          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Toggle Button */}
      <motion.button
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-12 h-12 rounded-full shadow-lg flex items-center justify-center bg-gray-900/40 backdrop-blur-md border border-white/20 transition-all focus:outline-none relative overflow-hidden text-white"
        aria-label="Toggle theme menu"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity" />
        {open ? <X className="w-5 h-5 relative z-10" /> : <Palette className="w-5 h-5 relative z-10" />}
      </motion.button>
    </div>
  );
}
