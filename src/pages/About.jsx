// src/pages/About.jsx
import "../styles/styles.css";

export default function About() {
  return (
    <section className="home-section about-section">
      <div className="about-container glassy fade-in">
        <h2 className="section-title">👩‍💻 About Me</h2>

        <p>
          I'm <strong>Kaviya Sri Venkatesan</strong>, a passionate software developer-in-progress with a curiosity that never sleeps.
          Whether I’m building with <strong>React</strong>, sketching UI ideas, or diving into <strong>Django</strong> and <strong>MySQL</strong>,
          I love crafting smooth, accessible experiences that resonate.
        </p>

        <p>
          My learning journey blends creativity and engineering — and I believe good code is as expressive as good design.
          With experience in Web Development, Data Science, and Machine Learning, I enjoy turning ideas into impactful products.
        </p>
        <p>
          I have also honed my skills in Data Analytics gained expertise in extracting insights from complex datasets through visualizations and dashboards.
        </p>

        <div className="badge-row">
          <span>React</span>
          <span>JavaScript</span>
          <span>HTML</span>
          <span>CSS</span>
          <span>CognosBI</span>
          <span>MySQL</span>
          <span>Git</span>
          <span>Python</span>
          <span>Bootstrap</span>
          <span>PowerBI</span>
          <span>MongoDB</span>
          <span>Colab</span>
          <span>C</span>
          <span>C#</span>
          <span>Windows</span>
        </div>

        <div className="quote-box">
          "Technology excites me. Solving real problems through code — that’s my fuel." 🚀
        </div>
      </div>
    </section>
  );
}
