import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const projectsData = [
	{
		title: 'Rewindly - Not just another music player',
		description:
			'it’s an experience app. If you lean into that (retro meets modern), Rewindly can stand out in a crowded music-app space.',
		image: '/Rewindlyhome.png', // Fixed path for production
		gradient: 'from-yellow-400 to-yellow-700',
		live: 'https://rewindly-ten.vercel.app',
	},
	{
		title: 'PeerTask - A Microtask Platform',
		description:
			'Built with MERN stack is a platform where students can collab with their peers to exchange favors for a small-task.',
		image: '/Peertask.jpg', // Fixed path for production
		gradient: 'from-blue-100 to-purple-100',
		live: 'https://peer-taskk.vercel.app',
	},
	{
		title: 'SkrappeMind - AI powered webscraping tool',
		description:
			'A simple web scraping tool for OEM vulnerabilities built purely in Python with Streamlit for a minimal interface.',
		image: '/Skrappemind.png', // Fixed path for production
		gradient: 'from-gray-900 to-gray-700',
		live: 'https://Skrappemind.streamlit.app',
	},
	{
		title: 'SecureSight - Cybersecurity Dashboard',
		description:
			'A dashboard with Cybersecurity tools to make learning fun and interactive.',
		image: '/SecureSight.png', // Fixed path for production
		gradient: 'from-cyan-900 to-cyan-700',
		live: 'https://kartiknamdev.github.io/SecureSight/',
	},
];

const cardVariants = {
	hidden: { opacity: 0, y: 50 },
	visible: (i) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: i * 0.2,
			duration: 0.6,
			ease: 'easeOut',
		},
	}),
};

export default function Projects() {
	const { accentObj } = useTheme();
	// Feature the second project (PeerTask) as the main one
	const featured = projectsData[1];
	const rest = projectsData.filter((_, i) => i !== 1);
	return (
		<section id="projects" className="py-20 text-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.h2
					className="text-4xl md:text-5xl font-bold text-center mb-4 text-white"
					initial={{ opacity: 0, y: -30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.5 }}
					transition={{ duration: 0.8, ease: 'easeOut' }}
				>
					Project Showcase
				</motion.h2>
				<div className="flex justify-center mb-12">
					<span
						className={`block h-1 w-24 rounded-full ${accentObj.from} ${accentObj.to} bg-gradient-to-r`}
					></span>
				</div>
				{/* Featured Project on top */}
				<a
					href={featured.live}
					target="_blank"
					rel="noopener noreferrer"
					className="block"
				>
					<motion.div
						className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-0 overflow-hidden flex flex-col mb-12"
						initial={{ opacity: 0, y: -40 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.5 }}
						transition={{ duration: 0.7, ease: 'easeOut' }}
						whileHover={{
							scale: 1.05,
							boxShadow: '0 8px 32px 0 rgba(31,38,135,0.37)',
						}}
						whileTap={{ scale: 0.98 }}
						style={{
							transition: 'box-shadow 0.3s, transform 0.3s',
						}}
					>
						{featured.image ? (
							<img
								src={featured.image}
								alt={featured.title}
								className="object-cover w-full h-64"
							/>
						) : (
							<div
								className={`bg-gradient-to-br ${featured.gradient} h-64 flex items-center justify-center`}
							>
								<span className="text-2xl font-bold text-gray-400">
									[Screenshot]
								</span>
							</div>
						)}
						<div className="p-8">
							<h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
								{featured.title}
							</h3>
							<p className="text-gray-700 dark:text-gray-300 mb-4">
								{featured.description}
							</p>
						</div>
					</motion.div>
				</a>
				{/* Grid of other projects below */}
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{rest.map((project, index) => (
						<a
							href={project.live}
							target="_blank"
							rel="noopener noreferrer"
							className="block"
							key={index}
						>
							<motion.div
								className="inner-bg bg-opacity-90 backdrop-blur-md rounded-xl shadow-xl p-0 flex flex-col justify-between"
								initial={{ opacity: 0, y: 40 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, amount: 0.5 }}
								transition={{ duration: 0.7 + index * 0.1, ease: 'easeOut' }}
								whileHover={{
									scale: 1.05,
									boxShadow: '0 8px 32px 0 rgba(31,38,135,0.37)',
								}}
								whileTap={{ scale: 0.98 }}
								style={{
									transition: 'box-shadow 0.3s, transform 0.3s',
								}}
							>
								{project.image ? (
									<img
										src={project.image}
										alt={project.title}
										className="object-cover w-full h-32 rounded-t-lg"
										style={{
											background: project.gradient
												? undefined
												: '#222',
										}}
									/>
								) : (
									<div
										className={`bg-gradient-to-br ${project.gradient} h-32 rounded-t-lg`}
									/>
								)}
								<div className="p-6">
									<h3 className="text-xl font-semibold mb-2 theme-accent">
										{project.title}
									</h3>
									<p className="text-gray-300 leading-relaxed">
										{project.description}
									</p>
								</div>
							</motion.div>
						</a>
					))}
				</div>
			</div>
		</section>
	);
}
