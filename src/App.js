import React, { useEffect } from "react";
import Espacio from "./components/Espacio";
import NavBar from "./components/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer";
function App({product}) {
  return (
    /* Titulo del proyecto*/
    <div className="App">
      <NavBar />
      <Espacio />
      <ItemDetailContainer product={product} />
    </div>
  );
}

export default App;
