import L from "leaflet";
import { useMap } from "react-leaflet";
import { useEffect } from "react";

export default function Legend({ position }) {
  const map = useMap();

  const legendControl = L.control({ position: position });

  legendControl.onAdd = function () {
    const div = L.DomUtil.create("div", "legend");

    div.innerHTML += `<h1 style="text-align:center;font-weight: 700; font-size: 1.5em;padding:5px">Legenda</h1>`;
    div.innerHTML += `<table style="border-collapse: collapse;padding:5px;">
      <tr >
        <td style="background-color: #371904; width: 50px; "></td>
        <td style="padding-left:1rem">> 500 penduduk/km<sup>2</sup></td>
      </tr>
      <tr >
        <td style="background-color: #572805; width: 50px; "></td>
        <td style="padding-left:1rem">100-500 penduduk/km<sup>2</sup></td>
      </tr>
      <tr >
        <td style="background-color: #C1997B; width: 50px; "></td>
        <td style="padding-left:1rem">0-100 penduduk/km<sup>2</sup></td>
      </tr>
      <tr>
        <td style="width: 50px; "><span style="display: inline-block; width: 10px; height: 10px; border-radius: 50%; background-color: blue; border: 1px solid white;"></span></td>
        <td style="padding-left:1rem"">Antena USO Telkomsat</td>
      </tr>
      <tr>
        <td style="width: 50px; "><span style="display: inline-block; width: 10px; height: 10px; border-radius: 50%; background-color: red; border: 1px solid white;"></span></td>
        <td style="padding-left:1rem"">BTS Selular</td>
      </tr>
      <tr>
        <td style="width: 50px; "><span style="display: inline-block; width: 10px; height: 10px; border-radius: 50%; background-color: green; border: 1px solid white;"></span></td>
        <td style="padding-left:1rem"">Sebaran Starlink</td>
      </tr>
    </table>`;

    return div;
  };

  useEffect(() => {
    legendControl.addTo(map);
    return () => {
      legendControl.remove();
    };
  }, [legendControl, map]);

  return null;
}
