import { useContext, useMemo } from "react";
import { AppContext } from "../contextapi/AppContext";
import styles from "./Valuations.module.css";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

function Valuations() {
  const { collection } = useContext(AppContext);

  const totalCollectionValue = useMemo(() => {
    if (collection.length === 0) return null;

    const total = collection.reduce((sum, card) => {
      const price = Number(card.card_prices[0].tcgplayer_price);
      const quantity = Number(card.card_quantity);
      return sum + price * quantity;
    }, 0);

    return Math.round(total);
  }, [collection]);

  const priceTiers = useMemo(() => {
    if (collection.length === 0) return null;

    const tiers = {
      "<$1": 0,
      "$1–$5": 0,
      "$5–$20": 0,
      ">$20": 0,
    };

    collection.forEach((card) => {
      const price = Number(card.card_prices[0].tcgplayer_price);
      const quantity = Number(card.card_quantity);

      if (price < 1) tiers["<$1"] += quantity;
      else if (price <= 5) tiers["$1–$5"] += quantity;
      else if (price <= 20) tiers["$5–$20"] += quantity;
      else tiers[">$20"] += quantity;
    });

    return tiers;
  }, [collection]);

  const pieChartData = useMemo(() => {
    if (!priceTiers) return null;

    return {
      labels: Object.keys(priceTiers),
      datasets: [
        {
          label: "Card Quantity",
          data: Object.values(priceTiers),
          backgroundColor: ["#FFD700", "#00BFFF", "#32CD32", "#FF4500"],
          borderColor: "#22",
          borderWidth: 6,
        },
      ],
    };
  }, [priceTiers]);

  const highestValueCard = useMemo(() => {
    if (collection.length === 0) return null;

    return collection.reduce((maxCard, currentCard) =>
      Number(currentCard.card_prices[0].tcgplayer_price) >
      Number(maxCard.card_prices[0].tcgplayer_price)
        ? currentCard
        : maxCard
    );
  }, [collection]);

  const totalCards = useMemo(() => {
    if (collection.length === 0) return null;

    const total = collection.reduce((sum, card) => {
      const quantity = Number(card.card_quantity);
      return sum + quantity;
    }, 0);

    return Math.round(total);
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
          <h1 className={styles["collection-value-header"]}>
            {" "}
            Collection Value: ${totalCollectionValue}
          </h1>
          <h1>You have {totalCards} cards</h1>

          <div className={styles.chart}>
            <h2>Card Value Distribution</h2>
            <Pie data={pieChartData} />
          </div>

          <div className={styles["valuation-item"]}>
            <img
              src={highestValueCard.card_images[0].image_url}
              alt={highestValueCard.name}
              className={styles["card-image"]}
            />
            <h3>Highest Value Card: {highestValueCard.name}</h3>
          </div>
          <div className={styles["valuation-item"]}>
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
