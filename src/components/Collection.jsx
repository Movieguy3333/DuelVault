import { useContext, useState } from "react";
import CollectionItem from "./CollectionItem";
import { AppContext } from "../contextapi/AppContext";
import styles from "./Collection.module.css";

function Collection() {
  const { collection, user } = useContext(AppContext);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCollection = collection.filter((card) =>
    card.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <h1 className={styles["collection-header"]}>
        {user ? `${user.username}'s Collection` : "User not signed in"}
      </h1>

      {collection.length !== 0 && (
        <div className={styles["search-bar-wrapper"]}>
          <h2>Search Collection</h2>
          <input
            type="text"
            placeholder="Search cards..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={styles["search-bar"]}
          />
        </div>
      )}

      <div className={styles.collection}>
        {filteredCollection.length !== 0 ? (
          filteredCollection.map((card) => (
            <CollectionItem key={card.id} card={card} />
          ))
        ) : (
          <p>No cards found...</p>
        )}
      </div>
    </>
  );
}

export default Collection;
