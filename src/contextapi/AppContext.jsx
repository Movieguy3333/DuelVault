/* eslint-disable react/prop-types */

import { createContext, useState } from "react";

const AppContext = createContext();

function AppProvider({ children }) {
  const [collection, setCollection] = useState([]);
  const [user, setUser] = useState(null);

  function handleAddToCollection(card) {
    setCollection((prevCollection) => {
      const existingCard = prevCollection.find((c) => c.id === card.id);

      if (existingCard) {
        return prevCollection.map((c) =>
          c.id === card.id ? { ...c, card_quantity: c.card_quantity + 1 } : c
        );
      } else {
        return [...prevCollection, { ...card, card_quantity: 1 }];
      }
    });
  }

  function handleDeleteFromCollection(card) {
    setCollection((prevCollection) => {
      return prevCollection
        .map((c) =>
          c.id === card.id ? { ...c, card_quantity: c.card_quantity - 1 } : c
        )
        .filter((c) => c.card_quantity > 0);
    });
  }

  return (
    <AppContext.Provider
      value={{
        collection,
        setCollection,
        user,
        setUser,
        handleAddToCollection,
        handleDeleteFromCollection,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
export { AppProvider, AppContext };
