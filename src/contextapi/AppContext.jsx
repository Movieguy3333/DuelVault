/* eslint-disable react/prop-types */

import { createContext, useState, useEffect } from "react";

const AppContext = createContext();

function AppProvider({ children }) {
  // Retrieve user and collection from localStorage on initial load
  const storedUser = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;
  const storedCollection = localStorage.getItem("collection")
    ? JSON.parse(localStorage.getItem("collection"))
    : [];

  const [user, setUser] = useState(storedUser);
  const [collection, setCollection] = useState(storedCollection);

  // Update localStorage whenever user or collection changes
  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }

    if (collection) {
      localStorage.setItem("collection", JSON.stringify(collection));
    } else {
      localStorage.removeItem("collection");
    }
  }, [user, collection]);

  // Function to update the collection in the backend
  const updateCollectionInBackend = async (newCollection) => {
    if (!user) return; // Ensure user is logged in before updating collection

    try {
      const response = await fetch(
        `http://localhost:5000/api/user/${user.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ collection: newCollection }), // Send updated collection to backend
        }
      );

      const data = await response.json();

      if (response.ok) {
        setUser(data.user); // Update user context with new collection
        setCollection(data.user.cardCollection); // Update local state collection
      }
    } catch (error) {
      console.error("Error updating collection:", error);
    }
  };

  // Function to add card to the collection
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

      // Update backend with the new collection
      updateCollectionInBackend(updatedCollection);

      return updatedCollection; // Return the new collection to update local state
    });
  }

  // Function to delete card from the collection
  function handleDeleteFromCollection(card) {
    setCollection((prevCollection) => {
      const updatedCollection = prevCollection
        .map((c) =>
          c.id === card.id ? { ...c, card_quantity: c.card_quantity - 1 } : c
        )
        .filter((c) => c.card_quantity > 0);

      // Update backend with the new collection
      updateCollectionInBackend(updatedCollection);

      return updatedCollection; // Return the updated collection to update local state
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
