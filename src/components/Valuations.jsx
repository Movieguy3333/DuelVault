import { useContext, useMemo } from "react";
import { AppContext } from "../contextapi/AppContext";
import styles from "./Valuations.module.css";

function Valuations() {
  const { collection } = useContext(AppContext);

  const highestValueCard = useMemo(() => {
    if (collection.length === 0) return null;

    return collection.reduce((maxCard, currentCard) =>
      Number(currentCard.card_prices[0].tcgplayer_price) >
      Number(maxCard.card_prices[0].tcgplayer_price)
        ? currentCard
        : maxCard
    );
  }, [collection]);

  const highestValueCardsByName = useMemo(() => {
    if (collection.length === 0) return null;

    return collection.reduce((maxCardByName, currentCard) =>
      Number(currentCard.card_prices[0].tcgplayer_price) *
        Number(currentCard.card_quantity) >
      Number(maxCardByName.card_prices[0].tcgplayer_price) *
        Number(maxCardByName.card_quantity)
        ? currentCard
        : maxCardByName
    );
  }, [collection]);

  return (
    <div className={styles.valuation}>
      {collection.length > 0 ? (
        <>
          <div className={styles["card-search-item"]}>
            <img
              src={highestValueCard.card_images[0].image_url}
              alt={highestValueCard.name}
              className={styles["card-image"]}
            />
            <h3>Highest Value Card: {highestValueCard.name}</h3>
          </div>
          <div className={styles["card-search-item"]}>
            <img
              src={highestValueCardsByName.card_images[0].image_url}
              alt={highestValueCardsByName.name}
              className={styles["card-image"]}
            />
            <h3>Highest Value Cards By Name: {highestValueCardsByName.name}</h3>
          </div>
        </>
      ) : (
        <p>No cards in collection...</p>
      )}
    </div>
  );
}

export default Valuations;
