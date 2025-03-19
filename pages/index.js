import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Qendrim Beka</title>
      </Head>
      <div className="home-container">
        <div className="hero-content">
          <h1 className="hero-title">Qendrim Beka</h1>
          <p className="hero-subtitle">
            Building solutions, learning constantly, and exploring new ideas.
          </p>
        </div>
        <div className="scroll-spacer"></div>
      </div>
    </>
  );
}
