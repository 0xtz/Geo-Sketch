import React, { useState } from "react";
import {
  BiArrowToTop,
  BiArrowFromTop,
  BiBarChartAlt2,
  BiCaretUp,
  BiCaretDown,
  BiCog,
  BiEraser,
} from "react-icons/bi";
import { Link } from "react-router-dom";
import { useCordsStore, userMapCenter } from "../../store/cords";

export default function Info() {
  const { shapeCoords } = useCordsStore();
  const { userCoords } = userMapCenter();

  // LOCAL STATE
  const [settings, setSettings] = useState({
    lat: userCoords[0],
    lng: userCoords[1],
  });
  // clear coords
  function clearCoords() {
    useCordsStore.setState({ shapeCoords: [] });
  }

  // set center
  function setCenter() {
    userMapCenter.setState({ userCoords: [settings.lat, settings.lng] });
  }

  // close info panel
  const [showInfo, setShowInfo] = React.useState<boolean>(true);

  return (
    <div className="custom-control">
      <div className="info-header">
        <h1>Info</h1>
        {/* icons  */}
        <div className="icon" onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <BiCaretUp /> : <BiCaretDown />}
        </div>
      </div>

      {/* INFO */}
      <div className={`info-body ${showInfo ? "show" : "hide"}`}>
        {/* LAT LONG CENTER */}
        <div className="info-settings">
          <h2 className="title">
            <BiCog /> Settings:
          </h2>
          <div>
            <label htmlFor="lat">Lat:</label>
            <input
              type="number"
              name="lat"
              value={settings.lat}
              onChange={(e) => {
                setSettings({ ...settings, lat: e.target.value });
              }}
            />
          </div>
          <div>
            <label htmlFor="lng">Lng:</label>
            <input
              type="number"
              name="lng"
              value={settings.lng}
              onChange={(e) => {
                setSettings({ ...settings, lng: e.target.value });
              }}
            />
          </div>
          <button onClick={setCenter} className="btn">
            Set Center
          </button>
        </div>
        {/*  */}
        <h2 className="title">
          <BiBarChartAlt2 />
          Coordinates :
        </h2>
        {shapeCoords?.length! > 0 ? (
          <div>
            <ul>
              {shapeCoords!.map((coord, index) => {
                return (
                  <li
                    key={index}
                    // idk how to fix this lat : any lng : any error
                    className="small">
                    {/* @ts-ignore */}
                    Lat: {coord[0]} Lng: {coord[1]}
                  </li>
                );
              })}
            </ul>
          </div>
        ) : (
          <p className="small">No coordinates</p>
        )}
        {/*  */}
        <div className="info-export">
          <button onClick={clearCoords} className="btn">
            <BiEraser /> Clear
          </button>

          <Link to="/preview" className="btn">
            <BiArrowToTop /> Export
          </Link>
        </div>
      </div>
    </div>
  );
}
