/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import Button from "./Button";

function CardSearchItem({ card, collection, setCollection }) {
  function handleAddToCollection(card) {
    setCollection((prevCollection) => {
      const existingCard = prevCollection.find((c) => c.id === card.id);

      if (existingCard) {
        return prevCollection.map((c) =>
          c.id === card.id ? { ...c, card_quantity: c.card_quantity + 1 } : c
        );
      } else {
        return [...prevCollection, { ...card, card_quantity: 1 }];
      }
    });
  }

  return (
    <div className="card-search-item">
      <h3>{card.name}</h3>
      <img
        src={card.card_images[0].image_url}
        alt={card.name}
        className="card-image"
      />

      <p>
        <strong>Price:</strong> ${card.card_prices[0].tcgplayer_price || "N/A"}
      </p>

      <Button onClick={handleAddToCollection} card={card}>
        Add To Collection
      </Button>
    </div>
  );
}

export default CardSearchItem;
