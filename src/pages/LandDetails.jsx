import { useParams } from "react-router-dom";

export default function LandDetails() {
  const id = useParams();
  console.log(id);

  return <div>LandDetails</div>;
}
