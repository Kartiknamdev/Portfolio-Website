import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { Github, Linkedin, Twitter, Instagram, Mail } from 'lucide-react';

const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com', label: 'X' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Mail, href: 'mailto:contact@example.com', label: 'Email' }
];

export default function FloatingSocialBar() {
    const { accentObj } = useTheme();

    return (
        <>
            {/* Desktop: Right Side Floating Pill */}
            <motion.div
                className="hidden md:flex fixed right-0 top-1/3 -translate-y-1/2 z-[100] flex-col gap-2 p-2 rounded-l-3xl bg-white/5 border border-white/10 border-r-0 backdrop-blur-xl shadow-2xl overflow-hidden min-w-[48px]"
                initial={{ x: "65%", opacity: 0.3 }}
                whileHover={{ x: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
                {socialLinks.map((link, index) => {
                    const Icon = link.icon;
                    return (
                        <motion.a
                            key={index}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`p-2 rounded-full text-white/50 hover:text-white transition-all relative group flex items-center justify-center`}
                            whileHover={{ scale: 1.1 }}
                            title={link.label}
                        >
                            <Icon strokeWidth={1.5} className="w-4 h-4 relative z-10" />
                            {/* Glow Effect */}
                            <div className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-[0.15] bg-gradient-to-r ${accentObj.from} ${accentObj.to} transition-opacity duration-300 z-0`} />
                        </motion.a>
                    )
                })}
            </motion.div>

            {/* Mobile: Bottom Floating Dock */}
            <div className="md:hidden fixed bottom-6 left-0 right-2 z-[100] flex justify-center pointer-events-none px-4">
                <motion.div
                    className="flex flex-row gap-2 sm:gap-4 p-2 sm:p-3 rounded-full bg-gray-900/40 border border-white/10 backdrop-blur-2xl shadow-2xl pointer-events-auto"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, type: "spring", stiffness: 200, damping: 20 }}
                >
                    {socialLinks.map((link, index) => {
                        const Icon = link.icon;
                        return (
                            <a
                                key={index}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`p-2 rounded-full text-white/70 active:text-white active:bg-white/10 transition-all relative flex items-center justify-center`}
                                aria-label={link.label}
                            >
                                <Icon strokeWidth={1.5} className="w-5 h-5 relative z-10" />
                            </a>
                        )
                    })}
                </motion.div>
            </div>
        </>
    );
}
