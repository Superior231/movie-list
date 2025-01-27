/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import slugify from "slugify";

export default function CardResult({ results, handleToggle }) {
    return (
        <div className="card-movie-result-container">
            {results.map((result) => {
                const slug = slugify(result.title, { lower: true, strict: true });
                return (
                    <div key={result.id}>
                        <Link
                            to={`/movie/${result.id}-${slug}`}
                            className="card-movie-result"
                            onClick={() => handleToggle(false)}
                        >
                            <div className="card-movie-result-header">
                                <img
                                    src={
                                        result.poster_path
                                            ? `${import.meta.env.VITE_BASEIMGURL}${result.poster_path}`
                                            : '/camera.png'
                                    }
                                    alt={result.title}
                                />
                            </div>
                            <div className="card-movie-result-footer">
                                <h4 className="title">{result.title}</h4>
                                <p className="genre">
                                    {result.genre_ids.map(id => ({
                                        28: "Action",
                                        12: "Adventure",
                                        16: "Animation",
                                        35: "Comedy",
                                        80: "Crime",
                                        99: "Documentary",
                                        18: "Drama",
                                        10751: "Family",
                                        14: "Fantasy",
                                        36: "History",
                                        27: "Horror",
                                        10402: "Music",
                                        9648: "Mystery",
                                        10749: "Romance",
                                        878: "Science Fiction",
                                        10770: "TV Movie",
                                        53: "Thriller",
                                        10752: "War",
                                        37: "Western",
                                    }[id])).join(', ')}
                                </p>
                                <p className="rate">
                                    <i className="bx bxs-star"></i> {result.vote_average}
                                </p>
                            </div>
                        </Link>
                        <hr className="my-3" />
                    </div>
                );
            })}
        </div>
    );
}
