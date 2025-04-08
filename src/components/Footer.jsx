import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p className={styles.footerText}>
          © 2025 DuelVault. All rights reserved.
        </p>
        <div className={styles.footerLinks}>
          <Link to="/about" className={styles.footerLink}>
            About
          </Link>
          <Link to="/contact" className={styles.footerLink}>
            Contact
          </Link>
          <Link to="/privacy" className={styles.footerLink}>
            Privacy Policy
          </Link>
        </div>
        <div className={styles.socialLinks}>
          {/* Replace with your actual social media links */}
          <a href="https://facebook.com" className={styles.socialLink}>
            Facebook
          </a>
          <a href="https://twitter.com" className={styles.socialLink}>
            Twitter
          </a>
          <a href="https://instagram.com" className={styles.socialLink}>
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
