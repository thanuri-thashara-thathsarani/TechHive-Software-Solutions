import "./About.css";
import { Link } from "react-router-dom";

const values = [
  {
    number: "01",
    title: "Innovation",
    text: "We explore modern technologies and creative ideas to build better digital solutions.",
  },
  {
    number: "02",
    title: "Security",
    text: "We make security and responsible data protection part of every project.",
  },
  {
    number: "03",
    title: "Quality",
    text: "We focus on reliable performance, clean design and long-term value.",
  },
  {
    number: "04",
    title: "Partnership",
    text: "We listen carefully and work closely with clients throughout each project.",
  },
];

const process = [
  {
    number: "01",
    title: "Discover",
    text: "We learn about your business, challenges and goals.",
  },
  {
    number: "02",
    title: "Plan",
    text: "We create a clear strategy and project roadmap.",
  },
  {
    number: "03",
    title: "Build",
    text: "Our team designs, develops and carefully tests the solution.",
  },
  {
    number: "04",
    title: "Support",
    text: "We provide ongoing assistance, updates and improvements.",
  },
];

function About() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="about-hero-copy">
          <span className="section-label">About TechHive</span>

          <h1>
            Technology with purpose. <span>Solutions with impact.</span>
          </h1>

          <p>
            TechHive Software Solutions helps modern businesses use technology
            with confidence. We combine creativity, technical knowledge and
            security-first thinking to create reliable digital solutions.
          </p>

          <div className="about-actions">
            <Link to="/services" className="primary-button">
              Explore Our Services <span>→</span>
            </Link>

            <Link to="/contact" className="secondary-button">
              Contact Our Team
            </Link>
          </div>
        </div>

        <div className="about-visual">
          <div className="about-visual-grid">
            <div className="about-stat">
              <strong>50+</strong>
              <span>Completed Projects</span>
            </div>

            <div className="about-stat">
              <strong>25+</strong>
              <span>Happy Clients</span>
            </div>

            <div className="about-stat">
              <strong>7</strong>
              <span>Professional Services</span>
            </div>

            <div className="about-stat about-stat-accent">
              <strong>100%</strong>
              <span>Client Focused</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mission-section">
        <div className="mission-card">
          <span>Our Mission</span>
          <h2>Making powerful technology practical and accessible</h2>
          <p>
            Our mission is to deliver secure, user-friendly and effective
            technology solutions that solve real business problems and support
            sustainable growth.
          </p>
        </div>

        <div className="mission-card">
          <span>Our Vision</span>
          <h2>Building a smarter and more secure digital future</h2>
          <p>
            Our vision is to become a trusted technology partner known for
            innovation, reliability and meaningful results.
          </p>
        </div>
      </section>

      <section className="about-values section">
        <div className="section-heading">
          <span className="section-label">What guides us</span>
          <h2>Our core values</h2>
          <p>
            These principles guide the way we think, communicate and deliver
            every solution.
          </p>
        </div>

        <div className="values-grid">
          {values.map((value) => (
            <article className="value-card" key={value.number}>
              <span>{value.number}</span>
              <h3>{value.title}</h3>
              <p>{value.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="process-section section">
        <div className="process-intro">
          <span className="section-label">How we work</span>
          <h2>A clear process from idea to delivery</h2>
          <p>
            Our organised approach keeps every project focused, transparent and
            aligned with your business goals.
          </p>
        </div>

        <div className="process-grid">
          {process.map((step) => (
            <article className="process-card" key={step.number}>
              <span>{step.number}</span>

              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about-cta">
        <div>
          <span className="section-label">Let’s work together</span>
          <h2>Have an idea for your next project?</h2>
          <p>
            Talk to our team and discover how TechHive can help bring your idea
            to life.
          </p>
        </div>

        <Link to="/contact" className="primary-button">
          Start a Conversation <span>→</span>
        </Link>
      </section>
    </main>
  );
}

export default About;