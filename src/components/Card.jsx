/* eslint-disable react/prop-types */
function Card({ card }) {
  const cardImage =
    card.card_images && card.card_images.length > 0
      ? card.card_images[0].image_url
      : "default-image-url.jpg";
  return (
    <div className="card">
      <h3>{card.name}</h3>
      <img src={cardImage} alt={card.name} className="card-image" />

      <p>
        <strong>Price:</strong> ${card.card_prices[0].tcgplayer_price || "N/A"}
      </p>
    </div>
  );
}

export default Card;
