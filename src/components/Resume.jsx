import { motion } from 'framer-motion';
import { Briefcase, BookOpen } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const educationData = [
	{
		degree: 'Bachelor of Technology in Computer Science with specialization in CyberSecurity',
		institution: 'IES College of Technology, Bhopal',
		years: '2022 - 2026',
	},
	{
		degree: 'Higher Secondary School',
		institution: 'Maharishi Vidya Mandir, Bhopal',
		years: '2021 - 2022',
	},
	{
		degree: 'Class 10th',
		institution: 'Maharishi Vidya Mandir, Bhopal',
		years: '2019 - 2020',
	},
];

const experienceData = [
	{
		role: 'Networking Intern',
		company: 'PaloAlto Networks',
		duration: 'Jan 2025 - Mar 2025',
		description: [
			'Got hands on experience of Cybersecurity fundamentals, How SOCs operate, and cloud security',
			'Deep dive into Networking, Security operations, Cloud Security Frameworks',
		],
	},
	{
		role: 'Ethical Hacking workshop',
		company: 'March 2025',
		duration: 'March 2025',
		description: [
			'Completed an Ethical Hacking workshop, gaining hands-on experience in packet sniffing, Metasploit, and cybersecurity techniques.',
			'Gained hands-on experience in packet sniffing and network analysis',
			'Worked with Metasploit for penetration testing and vulnerability assessment',
			'Explored various cybersecurity techniques and ethical hacking methodologies',
		],
	},
];

const cardVariants = {
	hidden: { opacity: 0, y: 30 },
	visible: (i) => ({
		opacity: 1,
		y: 0,
		transition: { delay: i * 0.12, duration: 0.5, ease: 'easeOut' },
	}),
};

export default function Resume() {
	const { accentObj } = useTheme();
	return (
		<section id="resume" className="py-20 text-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.h2
					className="text-4xl md:text-5xl font-bold text-center mb-16 heading-shadow"
					initial={{ opacity: 0, y: -30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.5 }}
					transition={{ duration: 0.8, ease: 'easeOut' }}
				>
					My Journey
				</motion.h2>
				<div className="grid md:grid-cols-2 gap-12">
					{/* Education Column */}
					<div>
						<h3 className="flex items-center text-3xl font-semibold mb-8 theme-accent heading-shadow">
							<BookOpen className="mr-3 h-8 w-8" /> Education
						</h3>
						<div className="space-y-8">
							{educationData.map((edu, i) => (
								<motion.div
									key={i}
									custom={i}
									variants={cardVariants}
									initial="hidden"
									whileInView="visible"
									viewport={{ once: true, amount: 0.5 }}
									className="relative flex flex-col items-center justify-center glass-card rounded-3xl p-10 border border-white/10 shadow-2xl backdrop-blur-2xl bg-black/70 transition-transform duration-300 hover:scale-[1.03] overflow-hidden"
									style={{ boxShadow: `0 8px 32px 0 ${accentObj.shadow || 'rgba(80,0,200,0.25)'}` }}
								>
									{/* Accent Glow */}
									<div className="absolute -top-10 -left-10 w-40 h-40 rounded-full opacity-30 blur-2xl pointer-events-none" style={{ background: accentObj.gradient || accentObj.color }} />
									<div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full opacity-20 blur-2xl pointer-events-none" style={{ background: accentObj.gradient || accentObj.color }} />
									<h4 className="text-2xl md:text-3xl font-bold text-center mb-2 theme-accent heading-shadow">{edu.degree}</h4>
									<p className="text-lg font-medium text-center mb-2 text-gray-200">{edu.institution}</p>
									<span className="inline-block mt-2 px-5 py-2 rounded-full font-semibold text-base theme-accent bg-white/10 border border-white/10 shadow-md">
										{edu.years}
									</span>
								</motion.div>
							))}
						</div>
					</div>
					{/* Experience Column */}
					<div>
						<h3 className="flex items-center text-3xl font-semibold mb-8 theme-accent heading-shadow">
							<Briefcase className="mr-3 h-8 w-8" /> Experience
						</h3>
						<div className="space-y-8">
							{experienceData.map((exp, i) => (
								<motion.div
									key={i}
									custom={i}
									variants={cardVariants}
									initial="hidden"
									whileInView="visible"
									viewport={{ once: true, amount: 0.5 }}
									className="relative flex flex-col items-center justify-center glass-card rounded-3xl p-10 border border-white/10 shadow-2xl backdrop-blur-2xl bg-black/70 transition-transform duration-300 hover:scale-[1.03] overflow-hidden"
									style={{ boxShadow: `0 8px 32px 0 ${accentObj.shadow || 'rgba(80,0,200,0.25)'}` }}
								>
									<div className="absolute -top-10 -left-10 w-40 h-40 rounded-full opacity-30 blur-2xl pointer-events-none" style={{ background: accentObj.gradient || accentObj.color }} />
									<div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full opacity-20 blur-2xl pointer-events-none" style={{ background: accentObj.gradient || accentObj.color }} />
									<h4 className="text-2xl md:text-3xl font-bold text-center mb-2 theme-accent heading-shadow">{exp.role}</h4>
									<p className="text-lg font-medium text-center mb-2 text-gray-200">{exp.company}</p>
									<span className="inline-block mt-2 px-5 py-2 rounded-full font-semibold text-base theme-accent bg-white/10 border border-white/10 shadow-md mb-2">
										{exp.duration}
									</span>
									<ul className="list-disc text-gray-300 space-y-1 mt-4 text-base max-w-md mx-auto">
										{exp.description.map((desc, j) => (
											<li key={j}>{desc}</li>
										))}
									</ul>
								</motion.div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
