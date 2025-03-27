/* eslint-disable no-unused-vars */
import { useContext } from "react";
import CollectionItem from "./CollectionItem";
import { AppContext } from "../contextapi/AppContext";
import styles from "./Collection.module.css";

function Collection() {
  const { collection } = useContext(AppContext);

  return (
    <>
      <h1 className={styles["collection-header"]}>Collection</h1>
      <div className={styles.collection}>
        {collection.length !== 0 ? (
          collection.map((card) => <CollectionItem key={card.id} card={card} />)
        ) : (
          <p>Add cards to your collection... </p>
        )}
      </div>
    </>
  );
}

export default Collection;
