import Head from 'next/head';
import { useEffect } from 'react';
import { gsap } from 'gsap';

const Projects = () => {
  useEffect(() => {
    gsap.from('.project-card', { opacity: 0, scale: 0.8, duration: 0.8, stagger: 0.2 });
  }, []);

  const projects = [
    {
      id: 1,
      title: 'Decentralized US Election Voting Simulation System',
      description: 'A blockchain-based voting simulation that visualizes US election predictions in real time. It features an interactive US map and logs over 2500 simulated votes.',
      link: 'https://github.com/qbeka/us-2024-election-sim',
      technologies: 'Python, Node.js, React, D3.js'
    },
    {
      id: 2,
      title: 'NeuroNavScore',
      description: 'A VR-based navigation system with EEG integration for early Alzheimer’s detection. Winner of natHACKS2024 with $4,000 seed funding.',
      link: 'https://github.com/NeuroNavScore/hackathon2024',
      technologies: 'Unity, Python, C#, Brainflow, OpenBCI'
    }
  ];

  return (
    <>
      <Head>
        <title>Qendrim Beka | Projects</title>
      </Head>
      <section className="projects">
        <h2>Projects</h2>
        <div className="projects-container">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p><strong>Technologies:</strong> {project.technologies}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">View on GitHub</a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
