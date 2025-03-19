import { useRef, useEffect } from 'react';

export default function AnimatedBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let stars = [];

    function createStars(count) {
      const arr = [];
      for (let i = 0; i < count; i++) {
        arr.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          radius: Math.random() * 1.5,
          alpha: Math.random(),
          speed: 0.01 + Math.random() * 0.02,
        });
      }
      return arr;
    }

    function drawStars() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((star) => {
        star.alpha += star.speed;
        if (star.alpha > 2 * Math.PI) {
          star.alpha = 0;
          star.x = Math.random() * canvas.width;
          star.y = Math.random() * canvas.height;
        }
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, 2 * Math.PI);
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.abs(Math.sin(star.alpha))})`;
        ctx.fill();
      });
      animationFrameId = requestAnimationFrame(drawStars);
    }

    function handleResize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      stars = createStars(150);
    }

    window.addEventListener('resize', handleResize);
    handleResize();
    drawStars();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="animated-background" />;
}
