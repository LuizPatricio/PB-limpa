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
//morro santiago 
var marker = L.marker([-28.42108931030395, -48.89180012906524]).addTo(map);
//escola santiago
var marker = L.marker([-28.414626848518377, -48.893104707302065]).addTo(map);
//bittencourt
var marker = L.marker([-28.413754640831346, -48.89357066490777]).addTo(map);
//final da rua laranjeiras
var marker = L.marker([-28.43210388782826, -48.87808478255354]).addTo(map);
//auge
var marker = L.marker([-28.42294402310637, -48.89406597240606]).addTo(map);
//posto novo
var marker = L.marker([-28.42384518842759, -48.89530688039843]).addTo(map);
// posto de saude laranjeiras
var marker = L.marker([-28.42944751244451, -48.86922926881995]).addTo(map);