/* eslint-disable react/prop-types */
export default function Card({ movies = [], error }) {
    return (
        <>
            {error && (
                <p className="text-center text-red-500 text-lg font-semibold p-10">{error}</p>
            )}
            <div className="movie-card-container grid grid-cols-3 lg:grid-cols-5 md:grid-cols-3 gap-2 lg:gap-4 mt-5">
                {movies.map((movie) => (
                    <a href={`/movie/${movie.id}-${movie.title.toLowerCase().replace(/\s+/g, '-')}`} className="movie-card" key={movie.id}>
                        <div className="movie-card-header">
                            <img
                                src={`${import.meta.env.VITE_BASEIMGURL}${movie.poster_path}`}
                                alt={movie.title}
                                className="w-full h-auto"
                            />
                            <div className="movie-card-img-overlay">
                                <div className="flex items-center justify-end">
                                    <span className="rate">
                                        <i className="bx bxs-star"></i> {movie.vote_average}
                                    </span>
                                </div>
                                <div className="flex items-center">
                                    <span className="date">
                                        {new Date(movie.release_date).toLocaleDateString('en-US', {
                                            year: 'numeric',
                                            month: 'short',
                                            day: 'numeric',
                                        })}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="movie-card-footer text-color mt-2 mt-lg-3">
                            <h4 className="title">{movie.title}</h4>
                        </div>
                    </a>
                ))}
            </div>
        </>
    );
}

