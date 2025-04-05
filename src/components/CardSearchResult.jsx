/* eslint-disable react/prop-types */

import CardSearchItem from "./CardSearchItem";
import styles from "./CardSearchResult.module.css";

function CardSearchResult({ cardSearchResults }) {
  return (
    <div className={styles.cardSearchResults}>
      {cardSearchResults.length !== 0 ? (
        cardSearchResults.map((card) => (
          <CardSearchItem card={card} key={card.id} />
        ))
      ) : (
        <p>Card Not Found</p>
      )}
    </div>
  );
}

export default CardSearchResult;
