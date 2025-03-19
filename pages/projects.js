import Head from 'next/head';

export default function Projects() {
  const projects = [
    {
      title: "ASL-Gesture-Recognition",
      description: "A computer vision system for live gesture recognition. The project covers the entire pipeline—from data collection to real-time recognition—using Python to drive machine learning and image processing algorithms.",
      technologies: ["Python"],
      link: "https://github.com/qbeka/ASL-Gesture-Recognition"
    },
    {
      title: "Matrix-Calculator",
      description: "An augmented matrix calculator that converts matrices to REF, RREF, calculates inverses, and computes a system of elementary matrices. Built with Python, it provides a practical tool for learning linear algebra.",
      technologies: ["Python"],
      link: "https://github.com/qbeka/Matrix-Calculator"
    },
    {
      title: "rockpaperscissors",
      description: "A gesture-controlled Rock Paper Scissors game that uses AI and computer vision. This interactive project detects hand gestures in real time with Python, delivering a fun and engaging user experience.",
      technologies: ["Python"],
      link: "https://github.com/qbeka/rockpaperscissors"
    },
    {
      title: "Landmarks",
      description: "An open-source spatial navigation experiment framework for Unity3D. Forked from mjstarrett/Landmarks, this project uses C# to explore spatial navigation concepts within simulated environments.",
      technologies: ["C#"],
      link: "https://github.com/qbeka/Landmarks"
    },
    {
      title: "us-2024-election-sim",
      description: "A dynamic simulation of the 2024 U.S. Presidential Election featuring a real-time interactive map, live vote logs, and a mock blockchain voting system. The project visualizes state-by-state predictions and logs over 2500 votes using Python, Node.js, React, and D3.js.",
      technologies: ["Python", "Node.js", "React", "D3.js"],
      link: "https://github.com/qbeka/us-2024-election-sim"
    },
  ];

  return (
    <>
      <Head>
        <title>Projects - Qendrim Beka</title>
      </Head>
      <div className="content-container">
        <h1>Projects</h1>
        <div className="projects-container">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
