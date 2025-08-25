import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FavoritesContext } from '../context/FavoritesContext';
import '../css/FavoritesPage.css';

export const FavoritesPage = () => {
    const { favorites, removeFavorite } = useContext(FavoritesContext);

    if (favorites.length === 0) return <p>Você não tem filmes favoritos.</p>;

    return (
        <div className="favorites-container">
    {favorites.map(movie => (
        <div key={movie.imdbID} className="favorite-card">
            <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/100x150?text=Sem+Imagem'} alt={movie.Title} />
            <h3>{movie.Title} ({movie.Year})</h3>
            <Link to={`/movie/${movie.imdbID}`}>Ver detalhes</Link>
            <button onClick={() => removeFavorite(movie.imdbID)}>Remover dos favoritos</button>
        </div>
    ))}
</div>

    );
};
