import React from 'react';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
function App() {
  return ( /* Titulo del proyecto*/
    <div className="App">
      <NavBar/>
      <ItemListContainer/>
      <Footer mensaje="soy el footer"/>
    </div>
  );
}

export default App;
