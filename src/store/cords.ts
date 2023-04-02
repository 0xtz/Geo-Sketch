// zustand
import { LatLngExpression } from "leaflet";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

// types
type ShapeStore = {
  shapeCoords: LatLngExpression[] | [];
  setShapeCoords: (coords: any[]) => void;
};

// store
export const useCordsStore = create<ShapeStore>((set) => ({
  shapeCoords: [],
  setShapeCoords: (coords) => set({ shapeCoords: coords }),
}));

// user coords store

type UserMapCenter = {
  userCoords: LatLngExpression;
  setUserCoords: (coords: any) => void;
};

export const userMapCenter = create<UserMapCenter>((set) => ({
  userCoords: [34.0256, -6.8361],
  setUserCoords: (coords) => set({ userCoords: coords }),
}));
