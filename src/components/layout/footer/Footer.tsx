import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <p className="footer-text">
            © {new Date().getFullYear()} MyoCare. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;