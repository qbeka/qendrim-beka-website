import { motion } from 'framer-motion';

const ProjectCard = ({ title, description, technologies, link }) => {
  return (
    <motion.div 
      className="project-card"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(0, 170, 255, 0.5)" }}
      transition={{ duration: 0.5 }}
    >
      <h3>{title}</h3>
      <p>{description}</p>
      <p><strong>Technologies:</strong> {technologies}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">View on GitHub</a>
    </motion.div>
  );
};

export default ProjectCard;
