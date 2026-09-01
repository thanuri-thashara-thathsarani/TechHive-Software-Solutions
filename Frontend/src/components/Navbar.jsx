import { NavLink } from "react-router-dom";
import logo from "../assets/TH.png";

function Navbar() {
  return (
    <header className="site-header">
      <nav className="navbar">
        <NavLink to="/" className="brand">
  <img
    src={logo}
    alt="TechHive Software Solutions"
    className="navbar-logo"
  />
</NavLink>

        <div className="nav-links">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Services
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            About
          </NavLink>

          <NavLink
  to="/portfolio"
  className={({ isActive }) =>
    isActive ? "nav-link active" : "nav-link"
  }
>
  Portfolio
</NavLink>

<NavLink
  to="/contact"
  className={({ isActive }) =>
    isActive ? "nav-link active" : "nav-link"
  }
>
  Contact
</NavLink>
        </div>

        <NavLink to="/booking" className="nav-cta">
          Get Started
        </NavLink>
      </nav>
    </header>
  );
}

export default Navbar;