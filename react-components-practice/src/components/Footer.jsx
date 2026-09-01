/**
 * Reusable Footer component with dynamic copyright year.
 *
 * Props:
 *   copyright – name/text shown in the copyright line (string)
 *   links     – optional array of { label, href } for footer nav
 */
function Footer({ copyright = "React Practice", links }) {
  const year = new Date().getFullYear();

  const footerLinks = links || [
    { label: "GitHub", href: "https://github.com" },
    { label: "Twitter", href: "https://twitter.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
  ];

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <p className="footer__name">{copyright}</p>
          <p className="footer__tagline">
            Building modern interfaces with React
          </p>
        </div>

        <nav className="footer__nav" aria-label="Footer navigation">
          <ul className="footer__link-list">
            {footerLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="footer__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label} <span aria-hidden="true">↗</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <p className="footer__copyright">
          © {year} {copyright}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
