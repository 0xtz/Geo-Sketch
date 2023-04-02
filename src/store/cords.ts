// zustand
import { LatLngExpression } from "leaflet";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

// types
type ShapeStore = {
  shapeCoords: LatLngExpression[] | null;
  setShapeCoords: (coords: any[]) => void;
};

// store
export const useCordsStore = create<ShapeStore>((set) => ({
  shapeCoords: [],
  setShapeCoords: (coords) => set({ shapeCoords: coords }),
}));
