var map = L.map('map',{
    center: [45, -98],
    zoom:5,
    minZoom: 3,
    maxZoom: 14,
    zoomControl: false
})

var spiderbee = L.tileLayer('https://api.mapbox.com/styles/v1/alinaalina/cjdf3zrd89h672spkz10c2j7b/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYWxpbmFhbGluYSIsImEiOiJjamRmM3c4M20wM2Q1MndvMHR5d3B3Z3JuIn0.gLm14to9IRdaLHdodrmdhg', {
    minZoom: 3,
    maxZoom: 14
}).addTo(map);

var place = L.marker([45, -97]).addTo(map);

var zone = L.circle([44, -94],{
    color: 'red',
    fillColor: 'red',
    opacity: .75,
    radius: 5000
}).addTo(map);

var area = L.polygon([[44,-93],[43,-89],[41,-93]],{
    fillColor: 'red',
    opacity: 1,
    color: 'red'
}).addTo(map);

place.bindPopup("<h1>I'm here</h1>");

area.bindPopup("<em>Hello!</em>");

zone.bindPopup('I cannot believe!');