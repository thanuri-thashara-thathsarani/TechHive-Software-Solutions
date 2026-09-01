import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import {
  FaLaptopCode,
  FaMobileAlt,
  FaShieldAlt,
  FaCloud,
  FaTools,
  FaChartLine,
  FaDatabase,
} from "react-icons/fa";

const fallbackServices = [
  {
    id: 1,
    service_name: "Website Development",
    description:
      "Modern, responsive and high-performing websites designed around your business goals.",
    price: "1,200",
  },
  {
    id: 2,
    service_name: "Mobile App Development",
    description:
      "User-friendly Android and iOS applications that create smooth digital experiences.",
    price: "2,500",
  },
  {
    id: 3,
    service_name: "Cybersecurity Solutions",
    description:
      "Professional security assessments, audits and protection against modern cyber threats.",
    price: "950",
  },
  {
    id: 4,
    service_name: "Cloud-Based Business Solutions",
    description:
      "Secure and scalable cloud solutions that improve flexibility and business performance.",
    price: "1,500",
  },
  {
    id: 5,
    service_name: "Software Maintenance & Technical Support",
    description:
      "Reliable maintenance, updates and technical support to keep your systems operating smoothly.",
    price: "450",
  },
  {
    id: 6,
    service_name: "IT Consulting & Digital Transformation",
    description:
      "Practical technology strategies that help your organisation modernise and grow.",
    price: "700",
  },
  {
    id: 7,
    service_name: "Database Design & Management",
    description:
      "Secure, efficient and scalable database solutions for managing important business information.",
    price: "900",
  },
];

function Services() {
  const [services, setServices] = useState(fallbackServices);

  useEffect(() => {
    axios
      .get("http://localhost:5000/services")
      .then((response) => {
        if (Array.isArray(response.data) && response.data.length > 0) {
          setServices(response.data);
        }
      })
      .catch(() => {
        console.info("Backend unavailable. Displaying sample service data.");
      });
  }, []);

  const getIcon = (serviceName) => {
    switch (serviceName) {
      case "Website Development":
        return <FaLaptopCode />;

      case "Mobile App Development":
        return <FaMobileAlt />;

      case "Cybersecurity Solutions":
        return <FaShieldAlt />;

      case "Cloud-Based Business Solutions":
        return <FaCloud />;

      case "Software Maintenance & Technical Support":
        return <FaTools />;

      case "IT Consulting & Digital Transformation":
        return <FaChartLine />;

      case "Database Design & Management":
        return <FaDatabase />;

      default:
        return <FaLaptopCode />;
    }
  };

  return (
    <main className="services-page">
      <section className="page-hero">
        <span className="section-label">Our expertise</span>

        <h1>Technology services built for your business</h1>

        <p>
          From the first idea to ongoing support, we deliver secure and
          practical digital solutions that help businesses grow.
        </p>
      </section>

      <section className="services-content">
        <div className="services-grid">
          {services.map((service, index) => (
            <article className="service-card" key={service.id}>
              <div className="service-card-top">
                <div className="service-icon">
                  {getIcon(service.service_name)}
                </div>

                <span>0{index + 1}</span>
              </div>

              <div>
                <h2>{service.service_name}</h2>
                <p>{service.description}</p>
              </div>

              <div className="service-card-bottom">
                <div className="service-price">
                  <small>Starting from</small>
                  <h3>AUD {service.price}</h3>
                </div>

                <Link to="/booking" className="service-button">
                  Request Service <span>→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="services-cta">
        <div>
          <span className="section-label">Need some guidance?</span>
          <h2>Not sure which service is right for you?</h2>
          <p>
            Tell us about your goals and our team will help you choose the best
            solution.
          </p>
        </div>

        <Link to="/contact" className="primary-button">
          Talk to Our Team <span>→</span>
        </Link>
      </section>
    </main>
  );
}

export default Services;