import React from 'react';
import { Link } from 'react-router-dom';

const IMG_BASE = 'https://image.tmdb.org/t/p/w200';

export const MovieCard = ({ movie }) => {
    const year = movie.release_date ? movie.release_date.slice(0, 4) : 'N/A';

    const cardStyle = {
        borderRadius: '10px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        overflow: 'hidden',
        margin: 10,
        padding: 10,
        width: 200,
        backgroundColor: '#fff',
        transition: 'transform 0.2s, box-shadow 0.2s',
    };

    const imgPlaceholder = {
        width: 200,
        height: 300,
        backgroundColor: '#eee',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#888',
        fontWeight: 'bold',
    };

    const buttonStyle = {
        marginTop: 10,
        padding: '8px 12px',
        border: 'none',
        borderRadius: '5px',
        backgroundColor: '#007bff',
        color: '#fff',
        cursor: 'pointer',
        width: '100%',
        transition: 'opacity 0.2s',
    };

    const handleMouseEnter = e => {
        e.currentTarget.style.transform = 'translateY(-5px)';
        e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.15)';
    };

    const handleMouseLeave = e => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
    };

    return (
        <div
            style={cardStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {movie.poster_path ? (
                <img src={`${IMG_BASE}${movie.poster_path}`} alt={movie.title} width="200" />
            ) : (
                <div style={imgPlaceholder}>Sem Imagem</div>
            )}
            <h3 style={{ margin: '10px 0 5px 0' }}>{movie.title}</h3>
            <p style={{ margin: '0 0 10px 0', color: '#555' }}>{year}</p>
            <Link to={`/movie/${movie.id}`}>
                <button style={buttonStyle}>Ver detalhes</button>
            </Link>
        </div>
    );
};
