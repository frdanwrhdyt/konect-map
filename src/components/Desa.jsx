import React from "react";
import { GeoJSON } from "react-leaflet";

export default function Desa({ data, properties }) {
  const geojsonStyle = (feature) => {
    const i = feature.properties.KEPADATAN;
    return {
      fillColor: i > 500 ? "#371904" : i > 100 ? "#572805" : "#C1997B",
      weight: 1,
      opacity: 0.5,
      color: "white",
      fillOpacity: 0.7,
    };
  };

  const onEachPolygon = (data, layer) => {
    layer.on("click", (event) => {
      layer
        .bindPopup(
          `<div className="w-full">
            
            <div className="flex justify-between">
              <div>Jumlah Penduduk</div>
              <div>${data.properties.JUMLAH_PENDUDUK}</div>
            </div>
            <div className="flex justify-between">
              <div>Jumlah KK</div>
              <div>${data.properties.JUMLAH_PENDUDUK}</div>
            </div>
            <div className="flex justify-between">
              <div>Luas Wilayah</div>
              <div>${data.properties.LUAS_WILAYAH}</div>
            </div>
            <div className="flex justify-between">
              <div>Kepadatan</div>
              <div>${data.properties.KEPADATAN}</div>
            </div>
            <div className="flex justify-between">
              <div>U10 - U20</div>
              <div>${data.properties["U10-20"]}</div>
            </div>
            <div className="flex justify-between">
              <div>U20 - U55</div>
              <div>${data.properties["U20-55"]}</div>
            </div>
            <div className="flex justify-between">
              <div>U60 - U75</div>
              <div>${data.properties["U60-75"]}</div>
            </div>
            <div className="flex justify-between">
              <div>Bekerja</div>
              <div>${data.properties.BEKERJA}</div>
            </div>
            <div className="flex justify-between">
              <div>Belum Bekerja</div>
              <div>${data.properties.BELUM_BEKERJA}</div>
            </div>
            <div className="flex justify-between">
              <div>Pensiun</div>
              <div>${data.properties.PENSIUN}</div>
            </div>
            <div className="flex justify-between">
              <div>Desa/Kelurahan</div>
              <div>${data.properties["DESA/KELURAHAN"]}</div>
            </div>
            <div className="flex justify-between">
              <div>Kabupaten/Kota</div>
              <div>${data.properties["KAB/KOTA"]}</div>
            </div>
            <div className="flex justify-between">
              <div>Provinsi</div>
              <div>${data.properties["PROVINSI"]}</div>
            </div>
          </div>`
        )
        .openPopup();
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
              style={geojsonStyle}
              onEachFeature={onEachPolygon}
            />
          );
        })
      ) : (
        <></>
      )}
      {/* <GeoJSON data={data} style={geojsonStyle} onEachFeature={onEachPolygon} /> */}
    </>
  );
}
