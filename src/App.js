
import React from "react";
  import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
 //  import Footer from "./Components/Footer";
import Nav from "./Components/Nav";
import Hom1 from "./Components/Hom1";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import IHtCalculators from "./Components/IHtCalculators";
import Back from "./Components/Back";
import Profile from "./Components/Profile";
import Typeoflpa from "./Components/Typeoflpa";
import Check from "./Components/Check";
 
 
function App() {
  return (
    <div className="App bg-gradient-to-r from-orange-100 to-green-50">
      <Router>
        <Nav/>
         <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/calculators" element={<IHtCalculators/>}/>
          <Route path="/lpa" element={<Back/>}/>
          <Route path="/will" element={<Profile/>}/>
          <Route path="/trusts" element={<Typeoflpa/>}/>
          <Route path="/legal" element={<Check/>}/>
       
      </Routes>
      <Footer/>
      </Router>
     </div>
  );
}

export default App;
