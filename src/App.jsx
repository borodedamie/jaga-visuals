import React from "react";
import "../src/css/main.css";
import Works from "./pages/Works";
import Contact from "./pages/Contact";
import Home1 from "./pages/Home1";
import Career from "./pages/Career";
import Services from "./pages/Services"
import { Routes, Route, BrowserRouter } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Home1 />} />
        <Route path="/works" element={<Works />} />
        <Route path="contact" element={<Contact />} />
        <Route path="career" element={<Career />} />
        <Route path="services" element={<Services />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
