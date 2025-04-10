/* eslint-disable react/prop-types */

import { createContext, useState, useEffect } from "react";

const AppContext = createContext();

function AppProvider({ children }) {
  const storedUser = sessionStorage.getItem("user")
    ? JSON.parse(sessionStorage.getItem("user"))
    : null;
  const storedCollection = sessionStorage.getItem("collection")
    ? JSON.parse(sessionStorage.getItem("collection"))
    : [];

  const [user, setUser] = useState(storedUser);
  const [collection, setCollection] = useState(storedCollection);

  useEffect(() => {
    if (user) {
      sessionStorage.setItem("user", JSON.stringify(user));
    } else {
      sessionStorage.removeItem("user");
    }

    if (collection) {
      sessionStorage.setItem("collection", JSON.stringify(collection));
    } else {
      sessionStorage.removeItem("collection");
    }
  }, [user, collection]);

  const updateCollectionInBackend = async (newCollection) => {
    if (!user) return;

    try {
      const response = await fetch(
        `http://localhost:5000/api/user/${user.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ collection: newCollection }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setUser(data.user);
        setCollection(data.user.cardCollection);
      }
    } catch (error) {
      console.error("Error updating collection:", error);
    }
  };

  function handleAddToCollection(card) {
    setCollection((prevCollection) => {
      const existingCard = prevCollection.find((c) => c.id === card.id);

      let updatedCollection;
      if (existingCard) {
        updatedCollection = prevCollection.map((c) =>
          c.id === card.id ? { ...c, card_quantity: c.card_quantity + 1 } : c
        );
      } else {
        updatedCollection = [...prevCollection, { ...card, card_quantity: 1 }];
      }

      updateCollectionInBackend(updatedCollection);

      return updatedCollection;
    });
  }

  function handleDeleteFromCollection(card) {
    setCollection((prevCollection) => {
      const updatedCollection = prevCollection
        .map((c) =>
          c.id === card.id ? { ...c, card_quantity: c.card_quantity - 1 } : c
        )
        .filter((c) => c.card_quantity > 0);

      updateCollectionInBackend(updatedCollection);

      return updatedCollection;
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
