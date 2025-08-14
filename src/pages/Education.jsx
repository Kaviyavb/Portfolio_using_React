// src/pages/Education.jsx
import "../styles/styles.css";

export default function Education() {
  const educationData = [
    {
      degree: "B.E. Computer Science and Engineering",
      school: "Arunai Engineering College, Tiruvannamalai",
      year: "2021 - 2025",
      result: "CGPA: 8.82",
    },
    {
      degree: "HSC (12th Grade)",
      school: "Adarsh Matric Higher Secondary School, Vaniyambadi",
      year: "2021",
      result: "Percentage: 90.66%",
    },
    {
      degree: "SSLC (10th Grade)",
      school: "Adarsh Matric Higher Secondary School, Vaniyambadi",
      year: "2019",
      result: "Percentage: 88.80%",
    },
  ];

  const icons = ["🎓", "📘", "🏫"];

  return (
    <main className="home-section education-section fade-in">
      <h2 className="section-title">📚 My Education</h2>
      <div className="edu-grid">
        {educationData.map((edu, index) => (
          <div key={index} className="edu-card">
            <div className="edu-icon">{icons[index]}</div>
            <h3 className="edu-degree">{edu.degree}</h3>
            <p className="edu-school">{edu.school}</p>
            <p className="edu-year">{edu.year}</p>
            <p className="edu-result">{edu.result}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

