// src/pages/Intern3.jsx
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/styles.css";

export default function Intern3() {
  return (
    <>
      
      <main className="home-section intern3-page fade-in">
        <h2 className="section-title">🧠 Data Science Internship</h2>

        <div className="intern-details glass-panel">
          <div className="intern-meta">
            <p><strong>🏢 Company:</strong> Viba Edu-Serv</p>
            <p><strong>⏳ Duration:</strong> 3 Months</p>
            <p><strong>🎯 Role:</strong> Data Science Intern</p>
          </div>

          <div className="tech-stack">
            <h3 className="subheading">🔧 Technologies Used</h3>
            <div className="tech-badges">
              <span>Python</span>
              <span>AI</span>
              <span>Supervised and unsupervised learning</span>
              <span>Pandas</span>
              <span>Numpy</span>
              <span>Jupyter Notebook</span>
              <span>GitHub</span>
            </div>
          </div>
        </div>

        <section className="intern-desc glass-panel">
          <h3 className="subheading">📌 Internship Highlights</h3>
          <ul className="intern-tasks">
            <li>Implemented a machine learning classification model</li>
            <li>Cleaned and analyzed real-world datasets using Pandas & NumPy</li>
            <li>Visualized insights with Matplotlib and Seaborn</li>
            <li>Documented and published findings on GitHub</li>
          </ul>
        </section>

        <section className="intern-skills glass-panel">
          <h3 className="subheading">✨ Skills Gained</h3>
          <div className="tech-badges">
            <span>Model Evaluation</span>
            <span>Data Preprocessing</span>
            <span>Feature Engineering</span>
            <span>Version Control</span>
            <span>Team Collaboration</span>
          </div>
        </section>

        <section className="certificate-section glass-panel">
          <h3 className="subheading">🏅 Certificate</h3>
          <a
            href="https://drive.google.com/file/d/1x0zHWgHjSKOHmbYwy3EsYRANVdfdh1P1/view?usp=sharing"
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
