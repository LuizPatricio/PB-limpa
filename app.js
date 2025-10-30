var map = L.map('map').setView([-28.424554248263405, -48.87932610377725], 12);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([-28.42817146625198, -48.882797330888394]).addTo(map);