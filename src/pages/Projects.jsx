// src/pages/Projects.jsx
import "../styles/styles.css";

export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "Built with Html,css,Javascript, this portfolio showcases my skills and projects.",
      tech: ["HTML", "CSS", "Javascript"],
      code: "https://github.com/Kaviyavb/MyPortfolio.git" ,
      demo: "https://my-portfolio-kaviya-sri-vs-projects.vercel.app/", 
    },
     {
      title: "Offline Text to Braille Converter",
      description: "A web app that converts text to Braille, designed for accessibility.It converts both English and Tamil text to Braille.",
      tech: ["JavaScript", "Html", "Css"],
      code: "https://github.com/Kaviyavb/Text-To-Braille-converter.git",
      demo: "https://text-to-braille-converter-kaviya-sri-vs-projects.vercel.app/", 
    },
    {
      title: "Structured Data Management in AI-Based LMS",
      description: "Structured Data Management in AI-LMS using MySQL is the project with the goal of creating a highly efficient, artificial intelligence-driven LMS that offers user-centric learning, supported by a robust database management system",
      tech: ["Vue.js", "MySQL", "Django","css","javascript", "html"],
      code: "https://github.com/yourusername/student-records",
      demo: "https://student-records-demo.vercel.app", 
    },
    {
      title: "Malnutrition Analysis Project",
      description: "Uses a weather API to display forecast with animated UI.",
      tech: ["CognosBI"],
      code: "https://github.com/yourusername/weather-app",
      demo: "https://yourusername.github.io/weather-app", 
    },
   
    {
      title: "TODO App",
      description: "A simple TODO app to manage tasks, built with React.",
      tech: ["React,Javascript,CSS"],
      code: "https://github.com/Kaviyavb/React_TODO_APP.git",
      demo: "https://react-todo-app-kaviya-sri-vs-projects.vercel.app/", 
    },
  ];

  return (
    <section className="home-section projects-section fade-in">
      <h2 className="section-title">🚀 FEATURED PROJECTS</h2>
      <div className="projects-grid">
        {projects.map((proj, index) => (
          <div key={index} className="project-card glassy">
            <h3 className="project-title">{proj.title}</h3>
            <p className="project-desc">{proj.description}</p>
            
            <div className="project-tags">
              {proj.tech.map((tag, i) => (
                <span key={i} className="tag">{tag}</span>
              ))}
            </div>

            <div className="project-links">
              <a href={proj.code} target="_blank"  rel="noopener noreferrer" className="glass-btn tiny">
                🛠 Code
              </a>
              <a href={proj.demo} target="_blank" rel="noopener noreferrer" className="glass-btn tiny demo">
                🔍 Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
