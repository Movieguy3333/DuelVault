/* eslint-disable react/prop-types */
import CollectionItem from "./CollectionItem";

function Collection({ collection }) {
  return (
    <>
      <h1 className="collection-header">Collection</h1>
      <div className="collection">
        {collection.length !== 0 ? (
          collection.map((card) => <CollectionItem key={card.id} card={card} />)
        ) : (
          <p>Add cards to your collection...</p>
        )}
      </div>
    </>
  );
}

export default Collection;
