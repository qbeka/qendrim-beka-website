import { useEffect } from 'react'
import { gsap } from 'gsap'
import AnimatedModel from '../components/AnimatedModel'
import Head from 'next/head'

const Home = () => {
  useEffect(() => {
    gsap.from('.intro', { opacity: 0, y: 50, duration: 1, ease: 'power3.out' })
  }, [])

  return (
    <>
      <Head>
        <title>Qendrim Beka | About</title>
      </Head>
      <section className="intro">
        <h1>Hi, I'm Qendrim Beka</h1>
        <p>I build innovative digital experiences.</p>
      </section>
      <AnimatedModel />
    </>
  )
}

export default Home
