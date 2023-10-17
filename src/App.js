import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import Facebook from "./components/Facebook/Facebook/Facebook";
import Instagram from "./components/Instagram/Instagram/Instagram";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/facebook" element={<Facebook />} />
          <Route exact path="/instagram" element={<Instagram />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
