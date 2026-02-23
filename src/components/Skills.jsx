import { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Settings, Database, Layers, X } from 'lucide-react'; // Added X for close button
import { useTheme } from '../context/ThemeContext';

const skillsData = {
  frontend: [
    { name: "HTML5", level: 95, icon: <Code className="h-6 w-6 text-orange-400" /> },
    { name: "CSS", level: 95, icon: <Code className="h-6 w-6 text-blue-400" /> },
    { name: "React", level: 90, icon: <Code className="h-6 w-6 text-sky-400" /> },
    { name: "Javascript", level: 85, icon: <Code className="h-6 w-6 text-yellow-400" /> },
  ],
  backend: [
    // Add backend skills here if any, e.g.:
    // { name: "Node.js", level: 80, icon: <Database className="h-6 w-6 text-green-400" /> },
    // { name: "Express", level: 75, icon: <Database className="h-6 w-6 text-green-500" /> },
  ],
  development: [
    { name: "Web Dev", level: 90, icon: <Layers className="h-6 w-6 text-purple-400" /> },
    { name: "Software Dev", level: 85, icon: <Settings className="h-6 w-6 text-gray-400" /> },
    { name: "Python", level: 90, icon: <Code className="h-6 w-6 text-blue-500" /> },
    { name: "C/C++", level: 85, icon: <Code className="h-6 w-6 text-indigo-400" /> },
    { name: "JAVA", level: 80, icon: <Code className="h-6 w-6 text-indigo-400" /> },
  ],
  tools: [
    { name: "VS Code", icon: <Settings className="h-6 w-6 text-sky-500" /> },
    { name: "Git", icon: <Settings className="h-6 w-6 text-red-500" /> },
    { name: "GitHub", icon: <Settings className="h-6 w-6 text-gray-300" /> },
    { name: "Figma", icon: <Settings className="h-6 w-6 text-pink-500" /> },
    { name: "Spline", icon: <Settings className="h-6 w-6 text-purple-500" /> },
    { name: "Powerpoint", icon: <Settings className="h-6 w-6 text-orange-500" /> },
    { name: 'Uiverse.io', icon: <Code className="h-6 w-6 text-yellow-400" /> },
    { name: 'Canva', icon: <Code className="h-6 w-6 text-yellow-400" /> },
  ],
};

const SkillBar = ({ name, level, icon }) => (
  <div className="mb-4">
    <div className="flex items-center justify-between mb-1">
      <span className="text-base font-medium theme-accent flex items-center">
        {icon}{name}
      </span>
      {level && <span className="text-sm font-medium theme-accent">{level}%</span>}
    </div>
    {level && (
      <div className="w-full inner-bg rounded-full h-2.5">
        <motion.div
          className="bg-gradient-to-r from-purple-500 to-pink-500 h-2.5 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />
      </div>
    )}
  </div>
);

export default function Skills() {
  const { accentObj } = useTheme();

  // Example extra skills/tools combined with original tools for the marquee
  const moreSkills = [
    { name: 'TypeScript', icon: <Code className="h-6 w-6 text-blue-400" /> },
    { name: 'Tailwind CSS', icon: <Code className="h-6 w-6 text-cyan-400" /> },
    { name: 'MongoDB', icon: <Database className="h-6 w-6 text-green-500" /> },
    { name: 'Docker', icon: <Settings className="h-6 w-6 text-blue-500" /> },
    { name: 'Linux', icon: <Settings className="h-6 w-6 text-gray-300" /> },
    { name: 'Firebase', icon: <Settings className="h-6 w-6 text-yellow-400" /> },
    { name: 'Supabase', icon: <Database className="h-6 w-6 text-yellow-400" /> },
  ];

  const allTools = [...skillsData.tools, ...moreSkills];
  const marqueeTools = [...allTools, ...allTools];

  return (
    <section id="skills" className="py-20 relative z-10 w-full overflow-hidden">
      <div className="w-full">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-white drop-shadow-md"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          Tools and Skills
        </motion.h2>

        {/* Bento Grid Layout - Now evenly split across 2 columns to prevent wasted space */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-8 gap-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {Object.entries(skillsData).map(([category, skills], index) => {
            if (category === 'tools' || skills.length === 0) return null;

            return (
              <motion.div
                key={category}
                className="relative flex flex-col p-8 md:p-10 rounded-[2rem] bg-gray-900/60 border border-white/5 backdrop-blur-xl overflow-hidden group hover:border-white/10 transition-colors shadow-2xl h-full"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: index * 0.1, ease: 'easeOut' }}
              >
                <div
                  className="absolute -top-10 -right-10 w-48 h-48 rounded-full blur-[60px] opacity-20 pointer-events-none group-hover:opacity-40 transition-opacity duration-700"
                  style={{ background: accentObj.gradient || accentObj.from || '#8b5cf6' }}
                />

                <h3 className="text-2xl md:text-3xl font-bold mb-8 text-white tracking-wide capitalize relative z-10 text-center md:text-left">
                  {category.replace(/([A-Z])/g, ' $1')}
                </h3>

                <div className="grid grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 relative z-10">
                  {skills.map((skill, idx) => (
                    <div key={idx} className="flex flex-col items-center justify-center p-4 md:p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors text-center w-full">
                      <div className="mb-4 p-3 rounded-xl bg-black/40 border border-white/10 shadow-inner flex items-center justify-center">
                        {skill.icon}
                      </div>
                      <span className="text-white font-semibold text-sm sm:text-base mb-1">{skill.name}</span>
                      {skill.level && (
                        <span className="text-white/40 text-[10px] sm:text-xs uppercase tracking-wider font-bold block w-full">
                          {skill.level}% Proficiency
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}

          <motion.div
            className="md:col-span-2 relative flex flex-col p-8 md:p-10 rounded-[2rem] bg-gray-900/60 border border-white/5 backdrop-blur-xl overflow-hidden group hover:border-white/10 transition-colors shadow-2xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
          >
            <div
              className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full blur-[80px] opacity-20 pointer-events-none group-hover:opacity-30 transition-opacity duration-700"
              style={{ background: accentObj.gradient || accentObj.to || '#ec4899' }}
            />

            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-white tracking-wide relative z-10">
              Tools & Software
            </h3>

            {/* Infinite Horizontal Marquee */}
            <div
              className="relative w-full flex overflow-hidden z-10"
              style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
            >
              <motion.div
                className="flex whitespace-nowrap gap-4 py-2 shrink-0 items-center justify-start min-w-full"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
              >
                {marqueeTools.map((tool, index) => (
                  <div key={index} className="flex items-center gap-3 px-6 py-3.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shrink-0 hover:bg-white/10 transition-colors cursor-default">
                    {tool.icon}
                    <span className="text-white/90 font-medium tracking-wide">{tool.name}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
