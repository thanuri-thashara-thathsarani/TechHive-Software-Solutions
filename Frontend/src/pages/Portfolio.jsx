import { Link } from "react-router-dom";

import ecommerce from "../assets/Modern online shopping platform.jpg";
import hospital from "../assets/Hospital Management System.jpg";
import cybersecurity from "../assets/Cybersecurity Dashboard.jpg";
import restaurant from "../assets/Restaurant Booking System.jpg";

function Portfolio() {
  const projects = [
    {
      image: ecommerce,
      title: "E-Commerce Website",
      description:
        "Modern online shopping platform with secure payment integration.",
      technology: "React • Node.js • MongoDB"
    },
    {
      image: hospital,
      title: "Hospital Management System",
      description:
        "Patient management, appointments and medical records.",
      technology: "React • Express • MySQL"
    },
    {
      image: cybersecurity,
      title: "Cybersecurity Dashboard",
      description:
        "Real-time threat detection and network monitoring dashboard.",
      technology: "Python • Flask • React"
    },
    {
      image: restaurant,
      title: "Restaurant Booking System",
      description:
        "Online reservation platform for restaurants.",
      technology: "React • Node.js"
    }
  ];

  return (
    <div className="portfolio-page">

      <section className="page-hero">
        <span className="eyebrow">Our Portfolio</span>

        <h1>Projects We've Delivered</h1>

        <p>
          Explore some example software solutions developed by TechHive
          Software Solutions.
        </p>
      </section>

      <section className="services-grid">
        {projects.map((project, index) => (
          <div className="service-card" key={index}>

            <img
              src={project.image}
              alt={project.title}
              className="portfolio-image"
            />

            <h2>{project.title}</h2>

            <p>{project.description}</p>

            <h3>{project.technology}</h3>

            <Link to="/booking" className="service-button">
              Request Similar Project →
            </Link>

          </div>
        ))}
      </section>

      <p
        style={{
          textAlign: "center",
          marginBottom: "60px",
          color: "#999"
        }}
      >
        *The above projects are sample demonstrations created for this academic
        project.*
      </p>

    </div>
  );
}

export default Portfolio;