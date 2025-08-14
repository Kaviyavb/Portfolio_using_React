// src/pages/Home.jsx
import { Link } from "react-router-dom";
import profileImg from "../assets/photo.png";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import "../styles/styles.css";

export default function Home() {
  return (
    <>
      <header className="hero-section">
        <div className="hero-content">
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            src={profileImg}
            alt="Kaviya Sri"
            className="profile-pic"
          />

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Hi, I'm <span>KAVIYA SRI VENKATESAN</span>
          </motion.h1>

          <h2 className="hero-subtitle">
            <Typewriter
              words={[
                "Aspiring Software Developer and AI Enthusiast",
                "Data Analyst",
                "Enthusiastic Learner",
              ]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={60}
              deleteSpeed={40}
              delaySpeed={1500}
            />
          </h2>

          <p className="hero-description">
            I specialize in <strong>Web development, Data Analytics , AI ,Machine Learning</strong> and love transforming ideas into interactive user experiences through  insights by analysis.
          </p>

          <div className="tech-badges">
            <span>HTML</span><span>CSS</span><span>Javascript</span><span>React</span><span>Bootstrap</span><span>PowerBI</span><span>CognosBI</span><span>MySQL</span>
           <span>Colab</span><span>Python</span><span>C</span><span>C#</span><span>MongoDB</span><span>Platform:Windows</span><span>Git</span><span>GitHub</span><span>Numpy</span>
<span>Pandas</span><span>Google Colab</span><span>Data Preprocessing  </span>  <span>Data Visualization</span>   </div>

          <div className="btn-group">
            <Link to="/projects" className="btn primary">🚀 View My Work</Link>
            <Link to="/contact" className="btn secondary">📩 Connect with Me</Link>
          </div>

          <div className="social-links">
            <a href="https://github.com/Kaviyavb" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/kaviya-sri-v" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://www.instagram.com/kaviyasri_venkatesh/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          </div>

          <div className="scroll-cue">↓ Scroll Down</div>
        </div>
      </header>

     {/* <section className="home-section internship-section">
  <h2 className="internship-heading">💼 My Internships</h2>
  <div className="internship-grid">
    <div className="internship-card animated-card">
      <div className="card-icon gradient-icon">💻</div>
      <h3>Web Development Intern</h3>
      <p>
        Built responsive UIs using React, integrated REST APIs, and implemented authentication features.
      </p>
      <Link to="/intern1" className="learn-more-btn">Learn More</Link>
    </div>

    <div className="internship-card animated-card">
      <div className="card-icon gradient-icon">📊</div>
      <h3>Data Analysis Intern</h3>
      <p>
        Explored datasets, created Power BI dashboards, and conducted predictive analysis with Python.
      </p>
      <Link to="/intern2" className="learn-more-btn">Learn More</Link>
    </div>

    <div className="internship-card animated-card">
      <div className="card-icon gradient-icon">🤖</div>
      <h3>AI & ML Intern</h3>
      <p>
        Built machine learning models, used NLP techniques, and developed smart systems with Python.
      </p>
      <Link to="/intern3" className="learn-more-btn">Learn More</Link>
    </div>
  </div>
</section>*/}
<section className="home-section internship-section">
  <div className="internship-wrapper">
    <h2>My Internships</h2>
    <div className="internship-grid">
      <div className="internship-card">
        <div className="card-icon">💻</div>
        <h3>Web Development Intern - BUD INDIA</h3>
        <p>
          Developed responsive and dynamic web applications using HTML5,CSS3, and Javasript.Worked with MySql,MondoDB,and managed deployments using Docker.Gained experience in backend integration and API handling.
        </p>
        <Link to="/intern1" className="learn-more-btn">Learn More</Link>
      </div>

      <div className="internship-card">
        <div className="card-icon">📊</div>
        <h3>Virtual Data Analytics Intern - IBM</h3>
        <p>
          Gained experinece in collecting,cleaning, and analyzing datasets to derive actionable insights.Utilized R,Python, and Ibm CognosBI to craete interactive dashboardsand visualize trends.Enhanced problem-solving skills and ability to leverage data for business success.
        </p>
        <Link to="/intern2" className="learn-more-btn">Learn More</Link>
      </div>

      <div className="internship-card">
        <div className="card-icon">🤖</div>
        <h3>Virtual Data Science Internship - VIBA - EDUSERV</h3>
        <p>
          Acquired proficiency in data analysis,machine learning algorithms,and statistical modeling.Gained hands-on experience with python ,Sql,,and varoius data analysis libraries.Learned to handle large datasets and effectively communicate findings.
        </p>
        <Link to="/intern3" className="learn-more-btn">Learn More</Link>
      </div>
    </div>
  </div>
</section>


      <section className="home-section cta-section">
  <div className="cta-bg-glow"></div>
  <div className="cta-wrapper">
    <h2 className="cta-heading">✨ Let’s Build Something Amazing</h2>
    <p className="cta-text">
      I’m a passionate developer who loves turning ideas into elegant solutions.
      If you're seeking someone creative, curious, and committed — let’s make something awesome together!
    </p>
    <Link to="/contact" className="btn cta-btn">📩 Let’s Collaborate OR Hire Me</Link>
  </div>
</section>


    </>
  );
}
