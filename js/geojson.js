/*
var geojsonFeature = 
{"type":"FeatureCollection","features":[{"type":"Feature","properties":{"City":"Tokyo","Pop_1985":30.3,"Pop_1990":32.53,"Pop_1995":33.59,"Pop_2000":34.45,"Pop_2005":35.62,"Pop_2010":36.83,"Pop_2015":38},"geometry":{"type":"Point","coordinates":[139.8088531,35.6840782]}},{"type":"Feature","properties":{"City":"Delhi","Pop_1985":7.33,"Pop_1990":9.73,"Pop_1995":12.41,"Pop_2000":15.73,"Pop_2005":18.67,"Pop_2010":21.94,"Pop_2015":25.7},"geometry":{"type":"Point","coordinates":[77.2198105,28.6471119]}},{"type":"Feature","properties":{"City":"Shanghai","Pop_1985":6.85,"Pop_1990":7.82,"Pop_1995":10.45,"Pop_2000":13.96,"Pop_2005":16.76,"Pop_2010":19.98,"Pop_2015":23.74},"geometry":{"type":"Point","coordinates":[121.4747009,31.2551594]}},{"type":"Feature","properties":{"City":"S_o Paulo","Pop_1985":13.39,"Pop_1990":14.78,"Pop_1995":15.91,"Pop_2000":17.01,"Pop_2005":18.29,"Pop_2010":19.66,"Pop_2015":21.07},"geometry":{"type":"Point","coordinates":[-46.633309,-23.55052]}},{"type":"Feature","properties":{"City":"Mumbai (Bombay)","Pop_1985":10.39,"Pop_1990":12.44,"Pop_1995":14.31,"Pop_2000":16.37,"Pop_2005":17.89,"Pop_2010":19.42,"Pop_2015":21.04},"geometry":{"type":"Point","coordinates":[72.877656,19.075984]}},{"type":"Feature","properties":{"City":"Ciudad de Mexico (Mexico City)","Pop_1985":14.28,"Pop_1990":15.64,"Pop_1995":17.02,"Pop_2000":18.46,"Pop_2005":19.28,"Pop_2010":20.13,"Pop_2015":21},"geometry":{"type":"Point","coordinates":[-99.133208,19.432608]}},{"type":"Feature","properties":{"City":"Beijing","Pop_1985":6.02,"Pop_1990":6.79,"Pop_1995":8.31,"Pop_2000":10.16,"Pop_2005":12.81,"Pop_2010":16.19,"Pop_2015":20.38},"geometry":{"type":"Point","coordinates":[116.3876495,39.9065704]}},{"type":"Feature","properties":{"City":"Kinki M.M.A. (Osaka)","Pop_1985":17.58,"Pop_1990":18.39,"Pop_1995":18.94,"Pop_2000":18.66,"Pop_2005":18.76,"Pop_2010":19.49,"Pop_2015":20.24},"geometry":{"type":"Point","coordinates":[-96.769831,32.83161]}},{"type":"Feature","properties":{"City":"Al-Qahirah (Cairo)","Pop_1985":8.33,"Pop_1990":9.89,"Pop_1995":11.96,"Pop_2000":13.63,"Pop_2005":15.17,"Pop_2010":16.9,"Pop_2015":18.77},"geometry":{"type":"Point","coordinates":[31.537,30.119799]}},{"type":"Feature","properties":{"City":"New York-Newark","Pop_1985":15.83,"Pop_1990":16.09,"Pop_1995":16.94,"Pop_2000":17.81,"Pop_2005":18.09,"Pop_2010":18.37,"Pop_2015":18.59},"geometry":{"type":"Point","coordinates":[-74.174462,40.689531]}},{"type":"Feature","properties":{"City":"Dhaka","Pop_1985":4.66,"Pop_1990":6.62,"Pop_1995":8.33,"Pop_2000":10.28,"Pop_2005":12.33,"Pop_2010":14.73,"Pop_2015":17.6},"geometry":{"type":"Point","coordinates":[90.3995667,23.7132301]}},{"type":"Feature","properties":{"City":"Karachi","Pop_1985":6.03,"Pop_1990":7.15,"Pop_1995":8.47,"Pop_2000":10.03,"Pop_2005":11.89,"Pop_2010":14.08,"Pop_2015":16.62},"geometry":{"type":"Point","coordinates":[67.0343704,24.9267101]}},{"type":"Feature","properties":{"City":"Buenos Aires","Pop_1985":9.96,"Pop_1990":10.51,"Pop_1995":11.39,"Pop_2000":12.41,"Pop_2005":13.33,"Pop_2010":14.25,"Pop_2015":15.18},"geometry":{"type":"Point","coordinates":[-58.3734398,-34.60849]}},{"type":"Feature","properties":{"City":"Kolkata (Calcutta)","Pop_1985":9.95,"Pop_1990":10.89,"Pop_1995":11.92,"Pop_2000":13.06,"Pop_2005":13.7,"Pop_2010":14.28,"Pop_2015":14.86},"geometry":{"type":"Point","coordinates":[88.363895,22.572646]}},{"type":"Feature","properties":{"City":"Istanbul","Pop_1985":5.41,"Pop_1990":6.55,"Pop_1995":7.67,"Pop_2000":8.74,"Pop_2005":10.51,"Pop_2010":12.7,"Pop_2015":14.16},"geometry":{"type":"Point","coordinates":[28.9638004,41.0130005]}}]}

L.geoJSON(geojsonFeature).addTo(map);
*/



/* Map of GeoJSON data from MegaCities.geojson */

//function to instantiate the Leaflet map


function createMap(){
    var map = L.map('map', {
        center: [20, 0],
        zoom: 2
    });

    L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>'
    }).addTo(map);

    getData(map);
};

function getData(map){
    $.ajax("data/MegaCities.geojson", {
        dataType: "json",
        success: function(response){
            L.geoJson(response).addTo(map);
        }
    });
};

$(document).ready(createMap);







/*
function getData(map){                                             //function to retrieve the data and place it on the map
    $.ajax("data/MegaCities.geojson", {                            //load the data
        dataType: "json",
        success: function(response){
            console.log(response)

            var markers = L.markerClusterGroup();                  //create an L.markerClusterGroup layer


            for (var i = 0; i < response.features.length; i++) {
                var a = response.features[i];
                var properties = "";                               //add properties html string to each marker
                for (var property in a.properties){
                    properties += "<p>" + property + ": " + a.properties[property] + "</p>";
                };
                var marker = L.marker(new L.LatLng(a.geometry.coordinates[1], a.geometry.coordinates[0]), { properties: properties });
                marker.bindPopup(properties);                      //add a popup for each marker
                markers.addLayer(marker);                          //add marker to MarkerClusterGroup
            }                                                      //loop through features to create markers and add to MarkerClusterGroup

            map.addLayer(markers);                                 //add MarkerClusterGroup to map
        }
    });
};
*/




/*
//上面一段的简化版

function getData(map){
    $.ajax("data/MegaCities.geojson", {                        //load the data
        dataType: "json",
        success: function(response){
            var geoJsonLayer = L.geoJson(response);            //create a Leaflet GeoJSON layer
            var markers = L.markerClusterGroup();              //create a L.markerClusterGroup layer
            markers.addLayer(geoJsonLayer);                    //add geojson to marker cluster layer
            map.addLayer(markers);                             //add marker cluster layer to map
        }
    });
};
*/













































