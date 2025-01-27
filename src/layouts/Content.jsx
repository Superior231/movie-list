/* eslint-disable react/prop-types */
import Actions from "../components/Actions";
import Card from "../components/Card";

export default function Content({ movies, error }) {
  return (
    <div className="container mx-auto px-4 py-5 w-full">
      {/* <Actions /> */}
      <Card movies={movies} error={error} />
    </div>
  );
}
