import { Helmet } from "react-helmet";
import "./App.css";
import Banner from "./components/sharedSection/Banner";

function App() {
  return (
    <>
      <Helmet>
        <title>Home | Land Lawyer</title>
      </Helmet>
      <div className="h-96">
        <Banner></Banner>
      </div>
    </>
  );
}

export default App;
