import { useNavigate } from "react-router-dom"; // Import Link from React Router
import styles from "./LandingPage.module.css"; // Import the CSS module
import Button from "./Button";

function LandingPage() {
  const navigate = useNavigate();
  return (
    <>
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.heroContent}>
            <h1 className={styles.title}>Welcome to YourYugiohProfits</h1>
            <p className={styles.subtitle}>
              The ultimate Yu-Gi-Oh! app for making profits!
            </p>
            <Button
              onClick={() =>
                setTimeout(() => {
                  navigate("/sign-up");
                }, 100)
              }
            >
              Sign-Up
            </Button>
            <Button
              onClick={() =>
                setTimeout(() => {
                  navigate("/login");
                }, 100)
              }
            >
              Login
            </Button>
          </div>
        </header>

        <section className={styles.features}>
          <div className={styles.feature}>
            <h3>Manage Your Collection</h3>
            <p>
              Add cards to your collection to track finacnial value of cards
            </p>
          </div>
          <div className={styles.feature}>
            <h3>Instant Collection Valuations</h3>
            <p>Get an instant financial snapshot on your collection</p>
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
