import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectCard = ({ title, description, technologies, link, extendedDescription }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div 
      className="project-card"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(0, 170, 255, 0.5)" }}
      transition={{ duration: 0.5 }}
      onClick={() => setExpanded(!expanded)}
    >
      <h3>{title}</h3>
      <p>{description}</p>
      <p><strong>Technologies:</strong> {technologies}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">View on GitHub</a>

      <AnimatePresence>
        {expanded && (
          <motion.div 
            className="expanded-content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p>{extendedDescription}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ProjectCard;
