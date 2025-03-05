import { useState } from "react";
import CardSearchBar from "./CardSearchBar";
import CardSearchResult from "./CardSearchResult";
import { useOutletContext } from "react-router-dom";

function AddToCollection() {
  const [cardSearchResults, setCardSearchResults] = useState([]);
  const { collection, setCollection } = useOutletContext(); // ✅ Access props from `Outlet`
  return (
    <div className="add-to-collection">
      <CardSearchBar
        cardSearchResults={cardSearchResults}
        setCardSearchResults={setCardSearchResults}
      />
      <CardSearchResult
        cardSearchResults={cardSearchResults}
        setCardSearchResults={setCardSearchResults}
        collection={collection}
        setCollection={setCollection}
      />
    </div>
  );
}

export default AddToCollection;
