/* eslint-disable react/prop-types */

import CardSearchItem from "./CardSearchItem";

function CardSearchResult({ cardSearchResults, collection, setCollection }) {
  return (
    <div className="card-search-results">
      {cardSearchResults.length !== 0 ? (
        cardSearchResults.map((card) => (
          <CardSearchItem
            card={card}
            key={card.id}
            collection={collection}
            setCollection={setCollection}
          />
        ))
      ) : (
        <p>Card Not Found</p>
      )}
    </div>
  );
}

export default CardSearchResult;
