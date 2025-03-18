import Head from 'next/head';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import AnimatedModel from '../components/AnimatedModel';

const Home = () => {
  useEffect(() => {
    gsap.from('.intro', { opacity: 0, y: 50, duration: 1 });
  }, []);

  return (
    <>
      <Head>
        <title>Qendrim Beka | About Me</title>
      </Head>
      <section className="intro">
        <h1>Qendrim Beka</h1>
        <p>
          Computing Sciences student at the University of Alberta. I focus on blockchain, AI, and innovative digital solutions.
        </p>
        <p>Based in Edmonton, AB, Canada.</p>
      </section>
      <AnimatedModel />
    </>
  );
};

export default Home;
