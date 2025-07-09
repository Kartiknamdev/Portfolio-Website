import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggleMenu() {
  const { accent, setAccent, ACCENTS, colorThemes, theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-10 h-10 rounded-full shadow-lg flex items-center justify-center bg-gray-900/30 backdrop-blur-md border border-white/10 transition-transform hover:scale-110 focus:outline-none"
        aria-label="Open theme menu"
      >
        <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-white">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6l4 2" />
        </svg>
      </button>
      {open && ( //card
        <div className="absolute bottom-16 right-0 bg-gray-900 bg-opacity-95 rounded-xl shadow-2xl p-2 flex flex-col items-center min-w-[250px] border border-gray-700 animate-fade-in">
          <span className="text-sm text-gray-300 mb-2">Choose Accent</span>
          <div className="flex space-x-1 mb-4">
            {ACCENTS.map(a => (
              <button
                key={a.name}
                onClick={() => setAccent(a.name)}
                className={`w-8 h-8 rounded-full border-2 ${a.from} ${a.to} bg-gradient-to-r ${accent === a.name ? 'ring-2 ring-white' : ''}`}
                title={a.name}
              />
            ))}
          </div>
          <span className="text-sm text-gray-300 mb-2">Color Themes</span>
          <div className="grid grid-cols-4 gap-2 mb-2">
            {colorThemes.map((t) => (
              <button
                key={t.name}
                onClick={() => {
                  setTheme(t);
                  if (t.accentName) setAccent(t.accentName);
                }}
                className={`w-8 h-8 rounded-full border-2 flex items-center justify-center ${theme.name === t.name ? 'ring-2 ring-white' : ''}`}
                style={{ background: t.bgGradient || t.player, borderColor: t.accent }}
                title={t.name}
              />
            ))}
          </div>
          <button onClick={() => setOpen(false)} className="text-xs text-gray-400 hover:text-white mt-1">Close</button>
        </div>
      )}
    </div>
  );
}
