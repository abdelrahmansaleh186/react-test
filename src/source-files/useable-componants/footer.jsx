import "../styles/footer.css"
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        {/* Brand */}
        <div>
          <h3>MyWebsite</h3>
          <p>
            Building modern, fast, and scalable web experiences using React and
            Vite.
          </p>
        </div>

        {/* Links */}
        <div className="linksdiv">
          <h4>Pages:</h4>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/products">Products</Link>
            <Link to="/contact">Contact</Link>
        </div>

        {/* Contact */}
        <div>
          <h4>Contact</h4>
          <ul>
            <li>Email: you@email.com</li>
            <li>GitHub: github.com/username</li>
            <li>LinkedIn: linkedin.com/in/username</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} MyWebsite. All rights reserved.
      </div>
    </footer>
  );
}
