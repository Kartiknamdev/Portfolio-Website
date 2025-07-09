import { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Settings, Database, Layers, X } from 'lucide-react'; // Added X for close button
import { useTheme } from '../context/ThemeContext';

const skillsData = {
  frontend: [
    { name: "HTML5", level: 95, icon: <Code className="h-5 w-5 mr-2 text-orange-400" /> },
    { name: "CSS", level: 95, icon: <Code className="h-5 w-5 mr-2 text-blue-400" /> },
    { name: "React", level: 90, icon: <Code className="h-5 w-5 mr-2 text-sky-400" /> },
    { name: "Javascript", level: 85, icon: <Code className="h-5 w-5 mr-2 text-yellow-400" /> },
  ],
  backend: [
    // Add backend skills here if any, e.g.:
    // { name: "Node.js", level: 80, icon: <Database className="h-5 w-5 mr-2 text-green-400" /> },
    // { name: "Express", level: 75, icon: <Database className="h-5 w-5 mr-2 text-green-500" /> },
  ],
  development: [
    { name: "Web Development", level: 90, icon: <Layers className="h-5 w-5 mr-2 text-purple-400" /> },
    { name: "Software Development", level: 85, icon: <Settings className="h-5 w-5 mr-2 text-gray-400" /> },
    { name: "Python", level: 90, icon: <Code className="h-5 w-5 mr-2 text-blue-500" /> },
    { name: "C/C++", level: 85, icon: <Code className="h-5 w-5 mr-2 text-indigo-400" /> },
     { name: "JAVA", level: 80, icon: <Code className="h-5 w-5 mr-2 text-indigo-400" /> },
  ],
  tools: [
    { name: "Visual Studio Code", icon: <Settings className="h-5 w-5 mr-2 text-sky-500" /> },
    { name: "Git", icon: <Settings className="h-5 w-5 mr-2 text-red-500" /> },
    { name: "GitHub", icon: <Settings className="h-5 w-5 mr-2 text-gray-300" /> },
    { name: "Figma", icon: <Settings className="h-5 w-5 mr-2 text-pink-500" /> },
    { name: "Spline", icon: <Settings className="h-5 w-5 mr-2 text-purple-500" /> },
    { name: "Powerpoint", level: 85, icon: <Settings className="h-5 w-5 mr-2 text-orange-500" /> },
    { name: 'Uiverse.io', icon: <Code className="h-5 w-5 mr-2 text-yellow-400" /> },
    { name: 'Canva', icon: <Code className="h-5 w-5 mr-2 text-yellow-400" /> },
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

const ToolPill = ({ name, icon }) => (
  <motion.div 
    className="flex items-center inner-bg bg-opacity-60 backdrop-blur-sm theme-accent px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-105"
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.5, ease: 'easeOut' }}
  >
    {icon}{name}
  </motion.div>
);

export default function Skills() {
  const { accentObj } = useTheme();
  const [showModal, setShowModal] = useState(false);
  // Example extra skills/tools
  const moreSkills = [
    { name: 'TypeScript', icon: <Code className="h-5 w-5 mr-2 text-blue-400" /> },
    { name: 'Tailwind CSS', icon: <Code className="h-5 w-5 mr-2 text-cyan-400" /> },
    { name: 'MongoDB', icon: <Database className="h-5 w-5 mr-2 text-green-500" /> },
    { name: 'Docker', icon: <Settings className="h-5 w-5 mr-2 text-blue-500" /> },
    { name: 'Linux', icon: <Settings className="h-5 w-5 mr-2 text-gray-300" /> },
    { name: 'Firebase', icon: <Settings className="h-5 w-5 mr-2 text-yellow-400" /> },
    { name: 'Supabase', icon: <Database className="h-5 w-5 mr-2 text-yellow-400" /> },
    // Add more as needed
  ];
  return (
    <section id="skills" className="py-20 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-16 heading-shadow leading-tight"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          Tools and Skills
        </motion.h2>
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Skills with progress bars */}
          <div className="space-y-8">
            {Object.entries(skillsData).map(([category, skills]) => {
              if (category === 'tools') return null; // Tools are handled separately
              const categorySkills = skills.filter(skill => skill.level);
              if (categorySkills.length === 0) return null;
              return (
                <motion.div 
                  key={category} 
                  className="relative flex flex-col items-center justify-center glass-card rounded-3xl p-10 border border-white/10 shadow-2xl backdrop-blur-2xl bg-black/70 transition-transform duration-300 hover:scale-[1.03] overflow-hidden"
                  style={{ boxShadow: `0 8px 32px 0 ${accentObj.shadow || 'rgba(80,0,200,0.25)'}` }}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                >
                  {/* Accent Glow */}
                  <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full opacity-30 blur-2xl pointer-events-none" style={{ background: accentObj.gradient || accentObj.color }} />
                  <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full opacity-20 blur-2xl pointer-events-none" style={{ background: accentObj.gradient || accentObj.color }} />
                  <h3 className="text-2xl font-bold text-center mb-6 theme-accent heading-shadow capitalize">
                    {category.replace(/([A-Z])/g, ' $1')}
                  </h3>
                  <div className="w-full max-w-md mx-auto">
                    {categorySkills.map((skill, index) => (
                      <SkillBar key={index} name={skill.name} level={skill.level} icon={skill.icon} />
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
          {/* Tools as pills */}
          <motion.div 
            className="relative flex flex-col items-center justify-center glass-card rounded-3xl p-10 border border-white/10 shadow-2xl backdrop-blur-2xl bg-black/70 transition-transform duration-300 hover:scale-[1.03] overflow-hidden"
            style={{ boxShadow: `0 8px 32px 0 ${accentObj.shadow || 'rgba(80,0,200,0.25)'}` }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay:0.2, ease: 'easeOut' }}
          >
            <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full opacity-30 blur-2xl pointer-events-none" style={{ background: accentObj.gradient || accentObj.color }} />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full opacity-20 blur-2xl pointer-events-none" style={{ background: accentObj.gradient || accentObj.color }} />
            <h3 className="text-2xl font-bold text-center mb-8 theme-accent heading-shadow">
              Tools I Use
            </h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {skillsData.tools.map((tool, index) => (
                <ToolPill key={index} name={tool.name} icon={tool.icon} />
              ))}
            </div>
            <div className="text-center mt-10">
                <button
                    onClick={() => setShowModal(true)}
                    className="px-6 py-3 theme-accent bg-white/10 border border-white/10 font-semibold rounded-xl shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
                >
                    View More
                </button>
            </div>
          </motion.div>
        </div>
        {/* Modal Popup */}
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-sm" onClick={() => setShowModal(false)}></div>
            {/* Glass Modal */}
            <motion.div
              className="relative flex flex-col items-center justify-center glass-card rounded-3xl p-10 border border-white/10 shadow-2xl backdrop-blur-2xl bg-black/70 w-full max-w-md mx-4 overflow-hidden"
              style={{ boxShadow: `0 8px 32px 0 ${accentObj.shadow || 'rgba(80,0,200,0.25)'}` }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full opacity-30 blur-2xl pointer-events-none" style={{ background: accentObj.gradient || accentObj.color }} />
              <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full opacity-20 blur-2xl pointer-events-none" style={{ background: accentObj.gradient || accentObj.color }} />
              <button
                className="absolute top-4 right-4 text-white hover:text-gray-300 focus:outline-none"
                onClick={() => setShowModal(false)}
                aria-label="Close modal"
              >
                <X className="w-7 h-7" />
              </button>
              <h3 className="text-2xl font-bold mb-6 theme-accent text-center heading-shadow">More Tools & Skills</h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {moreSkills.map((skill, idx) => (
                  <div key={idx} className="flex items-center inner-bg bg-opacity-60 backdrop-blur-sm theme-accent px-4 py-2 rounded-full shadow-md">
                    {skill.icon}{skill.name}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}
