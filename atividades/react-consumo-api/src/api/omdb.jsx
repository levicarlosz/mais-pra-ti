import axios from 'axios';

const API_KEY = '';
const BASE_URL = 'http://www.omdbapi.com/';

export const searchMovies = async (query, page = 1) => {
    const res = await axios.get(BASE_URL, {
        params: { apikey: API_KEY, s: query, page },
    });
    return res.data;
};

export const getMovieDetails = async (imdbID) => {
    const res = await axios.get(BASE_URL, {
        params: { apikey: API_KEY, i: imdbID, plot: 'full' },
    });
    return res.data;
};
