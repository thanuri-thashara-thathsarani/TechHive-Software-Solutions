import { Link, useLocation } from "react-router-dom";
import "./Confirmation.css";

function Confirmation() {
  const location = useLocation();

  const service =
    location.state?.service || "Website Development";

  const customer =
    location.state?.customer || "Valued Customer";

  return (
    <main className="confirmation-page">

      <div className="confirmation-card">

        <div className="success-icon">
          ✓
        </div>

        <h1>Booking Confirmed!</h1>

        <p className="confirmation-message">
          Thank you for choosing <strong>TechHive Software Solutions</strong>.
          Your booking has been successfully submitted.
        </p>

        <div className="confirmation-details">

          <div className="detail-row">
            <span>Customer</span>
            <strong>{customer}</strong>
          </div>

          <div className="detail-row">
            <span>Service</span>
            <strong>{service}</strong>
          </div>

          <div className="detail-row">
            <span>Status</span>
            <strong className="confirmed">
              Confirmed
            </strong>
          </div>

        </div>

        <div className="confirmation-note">
          Our team will contact you within one business day to discuss
          your project requirements.
        </div>

        <div className="confirmation-buttons">

          <Link
            to="/"
            className="primary-button"
          >
            Back to Home
          </Link>

          <Link
            to="/services"
            className="secondary-button"
          >
            Explore Services
          </Link>

        </div>

      </div>

    </main>
  );
}

export default Confirmation;