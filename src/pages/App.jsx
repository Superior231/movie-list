import "../assets/css/style.css";
import Header from "../layouts/Header";
import Content from "../layouts/Content";
import usePopularMovies from "../api/useMovies";

function App() {
  const { popularMovies, error } = usePopularMovies();

  return (
    <>
      <Header />
      <Content movies={popularMovies} error={error} />
    </>
  );
}

export default App;

