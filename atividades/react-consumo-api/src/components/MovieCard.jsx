import React from 'react';
import { Link } from 'react-router-dom';

const IMG_BASE = 'https://image.tmdb.org/t/p/w200';

export const MovieCard = ({ movie }) => {
    const year = movie.release_date ? movie.release_date.slice(0, 4) : 'N/A';

    return (
        <div style={{ border: '1px solid #ccc', margin: 5, padding: 10, width: 200 }}>
            {movie.poster_path ? (
                <img src={`${IMG_BASE}${movie.poster_path}`} alt={movie.title} width="200" />
            ) : (
                <div style={{ width: 200, height: 300, backgroundColor: '#eee', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    Sem Imagem
                </div>
            )}
            <h3>{movie.title}</h3>
            <p>{year}</p>
            <Link to={`/movie/${movie.id}`}>
                <button>Ver detalhes</button>
            </Link>
        </div>
    );
};
