import AnimatedBackground from '../components/AnimatedBackground'
import AnimatedText from '../components/AnimatedText'

export default function Home() {
  return (
    <div className="home-container">
      <AnimatedBackground />
      <div className="hero-content">
        <AnimatedText text="Welcome to Qendrim Beka's Portfolio" />
        <p className="hero-subtitle">
          Second-year Computing Science student at the University of Alberta. Passionate about Software Development, Machine Learning, and human existence.
        </p>
      </div>
    </div>
  )
}
