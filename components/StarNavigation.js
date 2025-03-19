import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

function getRandomPosition(existingPositions, minDistance = 15) {
  let attempts = 0;
  let pos;
  while (attempts < 100) {
    // Generate top and left as percentages (range 10%–90%)
    const top = Math.random() * 80 + 10;
    const left = Math.random() * 80 + 10;
    pos = { top, left };
    let valid = true;
    for (const other of existingPositions) {
      const dx = other.left - left;
      const dy = other.top - top;
      const distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < minDistance) {
        valid = false;
        break;
      }
    }
    if (valid) return pos;
    attempts++;
  }
  return pos;
}

export default function StarNavigation({ showStars }) {
  const router = useRouter();
  const isLanding = router.pathname === '/';

  // On the landing page, display 4 stars; on inner pages, add an extra "Home" star.
  const stars = isLanding
    ? [
        { label: 'About Me', route: '/about' },
        { label: 'Involvement', route: '/involvement' },
        { label: 'Projects', route: '/projects' },
        { label: 'Contact', route: '/contact' },
      ]
    : [
        { label: 'About Me', route: '/about' },
        { label: 'Involvement', route: '/involvement' },
        { label: 'Projects', route: '/projects' },
        { label: 'Contact', route: '/contact' },
        { label: 'Home', route: '/' },
      ];

  const [positions, setPositions] = useState([]);

  useEffect(() => {
    let posArray = [];
    for (let i = 0; i < stars.length; i++) {
      const pos = getRandomPosition(posArray, 15);
      posArray.push(pos);
    }
    setPositions(posArray);
  }, [stars.length]);

  if (!showStars) return null;

  return (
    <div className="stars-container">
      {stars.map((star, index) => (
        <div
          key={index}
          className="star-link"
          style={{
            top: `${positions[index]?.top}%`,
            left: `${positions[index]?.left}%`,
          }}
        >
          <div className="nav-star" onClick={() => router.push(star.route)}>
            ★
          </div>
          <div className="nav-text">{star.label}</div>
        </div>
      ))}
    </div>
  );
}
