import { useContext, useMemo } from "react";
import { AppContext } from "../contextapi/AppContext";

function Valuations() {
  const { collection } = useContext(AppContext);
  /*   const highestValueCards =
    collection.length === 0
      ? null
      : collection.reduce((maxCard, currentCard) =>
          currentCard.card_prices[0].tcgplayer_price >
          maxCard.card_prices[0].tcgplayer_price
            ? currentCard
            : maxCard
        ); */
  const highestValueCard = useMemo(() => {
    if (collection.length === 0) return null;

    return collection.reduce((maxCard, currentCard) =>
      Number(currentCard.card_prices[0].tcgplayer_price) >
      Number(maxCard.card_prices[0].tcgplayer_price)
        ? currentCard
        : maxCard
    );
  }, [collection]); //

  return (
    <div className="Valuation">
      {" "}
      {highestValueCard ? (
        <p>{highestValueCard.name}</p>
      ) : (
        <p>No cards in collection...</p>
      )}
    </div>
  );
}

export default Valuations;
