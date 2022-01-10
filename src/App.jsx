import React from 'react';
import Footer from './Components/Footer';
import NavBar from './Components/NavBar';
function App() {
  return ( /* Titulo del proyecto*/
    <div className="App">
      <NavBar/>

      <Footer mensaje="soy el footer"/>
    </div>
  );
}

export default App;
