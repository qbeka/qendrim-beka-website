import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Qendrim Beka - Home</title>
      </Head>
      <div className="hero-content">
        <h1 className="hero-title">Qendrim Beka</h1>
        <p className="hero-subtitle">
          Building solutions, learning constantly, and exploring new ideas.
        </p>
      </div>
      {/* Spacer so that scrolling is possible to trigger the fade */}
      <div className="scroll-spacer"></div>
    </>
  );
}
