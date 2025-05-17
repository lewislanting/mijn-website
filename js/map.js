var coords = [51.250965, 4.497778]

var map = L.map('map').setView(coords, 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 13,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var circle = L.circle(coords, {
    color: 'green',
    fillColor: 'lightgreen',
    fillOpacity: 0.25,
    radius: 2200
}).addTo(map);

var marker = L.marker(coords).addTo(map).bindPopup("<b>Schoten 2900</b>").openPopup();
