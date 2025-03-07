
// Leaflet.js Cheatsheet

// Initialize the map
var map = L.map('map').setView([51.505, -0.09], 13);

// Add a tile layer (OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Add a marker
var marker = L.marker([51.5, -0.09]).addTo(map);

// Add a circle
var circle = L.circle([51.508, -0.11], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);

// Add a polygon
var polygon = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
]).addTo(map);

// Add a popup
marker.bindPopup("Hello! I am a marker.").openPopup();
circle.bindPopup("I am a circle.");
polygon.bindPopup("I am a polygon.");

// Add a custom popup
var popup = L.popup()
    .setLatLng([51.5, -0.09])
    .setContent("Custom popup example.")
    .openOn(map);

// Handling map click events
map.on('click', function(e) {
    alert("You clicked the map at " + e.latlng);
});

// Adding a GeoJSON layer
var geojsonFeature = {
    "type": "Feature",
    "properties": {
        "name": "Random Point",
        "popupContent": "This is a random point."
    },
    "geometry": {
        "type": "Point",
        "coordinates": [-0.09, 51.5]
    }
};
L.geoJSON(geojsonFeature).addTo(map);
