import { NavLink } from "react-router-dom";

function AppNav() {
  return (
    <nav className="nav">
      <ul>
        <li>
          <NavLink to="Valuation">Valuation</NavLink>
        </li>
        <li>
          <NavLink to="add-to-collection">Add to Collection</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default AppNav;
