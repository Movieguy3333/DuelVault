/* eslint-disable no-unused-vars */
import { useState } from "react";
import CardSearchBar from "./CardSearchBar";
import CardSearchResult from "./CardSearchResult";
import styles from "./AddToCollection.module.css";

function AddToCollection() {
  const [cardSearchResults, setCardSearchResults] = useState([]);
  const [query, setQuery] = useState("dark magician");

  return (
    <div className={styles.addToCollection}>
      <CardSearchBar
        cardSearchResults={cardSearchResults}
        setCardSearchResults={setCardSearchResults}
        query={query}
        setQuery={setQuery}
      />
      <CardSearchResult
        cardSearchResults={cardSearchResults}
        setCardSearchResults={setCardSearchResults}
        query={query}
      />
    </div>
  );
}

export default AddToCollection;
