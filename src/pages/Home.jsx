import usePopularMovies from "../api/useMovies";
import Title from "../components/Title";
import Content from "../layouts/Content";
import Carousel from "../components/Carousel";

export default function Home() {
    const { popularMovies = [], error } = usePopularMovies();

    return (
        <>
            <Title title={"Movie List - Home"} />
            <Carousel />
            <Content movies={popularMovies} error={error} />
        </>
    )
}
