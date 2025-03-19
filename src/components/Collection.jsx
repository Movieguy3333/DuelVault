/* eslint-disable no-unused-vars */
import { useContext } from "react";
import CollectionItem from "./CollectionItem";
import { AppContext } from "../contextapi/AppContext";

function Collection() {
  const { collection } = useContext(AppContext);
  const x = 3;

  return (
    <>
      <h1 className="collection-header">Collection</h1>
      <div className="collection">
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
