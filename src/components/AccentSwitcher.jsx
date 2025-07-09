import React from 'react';
import { useTheme } from '../context/ThemeContext';

export default function AccentSwitcher() {
  const { accent, setAccent, ACCENTS } = useTheme();

  return (
    <div className="flex items-center space-x-2 justify-center mt-4">
      {ACCENTS.map(a => (
        <button
          key={a.name}
          onClick={() => setAccent(a.name)}
          className={`w-8 h-8 rounded-full border-2 focus:outline-none transition-all duration-200 ${a.from} ${a.to} bg-gradient-to-r ${accent === a.name ? 'ring-2 ring-white' : ''}`}
          title={a.name}
        />
      ))}
    </div>
  );
}
