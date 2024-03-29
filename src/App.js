import React from "react";
import Header from "./components/Header";
import Feature from "./components/feature";
import About from "./components/About";
import Presentation from "./components/Presentation";
import aboutimage from'./images/about.png';
import aboutimage1 from'./images/download.png';
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <Feature />
      <About  image={aboutimage} title='comes with all Nedd For Daily Life' button= 'Get the App'/>
      <Presentation />
      <About  image={aboutimage1} title='Download And Get The APP Now' button= 'Download'/>
      < Contact />
    </div>
  );
}

export default App;
