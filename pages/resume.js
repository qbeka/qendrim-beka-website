import Head from 'next/head';

const Resume = () => {
  return (
    <>
      <Head>
        <title>Qendrim Beka | Resume</title>
      </Head>
      <section className="resume">
        <h2>Resume</h2>
        <p>Download my resume:</p>
        <a href="/assets/Intern_Resume_Qendrim_Beka.pdf" target="_blank" rel="noopener noreferrer">
          Download Resume
        </a>
        <div style={{ marginTop: '20px', height: '800px' }}>
          <iframe 
            src="/assets/Intern_Resume_Qendrim_Beka.pdf" 
            width="100%" 
            height="100%" 
            style={{ border: 'none' }}
            title="Resume PDF"
          />
        </div>
      </section>
    </>
  );
};

export default Resume;
