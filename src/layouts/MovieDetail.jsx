import Banner from "../components/MovieDetail/Banner";
import Cast from "../components/MovieDetail/Cast";
import Header from "../components/MovieDetail/Header";

/* eslint-disable react/prop-types */
export default function MovieDetail({ movieDetails, cast }) {
    return (
        <>
            <Banner movieDetails={movieDetails} />
            <div className="container flex flex-col mx-auto px-4 pb-10 h-full w-full">
                <Header movieDetails={movieDetails} />
                <Cast cast={cast} />
            </div>
        </>
    )
}
