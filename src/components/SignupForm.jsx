import { useState } from "react";
import styles from "./SignUpForm.module.css";

function SignUpForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className={styles.form}>
      <h2 className={styles.formHeader}>Sign-Up</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.formField}>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={styles.formField}>
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

export default SignUpForm;
