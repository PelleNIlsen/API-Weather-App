import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const icon = L.icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    idonRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

function ChangeMapView({ coords }) {
    const map = useMap();
    map.setView(coords, map.getZoom());
    return null;
}

const MapComponent = ({ latitude, longitude }) => {
    return (
        <MapContainer center={[latitude, longitude]} zoom={13} style={{ height: '400px', width: '100%' }}>
            <ChangeMapView coords={[latitude, longitude]} />
            <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
            <Marker position={[latitude, longitude]} icon={icon}>
                <Popup>
                    Current Location
                </Popup>
            </Marker>
        </MapContainer>
    )
}

export default MapComponent