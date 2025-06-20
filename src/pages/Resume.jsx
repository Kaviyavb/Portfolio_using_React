// src/pages/Resume.jsx
import "../styles/styles.css";

export default function Resume() {
  return (
    <section className="home-section resume-section fade-in">
      <div className="resume-container glassy">
        <h2 className="section-title">📄 My Resume</h2>

        <p className="resume-text">
          View or download my latest resume to explore my full technical journey, experiences, and certifications.
        </p>

        <a href="/resume.pdf" download className="resume-btn">
          📥 Download Resume (PDF)
        </a>

        <div className="resume-preview">
          <iframe
            src="/resume.pdf"
            title="Kaviya Sri Resume"
            className="resume-frame"
            width="100%"
            height="600px"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
