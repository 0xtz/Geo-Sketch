import { useState } from "react";
import {
  FeatureGroup,
  MapContainer,
  TileLayer,
  ZoomControl,
} from "react-leaflet";
import { EditControl } from "react-leaflet-draw";
import { LatLngExpression } from "leaflet";
import { useCordsStore } from "../../store/cords";

export default function Map() {
  const [coords, setCoords] = useState<LatLngExpression[] | null>(null);

  function handleCreated(e: any) {
    const { layerType, layer } = e;
    if (layerType === "polygon") {
      const latlngs = layer
        .getLatLngs()[0]
        .map((latlng: any) => [latlng.lat, latlng.lng]);
      setCoords(latlngs);
    }
  }
  // handlePolygonComplete
  function handlePolygonComplete() {
    useCordsStore.setState({ shapeCoords: coords });
    // export to zustand

    console.log("handlePolygonComplete", coords);
  }

  return (
    <>
      <MapContainer center={[31.7917, 7.0926]} zoom={8} zoomControl={false}>
        {/* zoom controlls */}
        <ZoomControl position="bottomright" />

        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <FeatureGroup>
          <EditControl
            position="topright"
            onCreated={handleCreated}
            draw={{
              polyline: false,
              circle: false,
              rectangle: false,
              circlemarker: false,
            }}
          />
          {/* export button */}
          <button className="export" onClick={handlePolygonComplete}>
            Finish Drawing
          </button>
        </FeatureGroup>
      </MapContainer>
    </>
  );
}
