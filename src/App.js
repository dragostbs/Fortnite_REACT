import { Fragment } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Shop from "./components/Shop";
import "./index.css";

function App() {
  return (
    <Fragment>
      <Header />
      <Shop />
      <Footer />
    </Fragment>
  );
}

export default App;
