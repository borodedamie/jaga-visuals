import React, { Suspense, lazy } from "react";
import "../src/css/main.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import loader from './assets/loader.svg'

const Home1 = lazy(() => import("./pages/Home1"));
const Works = lazy(() => import("./pages/Works"));
const Contact = lazy(() => import("./pages/Contact"));
const Career = lazy(() => import("./pages/Career"));
const Services = lazy(() => import("./pages/Services"));
const Agency = lazy(() => import("./pages/Agency"));
const LogisticsBrief = lazy(() => import("./pages/LogisticsBrief"));
const DOFBrief = lazy(() => import("./pages/DOFBrief"));
const ForetBrief = lazy(() => import("./pages/ForetBrief"));
const WavyBrief = lazy(() => import("./pages/WavyBrief"));
const NagaadBrief = lazy(() => import("./pages/NagaadBrief"));
const JumiaBrief = lazy(() => import("./pages/JumiaBrief"));
const HOBrief = lazy(() => import("./pages/HOBrief"));
const OneBrief = lazy(() => import("./pages/OneBrief"));
const PondasBrief = lazy(() => import("./pages/PondasBrief"));

function App() {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div className="flex flex-row justify-center items-center w-[100%] max-w-[100%] h-[100vh] my-auto place-content-center justify-items-center" >
             <img className="flex flex-row justify-center items-center w-fit max-w-[100%] place-content-center"  src={loader} alt='loading-gif'/>
          </div>
        }
      >
        <ScrollToTop />

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
          <Route path="pondasbrief" element={<PondasBrief />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
