import { useState } from "react";
import CardSearchBar from "./CardSearchBar";
import CardSearchResult from "./CardSearchResult";

function AddToCollection() {
  const [cardSearchResults, setCardSearchResults] = useState([]);
  return (
    <div className="add-to-collection">
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
