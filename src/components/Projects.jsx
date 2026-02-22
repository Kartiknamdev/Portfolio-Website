import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { ExternalLink } from 'lucide-react';

const projectsData = [
	{
		title: 'Rewindly - Experience Music',
		description: 'A retro-meets-modern music experience app designed to stand out in a crowded space.',
		image: '/Rewindlyhome.png',
		gradient: 'from-orange-500 to-yellow-500',
		live: 'https://rewindly-ten.vercel.app',
	},
	{
		title: 'PeerTask - Microtask Platform',
		description: 'MERN stack microtask platform for students to collaborate and exchange favors.',
		image: '/Peertask.jpg',
		gradient: 'from-blue-400 to-indigo-500',
		live: 'https://peer-taskk.vercel.app',
	},
	{
		title: 'SkrappeMind - AI Scraper',
		description: 'AI-powered web scraping tool for OEM vulnerabilities built purely in Python/Streamlit.',
		image: '/Skrappemind.png',
		gradient: 'from-gray-800 to-gray-600',
		live: 'https://Skrappemind.streamlit.app',
	},
	{
		title: 'SecureSight - Dashboard',
		description: 'An interactive Cybersecurity dashboard making learning fun and accessible.',
		image: '/SecureSight.png',
		gradient: 'from-cyan-500 to-blue-600',
		live: 'https://secure-sight-v2.vercel.app/',
	}
];

const ProjectCard = ({ project, index, accentObj }) => {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end start"]
	});

	const yNumber = useTransform(scrollYProgress, [0, 1], [-50, 250]);
	const yContent = useTransform(scrollYProgress, [0, 1], [100, -100]);
	const opacityContent = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

	// Format title
	const [mainTitle, subTitle] = project.title.split(' - ');

	return (
		<div ref={ref} className="relative w-full min-h-[80vh] md:min-h-screen flex items-center justify-center py-20 px-4 md:px-8 overflow-hidden">
			{/* Background Number Parallelax */}
			<motion.div
				style={{ y: yNumber }}
				className="absolute top-[25%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-[40vw] md:text-[35vw] font-black text-white/[0.04] select-none -z-10 leading-none tracking-tighter"
			>
				{String(index + 1).padStart(2, '0')}
			</motion.div>

			{/* Content Container Parallelax */}
			<motion.div
				style={{ y: yContent, opacity: opacityContent }}
				className={`relative z-10 w-full max-w-6xl mx-auto flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-20`}
			>
				{/* Image Section */}
				<div className="w-full md:w-[60%] group relative rounded-2xl md:rounded-[2rem] overflow-hidden shadow-2xl border border-white/5 hover:border-white/20 transition-all duration-500">
					<a href={project.live} target="_blank" rel="noopener noreferrer" className="block relative aspect-[4/3] w-full h-full object-cover bg-black/50">
						{project.image ? (
							<div
								className="w-full h-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
								style={{ backgroundImage: `url(${project.image})` }}
							/>
						) : (
							<div className={`w-full h-full bg-gradient-to-br ${project.gradient} transition-transform duration-1000 group-hover:scale-105`} />
						)}
						<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
					</a>
				</div>

				{/* Text Section */}
				<div className="w-full md:w-[40%] flex flex-col justify-center text-center md:text-left z-20">
					<p className={`text-sm md:text-base font-bold tracking-[0.2em] uppercase mb-4 text-transparent bg-clip-text bg-gradient-to-r ${accentObj.from} ${accentObj.to}`}>
						Selected Work 0{index + 1}
					</p>
					<h3 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-2 leading-tight drop-shadow-md">
						{mainTitle}
					</h3>
					{subTitle && (
						<h4 className="text-xl md:text-2xl font-semibold text-white/90 mb-6 italic">
							{subTitle}
						</h4>
					)}
					<p className="text-lg md:text-xl text-white/60 font-light leading-relaxed mb-8 max-w-lg mx-auto md:mx-0">
						{project.description}
					</p>

					<div className="flex justify-center md:justify-start">
						<a
							href={project.live}
							target="_blank"
							rel="noopener noreferrer"
							className={`px-8 py-4 text-base font-semibold rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-xl flex items-center gap-3 hover:bg-white/20 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 group inline-flex`}
						>
							Checkout The Project
							<ExternalLink className="w-4 h-4 text-white/70 group-hover:text-white transition-colors" />
						</a>
					</div>
				</div>
			</motion.div>
		</div>
	);
};

export default function Projects() {
	const { accentObj } = useTheme();

	return (
		<section id="projects" className="py-20 text-white relative z-10">
			<div className="flex flex-col items-center w-full">

				{/* Header */}
				<div className="text-center mb-10 md:mb-20 w-full px-4 pt-10">
					<motion.p
						initial={{ opacity: 0, y: -20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-white/60 font-semibold tracking-widest uppercase mb-4"
					>
						Portfolio
					</motion.p>
					<motion.h2
						initial={{ opacity: 0, y: -20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-5xl md:text-7xl font-black mb-6 text-white drop-shadow-lg tracking-tighter"
					>
						Featured Projects
					</motion.h2>
					<div className="flex justify-center">
						<span className={`block h-1.5 w-32 rounded-full bg-gradient-to-r ${accentObj.from} ${accentObj.to} shadow-lg shadow-${accentObj.from.replace('from-', '')}/50`}></span>
					</div>
				</div>

				{/* Scrollable Projects List */}
				<div className="w-full flex flex-col">
					{projectsData.map((project, index) => (
						<ProjectCard key={index} project={project} index={index} accentObj={accentObj} />
					))}
				</div>

			</div>
		</section>
	);
}
