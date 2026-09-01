import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Admin.css";

function AdminMessages() {
  const navigate = useNavigate();

  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const handleLogout = () => {
    localStorage.removeItem("adminLoggedIn");
    navigate("/login");
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/contacts")
      .then((response) => {
        setMessages(
          Array.isArray(response.data) ? response.data : []
        );
      })
      .catch((requestError) => {
        console.error(requestError);
        setError(
          "Messages could not be loaded. Please ensure the backend server is running."
        );
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <main className="admin-page">
      <header className="admin-header">
        <div>
          <span className="admin-label">Management portal</span>
          <h1>Customer Messages</h1>
          <p>Review enquiries submitted through the contact form.</p>
        </div>

        <button className="admin-logout" onClick={handleLogout}>
          Logout
        </button>
      </header>

      <nav className="admin-navigation">
        <Link to="/admin" className="admin-nav-link">
          Bookings
        </Link>

        <Link
          to="/admin/messages"
          className="admin-nav-link active"
        >
          Messages
        </Link>
      </nav>

      {error && <div className="admin-error">{error}</div>}

      <section className="admin-panel">
        <div className="admin-panel-heading">
          <div>
            <span>Customer enquiries</span>
            <h2>Received Messages</h2>
          </div>

          <span className="record-count">
            {messages.length} messages
          </span>
        </div>

        <div className="admin-table-wrapper">
          {isLoading ? (
            <div className="admin-empty">Loading messages...</div>
          ) : messages.length === 0 ? (
            <div className="admin-empty">
              No customer messages are available yet.
            </div>
          ) : (
            <table className="modern-admin-table">
              <thead>
                <tr>
                  <th>Customer</th>
                  <th>Email</th>
                  <th>Message</th>
                  <th>Date</th>
                </tr>
              </thead>

              <tbody>
                {messages.map((message) => (
                  <tr key={message.id}>
                    <td>
                      <strong>{message.name}</strong>
                    </td>
                    <td>
                      <a href={`mailto:${message.email}`}>
                        {message.email}
                      </a>
                    </td>
                    <td className="message-cell">
                      {message.message}
                    </td>
                    <td>
                      {message.created_at ||
                      message.contact_date ||
                      message.date
                        ? new Date(
                            message.created_at ||
                              message.contact_date ||
                              message.date
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

export default AdminMessages;