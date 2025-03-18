import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

export default function AnimatedBackground() {
  const canvasRef = useRef(null);
  const router = useRouter();
  const [hoveredStar, setHoveredStar] = useState(null);

  // Fixed navigation stars placed at the four corners
  const navigationStars = [
    { x: "5%", y: "5%", text: "Projects", link: "/projects" },
    { x: "85%", y: "5%", text: "About Me", link: "/involvement" },
    { x: "85%", y: "85%", text: "Resume", link: "/resume" },
    { x: "5%", y: "85%", text: "Contact", link: "/contact" }
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let stars = [];
    const numStars = 100;

    const createStars = () => {
      stars = [];
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.2,
          baseAlpha: Math.random() * 0.8 + 0.2,
          flickerSpeed: Math.random() * 0.05 + 0.02,
          phase: Math.random() * Math.PI * 2
        });
      }
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createStars();
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const animate = (time) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Flickering stars
      stars.forEach(star => {
        const flicker = Math.sin(time * star.flickerSpeed + star.phase);
        const alpha = star.baseAlpha + flicker * 0.2;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.max(0.2, Math.min(1, alpha))})`;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };
    animate(0);

    return () => window.removeEventListener('resize', resizeCanvas);
  }, []);

  return (
    <div className="animated-background-container">
      {/* The canvas is behind everything and ignores pointer events */}
      <canvas ref={canvasRef} className="animated-background" />
      
      {/* Stars container on top so stars are always clickable */}
      <div className="stars-container">
        {navigationStars.map((star, index) => (
          <motion.div 
            key={index}
            className="nav-star"
            style={{ top: star.y, left: star.x }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            whileHover={{ scale: 1.3 }}
            onMouseEnter={() => setHoveredStar(index)}
            onMouseLeave={() => setHoveredStar(null)}
            onClick={() => router.push(star.link)}
          >
            {hoveredStar === index && (
              <span className="nav-text">{star.text}</span>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
