import { useState, useEffect } from "react";
import axios from "axios";

export default function useMovieDetail(movieId) {
    const [movieDetails, setMovieDetails] = useState(null);
    const [cast, setCast] = useState([]); // Tambahkan state untuk aktor
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchMovieDetails() {
            setIsLoading(true);
            try {
                // Ambil detail film
                const detailsResponse = await axios.get(
                    `${import.meta.env.VITE_BASEURL}/movie/${movieId}`,
                    {
                        params: {
                            api_key: import.meta.env.VITE_APIKEY,
                        },
                    }
                );

                // Ambil daftar aktor
                const creditsResponse = await axios.get(
                    `${import.meta.env.VITE_BASEURL}/movie/${movieId}/credits`,
                    {
                        params: {
                            api_key: import.meta.env.VITE_APIKEY,
                        },
                    }
                );

                setMovieDetails(detailsResponse.data);
                setCast(creditsResponse.data.cast.slice(0, 10)); // Ambil 10 aktor teratas
                setError(null);
            } catch (err) {
                console.error("Error fetching movie details:", err);
                setError("Failed to fetch movie details. Please try again.");
            } finally {
                setIsLoading(false);
            }
        }

        if (movieId) {
            fetchMovieDetails();
        }
    }, [movieId]);

    return { movieDetails, cast, isLoading, error };
}
