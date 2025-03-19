import { useRef, useState, useEffect } from 'react';
import StarNavigation from './StarNavigation';
import AnimatedBackground from './AnimatedBackground';

export default function Layout({ children }) {
  const contentRef = useRef(null);
  const [showStars, setShowStars] = useState(false);
  const [contentOpacity, setContentOpacity] = useState(1);

  useEffect(() => {
    const container = contentRef.current;
    const handleScroll = () => {
      const scrollTop = container.scrollTop;
      // Fade out the content as you scroll – Apple‑style smooth transition.
      const newOpacity = Math.max(0, 1 - scrollTop / 200);
      setContentOpacity(newOpacity);
      // Show the star navigation after a slight scroll.
      setShowStars(scrollTop > 50);
    };
    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="layout-wrapper">
      <AnimatedBackground />
      <StarNavigation showStars={showStars} />
      <div
        className="content-wrapper"
        ref={contentRef}
        style={{ opacity: contentOpacity }}
      >
        {children}
      </div>
    </div>
  );
}
