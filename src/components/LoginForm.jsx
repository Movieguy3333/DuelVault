import { useContext, useState, useEffect } from "react";
import { AppContext } from "../contextapi/AppContext";

function LoginForm() {
  const { user, setUser } = useContext(AppContext); // Use context to access user and setUser

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // For error messages
  const [loading, setLoading] = useState(false); // For loading state
  const [loggedIn, setLoggedIn] = useState(false); // Track login status

  // If user is already logged in (user context is set), display a message
  useEffect(() => {
    if (user) {
      setLoggedIn(true); // If user data exists, set loggedIn to true
    }
  }, [user]);

  async function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);
    setError(""); // Reset error on new submit

    const loginData = {
      email,
      password,
    };

    try {
      const response = await fetch("/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      const data = await response.json();

      if (response.ok) {
        setUser(data.user); // Set user in context if login is successful
        setLoggedIn(true); // Update login status
        console.log("Login successful:", data);
      } else {
        setError(data.message || "Login failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setError("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="form login-form">
      <h2 className="form-header">Login</h2>

      {/* If user is logged in, display the user info */}
      {loggedIn && user ? (
        <div className="user-info">
          <h3>Welcome, {user.name}</h3>
          <p>Email: {user.email}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-field">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-field">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      )}

      {/* Display error message */}
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default LoginForm;
