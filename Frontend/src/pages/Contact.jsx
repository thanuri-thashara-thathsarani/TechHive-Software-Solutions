import { useState } from "react";
import axios from "axios";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });

    if (status.message) {
      setStatus({ type: "", message: "" });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSending(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await axios.post(
        "http://localhost:5000/contacts",
        formData
      );

      setStatus({
        type: "success",
        message:
          response.data.message ||
          "Your message was sent successfully. We will contact you soon.",
      });

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error(error);

      setStatus({
        type: "error",
        message:
          "We could not send your message. Please ensure the backend server is running and try again.",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <main className="contact-page">
      <section className="contact-heading">
        <span className="section-label">Contact TechHive</span>

        <h1>
          Let’s create something <span>great together.</span>
        </h1>

        <p>
          Have a project, question or business challenge? Tell us about it and
          our team will help you find the right digital solution.
        </p>
      </section>

      <section className="contact-container">
        <div className="contact-information">
          <span className="contact-small-title">Contact information</span>

          <h2>Start a conversation with our team</h2>

          <p>
            Complete the form and we will respond as soon as possible. You can
            also contact us directly using the information below.
          </p>

          <div className="contact-details">
            <div className="contact-detail">
              <span className="contact-detail-icon">@</span>

              <div>
                <small>Email address</small>
                <a href="mailto:info@techhive.com">info@techhive.com</a>
              </div>
            </div>

            <div className="contact-detail">
              <span className="contact-detail-icon">☎</span>

              <div>
                <small>Phone number</small>
                <a href="tel:+61400000000">+61 400 000 000</a>
              </div>
            </div>

            <div className="contact-detail">
              <span className="contact-detail-icon">⌖</span>

              <div>
                <small>Business location</small>
                <strong>Melbourne, Australia</strong>
              </div>
            </div>

            <div className="contact-detail">
              <span className="contact-detail-icon">◷</span>

              <div>
                <small>Business hours</small>
                <strong>Monday–Friday, 9:00 AM–5:00 PM</strong>
              </div>
            </div>
          </div>

          <div className="response-note">
            <span></span>
            We normally respond within one business day.
          </div>
        </div>

        <div className="contact-form-card">
          <div className="form-heading">
            <span>Send us a message</span>
            <h2>How can we help?</h2>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your name</label>

              <input
                id="name"
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email address</label>

              <input
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Your message</label>

              <textarea
                id="message"
                name="message"
                placeholder="Tell us about your project or question..."
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            {status.message && (
              <div className={`form-status ${status.type}`}>
                {status.message}
              </div>
            )}

            <button
              type="submit"
              className="contact-submit"
              disabled={isSending}
            >
              {isSending ? "Sending..." : "Send Message"}
              {!isSending && <span>→</span>}
            </button>
          </form>

          <p className="privacy-note">
            Your information will only be used to respond to your enquiry.
          </p>
        </div>
      </section>
      <section className="map-section">
        <h2>Visit Our Office</h2>

        <iframe
          title="TechHive Software Solutions"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12612.51766574466!2d144.9630576!3d-37.8136276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1f6d4ab%3A0x5045675218ce7e0!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2slk!4v1753810000000"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </main>
  );
}

export default Contact;