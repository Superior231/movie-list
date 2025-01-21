import Actions from "../components/Actions";
import Card from "../components/Card";

export default function Content() {
  return (
    <div className="container mx-auto px-4 py-5 w-full" style={{ height: "200vh" }}>
        <Actions />
        <Card />
    </div>
  )
}
