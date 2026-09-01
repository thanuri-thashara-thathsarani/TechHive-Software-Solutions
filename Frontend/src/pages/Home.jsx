import { Link } from "react-router-dom";

const services = [
  {
    icon: "⌘",
    title: "Website Development",
    text: "Fast, responsive and professional websites designed to grow your business.",
  },
  {
    icon: "◫",
    title: "Mobile App Development",
    text: "User-friendly Android and iOS applications built around your business needs.",
  },
  {
    icon: "◇",
    title: "Cybersecurity Solutions",
    text: "Security assessments, audits and protection against modern cyber threats.",
  },
];

const benefits = [
  {
    number: "01",
    title: "Innovative Solutions",
    text: "Modern technology solutions designed specifically for your goals.",
  },
  {
    number: "02",
    title: "Security First",
    text: "Security is carefully built into every solution we create.",
  },
  {
    number: "03",
    title: "Fast Delivery",
    text: "Efficient project delivery without compromising quality.",
  },
  {
    number: "04",
    title: "Client Focused",
    text: "Close collaboration that keeps your business needs at the centre.",
  },
];

const testimonials = [
  {
    quote:
      "TechHive built our company website and significantly improved our online presence.",
    name: "John Smith",
    role: "Business Owner",
    initials: "JS",
  },
  {
    quote:
      "Their cybersecurity audit helped us identify and resolve critical vulnerabilities.",
    name: "Sarah Johnson",
    role: "Operations Manager",
    initials: "SJ",
  },
  {
    quote:
      "A professional team with fast delivery, clear communication and excellent support.",
    name: "Michael Brown",
    role: "Project Director",
    initials: "MB",
  },
];

function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-glow hero-glow-one"></div>
        <div className="hero-glow hero-glow-two"></div>

        <div className="hero-content">
          <span className="eyebrow">
            <span className="eyebrow-dot"></span>
            Digital solutions for modern businesses
          </span>

          <h1>
            We build technology that helps your
            <span> business grow.</span>
          </h1>

          <p>
            From modern websites and mobile applications to cybersecurity and
            cloud solutions, TechHive turns your ideas into reliable digital
            experiences.
          </p>

          <div className="hero-buttons">
            <Link to="/services" className="primary-button">
              Explore Services <span>→</span>
            </Link>

            <Link to="/contact" className="secondary-button">
              Talk to Our Team
            </Link>
          </div>

          <div className="hero-trust">
            <div className="trust-avatars">
              <span>JS</span>
              <span>SJ</span>
              <span>MB</span>
            </div>

            <div>
              <strong>Trusted by growing businesses</strong>
              <small>Secure solutions · Reliable support</small>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-window">
            <div className="window-bar">
              <div className="window-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <small>techhive.solutions</small>
            </div>

            <div className="window-content">
              <div className="code-line line-short"></div>
              <div className="code-line line-long"></div>
              <div className="code-line line-medium"></div>

              <div className="visual-grid">
                <div className="visual-card">
                  <span>Projects</span>
                  <strong>50+</strong>
                  <small>↗ 24% growth</small>
                </div>

                <div className="visual-card visual-card-accent">
                  <span>Security</span>
                  <strong>100%</strong>
                  <small>Systems protected</small>
                </div>
              </div>

              <div className="activity-card">
                <div>
                  <span className="activity-icon">✓</span>
                  <div>
                    <strong>System secured</strong>
                    <small>All services are running normally</small>
                  </div>
                </div>
                <span className="live-label">LIVE</span>
              </div>
            </div>
          </div>

          <div className="floating-badge floating-badge-top">
            <span>⚡</span>
            Fast delivery
          </div>

          <div className="floating-badge floating-badge-bottom">
            <span>◆</span>
            Security first
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="stat-card">
          <h2>50<span>+</span></h2>
          <p>Projects Completed</p>
        </div>

        <div className="stat-card">
          <h2>25<span>+</span></h2>
          <p>Happy Clients</p>
        </div>

        <div className="stat-card">
          <h2>7</h2>
          <p>Professional Services</p>
        </div>

        <div className="stat-card">
          <h2>100<span>%</span></h2>
          <p>Client Satisfaction</p>
        </div>
      </section>

      <section className="section featured-services">
        <div className="section-heading">
          <span className="section-label">What we do</span>
          <h2>Solutions created for your success</h2>
          <p>
            Practical technology services that help your business operate,
            connect and grow with confidence.
          </p>
        </div>

        <div className="featured-grid">
          {services.map((service, index) => (
            <article className="featured-card" key={service.title}>
              <div className="card-top">
                <span className="service-icon">{service.icon}</span>
                <span className="card-number">0{index + 1}</span>
              </div>

              <h3>{service.title}</h3>
              <p>{service.text}</p>

              <Link to="/services" className="card-link">
                Learn more <span>→</span>
              </Link>
            </article>
          ))}
        </div>

        <Link to="/services" className="text-link">
          View all professional services <span>→</span>
        </Link>
      </section>

      <section className="section why-us">
        <div className="why-intro">
          <span className="section-label">Why TechHive?</span>
          <h2>A technology partner you can depend on</h2>
          <p>
            We combine creative thinking, technical experience and strong
            security practices to produce work that creates real value.
          </p>

          <Link to="/about" className="secondary-button">
            More About Us
          </Link>
        </div>

        <div className="why-grid">
          {benefits.map((benefit) => (
            <article className="why-card" key={benefit.number}>
              <span>{benefit.number}</span>
              <h3>{benefit.title}</h3>
              <p>{benefit.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section testimonials">
        <div className="section-heading">
          <span className="section-label">Client experiences</span>
          <h2>What our clients say</h2>
          <p>
            Strong partnerships and reliable results are at the centre of our
            work.
          </p>
        </div>

        <div className="testimonial-grid">
          {testimonials.map((testimonial) => (
            <article className="testimonial-card" key={testimonial.name}>
              <div className="quote-mark">“</div>
              <p>{testimonial.quote}</p>

              <div className="testimonial-person">
                <span>{testimonial.initials}</span>
                <div>
                  <h4>{testimonial.name}</h4>
                  <small>{testimonial.role}</small>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="cta-section">
        <div>
          <span className="section-label">Start your next project</span>
          <h2>Ready to grow your business?</h2>
          <p>
            Let TechHive create a secure and modern digital solution that
            delivers real results.
          </p>
        </div>

        <div className="cta-buttons">
          <Link to="/booking" className="cta-primary">
            Book a Service <span>→</span>
          </Link>

          <Link to="/contact" className="cta-secondary">
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Home;