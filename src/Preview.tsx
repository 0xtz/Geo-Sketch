import React, { useRef } from "react";
import { MapContainer, TileLayer, Polyline } from "react-leaflet";
import { useCordsStore } from "./store/cords";

export default function Preview() {
  const { shapeCoords } = useCordsStore();
  const pageRef = useRef(null);

  return (
    <main className="preview">
      <div className="page" ref={pageRef}>
        <h2>geo sketched map</h2>
        <div id="map" style={{ width: "100%", height: "400px" }}>
          {shapeCoords && shapeCoords.length > 0 ? (
            <MapContainer
              center={shapeCoords ? shapeCoords[0] : [0, 0]}
              zoom={18}
              scrollWheelZoom={false}>
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Polyline positions={shapeCoords || []} />
            </MapContainer>
          ) : (
            <h2>No data</h2>
          )}
        </div>
        {/* show the shapeCoords in a table */}
        <table>
          <thead>
            <tr>
              <th>lat</th>
              <th>lng</th>
            </tr>
          </thead>
          <tbody>
            {shapeCoords.length === 0 ? (
              <tr>
                <td>no data</td>
                <td>no data</td>
              </tr>
            ) : (
              shapeCoords?.map((cord, index) => (
                <tr key={index}>
                  <td>{cord[0]}</td>
                  <td>{cord[1]}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </main>
  );
}
