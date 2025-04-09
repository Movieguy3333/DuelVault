import { Link } from "react-router-dom"; // Import Link from React Router
import styles from "./LandingPage.module.css"; // Import the CSS module

function LandingPage() {
  return (
    <>
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.heroContent}>
            <h1 className={styles.title}>Welcome to YourYugiohVault</h1>
            <p className={styles.subtitle}>
              The ultimate Yu-Gi-Oh! app to manage your collection and track
              card prices.
            </p>
            <div className={styles.buttonGroup}>
              <Link to="/signup" className={styles.button}>
                Sign Up
              </Link>
              <Link to="/login" className={styles.buttonOutline}>
                Log In
              </Link>
            </div>
          </div>
        </header>

        <section className={styles.features}>
          <div className={styles.feature}>
            <h3>Track Prices</h3>
            <p>
              Get live price updates on your favorite Yu-Gi-Oh! cards, and set
              price alerts.
            </p>
          </div>
          <div className={styles.feature}>
            <h3>Manage Your Collection</h3>
            <p>
              Organize your cards, build decks, and track your collection with
              ease.
            </p>
          </div>
          <div className={styles.feature}>
            <h3>Price Alerts</h3>
            <p>
              Set price alerts and get notified when your cards hit the target
              price.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}

export default LandingPage;
