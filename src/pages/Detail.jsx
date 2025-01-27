import { useParams } from "react-router-dom";
import useMovieDetail from "../api/useMovieDetail";
import Title from "../components/Title";
import MovieDetail from "../layouts/MovieDetail";
import "../assets/css/detail.css";

export default function Detail() {
    const { id } = useParams();
    const [movieId] = id.split("-");
    const { movieDetails, cast, isLoading, error } = useMovieDetail(movieId);

    if (isLoading) {
        return (
            <div className="fixed inset-0 flex justify-center items-center">
                <p className="text-center text-gray-500 text-lg">Loading...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="container mx-auto px-4 py-5 w-full">
                <p className="text-center text-red-500 text-lg font-semibold">{error}</p>
            </div>
        );
    }

    return (
        <>
            <Title title={`Detail - ${movieDetails.title}`} />
            <MovieDetail movieDetails={movieDetails} cast={cast} />
        </>
    );
}
