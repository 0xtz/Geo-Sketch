import React from "react";

import Map from "./components/Map";
import Info from "./components/Info";

// map style
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";

import "./App.css";

export default function App() {
  return (
    <div className="container">
      <div className="leaflet-container">
        <Map />
      </div>
      <div className="info">
        <Info />
      </div>
    </div>
  );
}
