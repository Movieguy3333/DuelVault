/* eslint-disable react/prop-types */
import Card from "./Card";

function CardSearchResult({ cardSearchResults }) {
  return (
    <div className="card-search-results">
      {cardSearchResults.length !== 0 ? (
        cardSearchResults.map((card) => <Card card={card} key={card.id} />)
      ) : (
        <p>Card Not Found</p>
      )}
    </div>
  );
}

export default CardSearchResult;
