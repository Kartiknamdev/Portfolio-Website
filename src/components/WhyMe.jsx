import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import StaggeredText from './StaggeredText';

const whyMeData = [
    {
        title: 'ADAPTABLE & PATIENT',
        description: 'With a perfectionist approach and a never-give-up mindset, I tackle complex challenges head-on. I quickly adapt to new Technology, Tools and Frameworks, ensuring I always deliver the modern solutions possible.',
    },
    {
        title: 'CREATIVE PROBLEM SOLVER',
        description: "Going beyond textbook rules, I leverage my creativity to anticipate vulnerabilities. My experience in cyber security allows me to combine analytical thinking with out-of-the-box strategies.",
    },
    {
        title: 'TENACIOUS LEARNER',
        description: 'Driven by resilience, I continuously hone my skills through hands-on research. My dedication ensures that my code, networking knowledge, and security practices are consistently evolving and innovative.',
    }
];

export default function WhyMe() {
    const { accentObj } = useTheme();

    return (
        <section id="whyme" className="py-20 relative z-10 w-full overflow-hidden text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Title row */}
                <div className="flex justify-center md:justify-start mb-16">
                    <motion.h2
                        className="text-5xl md:text-7xl font-serif font-black drop-shadow-md text-white tracking-wider"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                        Why Choose Me
                    </motion.h2>
                </div>

                {/* Cards row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {whyMeData.map((card, index) => (
                        <motion.div
                            key={index}
                            className="relative flex flex-col p-8 md:p-10 rounded-3xl min-h-[400px] md:min-h-[450px] border border-white/5 bg-white/5 backdrop-blur-2xl overflow-hidden group hover:border-white/20 hover:bg-white/10 transition-all duration-500 shadow-2xl"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.7, delay: index * 0.2, ease: 'easeOut' }}
                        >
                            {/* Animated Background Gradient that follows hover (CSS only via group-hover for performance) */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                            {/* Deep glow accent */}
                            <div
                                className="absolute -bottom-32 -right-32 w-80 h-80 rounded-full blur-[100px] opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none"
                                style={{ background: accentObj.gradient || accentObj.to || '#ec4899' }}
                            />

                            {/* Top Section: Number and Title */}
                            <div className="mb-auto relative z-10 flex flex-col gap-4">
                                <span className={`text-sm font-bold tracking-[0.3em] uppercase ${accentObj.text} opacity-80`}>
                                    0{index + 1}
                                </span>
                                {/* High-Contrast Typography: Serif for titles */}
                                <h3 className="text-3xl md:text-4xl font-serif font-black text-white leading-tight drop-shadow-lg">
                                    {card.title}
                                </h3>
                            </div>

                            {/* Bottom Section: Description */}
                            <div className="relative z-10 mt-auto border-t border-white/10 pt-6">
                                <StaggeredText
                                    text={card.description}
                                    className="text-white/70 text-base md:text-lg leading-relaxed font-light text-left justify-start"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
