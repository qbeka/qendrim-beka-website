import { useEffect } from 'react'
import { gsap } from 'gsap'
import Head from 'next/head'

const Projects = () => {
  useEffect(() => {
    gsap.from('.project-card', {
      opacity: 0,
      scale: 0.8,
      duration: 0.8,
      stagger: 0.2
    })
  }, [])

  const projects = [
    { id: 1, title: 'Project One', description: 'A brief description of project one.' },
    { id: 2, title: 'Project Two', description: 'A brief description of project two.' },
    { id: 3, title: 'Project Three', description: 'A brief description of project three.' }
  ]

  return (
    <>
      <Head>
        <title>Qendrim Beka | Projects</title>
      </Head>
      <section className="projects">
        <h2>Projects</h2>
        <div className="projects-container">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Projects
