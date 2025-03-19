import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

// Drift variant for stars based on their base positions (as percentages)
const navStarVariants = (baseX, baseY) => ({
  animate: {
    top: [`${baseY}`, `${parseFloat(baseY) + 5}%`, `${baseY}`, `${parseFloat(baseY) - 5}%`, `${baseY}`],
    left: [`${baseX}`, `${parseFloat(baseX) + 5}%`, `${baseX}`, `${parseFloat(baseX) - 5}%`, `${baseX}`],
  },
  transition: {
    duration: 10,
    ease: "easeInOut",
    repeat: Infinity,
    repeatType: "mirror",
  },
});

export default function AnimatedBackground({ showStars }) {
  const canvasRef = useRef(null);
  const router = useRouter();
  const [hoveredStar, setHoveredStar] = useState(null);

  // Navigation stars for all pages
  const navigationStars = [
    { x: "10%", y: "20%", text: "Blog", link: "/blog" },
    { x: "30%", y: "40%", text: "About Me", link: "/about" },
    { x: "50%", y: "60%", text: "Contact", link: "/contact" },
    { x: "70%", y: "30%", text: "Projects", link: "/projects" },
    { x: "80%", y: "70%", text: "Involvement", link: "/involvement" },
    { x: "5%",  y: "80%", text: "Home", link: "/" }
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
      <canvas ref={canvasRef} className="animated-background" />
      {showStars && (
        <div className="stars-container">
          {navigationStars.map((star, index) => {
            const baseX = star.x;
            const baseY = star.y;
            return (
              <motion.div
                key={index}
                className="nav-star"
                style={{ top: star.y, left: star.x }}
                initial={{ opacity: 0 }}
                animate={navStarVariants(baseX, baseY).animate}
                transition={navStarVariants(baseX, baseY).transition}
                onMouseEnter={() => setHoveredStar(index)}
                onMouseLeave={() => setHoveredStar(null)}
                onClick={() => router.push(star.link)}
              >
                {hoveredStar === index && (
                  <span className="nav-text">{star.text}</span>
                )}
              </motion.div>
            );
          })}
        </div>
      )}
    </div>
  );
}
