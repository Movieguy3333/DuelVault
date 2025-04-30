import { Link } from "react-router-dom";
import styles from "./PageNotFound.module.css";

function PageNotFound() {
  return (
    <div className={styles.container}>
      <h1 className={styles.code}>404</h1>
      <h2 className={styles.message}>Page Not Found</h2>
      <p className={styles.description}>
        Oops! The page you are looking for does not exist or has been moved.
      </p>
      <Link to="/" className={styles.homeButton}>
        Go Back Home
      </Link>
    </div>
  );
}

export default PageNotFound;
