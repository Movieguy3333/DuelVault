import Logo from "./Logo";
import styles from "./Header.module.css";

import HeaderNav from "./HeaderNav";

function Header() {
  return (
    <header className={styles.header}>
      {" "}
      <Logo />
      <h2>YourYugiohProfits</h2>
      <HeaderNav />
    </header>
  );
}

export default Header;
