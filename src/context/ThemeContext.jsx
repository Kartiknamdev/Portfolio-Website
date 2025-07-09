import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

const ACCENTS = [
  { name: 'Purple', from: 'from-purple-500', to: 'to-pink-500', border: 'border-purple-400', text: 'text-purple-400', bg: '#18122B', innerBg: '#232046', shadow: 'rgba(147,51,234,0.35)', gradient: 'linear-gradient(135deg, #8b5cf6 0%, #d946ef 100%)' },
  { name: 'Green', from: 'from-green-500', to: 'to-teal-500', border: 'border-green-400', text: 'text-green-400', bg: '#14281D', innerBg: '#1e3a2a', shadow: 'rgba(52,211,153,0.35)', gradient: 'linear-gradient(135deg, #10b981 0%, #2dd4bf 100%)' },
  { name: 'Blue', from: 'from-blue-500', to: 'to-cyan-500', border: 'border-blue-400', text: 'text-blue-400', bg: '#16213E', innerBg: '#1a2747', shadow: 'rgba(59,130,246,0.35)', gradient: 'linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)' },
  { name: 'Orange', from: 'from-amber-500', to: 'to-orange-500', border: 'border-amber-400', text: 'text-amber-400', bg: '#2B1B0E', innerBg: '#3a2412', shadow: 'rgba(251,146,60,0.35)', gradient: 'linear-gradient(135deg, #f59e0b 0%, #ea580c 100%)' },
  { name: 'Pink', from: 'from-pink-500', to: 'to-fuchsia-400', border: 'border-pink-400', text: 'text-pink-400', bg: '#831843', innerBg: '#a21caf', shadow: 'rgba(236,72,153,0.35)', gradient: 'linear-gradient(135deg, #ec4899 0%, #c026d3 100%)' },
];

const colorThemes = [
  { name: 'Classic Purple', player: '#4f45a3', accent: '#ffffff', bg: '#0f0c1f', bgGradient: 'linear-gradient(135deg, #1a1433 0%, #0f0c1f 100%)', accentName: 'Purple' },
  { name: 'Midnight Blue', player: '#172c6b', accent: '#60a5fa', bg: '#04081b', bgGradient: 'linear-gradient(135deg, #101d3a 0%, #04081b 100%)', accentName: 'Blue' },
  { name: 'Forest Green', player: '#05482e', accent: '#34d399', bg: '#04120d', bgGradient: 'linear-gradient(135deg, #0e1e16 0%, #04120d 100%)', accentName: 'Green' },
  { name: 'Dark Rose', player: '#7d0e2f', accent: '#fb7185', bg: '#190214', bgGradient: 'linear-gradient(135deg, #2a0525 0%, #190214 100%)', accentName: 'Pink' },
  { name: 'Ocean', player: '#093557', accent: '#38bdf8', bg: '#041726', bgGradient: 'linear-gradient(135deg, #112b4f 0%, #041726 100%)', accentName: 'Blue' },
  { name: 'Sunset', player: '#5e1f0a', accent: '#fb923c', bg: '#1c0e07', bgGradient: 'linear-gradient(135deg, #2f1a0d 0%, #1c0e07 100%)', accentName: 'Orange' },
  { name: 'Neon', player: '#3a136f', accent: '#a78bfa', bg: '#140f37', bgGradient: 'linear-gradient(135deg, #221a44 0%, #140f37 100%)', accentName: 'Purple' },
  { name: 'Retro Gold', player: '#6b3e08', accent: '#fbbf24', bg: '#1c1007', bgGradient: 'linear-gradient(135deg, #2e1b0e 0%, #1c1007 100%)', accentName: 'Orange' },
  { name: 'Vapor Wave', player: '#6c136f', accent: '#22d3ee', bg: '#1d0c35', bgGradient: 'linear-gradient(135deg, #241543 0%, #1d0c35 100%)', accentName: 'Purple' },
  { name: 'Matrix', player: '#053223', accent: '#4ade80', bg: '#03180f', bgGradient: 'linear-gradient(135deg, #0c2a1c 0%, #03180f 100%)', accentName: 'Green' },
  { name: 'Cherry Blossom', player: '#671232', accent: '#f9a8d4', bg: '#36002b', bgGradient: 'linear-gradient(135deg, #580044 0%, #36002b 100%)', accentName: 'Pink' },
  // Combined themes (harmonious accent+theme)
  { name: 'Purple Dream', player: '#7e18af', accent: '#fff', bg: '#0f0c1f', bgGradient: 'linear-gradient(135deg, #1a1433 0%, #0f0c1f 100%)', accentName: 'Purple' },
  { name: 'Aqua Mint', player: '#0f8276', accent: '#fff', bg: '#03180f', bgGradient: 'linear-gradient(135deg, #0c2a1c 0%, #03180f 100%)', accentName: 'Green' },
  { name: 'Sunrise', player: '#c2410c', accent: '#fff', bg: '#451a03', bgGradient: 'linear-gradient(135deg, #78350f 0%, #451a03 100%)', accentName: 'Orange' },
];

export function ThemeProvider({ children }) {
  const [accent, setAccent] = useState(() => {
    return localStorage.getItem('accent') || 'Purple';
  });
  const [theme, setTheme] = useState(() => {
    return JSON.parse(localStorage.getItem('colorTheme')) || colorThemes[0];
  });

  useEffect(() => {
    localStorage.setItem('accent', accent);
    const accentObj = ACCENTS.find(a => a.name === accent) || ACCENTS[0];
    document.body.style.setProperty('--accent-bg', accentObj.bg);
    document.body.style.setProperty('--accent-inner-bg', accentObj.innerBg);
    document.body.style.setProperty('--accent-shadow', accentObj.shadow);
    document.body.style.setProperty('--accent-gradient', accentObj.gradient);
  }, [accent]);

  useEffect(() => {
    localStorage.setItem('colorTheme', JSON.stringify(theme));
    document.body.style.setProperty('--theme-player', theme.player);
    document.body.style.setProperty('--theme-accent', theme.accent);
    document.body.style.setProperty('--theme-bg', theme.bg);
    // Radial gradient for outer background
    document.body.style.setProperty('--theme-bg-gradient', `radial-gradient(ellipse at 50% 40%, ${theme.bg} 0%, ${theme.player} 70%, #111827 100%)`);
  }, [theme]);

  const accentObj = ACCENTS.find(a => a.name === accent) || ACCENTS[0];

  return (
    <ThemeContext.Provider value={{ accent, setAccent, accentObj, ACCENTS, colorThemes, theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
