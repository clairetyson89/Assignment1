var map = L.map('mapid').setView([35.691544, -105.944183], 12);
L.tileLayer('https://tiles.wmflabs.org/hikebike/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
var marker1 = L.marker([35.691544, -105.944183]).addTo(map);
var marker2 = L.marker([35.7, -105.944183]).addTo(map);
var marker3 = L.marker([35.691544, -105.9]).addTo(map);

var circle = L.circle([35.691544, -105.944183], {
    color: 'green',
    fillColor: '#005500',
    fillOpacity: 0.4,
    radius: 1800
}).addTo(map);

var polygon = L.polygon([
    [35.7, -105.95],
    [35.696, -105.96],
    [35.691544, -105.944183]
]).addTo(map);

marker1.bindPopup("<b>Hello world!</b><br>I am popup #1.").openPopup();
marker2.bindPopup("<b>Hello world!</b><br>I am popup #2.").openPopup();
marker3.bindPopup("<b>Hello world!</b><br>I am popup #3.").openPopup();
circle.bindPopup("I am a green circle.");
polygon.bindPopup("I am a blue polygon.");

/*var popup = L.popup()
    .setLatLng([35.691544, -105.944183])
    .setContent("I am a standalone popup.")
    .openOn(map);
    */
 /*function onMapClick(e) {
    alert("You clicked the map at " + e.latlng);
}

map.on('click', onMapClick); */

