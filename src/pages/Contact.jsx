// src/pages/Contact.jsx
import "../styles/styles.css";
import { useState, useRef } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pvhdqwl",
        "template_3dbl6yn",
        formRef.current,
        "1x2sFoE8bx7ehq4Oi"
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        () => {
          alert("❌ Something went wrong. Please try again.");
        }
        
      );
  };

  return (
    <main className="home-section contact-section fade-in">
      <h2 className="section-title">📬 Contact Me</h2>
      <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          required
          value={formData.message}
          onChange={handleChange}
        />
        <button type="submit" className="submit-btn">
          ✉️ Send Message
        </button>
      </form>
    </main>
  );
}
