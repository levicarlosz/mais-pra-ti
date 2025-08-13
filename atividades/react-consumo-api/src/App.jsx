import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { SearchPage } from './pages/SearchPage';
import DetailsPage from './pages/DetailsPage';
import { FavoritesPage } from './pages/FavoritesPage';
import { FavoritesProvider } from './context/FavoritesContext';

export const App = () => {
    return (
        <FavoritesProvider>
            <Router>
                <header style={{ padding: 10, borderBottom: '1px solid #ccc', marginBottom: 20 }}>
                    <nav style={{ display: 'flex', gap: 15 }}>
                        <Link to="/">Buscar</Link>
                        <Link to="/favorites">Favoritos</Link>
                    </nav>
                </header>

                <main style={{ padding: 20 }}>
                    <Routes>
                        <Route path="/" element={<SearchPage />} />
                        <Route path="/movie/:id" element={<DetailsPage />} />
                        <Route path="/favorites" element={<FavoritesPage />} />
                    </Routes>
                </main>
            </Router>
        </FavoritesProvider>
    );
};
