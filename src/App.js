
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
 import Nav from "./Components/Nav";
 import Footer from "./Components/Footer";
import Home from "./Components/Home";
import IHtCalculators from "./Components/IHtCalculators";
import Back from "./Components/Back";
import Profile from "./Components/Profile";
import Typeoflpa from "./Components/Typeoflpa";
import Check from "./Components/Check";
import Regency from "./Components/Regency";
import Addattorney from "./Components/Addattorney";
import Donorinfo from "./Components/Donorinfo";
import LPAused from "./Components/LPAused";
import Addattorneyinfo from "./Components/Addattorneyinfo";
import Replaceattornydet from"./Components/Replaceattornydet";
import Donorwant from "./Components/Donorwant";
import Certificateprovider from "./Components/Certificateprovider";
import Certidetail from "./Components/Certidetail";
import AboutLPA from "./Components/AboutLPA";
import Whoregister from "./Components/Whoregister";
import Instructions from "./Components/Instructions";
import Finallpadetail from "./Components/Finallpadetail";
 
 
function App() {
  return (
    <div className="App bg-gradient-to-r from-orange-100 to-green-50">
      <Router>
        <Nav/>
         <Routes>
          <Route path="/" element={<Regency/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/calculators" element={<IHtCalculators/>}/>
          <Route path="/get-started" element={<Back/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/typeofLPA" element={<Typeoflpa/>}/>
          <Route path="/capacity" element={<Check/>}/>
          <Route path="/donorinfo" element={<Donorinfo/>}/>
          <Route path="/lpaused" element={<LPAused/>}/>
           <Route path="/addattorney" element={<Addattorney/>}/>
           <Route path="/attorneyinfo" element={<Addattorneyinfo/>}/>
           <Route path="/donorwant" element={<Donorwant/>}/>
          <Route path="/replace" element={<Replaceattornydet/>}/>
          <Route path="/provider" element={<Certificateprovider/>}/>
          <Route path="/certidet" element={<Certidetail/>}/>
          <Route path="/aboutlpa" element={<AboutLPA/>}/>
          <Route path="/who" element={<Whoregister/>}/>
          <Route path="/instruction" element={<Instructions/>}/>
          <Route path="/final" element={<Finallpadetail/>}/>
      </Routes>
      <Footer/>
      </Router>
     </div>
  );
}

export default App;
