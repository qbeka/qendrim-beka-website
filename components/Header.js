import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className="header"
    >
      <div className="logo">Q<span style={{ color: '#00aaff' }}>B</span></div>
      <nav className={`nav ${menuOpen ? 'open' : ''}`}>
        <Link href="/"><a>About</a></Link>
        <Link href="/projects"><a>Projects</a></Link>
        <Link href="/involvement"><a>Involvement</a></Link>
        <Link href="/resume"><a>Resume</a></Link>
        <Link href="/blog"><a>Blog</a></Link>
        <Link href="/contact"><a>Contact</a></Link>
      </nav>
      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </motion.header>
  );
};

export default Header;
