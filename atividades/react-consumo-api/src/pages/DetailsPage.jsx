import React, { useEffect, useState, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getMovieDetails } from '../api/omdb';
import { FavoritesContext } from '../context/FavoritesContext';
import '../css/DetailsPage.css';

const DetailsPage = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { addFavorite, removeFavorite, isFavorite } = useContext(FavoritesContext);

    useEffect(() => {
        const fetchDetails = async () => {
            setLoading(true);
            setError(null);
            try {
                const data = await getMovieDetails(id);
                if (data.Response === 'False') {
                    setError(data.Error);
                    setMovie(null);
                } else {
                    setMovie(data);
                }
            } catch {
                setError('Erro ao carregar detalhes.');
                setMovie(null);
            } finally {
                setLoading(false);
            }
        };

        fetchDetails();
    }, [id]);

    if (loading) return <p>Carregando detalhes...</p>;
    if (error) return <p style={{color:'red'}}>{error}</p>;
    if (!movie) return null;

    return (
        <div className="details-container">
    <Link to="/">← Voltar à busca</Link>
    <h1>{movie.Title} ({movie.Year})</h1>
    <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x450?text=Sem+Imagem'} alt={movie.Title} />
    <p><strong>Diretor:</strong> {movie.Director}</p>
    <p><strong>Elenco:</strong> {movie.Actors}</p>
    <p><strong>Sinopse:</strong> {movie.Plot}</p>
    <p><strong>Avaliação IMDb:</strong> {movie.imdbRating}</p>
    {isFavorite(movie.imdbID) ? (
        <button className="remove" onClick={() => removeFavorite(movie.imdbID)}>Remover dos favoritos</button>
    ) : (
        <button onClick={() => addFavorite(movie)}>Adicionar aos favoritos</button>
    )}
</div>

    );
};

export default DetailsPage;
