import { useState } from "react";

const { createContext } = require("react");
export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

const FavoritesContextProvider = ({ children }) => {
  const [favoriteMealIds, setFavoriteMealIds] = useState([]);
  const addFavorite = (id) => {
    setFavoriteMealIds((currentFavoriteIds) => [...currentFavoriteIds, id]);
  };
  const removeFavorite = (id) => {
    setFavoriteMealIds((currentFavoriteIds) =>
      currentFavoriteIds.filter((mealId) => mealId !== id)
    );
  };

  const value = { ids: favoriteMealIds, addFavorite, removeFavorite };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};
export default FavoritesContextProvider;
