import React from "react";

import { Routes, Route } from "react-router-dom";

import HomePage from "./HomePage";
import Preview from "./Preview";

// map style
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";

import "./App.scss";

export default function App() {
  return (
    <>
      <Routes>
        {/* ROUTES */}
        <Route path="/" element={<HomePage />} />
        <Route path="/preview" element={<Preview />} />
        {/* 404 */}
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </>
  );
}
