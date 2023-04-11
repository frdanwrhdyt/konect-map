import "leaflet/dist/leaflet.css";
import "./Maps.css";

import { MapContainer, TileLayer, useMapEvents, useMap } from "react-leaflet";
import { useState, useEffect } from "react";
import axios from "axios";

import Desa from "../components/Desa";
import Bts from "../components/Bts";
import Legend from "../components/Legend";
import Uso from "../components/Uso";
import Sl from "../components/Sl";

const baseURL = "http://0.0.0.0:5757/";
const ZOOM = 9;

export default function MapWithCenterChange() {
  const [zoom, setZoom] = useState(0);
  const [coordinate, setCoordinate] = useState(null);

  const [desa, setDesa] = useState();
  const [bts, setBts] = useState();
  const [uso, setUso] = useState();
  const [sl, setSl] = useState();

  const [center, setCenter] = useState({
    lat: null,
    lng: null,
  });
  const [lastCenter, setLastCenter] = useState({
    lat: null,
    lng: null,
  });

  function MapComponent() {
    const map = useMap();

    const handleMoveEnd = () => {
      const bounds = map.getBounds();
      const c = map.getCenter();
      setCenter(c);
      setCoordinate([
        bounds.getNorthEast().lat.toFixed(5),
        bounds.getNorthEast().lng.toFixed(5),
        bounds.getSouthWest().lat.toFixed(5),
        bounds.getSouthWest().lng.toFixed(5),
      ]);
      setBts(null);
      setDesa(null);
    };
    map.on("moveend", handleMoveEnd);

    return null;
  }

  function GetZoom() {
    // eslint-disable-next-line no-unused-vars
    const map = useMapEvents({
      zoom: (z) => {
        setZoom(z.target._zoom);
      },
    });
    return null;
  }

  useEffect(() => {
    async function fetchDesa() {
      console.log("request desa");
      try {
        const [ymin, xmin, ymax, xmax] = coordinate;
        await axios
          .get(
            `${baseURL}desa?xmin=${xmin}&ymin=${ymin}&xmax=${xmax}&ymax=${ymax}`
          )
          .then((r) => {
            // const data = Object.values(r.data);
            const data = JSON.parse(r.data);
            setDesa(data);
          })
          .catch((error) => {
            console.log(error);
          });
      } catch (error) {
        console.error(error);
      }
    }
    async function fetchBts() {
      console.log(`request bts ${baseURL}`);
      try {
        const [ymin, xmin, ymax, xmax] = coordinate;
        await axios
          .get(
            `${baseURL}bts?xmin=${xmin}&ymin=${ymin}&xmax=${xmax}&ymax=${ymax}`
          )
          .then((r) => {
            const data = JSON.parse(r.data);
            setBts(data);
          })
          .catch((error) => {
            console.log(error);
          });
      } catch (error) {
        console.error(error);
      }
    }
    async function fetchUso() {
      try {
        await axios
          .get(`${baseURL}uso`)
          .then((r) => {
            const data = JSON.parse(r.data);
            setUso(data);
          })
          .catch((err) => {
            console.log(err);
          });
      } catch (err) {
        console.error(err);
      }
    }
    async function fetchSl() {
      try {
        await axios
          .get(`${baseURL}sl`)
          .then((r) => {
            const data = JSON.parse(r.data);
            setSl(data);
          })
          .catch((err) => {
            console.log(err);
          });
      } catch (err) {
        console.error(err);
      }
    }
    fetchUso();
    fetchSl();
    if (zoom >= ZOOM) {
      if (center.lat !== lastCenter.lat && center.lng !== lastCenter.lng) {
        fetchDesa();
        fetchBts();
        setLastCenter(center);
        console.log("true");
      }
    } else if (zoom < ZOOM) {
      setBts(null);
      setDesa(null);
    }
  }, [bts, center, coordinate, desa, lastCenter, zoom]);

  return (
    <div>
      <MapContainer
        center={[-5, 110]}
        zoom={5}
        scrollWheelZoom={false}
        maxZoom={18}
        minZoom={4}
      >
        <GetZoom />
        <MapComponent />

        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        />
        <Legend position="topright" />
        <Desa data={desa} />
        <Bts data={bts} />
        <Uso data={uso} />
        <Sl data={sl} />
      </MapContainer>
    </div>
  );
}
