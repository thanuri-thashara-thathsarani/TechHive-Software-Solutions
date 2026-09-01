import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Admin.css";

function Admin() {
  const navigate = useNavigate();

  const [bookings, setBookings] = useState([]);
  const [totalRevenue, setTotalRevenue] = useState(0);
  const [totalMessages, setTotalMessages] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const handleLogout = () => {
    localStorage.removeItem("adminLoggedIn");
    navigate("/login");
  };

  useEffect(() => {
    const loadDashboard = async () => {
      try {
        const [bookingResponse, contactResponse] = await Promise.all([
          axios.get("http://localhost:5000/bookings"),
          axios.get("http://localhost:5000/contacts"),
        ]);

        const bookingData = Array.isArray(bookingResponse.data)
          ? bookingResponse.data
          : [];

        const contactData = Array.isArray(contactResponse.data)
          ? contactResponse.data
          : [];

        setBookings(bookingData);
        setTotalMessages(contactData.length);

        const prices = {
          "Website Development": 1000,
          "Mobile App Development": 30000,
          "Cybersecurity Solutions": 8000,
          "Cloud-Based Business Solutions": 5000,
        };

        const revenue = bookingData.reduce(
          (total, booking) =>
            total + (prices[booking.service_name] || 0),
          0
        );

        setTotalRevenue(revenue);
      } catch (requestError) {
        console.error(requestError);
        setError(
          "Dashboard data could not be loaded. Please ensure the backend server is running."
        );
      } finally {
        setIsLoading(false);
      }
    };

    loadDashboard();
  }, []);

  return (
    <main className="admin-page">
      <header className="admin-header">
        <div>
          <span className="admin-label">Management portal</span>
          <h1>Admin Dashboard</h1>
          <p>View bookings, messages and business activity.</p>
        </div>

        <button className="admin-logout" onClick={handleLogout}>
          Logout
        </button>
      </header>

      <nav className="admin-navigation">
        <Link to="/admin" className="admin-nav-link active">
          Bookings
        </Link>

        <Link to="/admin/messages" className="admin-nav-link">
          Messages
        </Link>
      </nav>

      {error && <div className="admin-error">{error}</div>}

      <section className="admin-stats">
        <article className="admin-stat-card">
          <span>Total Bookings</span>
          <strong>{bookings.length}</strong>
          <small>All service requests</small>
        </article>

        <article className="admin-stat-card">
          <span>Total Messages</span>
          <strong>{totalMessages}</strong>
          <small>Customer enquiries</small>
        </article>

        <article className="admin-stat-card">
          <span>Total Services</span>
          <strong>7</strong>
          <small>Available solutions</small>
        </article>

        <article className="admin-stat-card admin-stat-highlight">
          <span>Estimated Revenue</span>
          <strong>AUD {totalRevenue.toLocaleString()}</strong>
          <small>Based on current bookings</small>
        </article>
      </section>

      <section className="admin-panel">
        <div className="admin-panel-heading">
          <div>
            <span>Recent activity</span>
            <h2>Service Bookings</h2>
          </div>

          <span className="record-count">
            {bookings.length} records
          </span>
        </div>

        <div className="admin-table-wrapper">
          {isLoading ? (
            <div className="admin-empty">Loading bookings...</div>
          ) : bookings.length === 0 ? (
            <div className="admin-empty">
              No bookings are available yet.
            </div>
          ) : (
            <table className="modern-admin-table">
              <thead>
                <tr>
                  <th>Customer</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Service</th>
                  <th>Date</th>
                </tr>
              </thead>

              <tbody>
                {bookings.map((booking) => (
                  <tr key={booking.id}>
                    <td>
                      <strong>{booking.customer_name}</strong>
                    </td>
                    <td>{booking.email}</td>
                    <td>{booking.phone}</td>
                    <td>
                      <span className="service-tag">
                        {booking.service_name}
                      </span>
                    </td>
                    <td>
                      {booking.booking_date
                        ? new Date(
                            booking.booking_date
                          ).toLocaleString()
                        : "Not available"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </section>
    </main>
  );
}

export default Admin;