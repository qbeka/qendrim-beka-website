import Head from 'next/head';
import { useEffect } from 'react';
import { gsap } from 'gsap';

const Involvement = () => {
  useEffect(() => {
    gsap.from('.involvement-card', { opacity: 0, y: 30, duration: 0.8, stagger: 0.2 });
  }, []);

  const involvement = [
    {
      id: 1,
      title: 'Founder/President - University Club, uAlberta Blockchain Society',
      duration: 'October 2024 - Present',
      details: [
        'Organized weekly blockchain discussions.',
        'Collaborated with 20+ members on decentralized solutions.',
        'Launched a product strategy that increased market penetration by 30%.'
      ]
    },
    {
      id: 2,
      title: 'Interdisciplinary Case Competition, NeuroAlbertaTech',
      duration: 'March 2025',
      details: [
        'Won 2nd place out of 17 teams with a $300 prize.',
        'Developed an AI-driven team formation algorithm.',
        'Built a real-time simulation and visualization dashboard.'
      ]
    },
    {
      id: 3,
      title: 'natHACKS, NeuroAlbertaTech',
      duration: 'November 2024',
      details: [
        'Collaborated on the NeuroNavScore project.',
        'Won first place, securing $4,000 in seed funding.'
      ]
    }
  ];

  return (
    <>
      <Head>
        <title>Qendrim Beka | Involvement</title>
      </Head>
      <section className="involvement">
        <h2>Involvement</h2>
        <div className="involvement-container">
          {involvement.map(item => (
            <div key={item.id} className="involvement-card">
              <h3>{item.title}</h3>
              <p><em>{item.duration}</em></p>
              <ul>
                {item.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Involvement;
