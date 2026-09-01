import { useState } from "react";

/**
 * Reusable Header component with responsive navigation.
 *
 * Props:
 *   title    – website / application name (string)
 *   navLinks – optional array of { label, href } to override defaults
 */
function Header({ title = "React Practice", navLinks }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = navLinks || [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="header">
      <div className="header__inner">
        <a href="#home" className="header__logo">
          {title}
        </a>

        {/* Hamburger toggle for mobile */}
        <button
          className={`header__toggle ${menuOpen ? "header__toggle--active" : ""}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-expanded={menuOpen}
          aria-controls="main-nav"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          <span className="header__toggle-bar" />
          <span className="header__toggle-bar" />
          <span className="header__toggle-bar" />
        </button>

        <nav
          id="main-nav"
          className={`header__nav ${menuOpen ? "header__nav--open" : ""}`}
          aria-label="Main navigation"
        >
          <ul className="header__nav-list">
            {links.map((link) => (
              <li key={link.label} className="header__nav-item">
                <a
                  href={link.href}
                  className="header__nav-link"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
