import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles["footer"]}>
      <div className={styles["footer-content"]}>
        <p className={styles["footer-text"]}>
          © 2025 YourYugiohProfits. All rights reserved.
        </p>
        <div className={styles["footer-links"]}>
          <Link to="/about" className={styles["footer-link"]}>
            About
          </Link>
          <Link to="/contact" className={styles["footer-link"]}>
            Contact
          </Link>
          <Link to="/privacy" className={styles["footer-link"]}>
            Privacy Policy
          </Link>
        </div>
        <div className={styles["social-links"]}>
          {/* Replace with your actual social media links */}
          <a href="https://facebook.com" className={styles["social-link"]}>
            Facebook
          </a>
          <a href="https://twitter.com" className={styles["social-link"]}>
            Twitter
          </a>
          <a href="https://instagram.com" className={styles["social-link"]}>
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
