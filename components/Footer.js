import Link from 'next/link';

export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        Qendrim Beka
      </div>
      <nav>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/involvement">Involvement</Link></li>
          <li><Link href="/projects">Projects</Link></li>
          <li><Link href="/resume">Resume</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}
