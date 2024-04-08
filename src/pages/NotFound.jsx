import { Helmet } from "react-helmet";

export default function NotFound() {
  return (
    <div>
      <Helmet>
        <title>Not Found | Land Lawyer</title>
      </Helmet>
      <img
        src="https://i.ibb.co/89Z35M5/notFound.png"
        className="mx-auto"
        alt=""
      />
    </div>
  );
}
