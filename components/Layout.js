import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import AnimatedBackground from './AnimatedBackground';

const MIN_DISTANCE = 100; // minimum distance in px between stars

function getRandomPosition(max, offset = 0) {
  return Math.floor(Math.random() * (max - 2 * offset)) + offset;
}

function distance(pos1, pos2) {
  const dx = pos1.left - pos2.left;
  const dy = pos1.top - pos2.top;
  return Math.sqrt(dx * dx + dy * dy);
}

function generateStarPositions(numStars) {
  const positions = [];
  const width = window.innerWidth;
  const height = window.innerHeight;
  const margin = 50; // margin from the viewport edges
  for (let i = 0; i < numStars; i++) {
    let pos;
    let attempts = 0;
    do {
      pos = {
        left: getRandomPosition(width, margin),
        top: getRandomPosition(height, margin),
      };
      attempts++;
      // Avoid endless loop if many stars
      if (attempts > 50) break;
    } while (positions.some(p => distance(p, pos) < MIN_DISTANCE));
    positions.push(pos);
  }
  return positions;
}

export default function Layout({ children }) {
  const router = useRouter();
  const [fadeOpacity, setFadeOpacity] = useState(1);
  const [starPositions, setStarPositions] = useState([]);

  // Define navigation items.
  const navItems = [
    { label: 'About Me', route: '/about' },
    { label: 'Involvement', route: '/involvement' },
    { label: 'Projects', route: '/projects' },
    { label: 'Contact', route: '/contact' },
  ];
  // On inner pages, add an extra "Home" star.
  if (router.pathname !== '/') {
    navItems.push({ label: 'Home', route: '/' });
  }

  useEffect(() => {
    // Generate random positions for the stars on the client.
    setStarPositions(generateStarPositions(navItems.length));
    // Re-calc positions on window resize.
    const handleResize = () => {
      setStarPositions(generateStarPositions(navItems.length));
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [navItems.length]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Fade out content as user scrolls down (over 200px)
      const newOpacity = Math.max(1 - scrollY / 200, 0);
      setFadeOpacity(newOpacity);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Apple-like dynamic transition style.
  const transitionStyle = {
    transition: 'opacity 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  };

  // Show star nav when content has faded (i.e. scrollY > 0).
  const showStars = fadeOpacity < 1;

  return (
    <>
      {/* Persistent animated starry background */}
      <AnimatedBackground />
      <div className="layout-container">
        {/* Page content fades as user scrolls */}
        <div className="content-container" style={{ ...transitionStyle, opacity: fadeOpacity }}>
          {children}
        </div>
        {/* Star Navigation */}
        {showStars && (
          <div className="stars-container">
            {navItems.map((item, index) => {
              const pos = starPositions[index] || { left: 50, top: 50 };
              return (
                <div
                  key={index}
                  className="star-link"
                  style={{ position: 'absolute', left: pos.left, top: pos.top }}
                  onClick={() => router.push(item.route)}
                >
                  <div className="nav-star">★</div>
                  <div className="nav-text">{item.label}</div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}
