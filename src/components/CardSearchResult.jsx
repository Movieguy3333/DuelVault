/* eslint-disable react/prop-types */

import CardSearchItem from "./CardSearchItem";
import styles from "./CardSearchResult.module.css";

function CardSearchResult({ cardSearchResults, query }) {
  return (
    <div className={styles.cardSearchResults}>
      {cardSearchResults.length !== 0 ? (
        cardSearchResults.map((card) => (
          <CardSearchItem card={card} key={card.id} />
        ))
      ) : !query ? (
        <h1>Please enter a card name...</h1>
      ) : (
        <h1>{query} is an invalid card name</h1>
      )}
    </div>
  );
}

export default CardSearchResult;
