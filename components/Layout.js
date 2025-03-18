import Header from './Header'
import Footer from './Footer'
import AnimatedBackground from './AnimatedBackground'

export default function Layout({ children }) {
  return (
    <div className="layout">
      <AnimatedBackground />
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
