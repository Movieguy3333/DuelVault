import { useContext, useState } from "react";
import { AppContext } from "../contextapi/AppContext";

function LoginForm() {
  const { user, setUser } = useContext(AppContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    setUser(() => {
      return { userEmail: email, userPassword: password };
    });
  }

  return (
    <div className="form login-form">
      <h2 className="form-header">Login</h2>
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
        <button type="submit">Login</button>
      </form>
      {user ? user.userEmail : "User email not found"}
    </div>
  );
}

export default LoginForm;
