import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';
import { Palette } from 'lucide-react';

export default function ThemeToggleMenu() {
  const { theme, setTheme, colorThemes, setAccent } = useTheme();

  const handleRandomTheme = () => {
    // Current index to avoid picking the exact same theme
    const activeIdx = colorThemes.findIndex(t => t.name === theme.name);

    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * colorThemes.length);
    } while (randomIndex === activeIdx && colorThemes.length > 1);

    const newTheme = colorThemes[randomIndex];
    setTheme(newTheme);
    if (newTheme.accentName) {
      setAccent(newTheme.accentName);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 md:right-8 z-[110] flex flex-col items-end">
      {/* 1-Click Randomizer Button */}
      <motion.button
        onClick={handleRandomTheme}
        whileHover={{ scale: 1.05, rotate: 15 }}
        whileTap={{ scale: 0.95, rotate: -15 }}
        className="w-12 h-12 rounded-full shadow-lg flex items-center justify-center bg-gray-900/40 backdrop-blur-md border border-white/20 transition-all focus:outline-none relative overflow-hidden text-white group"
        aria-label="Randomize Theme"
        title="Tap for a random theme"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <Palette className="w-5 h-5 relative z-10" />
      </motion.button>
    </div>
  );
}
