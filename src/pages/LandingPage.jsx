import { NavLink } from "react-router-dom";

function LandingPage() {
  return (
    <div>
      <h1>Landing Page</h1>
      <nav className="nav">
        <ul>
          <li>
            <NavLink to="/app/add-to-collection">Add to Collection</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default LandingPage;
