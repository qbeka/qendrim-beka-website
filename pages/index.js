import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import AnimatedBackground from '../components/AnimatedBackground';

export default function Home() {
  const [showStars, setShowStars] = useState(false);
  const titleRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Toggle star visibility when the title is no longer in view
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
        <title>Qendrim Beka</title>
      </Head>

      {/* Starry Animated Background */}
      <div className="animated-background-container">
        <AnimatedBackground />
      </div>

      <div className="home-container">
        <div className="hero-content">
          <h1 className="hero-title" ref={titleRef}>
            Qendrim Beka
          </h1>
          <p className="hero-subtitle">
            Building solutions, learning constantly, and exploring new ideas.
          </p>
        </div>

        {/* Star Navigation */}
        <div className={`stars-container ${showStars ? 'visible' : ''}`}>
          {/* About Me */}
          <div className="star-link" style={{ top: '20%', left: '10%' }}>
            <div
              className="nav-star"
              onClick={() => router.push('/about')}
            >
              ★
            </div>
            <div className="nav-text">About Me</div>
          </div>

          {/* Involvement */}
          <div className="star-link" style={{ top: '35%', left: '70%' }}>
            <div
              className="nav-star"
              onClick={() => router.push('/involvement')}
            >
              ★
            </div>
            <div className="nav-text">Involvement</div>
          </div>

          {/* Projects */}
          <div className="star-link" style={{ top: '50%', left: '40%' }}>
            <div
              className="nav-star"
              onClick={() => router.push('/projects')}
            >
              ★
            </div>
            <div className="nav-text">Projects</div>
          </div>

          {/* Contact */}
          <div className="star-link" style={{ top: '65%', left: '80%' }}>
            <div
              className="nav-star"
              onClick={() => router.push('/contact')}
            >
              ★
            </div>
            <div className="nav-text">Contact</div>
          </div>
        </div>

        <div className="scroll-spacer"></div>
      </div>
    </>
  );
}
