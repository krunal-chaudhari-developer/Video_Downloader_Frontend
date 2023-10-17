import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import Facebook from "./components/Facebook/Facebook/Facebook";
import Instagram from "./components/Instagram/Instagram/Instagram";
import Youtube from "./components/Youtube/Youtube/Youtube";
import Snapchat from "./components/Snapchat/Snapchat/Snapchat";
import Linkedin from "./components/Linkedin/Linkedin/Linkedin";
import Twitter from "./components/Twitter/Twitter/Twitter";
import Pinterest from "./components/Pinterest/Pinterest/Pinterest";
import Spotify from "./components/Spotify/Spotify/Spotify";
import Vimeo from "./components/Vimeo/Vimeo/Vimeo";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/facebook" element={<Facebook />} />
          <Route exact path="/instagram" element={<Instagram />} />
          <Route exact path="/youtube" element={<Youtube />} />
          <Route exact path="/snapchat" element={<Snapchat />} />
          <Route exact path="/linkedin" element={<Linkedin />} />
          <Route exact path="/twitter" element={<Twitter />} />
          <Route exact path="/pinterest" element={<Pinterest />} />
          <Route exact path="/spotify" element={<Spotify />} />
          <Route exact path="/vimeo" element={<Vimeo />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
