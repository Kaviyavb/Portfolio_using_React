// src/pages/Intern1.jsx
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/styles.css";

export default function Intern1() {
  return (
    <>
           <main className="home-section intern1-page fade-in">
        <h2 className="section-title">💻 Web Development Internship</h2>

        <div className="intern-details glass-panel">
          <div className="intern-meta">
            <p><strong>🏢 Company:</strong> BUD INDIA</p>
            <p><strong>⏳ Duration:</strong> 4 Weeks</p>
            <p><strong>🎯 Role:</strong> Web Developer Intern</p>
          </div>

          <div className="tech-stack">
            <h3 className="subheading">🛠 Technologies Used</h3>
            <div className="tech-badges">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>Bootstrap</span>
              <span>GitHub</span>
              <span>MySQL</span>
              <span>Php</span>
            </div>
          </div>
        </div>

        <section className="intern-desc glass-panel">
          <h3 className="subheading">📌 Internship Overview</h3>
          <p>
            During this internship, I worked on developing multiple responsive front-end pages using HTML5, CSS3, Bootstrap, and JavaScript. I also practiced version control using GitHub and followed modern UI/UX standards to deliver clean and accessible layouts.
          </p>
        </section>

        <section className="certificate-section glass-panel">
          <h3 className="subheading">🏆 Certificate</h3>
          <a
            href="https://docs.google.com/document/d/140cRNFNTfF6S2rGY3sTxFR1Hp1W9bseI0i0WhVYjnlw/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-btn cert-btn"
          >
            🎓 View Certificate
          </a>
        </section>
      </main>
     
    </>
  );
}
