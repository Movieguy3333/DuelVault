import { NavLink } from "react-router-dom";

function AppNav() {
  return (
    <nav className="nav">
      <ul>
        <li>
          <NavLink to="/app/valuation">Valuation</NavLink>
        </li>
        <li>
          <NavLink to="/app/add-to-collection">Add to Collection</NavLink>
        </li>
        <li>
          <NavLink to="/">Landing Page</NavLink>
        </li>
        <li>
          <NavLink to="/sign-up">Sign-up</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default AppNav;
