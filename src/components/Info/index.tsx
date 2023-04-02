import React from "react";
import { BiArrowToTop, BiArrowFromTop } from "react-icons/bi";
import { useCordsStore } from "../../store/cords";

export default function Info() {
  const { shapeCoords } = useCordsStore();

  // clear coords
  function clearCoords() {
    useCordsStore.setState({ shapeCoords: [] });
  }

  // close info panel
  const [showInfo, setShowInfo] = React.useState<boolean>(true);

  return (
    <div className="custom-control">
      <div className="info-header">
        <h2>Info</h2>
        {/* icons  */}
        <div className="icon" onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <BiArrowToTop /> : <BiArrowFromTop />}
        </div>
      </div>
      <div className={`info-body ${showInfo ? "show" : "hide"}`}>
        <h2>Coordinates:</h2>
        {shapeCoords?.length! > 0 ? (
          <div>
            <ul>
              {shapeCoords!.map((coord, index) => (
                <li key={index}>{`Lat: ${coord[0]} Lng: ${coord[1]}`}</li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  );
}
