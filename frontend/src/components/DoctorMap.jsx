import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, Circle } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// FIX marker icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

// ✅ SAMPLE_CLINICS DEFINED HERE
const SAMPLE_CLINICS = [
  { id: 1, name: "City Clinic", lat: 28.6200, lng: 77.2100, phone: "011-1234" },
  { id: 2, name: "Health Point", lat: 28.6150, lng: 77.2050, phone: "011-2345" },
  { id: 3, name: "Family Care", lat: 28.6185, lng: 77.2150, phone: "011-3456" },
  { id: 4, name: "Doctor House", lat: 28.6170, lng: 77.2080, phone: "011-4444" }
];

export default function DoctorMap() {
  const [clinics] = useState(SAMPLE_CLINICS);
  const [userPos, setUserPos] = useState(null);

  // get GPS location
  useEffect(() => {
    if (!navigator.geolocation) return;

    navigator.geolocation.getCurrentPosition(
      (pos) =>
        setUserPos([pos.coords.latitude, pos.coords.longitude]),
      () => {}
    );
  }, []);

  const defaultCenter = [28.6139, 77.2090]; // fallback center

  return (
    <MapContainer
      center={userPos || defaultCenter}
      zoom={14}
      style={{ height: "600px", width: "100%" }}
      scrollWheelZoom={false}
      doubleClickZoom={false}
      whenCreated={(map) => {
        map.dragging.disable();
        map.scrollWheelZoom.disable();
        map.doubleClickZoom.disable();
        map.touchZoom.disable();
        map.boxZoom.disable();
        map.keyboard.disable();
        map.zoomControl.remove();
      }}
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* user position */}
      {userPos && (
        <>
          <Marker position={userPos} draggable={false}>
            <Popup>You are here</Popup>
          </Marker>
          <Circle center={userPos} radius={500} />
        </>
      )}

      {/* clinic markers */}
      {clinics.map((clinic) => (
        <Marker
          key={clinic.id}
          position={[clinic.lat, clinic.lng]}
          draggable={false}
        >
          <Popup>
            <strong>{clinic.name}</strong>
            <br />
            Phone: {clinic.phone}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
