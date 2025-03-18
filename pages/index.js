import Head from 'next/head';
import { motion } from 'framer-motion';
import AnimatedBackground from '../components/AnimatedBackground';
import AnimatedText from '../components/AnimatedText';

const Home = () => {
  return (
    <>
      <Head>
        <title>Qendrim Beka | About Me</title>
      </Head>
      <AnimatedBackground />
      <motion.section 
        className="intro"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>Qendrim Beka</h1>
        <AnimatedText text="Blockchain, AI, & Future Tech Enthusiast" />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          Computing Sciences student at the University of Alberta, specializing in innovative solutions.
        </motion.p>
      </motion.section>
    </>
  );
};

export default Home;
