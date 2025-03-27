/* eslint-disable react/prop-types */
import styles from "./Button.module.css";

function Button({ children, onClick, card = {} }) {
  return (
    <button className={styles.btn} onClick={() => onClick(card)}>
      {children}
    </button>
  );
}

export default Button;
