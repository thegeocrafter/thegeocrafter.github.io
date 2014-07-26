var map;

var mbTiles = new L.tileLayer('http://thegeocrafter.url.ph/opencarto/mbtiles.php?db=opencarto.mbtiles&z={z}&x={x}&y={y}', {
tms: true,
attribution: '&copy; <a href="http://thegeocrafter.github.io/" target="_blank">The Geocrafter</a>'
});

map = new L.Map("map",{
zoom: 15,
minZoom: 15,
maxZoom: 15,
center: [40.1042, -8.4838],
maxBounds: ([[40.0722,-8.5094],[40.1173,-8.4153]]),
layers: [mbTiles]
}).fitBounds([[40.0722,-8.5094],[40.1173,-8.4153]]);