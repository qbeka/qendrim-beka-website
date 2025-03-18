import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedBackground from '../components/AnimatedBackground';
import { useState } from 'react';

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Decentralized US Election Voting System',
      description: 'A blockchain-driven real-time voting system.',
      technologies: 'Python, Node.js, React, D3.js, Ethereum Smart Contracts',
      details: "This project provides an end-to-end election simulation using smart contracts to prevent fraud while allowing real-time visualization of electoral votes."
    },
    {
      id: 2,
      title: 'NeuroNavScore - AI-Assisted Alzheimer’s Detection',
      description: 'EEG-powered navigation tool for cognitive analysis.',
      technologies: 'Unity, Python, C#, Brainflow, OpenBCI, Machine Learning',
      details: "Using VR and AI, this tool assesses cognitive function by analyzing brainwave patterns during navigation tasks, predicting potential cognitive decline."
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
            <motion.div 
              key={project.id} 
              className="project-card"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
            >
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p><strong>Technologies:</strong> {project.technologies}</p>

              <AnimatePresence>
                {expandedProject === project.id && (
                  <motion.div 
                    className="expanded-content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <p>{project.details}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </>
  );
};

export default Projects;
