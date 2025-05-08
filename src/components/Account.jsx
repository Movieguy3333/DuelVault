/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../contextapi/AppContext";
import Button from "./Button";
import styles from "./Account.module.css";

function Account() {
  const { user, handleDeleteUser } = useContext(AppContext);
  const navigate = useNavigate();

  if (!user) {
    return (
      <p className={styles.message}>Please log in to view account settings.</p>
    );
  }

  const handleDeleteAndNavigate = async () => {
    try {
      await handleDeleteUser(user.id);
      navigate("/");
    } catch (err) {
      console.error("Failed to delete user:", err);
    }
  };

  return (
    <div className={styles["account"]}>
      <h1 className={styles["header"]}>Account Settings</h1>
      <div className={styles["user-info"]}>
        <p>
          <strong>Username:</strong> {user.username}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
      </div>

      <div className={styles["warning"]}>
        <h2>Danger Zone</h2>
        <p className={styles["warning-text"]}>
          Deleting your account is permanent and cannot be undone.
        </p>
        <Button
          onClick={handleDeleteAndNavigate}
          className={styles["delete-button"]}
        >
          Delete Account
        </Button>
      </div>
    </div>
  );
}

export default Account;
