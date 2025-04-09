import { NavLink } from "react-router-dom";
import styles from "./HeaderNav.module.css";
import Button from "./Button";
import { useContext } from "react";
import { AppContext } from "../contextapi/AppContext";

function HeaderNav() {
  const { user, setCollection, setUser } = useContext(AppContext);
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Landing Page
          </NavLink>
        </li>
        {!user ? (
          <>
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
            <li>
              <NavLink
                to="/app/add-to-collection"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Collection
              </NavLink>
            </li>
          </>
        ) : (
          <li>
            <Button
              onClick={() => {
                setCollection([]);
                setUser(null);
              }}
            >
              Logout
            </Button>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default HeaderNav;
