/* eslint-disable react/prop-types */

import { useContext } from "react";
import Button from "./Button";
import { AppContext } from "../contextapi/AppContext";

function CollectionItem({ card }) {
  const { handleAddToCollection, handleDeleteFromCollection } =
    useContext(AppContext);
  return (
    <div className="collection-item">
      <h3>{card.name}</h3>
      <img
        src={card.card_images[0].image_url}
        alt={card.name}
        className="card-image"
      />

      <p>
        <strong>Price:</strong> ${card.card_prices[0].tcgplayer_price || "N/A"}
      </p>
      <p>
        <strong>Quantity:</strong> {card.card_quantity || "N/A"}
      </p>
      <Button onClick={handleDeleteFromCollection} card={card}>
        -
      </Button>
      <Button onClick={handleAddToCollection} card={card}>
        +
      </Button>
    </div>
  );
}

export default CollectionItem;
