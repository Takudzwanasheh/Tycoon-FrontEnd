import "./footer.scss"; // Optional: Add a CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          &copy; {new Date().getFullYear()} Vennis Resources. All rights
          reserved.
        </p>
        <ul className="footer-links">
          <li>
            <a href="/privacy-policy">Privacy Policy</a>
          </li>
          <li>
            <a href="/terms-of-service">Terms of Service</a>
          </li>
          <li>
            <a href="/contact">Contact Us</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
