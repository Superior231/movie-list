/* eslint-disable react/prop-types */
export default function Banner({ movieDetails }) {
    return (
        <div className="header-movie-detail bg-black">
            <img
                src={
                    movieDetails.backdrop_path
                        ? `${import.meta.env.VITE_BASEIMGURL}${movieDetails.backdrop_path}`
                        : "/camera.png"
                }
                alt={movieDetails.title}
            />
        </div>
    )
}
