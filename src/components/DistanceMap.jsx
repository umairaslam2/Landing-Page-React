// src/components/DistanceMap.jsx
import React, { useEffect } from 'react';
import L from 'leaflet';  // Import Leaflet for map functionality
import 'leaflet/dist/leaflet.css';  // Leaflet CSS for map styling
import '../DistanceMap.css';  // Custom styles for the Distance Map

const DistanceMap = () => {
  useEffect(() => {
    // Initialize the map
    const map = L.map('map').setView([51.505, -0.09], 13);  // Default coordinates for the map

    // OpenStreetMap tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    return () => {
      map.remove();  // Clean up map on component unmount
    };
  }, []);

  return (
    <div className="distance-map-container">
      <h1>Distance Map</h1>
      <div id="map" className="map"></div>  {/* Div where the map will render */}
    </div>
  );
};

export default DistanceMap;

