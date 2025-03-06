/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

function CardSearchBar({ setCardSearchResults }) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    async function fetchCards() {
      if (!query.trim()) {
        // ✅ Prevent empty queries
        setCardSearchResults([]);
        return;
      }

      try {
        const response = await fetch(
          `https://db.ygoprodeck.com/api/v7/cardinfo.php?name=${encodeURIComponent(
            query
          )}`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        if (data.data && data.data.length > 0) {
          setCardSearchResults(data.data);
        } else {
          setCardSearchResults([]);
        }
      } catch (error) {
        console.error("Error fetching cards:", error);
        setCardSearchResults([]); // Prevent breaking UI on errors
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
