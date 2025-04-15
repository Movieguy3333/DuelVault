/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import Button from "./Button";
import { AppContext } from "../contextapi/AppContext";
import styles from "./CollectionItem.module.css";

function CollectionItem({ card }) {
  const [updatedCardPrice, setUpdatedCardPrice] = useState(null);
  const [alertsOn, setAlertsOn] = useState(true);

  useEffect(() => {
    async function fetchCards() {
      try {
        const response = await fetch(
          `https://db.ygoprodeck.com/api/v7/cardinfo.php?name=${encodeURIComponent(
            card.name
          )}`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("data fetched!");
        console.log(data);

        if (data.data && data.data.length > 0) {
          const price = data.data[0].card_prices[0].tcgplayer_price;
          setUpdatedCardPrice(price);
        }
      } catch (error) {
        console.error("Error fetching updated price:", error);
      }
    }

    fetchCards();
  }, [card.name]);

  const { handleAddToCollection, handleDeleteFromCollection } =
    useContext(AppContext);

  const toggleAlerts = () => {
    setAlertsOn(!alertsOn);
  };

  return (
    <div className={styles["collection-item"]}>
      <h3>{card.name}</h3>
      <div className={styles["image-wrapper"]}>
        <img
          src={card.card_images[0].image_url}
          alt={card.name}
          className={styles["card-image"]}
        />
        <div
          className={`${styles["alert-status"]} ${
            alertsOn ? styles["on"] : styles["off"]
          }`}
        ></div>
      </div>

      <p>
        <strong>Price on Save:</strong> $
        {card.card_prices[0].tcgplayer_price || "N/A"}
      </p>
      <p>
        <strong>Current Price:</strong> ${updatedCardPrice || "N/A"}
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
      <Button onClick={toggleAlerts}>
        {alertsOn ? "Disable Alerts" : "Enable Alerts"}
      </Button>
    </div>
  );
}

export default CollectionItem;
