import { useLocation, useNavigate } from "react-router-dom";
import "./Payment.css";

function Payment() {
  const navigate = useNavigate();
  const location = useLocation();

  const service =
    location.state?.service || "Starter Consultation Package";

  const prices = {
  "Website Development": "AUD 1,000+",
  "Mobile App Development": "AUD 30,000+",
  "Cybersecurity Solutions": "AUD 8,000+",
  "Cloud-Based Business Solutions": "AUD 20,000+",
  "Software Maintenance & Support": "Custom Pricing",
  "IT Consulting": "Free Consultation",
  "Database Design & Management": "AUD 5,000+",
};

  return (
    <main className="payment-page">

      <section className="page-hero">
        <span className="eyebrow">Secure Payment</span>

        <h1>Complete Your Payment</h1>

        <p>
          Review your booking details and complete your payment securely.
        </p>
      </section>

      <div className="payment-layout">

        <div className="summary-card">

          <h2>Booking Summary</h2>

          <div className="summary-item">
            <span>Selected Package</span>
            <strong>{service}</strong>
          </div>

          <div className="summary-item">
            <span>Estimated Price</span>
            <strong>{prices[service]}</strong>
          </div>

          <div className="summary-item">
            <span>Status</span>
            <strong>Pending Payment</strong>
          </div>

        </div>

        <div className="payment-card">

          <h2>Payment Details</h2>

          <input
            type="text"
            placeholder="Cardholder Name"
          />

          <input
            type="text"
            placeholder="Card Number"
          />

          <div className="payment-row">

            <input
              type="text"
              placeholder="MM / YY"
            />

            <input
              type="password"
              placeholder="CVV"
            />

          </div>

          <input
            type="text"
            placeholder="Billing Address"
          />

          <div className="payment-total">

            <span>Total Amount</span>

            <h2>{prices[service]}</h2>

          </div>

          <button
  className="booking-submit"
  onClick={() =>
    navigate("/confirmation", {
      state: {
        service,
      },
    })
  }
>
  🔒 Pay Securely
</button>

          <div className="payment-icons">
            💳 Visa &nbsp;&nbsp;
            💳 Mastercard &nbsp;&nbsp;
            🅿 PayPal
          </div>

          <p className="payment-note">
            This payment page is provided for academic demonstration purposes.
            No real payments are processed.
          </p>

        </div>

      </div>

    </main>
  );
}

export default Payment;