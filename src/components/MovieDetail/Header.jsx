/* eslint-disable react/prop-types */
export default function Header({ movieDetails }) {
    return (
        <div className="container-header">
            <div className="header flex gap-4 w-full">
                <div className="thumbnail w-[80px] sm:w-[80px] md:w-[150px] lg:w-[200px]">
                    <img
                        src={
                            movieDetails.poster_path
                                ? `${import.meta.env.VITE_BASEIMGURL}${movieDetails.poster_path}`
                                : "/camera.png"
                        }
                        alt={movieDetails.title}
                    />
                </div>
                <div className="flex flex-col relative">
                    <div className="details flex flex-col justify-center ms-[90px] sm:ms-[90px] md:ms-[160px] lg:ms-[220px]">
                        <h2 className="text-base sm:text-base md:text-xl lg:text-2xl font-semibold text-color">{movieDetails.title}</h2>
                        <h4 className="text-[#0d6efd]">{movieDetails.original_title}</h4>
                        <p className="text-color mt-3 mb-1">{movieDetails.genres.map((genre) => genre.name).join(", ")}</p>
                        <div className="flex align-middle gap-3">
                            <span className="flex items-center">
                                <i className="bx bxs-star text-yellow-500 mr-1"></i>
                                <p className="text-color opacity-50">{movieDetails.vote_average}</p>
                            </span>
                            <p className="text-color opacity-50">
                                {new Date(movieDetails.release_date).toLocaleDateString("en-US", {
                                    year: "numeric",
                                    month: "short",
                                    day: "numeric",
                                })}
                            </p>
                            <p className="text-color opacity-50">{movieDetails.runtime} minutes</p>
                        </div>
                    </div>
                    <div className="overview ms-[0px] sm:ms-[0px] md:ms-[160px] lg:ms-[220px] mt-10 sm:mt-10 md:mt-5 lg:mt-5">
                        <h4 className="text-base sm:text-base md:text-xl lg:text-2xl font-semibold text-color">Overview</h4>
                        <p className="text-color opacity-50">
                            {movieDetails.overview ? movieDetails.overview : "No overview available."}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
