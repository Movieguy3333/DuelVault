import Logo from "./Logo";
import styles from "./Header.module.css";

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
