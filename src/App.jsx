import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroPage from "./pages/Home"; 


const App = () => {
  return (
    <Router>
  
      <Routes>
        <Route path="/" element={<HeroPage />} />

      </Routes>
    </Router>
  );
};

export default App;
