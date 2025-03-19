import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import '../global.css';

export default function Home() {
  const [showStars, setShowStars] = useState(false);
  const titleRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When the title is no longer in view, show the stars.
        setShowStars(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Landing Page</title>
      </Head>
      <div className="home-container">
        <div className="hero-content">
          <h1 className="hero-title" ref={titleRef}>Welcome to Our Site</h1>
          <p className="hero-subtitle">Scroll down to explore</p>
        </div>
        <div className={`stars-container ${showStars ? 'visible' : ''}`}>
          <button className="nav-star" style={{ top: '20%', left: '10%' }}>★</button>
          <button className="nav-star" style={{ top: '50%', left: '50%' }}>★</button>
          <button className="nav-star" style={{ top: '70%', left: '80%' }}>★</button>
        </div>
        <div className="scroll-spacer"></div>
      </div>
    </>
  );
}
