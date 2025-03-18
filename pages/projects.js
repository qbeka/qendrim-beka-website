import Head from 'next/head';
import { motion } from 'framer-motion';
import AnimatedBackground from '../components/AnimatedBackground';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Decentralized US Election Voting System',
      description: 'A blockchain-driven real-time voting system.',
      technologies: 'Python, Node.js, React, D3.js, Ethereum Smart Contracts',
      link: 'https://github.com/qbeka/us-2024-election-sim',
      extendedDescription: "This project provides an end-to-end election simulation using smart contracts to prevent fraud, while allowing real-time visualization of electoral votes."
    },
    {
      id: 2,
      title: 'NeuroNavScore - AI-Assisted Alzheimer’s Detection',
      description: 'EEG-powered navigation tool for cognitive analysis.',
      technologies: 'Unity, Python, C#, Brainflow, OpenBCI, Machine Learning',
      link: 'https://github.com/NeuroNavScore/hackathon2024',
      extendedDescription: "Using VR and AI, this tool assesses cognitive function by analyzing brainwave patterns during navigation tasks, predicting potential cognitive decline."
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
