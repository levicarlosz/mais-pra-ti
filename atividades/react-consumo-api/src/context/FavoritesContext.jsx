import React, { createContext, useState, useEffect } from 'react';

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const stored = localStorage.getItem('favorites');
        if (stored) setFavorites(JSON.parse(stored));
    }, []);

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites]);

    const addFavorite = (movie) => {
        if (!favorites.find(fav => fav.imdbID === movie.imdbID)) {
            setFavorites([...favorites, movie]);
        }
    };

    const removeFavorite = (imdbID) => {
        setFavorites(favorites.filter(fav => fav.imdbID !== imdbID));
    };

    const isFavorite = (imdbID) => favorites.some(fav => fav.imdbID === imdbID);

    return (
        <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, isFavorite }}>
            {children}
        </FavoritesContext.Provider>
    );
};
