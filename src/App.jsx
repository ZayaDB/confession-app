import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import YesScreen from "./pages/YesScreen";
import Restaurants from "./pages/Restaurants";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/yes" element={<YesScreen />} />
        <Route path="/restaurants" element={<Restaurants />} />
      </Routes>
    </Router>
  );
}

export default App;
