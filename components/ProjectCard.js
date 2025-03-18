import { useState } from 'react';

export default function ProjectCard({ project }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div 
      className="project-card" 
      onClick={() => setExpanded(!expanded)}
    >
      <h2>{project.title}</h2>
      <p>{project.description.substring(0, 150)}...</p>
      {expanded && (
        <div className="expanded-content">
          <p>{project.description}</p>
          <p><strong>Technologies:</strong> {project.technologies.join(', ')}</p>
          <p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </p>
        </div>
      )}
    </div>
  )
}
