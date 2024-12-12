import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import YesScreen from "./pages/YesScreen";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/yes" element={<YesScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
