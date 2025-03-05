/* eslint-disable react/prop-types */

function CollectionItem({ card }) {
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
    </div>
  );
}

export default CollectionItem;
