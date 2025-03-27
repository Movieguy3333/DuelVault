import { useState } from "react";
import CardSearchBar from "./CardSearchBar";
import CardSearchResult from "./CardSearchResult";
import styles from "./AddToCollection.module.css"; // Import module CSS

function AddToCollection() {
  const [cardSearchResults, setCardSearchResults] = useState([]);

  return (
    <div className={styles.addToCollection}>
      <CardSearchBar
        cardSearchResults={cardSearchResults}
        setCardSearchResults={setCardSearchResults}
      />
      <CardSearchResult
        cardSearchResults={cardSearchResults}
        setCardSearchResults={setCardSearchResults}
      />
    </div>
  );
}

export default AddToCollection;
