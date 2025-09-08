// src/pages/Certifications.jsx
import "../styles/styles.css";

export default function Certifications() {
  const certs = [
    {
      title:"Business Intelligence ",
      issuer: "IBM",
      date: "FEB 2024",
      link: "https://courses.ibmcep.cognitiveclass.ai/certificates/88ba2e51b94b4352958c2116de1d1faf"
    },
    {
      title: "Explore fundamental relational data concepts",
      issuer: "Microsoft",
      date: "Oct 2023",
      link: "https://learn.microsoft.com/api/achievements/share/en-us/KaviyasriV-9724/7KQSN93Z?sharingId=E5A78DFC8E7FFEE0",
    },
   {
      title: " TATA - GenAI Powered Data Analytics Job Simulation",
      issuer: "Forage",
      date: "Sep 2025",
      link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/ifobHAoMjQs9s6bKS/gMTdCXwDdLYoXZ3wG_ifobHAoMjQs9s6bKS_ByhCR6XcazRucHtyz_1757321811453_completion_certificate.pdf",
    },
    {
      title: "React Training",
      issuer: "Perkins Campus",
      date: "June 2025",
      link: "https://drive.google.com/file/d/18b1ty2ZtOT7wA7xuMAwqgxDuJOp0Rrwt/view?usp=drive_link",
    },
    {
      title: "Microsoft PowerBI",
      issuer: "Infosys Springboard",
      date: "July 2024",
      link: "https://drive.google.com/file/d/1waefM1FpFKr17ggfiK4GM8aG7dcppd9S/view?usp=drive_link",
    },
    {
      title: "Java Fullstack Development",
      issuer: "Pantech e Learning",
      date: "SEP 2022",
      link: "https://drive.google.com/file/d/16SXFlhdhi3u5eAi-ovVJY5zwiPVCLdNC/view?usp=sharing",
    },
{
      title: "Web Technology Full Stack Using Django",
      issuer: "edunet",
      date: "AUG 2023",
      link: "https://drive.google.com/file/d/1w_WXGavGEpaJJKuhpiSfcNyL1fzY4-sf/view?usp=sharing",
    },
    {
      title: "Business Intelligence using Cognos BI",
      issuer: "Adroit Prolearn",
      date: "FEB 2024",
      link: "https://drive.google.com/file/d/1dURmChnhW5QPJXyeL1z1T76s1XaIUyVR/view?usp=sharing",
    },
    {
      title: "Microsoft MongoDB",
      issuer: "Infosys Springboard",
      date: "July 2024",
      link: "https://drive.google.com/file/d/1waefM1FpFKr17ggfiK4GM8aG7dcppd9S/view?usp=drive_link",
    },
    {
      title: "Frontend Development",
      issuer: "Microsoft Learn Student Ambassador",
      date: "Aug 2022",
      link: "https://drive.google.com/file/d/12XrMOLsuqrFGPLrIAGheI9xC35i2nWCd/view?usp=sharing",
    },
    {
      title: "Python Projects",
      issuer: "Great Learning",
      date: "DEC 2021",
      link: "https://drive.google.com/file/d/183L-nn1qVn3W0kojUzC_4txhCOltspac/view?usp=sharing",
    },
    {
      title: "Artificial Intelligence Bootcamp",
      issuer: "Microsoft Learn Student Ambassador",
      date: "Sep 2022",
      link: "https://drive.google.com/file/d/1AhifeMLqqh2I0SHGVm0GUQxYKsOBMA2J/view?usp=sharing",
    },
    {
      title:"MORE CERTIFICATES",
      issuer: "Click  here to view more certifications",
      date: "Till 2025",
      link:"https://drive.google.com/drive/folders/1HJ8FxGQKqpEEARw6lPPF9-1L5_zqRNdt?usp=sharing"
    }
    
  ];

  return (
    <main className="home-section certifications-section fade-in">
      <h2 className="section-title">📜 Certifications</h2>
      <p className="cert-intro">Here are some of the certifications I've earned from top platforms and universities.</p>

      <div className="cert-grid">
        {certs.map((cert, index) => (
          <a
            key={index}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="cert-card"
          >
            <h3 className="cert-title">{cert.title}</h3>
            <p className="cert-issuer">{cert.issuer}</p>
            <span className="cert-date">📅 {cert.date}</span>
            <span className="cert-btn">🔗 View Certificate</span>
          </a>
        ))}
      </div>
    </main>
  );
}
