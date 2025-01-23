/* eslint-disable react/prop-types */
export default function CardResult({ results }) {
    return (
        <div className="card-movie-result-container">
            {results.map((result) => (
                <div key={result.id}>
                    <a
                        href={`/movie/${result.id}-${result.title.toLowerCase().replace(/\s+/g, '-')}`}
                        className="card-movie-result"
                    >
                        <div className="card-movie-result-header">
                            <img
                                src={`${import.meta.env.VITE_BASEIMGURL}${result.poster_path}`}
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
                                }[id])).join(', ')}</p>
                            <p className="rate">
                                <i className="bx bxs-star"></i> {result.vote_average}
                            </p>
                        </div>
                    </a>
                    <hr className="my-3" />
                </div>
            ))}
        </div>
    );
}


