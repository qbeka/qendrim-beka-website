import Head from 'next/head';
import { motion } from 'framer-motion';
import AnimatedBackground from '../components/AnimatedBackground';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Decentralized US Election Voting Simulation System',
      description: 'An advanced blockchain-driven voting simulation that visualizes US election predictions in real-time, ensuring transparency and accuracy in voting outcomes. This project integrates decentralized ledgers to prevent election fraud while providing interactive data visualizations.',
      technologies: 'Python, Node.js, React, D3.js, Ethereum Smart Contracts',
      link: 'https://github.com/qbeka/us-2024-election-sim'
    },
    {
      id: 2,
      title: 'NeuroNavScore - AI-Assisted Navigation for Alzheimer’s Detection',
      description: 'Developed a VR-based navigation system using EEG data to analyze cognitive function and detect early Alzheimer’s symptoms. The project combines brainwave pattern analysis with real-time AI models to provide personalized cognitive assessments.',
      technologies: 'Unity, Python, C#, Brainflow, OpenBCI, Machine Learning',
      link: 'https://github.com/NeuroNavScore/hackathon2024'
    }
  ];

  return (
    <>
      <Head>
        <title>Qendrim Beka | Projects</title>
      </Head>
      <AnimatedBackground />
      <motion.section 
        className="projects"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2>Projects</h2>
        <div className="projects-container">
          {projects.map(project => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </motion.section>
    </>
  );
};

export default Projects;
