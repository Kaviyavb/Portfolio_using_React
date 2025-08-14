// src/pages/Projects.jsx
import "../styles/styles.css";

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Website = 'Momomania'",
      description: " An e-commerce website built with React , Node.js with User-friendly UI and efficient cart facilities.",
      tech: ["React","Javascript","CSS"],
      code: "https://github.com/Kaviyavb/MomoMania.git",
      demo: "https://react-todo-app-kaviya-sri-vs-projects.vercel.app/", 
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
      code: "https://github.com/Kaviyavb/Structured_Data_Management.git",
    },
    {
      title: "Social Media Sentiment Analysis",
      description: "Analyzes social media posts to determine sentiment using Python and NLP techniques.",
      tech: ["Python", "NLP", "Data Analysis", "Machine Learning", "Pandas", "Numpy", "Matplotlib", "Seaborn","PowerBI", "GitHub"],
      code: "https://github.com/Kaviyavb/Brainwave_Matrix_Intern.git",
      demo:"https://www.linkedin.com/posts/kaviya-sri-v_dataanalytics-powerbi-sentimentanalysis-activity-7353008282677993473-YYHo?utm_source=share&utm_medium=member_desktop&rcm=ACoAADkZ3TsBr5DYIf6LcvUzhmohHGtIruykzBM",
    },
    {
      title: "Malnutrition Analysis Project",
      description: "Analyzes malnutrition data to provide insights and visualizations using CognosBI.",
      tech: ["CognosBI"],
      code: "https://github.com/Kaviyavb/Malnutrition-Analysis.git",
      demo: "https://yourusername.github.io/weather-app",
    },
    {
      title: "Portfolio Website",
      description: "Built with Html,css,Javascript, this portfolio showcases my skills and projects.",
      tech: ["HTML", "CSS", "Javascript","Bootstrap"],
      code: "https://github.com/Kaviyavb/MyPortfolio.git" ,
      demo: "https://my-portfolio-kaviya-sri-vs-projects.vercel.app/", 
    },
    {
      title: "TODO App",
      description: "A simple TODO app to manage tasks, built with React.",
      tech: ["React","Javascript","CSS"],
      code: "https://github.com/Kaviyavb/React_TODO_APP.git",
      demo: "https://react-todo-app-kaviya-sri-vs-projects.vercel.app/", 
    },
    {
      title:"Customer Churn Prediction",
      description: " A project that predicts customer churn using machine learning techniques.",
      tech: ["Python", "Machine Learning", "Data Analysis", "Pandas", "Numpy", "Matplotlib", "Seaborn"],
      code: "https://github.com/Kaviyavb/-churnshield.git",
      demo: "https://drive.google.com/file/d/1BdsJRUEpf1ZjLb4VUr-6Afth98tkeAZH/view?usp=drive_link", 
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
