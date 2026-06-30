import { useEffect, useState } from "react";
import {
  FiMenu,
  FiX,
  FiSun,
  FiMoon,
  FiLogIn,
  FiUserPlus,
} from "react-icons/fi";
import "../styles/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
    document.body.classList.toggle("light", !darkMode);
  }, [darkMode]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const navLinks = [
    { name: "Explore", href: "#explore" },
    { name: "Blogs", href: "#blogs" },
    { name: "Support", href: "#support" },
    { name: "Travel", href: "#travel" },
  ];

  return (
    <>
      <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
        <div className="container navbar-container">

          {/* ================= LOGO ================= */}

          <a href="/" className="logo">
            <div className="logo-ring"></div>

            <div className="logo-circle">
              <span>S</span>
            </div>

            <div className="logo-text">
              <h2>
                Stay<span>Zen</span>
              </h2>

              <p>Find Your Perfect Stay</p>
            </div>
          </a>

          {/* ================= Desktop Menu ================= */}

          <nav className="desktop-nav">
            {navLinks.map((item) => (
              <a key={item.name} href={item.href}>
                {item.name}
              </a>
            ))}
          </nav>

          {/* ================= Right Side ================= */}

          <div className="navbar-actions">

            <button
              className="theme-btn"
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? <FiSun /> : <FiMoon />}
            </button>

            <button className="signin-btn">
              <FiLogIn />
              <span>Sign In</span>
            </button>

            <button className="signup-btn">
              <FiUserPlus />
              <span>Sign Up</span>
            </button>

            <button
              className="menu-btn"
              onClick={() => setMenuOpen(true)}
            >
              <FiMenu />
            </button>

          </div>
        </div>
      </header>

      {/* ================= Mobile Menu ================= */}

      <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>

        <div className="mobile-top">

          <div className="logo mobile-logo">

            <div className="logo-ring"></div>

            <div className="logo-circle">
              <span>S</span>
            </div>

            <div className="logo-text">
              <h2>
                Stay<span>Zen</span>
              </h2>
            </div>

          </div>

          <button className="close-btn" onClick={closeMenu}>
            <FiX />
          </button>

        </div>

        <nav className="mobile-nav">

          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={closeMenu}
            >
              {item.name}
            </a>
          ))}

        </nav>

        <div className="mobile-buttons">

          <button className="signin-btn">
            <FiLogIn />
            <span>Sign In</span>
          </button>

          <button className="signup-btn">
            <FiUserPlus />
            <span>Sign Up</span>
          </button>

        </div>

      </div>

      {menuOpen && (
        <div
          className="mobile-overlay"
          onClick={closeMenu}
        ></div>
      )}
    </>
  );
};

export default Navbar;