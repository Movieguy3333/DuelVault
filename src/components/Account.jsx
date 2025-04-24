/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { AppContext } from "../contextapi/AppContext";
import styles from "./Account.module.css";
import Button from "./Button";

function Account() {
  const { user, handleDeleteUser } = useContext(AppContext);

  return (
    <div className={styles["account"]}>
      {user ? (
        <Button onClick={() => handleDeleteUser(user.id)}>
          Delete Account
        </Button>
      ) : (
        "No user is logged in..."
      )}
    </div>
  );
}

export default Account;
