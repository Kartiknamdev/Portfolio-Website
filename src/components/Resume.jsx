import { motion } from 'framer-motion';
import { Briefcase, BookOpen, GraduationCap } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const journeyData = [
	{
		type: 'experience',
		title: 'Networking Intern',
		organization: 'PaloAlto Networks',
		date: 'Jan 2025 - Mar 2025',
		details: [
			'Got hands on experience of Cybersecurity fundamentals, How SOCs operate, and cloud security',
			'Deep dive into Networking, Security operations, Cloud Security Frameworks',
		],
		icon: <Briefcase className="w-5 h-5 md:w-6 md:h-6 text-white" />
	},
	{
		type: 'experience',
		title: 'Ethical Hacking Workshop',
		organization: 'March 2025',
		date: 'March 2025',
		details: [
			'Completed an Ethical Hacking workshop, gaining hands-on experience in packet sniffing, Metasploit, and cybersecurity techniques.',
			'Gained hands-on experience in packet sniffing and network analysis',
			'Worked with Metasploit for penetration testing and vulnerability assessment',
			'Explored various cybersecurity techniques and ethical hacking methodologies',
		],
		icon: <Briefcase className="w-5 h-5 md:w-6 md:h-6 text-white" />
	},
	{
		type: 'education',
		title: 'B.Tech in Computer Science (CyberSecurity)',
		organization: 'IES College of Technology, Bhopal',
		date: '2022 - 2026',
		details: [],
		icon: <GraduationCap className="w-5 h-5 md:w-6 md:h-6 text-white" />
	},
	{
		type: 'education',
		title: 'Higher Secondary School',
		organization: 'Maharishi Vidya Mandir, Bhopal',
		date: '2021 - 2022',
		details: [],
		icon: <BookOpen className="w-5 h-5 md:w-6 md:h-6 text-white" />
	},
	{
		type: 'education',
		title: 'Class 10th',
		organization: 'Maharishi Vidya Mandir, Bhopal',
		date: '2019 - 2020',
		details: [],
		icon: <BookOpen className="w-5 h-5 md:w-6 md:h-6 text-white" />
	}
];

export default function Resume() {
	const { accentObj } = useTheme();

	return (
		<section id="resume" className="py-20 relative z-10 w-full overflow-hidden text-white">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
				<motion.h2
					className="text-4xl md:text-5xl font-extrabold text-center mb-24 drop-shadow-md text-white"
					initial={{ opacity: 0, y: -30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.5 }}
					transition={{ duration: 0.8, ease: 'easeOut' }}
				>
					My Journey
				</motion.h2>

				{/* Global Vertical Line */}
				<div className="absolute left-10 md:left-1/2 top-48 bottom-10 w-1 bg-white/10 md:-translate-x-1/2 rounded-full" />

				<div className="space-y-12 md:space-y-24">
					{journeyData.map((item, index) => {
						const isLeft = index % 2 === 0;

						return (
							<div key={index} className={`relative flex items-center justify-between w-full ${isLeft ? 'md:flex-row-reverse' : 'md:flex-row'}`}>

								{/* Timeline Node */}
								<motion.div
									className="absolute left-6 md:left-1/2 top-6 md:top-1/2 w-12 h-12 md:w-16 md:h-16 -translate-x-1/2 md:-translate-y-1/2 flex items-center justify-center rounded-full z-20 group"
									initial={{ opacity: 0, scale: 0 }}
									whileInView={{ opacity: 1, scale: 1 }}
									viewport={{ once: true, amount: 0.5 }}
									transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.1 }}
								>
									<div
										className="absolute inset-0 rounded-full blur-[12px] opacity-60 group-hover:blur-[20px] transition-all duration-300"
										style={{ background: accentObj.gradient || accentObj.to || '#ec4899' }}
									/>
									<div
										className="w-full h-full rounded-full border-4 border-gray-900 flex items-center justify-center relative z-10 shadow-xl"
										style={{ background: accentObj.gradient || accentObj.from || '#8b5cf6' }}
									>
										{item.icon}
									</div>
								</motion.div>

								{/* Content Card */}
								<motion.div
									className={`w-[calc(100%-4.5rem)] md:w-[calc(50%-4rem)] ml-auto md:ml-0 p-6 md:p-8 bg-gray-900/60 rounded-[2rem] border border-white/5 shadow-2xl backdrop-blur-xl relative z-10 hover:bg-gray-800/60 hover:border-white/10 transition-colors group`}
									initial={{ opacity: 0, x: isLeft ? 50 : -50, y: 20 }}
									whileInView={{ opacity: 1, x: 0, y: 0 }}
									viewport={{ once: true, amount: 0.3 }}
									transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
								>
									{/* Subtle Card Glow */}
									<div
										className={`absolute ${isLeft ? '-left-20' : '-right-20'} top-1/2 -translate-y-1/2 w-40 h-40 rounded-full blur-[80px] opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`}
										style={{ background: accentObj.color }}
									/>

									<div className="flex flex-col gap-1 mb-6">
										<span
											className="text-xs md:text-sm font-bold tracking-widest uppercase inline-block mb-1"
											style={{ color: accentObj.color || '#ec4899' }}
										>
											{item.date}
										</span>
										<h3 className="text-2xl font-bold text-white leading-tight">{item.title}</h3>
										<h4 className="text-base font-medium text-white/50">{item.organization}</h4>
									</div>

									{item.details.length > 0 && (
										<ul className="list-disc pl-5 space-y-2 text-white/70 font-light text-[13px] md:text-[15px] leading-relaxed">
											{item.details.map((desc, j) => (
												<li key={j}>{desc}</li>
											))}
										</ul>
									)}
								</motion.div>

							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
