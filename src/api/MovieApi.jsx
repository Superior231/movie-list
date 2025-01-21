// Get API from TMDB
import axios from "axios";

export async function getPopularMovieList() {
  try {
    const baseUrl  = import.meta.env.VITE_BASEURL
    const response = await axios.get(`${baseUrl}/movie/popular`, {
      params: {
        api_key: import.meta.env.VITE_APIKEY,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error("Error fetching movie list:", error);
    throw error;
  }
}

export async function searchMovie(query) {
  try {
    const response = await axios.get(`${import.meta.env.VITE_BASEURL}/search/movie`, {
      params: {
        api_key: import.meta.env.VITE_APIKEY,
        query,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error("Error searching movie:", error);
    throw error;
  }
}
