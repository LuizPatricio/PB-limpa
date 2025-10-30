var map = L.map('map').setView([-28.424554248263405, -48.87932610377725], 12);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
//sorveteria souza
var marker = L.marker([-28.42817146625198, -48.882797330888394]).addTo(map);
//padaria laranjeiras
var marker = L.marker([-28.43095320636672, -48.8714613417296]).addTo(map);
//triunfo
var marker = L.marker([-28.4264997252423, -48.88545773324723]).addTo(map);
//prefeitura santiago
var marker = L.marker([-28.41389452357522, -48.89347251510526]).addTo(map);
//cartorio
var marker = L.marker([-28.42636021504351, -48.88601731334215]).addTo(map);