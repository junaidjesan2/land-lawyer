import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";

import "./App.css";
import Banner from "./components/sharedSection/Banner";
import Card from "./components/shared/Card";

function App() {
  const Data= useLoaderData()
  return (
    <>
      <Helmet>
        <title>Home | Land Lawyer</title>
      </Helmet>
      <div className="h-96">
        <Banner></Banner>
      </div>
      <div className="my-16">
        <h1 className="text-center text-4xl font-bold">
          Find Your Best Places Here
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 mx-auto">
        {Data.map((d) => (
          <Card d={d} key={d.id}></Card>
        ))}
        </div>
      </div>
    </>
  );
}

export default App;
