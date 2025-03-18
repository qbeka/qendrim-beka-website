import Head from 'next/head';
import { useEffect } from 'react';
import { gsap } from 'gsap';

const Blog = () => {
  useEffect(() => {
    gsap.from('.blog-post', { opacity: 0, x: -50, duration: 0.8, stagger: 0.3 });
  }, []);

  const posts = [
    { id: 1, title: 'Welcome to My Blog', excerpt: 'Updates and thoughts on technology.' },
    { id: 2, title: 'Latest Trends in Blockchain', excerpt: 'Discussing current trends in blockchain.' }
  ];

  return (
    <>
      <Head>
        <title>Qendrim Beka | Blog</title>
      </Head>
      <section className="blog">
        <h2>Blog</h2>
        <div className="content-container">
          {posts.map(post => (
            <div key={post.id} className="blog-post">
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Blog;
