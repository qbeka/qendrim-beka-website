export default function Resume() {
  return (
    <div className="content-container">
      <h1>Resume</h1>
      <div className="resume-card">
        <iframe 
          src="/Intern_Resume_Qendrim_Beka.pdf" 
          title="Resume PDF" 
          type="application/pdf" 
          width="100%" 
          height="800px" 
          style={{ border: 'none' }}
        />
      </div>
    </div>
  )
}
