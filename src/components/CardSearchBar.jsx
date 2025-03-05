/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

function CardSearchBar({ setCardSearchResults }) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    async function fetchCards() {
      const response = await fetch(
        `https://db.ygoprodeck.com/api/v7/cardinfo.php?name=${query}`
      );

      const data = await response.json();

      if (data.data && data.data.length > 0) {
        setCardSearchResults(data.data);
      } else {
        setCardSearchResults([]);
      }
    }

    fetchCards();
  }, [query, setCardSearchResults]);
  return (
    <div className="card-search-bar">
      <input
        className="search"
        type="text"
        placeholder="Search cards..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}

export default CardSearchBar;
