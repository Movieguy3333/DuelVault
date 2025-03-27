import Logo from "./Logo";
import styles from "./Header.module.css"; // Import the CSS module

function Header() {
  return (
    <header className={styles.header}>
      {" "}
      {/* Use the CSS module for the header class */}
      <Logo />
    </header>
  );
}

export default Header;
