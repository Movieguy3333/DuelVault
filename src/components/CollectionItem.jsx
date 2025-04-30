/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import Button from "./Button";
import { AppContext } from "../contextapi/AppContext";
import styles from "./CollectionItem.module.css";

function CollectionItem({ card }) {
  const [updatedCardPrice, setUpdatedCardPrice] = useState(null);
  const [alertsOn, setAlertsOn] = useState(card.card_price_alert);
  const [priceAlertAmount, setPriceAlertAmount] = useState(
    card.card_price_alert_amount
  );

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

  function toggleAlertsOn() {
    setAlertsOn(() => !alertsOn);
    handleSetPriceAlert(card, !alertsOn);
  }

  const {
    handleAddToCollection,
    handleDeleteFromCollection,
    handleSetPriceAlertAmount,
    handleSetPriceAlert,
  } = useContext(AppContext);

  return (
    <div className={styles["collection-item"]}>
      <div className={styles["card-info"]}>
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
        <Button onClick={toggleAlertsOn}>
          {alertsOn ? "Disable Alerts" : "Enable Alerts"}
        </Button>
      </div>
      <div className={styles["price-alert-info"]}>
        <input
          size="100"
          type="number"
          min="0"
          step="1"
          placeholder="Set price alert..."
          value={priceAlertAmount}
          onChange={(e) => {
            const value = e.target.value;
            if (value === "" || (/^\d+$/.test(value) && Number(value) >= 0)) {
              setPriceAlertAmount(value);
            }
          }}
        />

        <Button
          onClick={() => handleSetPriceAlertAmount(card, priceAlertAmount)}
        >
          Set Price Alert
        </Button>
        {/*   <button onClick={() => handleSetPriceAlert(card, priceAlertAmount)}>
        Set Price Alert
      </button> */}
        <p>
          Price Alerts:
          {alertsOn ? "Enabled" : "Disabled"}
        </p>
        <p>
          {!alertsOn &&
          Number(priceAlertAmount) > Number(card.card_prices[0].tcgplayer_price)
            ? "Alerts are disabled."
            : Number(priceAlertAmount) >
              Number(card.card_prices[0].tcgplayer_price)
            ? `You will get an email notification when ${card.name} reaches $${priceAlertAmount}`
            : "Number is not valid!"}
        </p>
      </div>
    </div>
  );
}

export default CollectionItem;
