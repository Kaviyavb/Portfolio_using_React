// src/components/ScrollToTop.jsx
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import "../styles/styles.css";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    visible && (
      <button className="scroll-top-btn" onClick={scrollUp} aria-label="Scroll to Top">
        <FaArrowUp className="scroll-icon" />
      </button>
    )
  );
}
