import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { searchMovies } from '../api/omdb';
import { FavoritesContext } from '../context/FavoritesContext';

export const SearchPage = () => {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { addFavorite, removeFavorite, isFavorite } = useContext(FavoritesContext);

    const handleSearch = async (e, newPage = 1) => {
        e?.preventDefault();
        if (!query.trim()) return;
        setLoading(true);
        setError(null);
        try {
            const data = await searchMovies(query, newPage);
            if (data.Response === 'False') {
                setError(data.Error);
                setMovies([]);
                setTotalResults(0);
            } else {
                setMovies(data.Search);
                setTotalResults(parseInt(data.totalResults, 10));
                setPage(newPage);
            }
        } catch {
            setError('Erro ao buscar filmes.');
            setMovies([]);
        } finally {
            setLoading(false);
        }
    };

    const totalPages = Math.ceil(totalResults / 10);

    return (
        <div>
            <h1>Buscar Filmes</h1>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    placeholder="Digite o nome do filme"
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                />
                <button type="submit">Buscar</button>
            </form>

            {loading && <p>Carregando...</p>}
            {error && <p style={{color:'red'}}>{error}</p>}

            <div>
                {movies.map(movie => (
                    <div key={movie.imdbID} style={{ border: '1px solid #ccc', margin: 10, padding: 10 }}>
                        <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/100x150?text=Sem+Imagem'} alt={movie.Title} style={{width: 100}} />
                        <h3>{movie.Title} ({movie.Year})</h3>
                        <Link to={`/movie/${movie.imdbID}`}>Ver detalhes</Link>
                        <br />
                        {isFavorite(movie.imdbID) ? (
                            <button onClick={() => removeFavorite(movie.imdbID)}>Remover dos favoritos</button>
                        ) : (
                            <button onClick={() => addFavorite(movie)}>Adicionar aos favoritos</button>
                        )}
                    </div>
                ))}
            </div>

            {totalPages > 1 && (
                <div style={{ marginTop: 20 }}>
                    <button disabled={page <= 1} onClick={e => handleSearch(e, page - 1)}>Anterior</button>
                    <span style={{ margin: '0 10px' }}>{page} / {totalPages}</span>
                    <button disabled={page >= totalPages} onClick={e => handleSearch(e, page + 1)}>Próximo</button>
                </div>
            )}
        </div>
    );
};
