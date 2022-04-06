import React from 'react';
import './App.css';
import { BrowserRouter, Routes , Route } from "react-router-dom";


import ALittleComponent from "./pages/ALittleComponent";
import NavBar from "./components/navbar/NavBar";
import Home from "./pages/Home";
import Kitchen from "./pages/Kitchen";

function App() {
  return (
      <BrowserRouter>
          <NavBar/>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/kitchen" element={<Kitchen/>}/>
              <Route path="/office" element={<ALittleComponent/>}/>
              <Route path="/other" element={<ALittleComponent/>}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
