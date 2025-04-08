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
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Landing Page
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/sign-up"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Sign-up
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/login"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default AppNav;
