import { NavLink } from "react-router-dom";
import styles from "./AppNav.module.css";

function AppNav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink
            to="/app/valuations"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Valuation
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/app/add-to-collection"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Add to Collection
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default AppNav;
