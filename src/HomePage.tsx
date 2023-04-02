import React from "react";

import Map from "./components/Map";
import Info from "./components/Info";

export default function HomePage() {
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
