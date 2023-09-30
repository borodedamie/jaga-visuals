import React from "react";
import "../src/css/main.css";
import Works from "./pages/Works";
import Contact from "./pages/Contact";
import Home1 from "./pages/Home1";
import Career from "./pages/Career";
import Services from "./pages/Services"
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Agency from "./pages/Agency";
import DOFBrief from "./pages/DOFBrief";
import ForetBrief from "./pages/ForetBrief";
import WavyBrief from "./pages/WavyBrief";
import NagaadBrief from "./pages/NagaadBrief";
import JumiaBrief from "./pages/JumiaBrief";
import OneBrief from "./pages/OneBrief";
import HOBrief from "./pages/HOBrief";
import LogisticsBrief from "./pages/LogisticsBrief";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Home1 />} />
        <Route path="/works" element={<Works />} />
        <Route path="contact" element={<Contact />} />
        <Route path="career" element={<Career />} />
        <Route path="services" element={<Services />} />
        <Route path="agency" element={<Agency />} />
        <Route path="logisticsbrief" element={<LogisticsBrief />} />
        <Route path="dofbrief" element={<DOFBrief />} />
        <Route path="foretbrief" element={<ForetBrief />} />
        <Route path="wavybrief" element={<WavyBrief />} />
        <Route path="nagaadbrief" element={<NagaadBrief />} />
        <Route path="jumiabrief" element={<JumiaBrief />} />
        <Route path="hobrief" element={<HOBrief />} />
        <Route path="onebrief" element={<OneBrief />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
