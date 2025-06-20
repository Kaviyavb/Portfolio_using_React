// src/pages/Intern2.jsx
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/styles.css";

export default function Intern2() {
  return (
    <>

      <main className="home-section intern2-page fade-in">
        <h2 className="section-title">📊 Data Analytics Internship</h2>

        <div className="intern-details glass-panel">
          <div className="intern-meta">
            <p><strong>🏢 Company:</strong> IBM (Virtual)</p>
            <p><strong>⏳ Duration:</strong> 4 Weeks</p>
            <p><strong>🎯 Role:</strong> Data Analytics Intern</p>
          </div>

          <div className="tech-stack">
            <h3 className="subheading">🧰 Tools & Technologies</h3>
            <div className="tech-badges">
              <span>IBM Cognos</span>
              <span>R</span>
              <span>Excel</span>
              <span>Data Visualization</span>
            </div>
          </div>
        </div>

        <section className="intern-desc glass-panel">
          <h3 className="subheading">📌 Internship Overview</h3>
          <p>
            This virtual internship provided hands-on experience with real-world datasets and analytical platforms. I performed data cleaning, statistical analysis, and built dynamic dashboards using IBM tools. The role helped me strengthen my skills in business intelligence and visualization.
          </p>
        </section>

        <section className="certificate-section glass-panel">
          <h3 className="subheading">🏅 Certificate</h3>
          <a
            href="https://courses.ibmcep.cognitiveclass.ai/certificates/88ba2e51b94b4352958c2116de1d1faf"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-btn cert-btn"
          >
            🎓 View IBM Certificate
          </a>
        </section>
      </main>
    
    </>
  );
}
