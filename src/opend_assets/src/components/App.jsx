import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";

import Item from "./Item";
import Minter from "./Minter";


function App() {

  // const NFTID = "ai7t5-aibaq-aaaaa-aaaaa-c"

  return (
    <div className="App">
      <Header />
      {/* <Minter /> */}
      {/* <Item id={NFTID} /> */}

      <Footer />
    </div>
  );
}

export default App;
