import { Fragment } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Shop from "./components/Shop";
import { ContextProvider } from "./context";
import "./index.css";

function App() {
  return (
    <Fragment>
      <Header />
      <ContextProvider>
        <Shop />
      </ContextProvider>
      <Footer />
    </Fragment>
  );
}

export default App;
