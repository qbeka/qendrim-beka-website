import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="header">
      <div className="logo">QB</div>
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
    </header>
  );
};

export default Header;
