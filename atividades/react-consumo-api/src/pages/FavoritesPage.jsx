import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FavoritesContext } from '../context/FavoritesContext';

export const FavoritesPage = () => {
    const { favorites, removeFavorite } = useContext(FavoritesContext);

    if (favorites.length === 0) return <p>Você não tem filmes favoritos.</p>;

    return (
        <div>
            <h1>Meus Favoritos</h1>
            {favorites.map(movie => (
                <div key={movie.imdbID} style={{ border: '1px solid #ccc', margin: 10, padding: 10 }}>
                    <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/100x150?text=Sem+Imagem'} alt={movie.Title} style={{width: 100}} />
                    <h3>{movie.Title} ({movie.Year})</h3>
                    <Link to={`/movie/${movie.imdbID}`}>Ver detalhes</Link>
                    <br />
                    <button onClick={() => removeFavorite(movie.imdbID)}>Remover dos favoritos</button>
                </div>
            ))}
        </div>
    );
};
