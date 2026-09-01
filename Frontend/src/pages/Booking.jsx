import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Booking.css";

const serviceOptions = [
  { id: 1, name: "Website Development" },
  { id: 2, name: "Mobile App Development" },
  { id: 3, name: "Cybersecurity Solutions" },
  { id: 4, name: "Cloud-Based Business Solutions" },
  { id: 5, name: "Software Maintenance & Support" },
  { id: 6, name: "IT Consulting" },
  { id: 7, name: "Database Design & Management" },
];

function Booking() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    customer_name: "",
    email: "",
    phone: "",
    service_id: "1",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

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
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await axios.post(
        "http://localhost:5000/bookings",
        formData
      );

      setStatus({
        type: "success",
        message:
          response.data.message ||
          "Your booking was submitted successfully.",
      });
     const selectedService = serviceOptions.find(
  (service) => String(service.id) === String(formData.service_id)
     );
      setFormData({
        customer_name: "",
        email: "",
        phone: "",
        service_id: "1",
      });

setTimeout(() => {
  navigate("/payment", {
    state: {
      service: selectedService.name,
    },
  });
}, 1500);
    } catch (error) {
      console.error(error.response?.data || error);

      setStatus({
        type: "error",
        message:
          error.response?.data?.message ||
          "Booking failed. Please ensure the backend server is running.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="booking-page">
      <section className="booking-intro">
        <span className="section-label">Start your project</span>

        <h1>
          Book a service with <span>TechHive.</span>
        </h1>

        <p>
          Select the service you need and provide your contact information. Our
          team will review your request and contact you to discuss the next
          steps.
        </p>

        <div className="booking-benefits">
          <div>
            <span>✓</span>
            <p>
              <strong>Free initial discussion</strong>
              Tell us about your goals and requirements.
            </p>
          </div>

          <div>
            <span>✓</span>
            <p>
              <strong>Clear project guidance</strong>
              We help you select the most suitable solution.
            </p>
          </div>

          <div>
            <span>✓</span>
            <p>
              <strong>Fast response</strong>
              Our team will contact you within one business day.
            </p>
          </div>
        </div>
      </section>

      <section className="booking-form-card">
        <div className="booking-form-heading">
          <span>Service request</span>
          <h2>Tell us what you need</h2>
          <p>Complete all the details below to submit your booking.</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="booking-form-group">
            <label htmlFor="customer_name">Full name</label>

            <input
              id="customer_name"
              type="text"
              name="customer_name"
              placeholder="Enter your full name"
              value={formData.customer_name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="booking-form-row">
            <div className="booking-form-group">
              <label htmlFor="email">Email address</label>

              <input
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="booking-form-group">
              <label htmlFor="phone">Phone number</label>

              <input
                id="phone"
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="booking-form-group">
            <label htmlFor="service_id">Select a service</label>

            <select
              id="service_id"
              name="service_id"
              value={formData.service_id}
              onChange={handleChange}
              required
            >
              {serviceOptions.map((service) => (
                <option value={service.id} key={service.id}>
                  {service.name}
                </option>
              ))}
            </select>
          </div>

          <div className="selected-service">
            <span>Selected service</span>
            <strong>
              {
                serviceOptions.find(
                  (service) =>
                    String(service.id) === String(formData.service_id)
                )?.name
              }
            </strong>
          </div>

          {status.message && (
            <div className={`booking-status ${status.type}`}>
              {status.message}
            </div>
          )}

          <button
            type="submit"
            className="booking-submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit Booking"}
            {!isSubmitting && <span>→</span>}
          </button>
        </form>

        <p className="booking-privacy">
          Submitting this form does not require immediate payment.
        </p>
      </section>
    </main>
  );
}

export default Booking;