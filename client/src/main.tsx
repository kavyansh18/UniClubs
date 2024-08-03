import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import HomePg from "./Pages/HomePg";
// import Clubs from "./Pages/Clubss";
import Clubs from "./Pages/Clubs";


ReactDOM.render(
  <React.StrictMode>
    <Router>
      
        <Routes>
          <Route path="/" element={<HomePg />} />
          <Route path="/clubs" element={<Clubs />} />
        </Routes>
      
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
