import styles from "./Card.module.css"; // Import the CSS module

/* eslint-disable react/prop-types */
function Card({ card }) {
  const cardImage =
    card.card_images && card.card_images.length > 0
      ? card.card_images[0].image_url
      : "default-image-url.jpg";

  return (
    <div className={styles.card}>
      {" "}
      {/* Use the CSS module for the card class */}
      <h3>{card.name}</h3>
      <img
        src={cardImage}
        alt={card.name}
        className={styles["card-image"]}
      />{" "}
      {/* Use the CSS module for the card-image class */}
      <p>
        <strong>Price: love</strong> $
        {card.card_prices[0].tcgplayer_price || "N/A"}
      </p>
    </div>
  );
}

export default Card;
