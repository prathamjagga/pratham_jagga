import { Routes, Route } from "react-router-dom";
import React from "react";

import "./Styles/App.css";

import Search from "./Pages/Search";

function App() {
  return (
    <Routes>
      <Route path="/" Component={Search} />
    </Routes>
  );
}

export default App;
