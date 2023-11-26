import React from "react";
import Home from "./Home";
import NetworkError from "./Errors/NetworkError";
import Error404 from "./Errors/Error404";
import Dashboard from "./Dashboard";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/network-error" element={<NetworkError />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
}

export default App;
