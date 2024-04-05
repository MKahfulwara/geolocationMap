import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Map = ({ onClick, selectedLocation }) => {
  const handleMapClick = (e) => {
    const { lat, lng } = e.latlng;
    onClick({ lat, lng });
  };

  const MapClickHandler = () => {
    useMapEvents({
      click: (e) => {
        handleMapClick(e);
      },
    });
    return null;
  };

  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={13}
      style={{ height: "400px", width: "100%" }}
      scrollWheelZoom={false}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <MapClickHandler />
      {selectedLocation && (
        <Marker position={[selectedLocation.lat, selectedLocation.lng]}>
          <Popup>Your selected location</Popup>
        </Marker>
      )}
    </MapContainer>
  );
};
export default Map;
