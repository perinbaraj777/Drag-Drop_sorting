'use client';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

export default function MapView() {
  return (
    <div className='mt-10'>
    <MapContainer center={[28.6139, 77.2090]} zoom={13} scrollWheelZoom={true} style={{ height: '100vh', width: '100%' }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[28.6139, 77.2090]}>
        <Popup>India Gate</Popup>
      </Marker>
    </MapContainer>
    </div>
  );
}
