import * as React from "react"
import { Link } from "gatsby"
import BackgroundImage from '../images/b1.jpg'; // Import the background image

const Header = () => {
  const heroStyle = {
    backgroundImage: `url(${BackgroundImage})`,
    height: "100vh", // Full viewport height
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    textAlign: "center",
    padding: "20px",
  };

  const nameStyle = {
    fontSize: "clamp(2.5rem, 8vw, 5rem)", // Responsive font size
    fontWeight: "bold",
    margin: "0 0 10px 0",
    textShadow: "2px 2px 4px rgba(0,0,0,0.5)", // Text shadow for readability
  };

  const titleStyle = {
    fontSize: "clamp(1rem, 4vw, 1.8rem)",
    fontWeight: "300", // Lighter font weight
    letterSpacing: "1px",
    margin: "0 0 30px 0",
    textShadow: "1px 1px 3px rgba(0,0,0,0.5)",
  };

  const navStyle = {
    display: "flex",
    gap: "20px", // Space between nav items
  };

  const navLinkStyle = {
    color: "white",
    textDecoration: "none",
    fontSize: "clamp(0.9rem, 2.5vw, 1.1rem)",
    padding: "8px 15px",
    border: "1px solid transparent", // Transparent border for spacing, can be visible on hover
    borderRadius: "var(--border-radius, 4px)",
    transition: "background-color 0.3s ease, border-color 0.3s ease",
  };

  // Simple hover effect (true hover better with CSS classes)
  const handleNavLinkHover = (e, isHovering) => {
    if (isHovering) {
      e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.1)";
      e.currentTarget.style.borderColor = "rgba(255,255,255,0.7)";
    } else {
      e.currentTarget.style.backgroundColor = "transparent";
      e.currentTarget.style.borderColor = "transparent";
    }
  };

  return (
    <header style={heroStyle}>
      <div style={nameStyle}>Торчило Юстина</div>
      <div style={titleStyle}>Фотограф</div>
      <nav style={navStyle}>
        <Link 
          to="/"
          style={navLinkStyle}
          onMouseEnter={(e) => handleNavLinkHover(e, true)}
          onMouseLeave={(e) => handleNavLinkHover(e, false)}
        >
          Home
        </Link>
        <Link 
          to="/#portfolio" 
          style={navLinkStyle}
          onMouseEnter={(e) => handleNavLinkHover(e, true)}
          onMouseLeave={(e) => handleNavLinkHover(e, false)}
        >
          Portfolio
        </Link>
        <Link 
          to="/#contact" 
          style={navLinkStyle}
          onMouseEnter={(e) => handleNavLinkHover(e, true)}
          onMouseLeave={(e) => handleNavLinkHover(e, false)}
        >
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header
