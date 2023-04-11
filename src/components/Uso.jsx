import React from "react";
import { GeoJSON } from "react-leaflet";
import L from "leaflet";

export default function Uso({ data }) {
  const pointToLayer = (feature, latlng) => {
    return L.circleMarker(latlng, {
      radius: 5,
      fillColor: "blue",
      color: "#fff",
      weight: 1,
      opacity: 1,
      fillOpacity: 0.8,
    });
  };
  return (
    <>
      {data !== null && data !== undefined ? (
        data.features.map((d, i) => {
          return (
            <GeoJSON
              key={i}
              data={d}
              pointToLayer={pointToLayer}
              className="z-auto"
            />
          );
        })
      ) : (
        <></>
      )}
    </>
  );
}
