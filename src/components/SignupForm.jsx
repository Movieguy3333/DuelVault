import { useState } from "react";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="form sign-up-form">
      <h2 className="form-header">Sign-Up</h2>
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
        <button type="submit">Sign-Up</button>
      </form>
    </div>
  );
}

export default LoginForm;
