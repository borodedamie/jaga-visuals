import { useState } from "react";
import "../src/css/main.css"
import Nav from "./components/Nav";
import Header from "./components/Header";
import Shape1 from "./components/Shape1";
import Shape2 from "./components/Shape2";
import Work from "./components/Work";
import Clients from "./components/Clients";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Nav />
      <Header/>
      <Shape1/>
      <Shape2/>
      <Work/>
      <Clients/>
      <Footer/>
    </>
  );
}

export default App;
