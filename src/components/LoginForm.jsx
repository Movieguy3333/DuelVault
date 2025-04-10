/* eslint-disable no-unused-vars */
import { useContext, useState, useEffect } from "react";
import { AppContext } from "../contextapi/AppContext";
import styles from "./LoginForm.module.css";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const { user, setUser, setCollection } = useContext(AppContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [loggingIn, setLoggingIn] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    console.log("User:", user);
  }, [user]);

  useEffect(() => {
    if (user) {
      setLoggingIn(true);
    }
  }, [user]);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const loginData = { email, password };

    try {
      const response = await fetch(
        "https://duelvault.onrender.com/api/user/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(loginData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setUser(() => data.user);

        setCollection(() => data.user.cardCollection);
        setLoggingIn(true);
        setTimeout(() => {
          navigate("/app");
        }, 100);
      } else {
        setError(data.message || "Login failed. Please try again.");
      }
    } catch (error) {
      setError("An error occurred. Please try again later.");
    } finally {
      console.log(user);
      setLoading(false);
    }
  }

  return (
    <div className={styles["login-form"]}>
      <h2 className={styles["form-header"]}>Login</h2>

      {loggingIn && user ? (
        <>
          <div className={styles["loader"]}></div>
          <span>Please wait...</span>
        </>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className={styles["form-field"]}>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className={styles["form-field"]}>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" disabled={loading}>
            Login
          </button>
        </form>
      )}

      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
}

export default LoginForm;
