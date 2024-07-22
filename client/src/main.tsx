import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

// Lazy load the components
const HomePg = lazy(() => import('./Pages/HomePg.tsx'));
const Clubs = lazy(() => import('./Pages/Clubs.tsx'));

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Suspense fallback={<div className="flex justify-center items-center h-full">Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePg />} />
          <Route path="/clubs" element={<Clubs />} />
        </Routes>
      </Suspense>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
