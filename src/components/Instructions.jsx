import styles from "./Instructions.module.css";

function Instructions() {
  return (
    <div className={styles.instructions}>
      <h1>Welcome to YourYugiohProfits</h1>
      <h3> how to get started:</h3>
      <ul>
        <li>1. Use the search bar to find Yu-Gi-Oh! cards by name.</li>
        <li>2. Click the button to add cards to your collection.</li>
        <li>
          3. Set a price alert amount to receive a notification when the card
          reaches the desired price.
        </li>
        <li>4. Make sure price alerts are enabled to allow notifications.</li>
        <li>5. Profit!</li>
      </ul>
    </div>
  );
}

export default Instructions;
