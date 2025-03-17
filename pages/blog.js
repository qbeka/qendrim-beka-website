import Head from 'next/head'
import { useEffect } from 'react'
import { gsap } from 'gsap'

const Blog = () => {
  useEffect(() => {
    gsap.from('.blog-post', {
      opacity: 0,
      x: -50,
      duration: 0.8,
      stagger: 0.3
    })
  }, [])

  const posts = [
    { id: 1, title: 'My First Post', excerpt: 'A summary of my first post.' },
    { id: 2, title: 'Another Update', excerpt: 'Some updates on my work.' },
    { id: 3, title: 'Tech Thoughts', excerpt: 'Thoughts on the latest tech trends.' }
  ]

  return (
    <>
      <Head>
        <title>Qendrim Beka | Blog</title>
      </Head>
      <section className="blog">
        <h2>Blog</h2>
        <div className="blog-container">
          {posts.map(post => (
            <div key={post.id} className="blog-post">
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Blog
