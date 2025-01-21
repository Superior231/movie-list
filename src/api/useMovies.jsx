// Hook API from MovieApi
import { useEffect, useState } from "react";
import { getPopularMovieList } from "./MovieApi";

export default function usePopularMovies() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const movieList = await getPopularMovieList();
        setPopularMovies(movieList);
      } catch (err) {
        setError("Failed to fetch movies. Please try again later.");
        console.error(err);
      }
    }

    fetchMovies();
  }, []);

  return { popularMovies, error };
}
