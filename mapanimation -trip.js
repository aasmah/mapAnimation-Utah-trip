// This array contains the coordinates for canyons n utah /nevada
const canyons = [
    [-114.442989, 36.540734],
    [-114.532962, 36.485874],


    [-112.9884495, 37.200947],



    [-112.528548, 37.048142],

    [-112.153309, 37.712820],


    [-112.167047, 37.662321],




    [-112.140631, 36.054515],

    [-114.721977, 36.141171],

    [-115.163235, 36.100812],



];

// TODO: add your own access token
mapboxgl.accessToken = 'pk.eyJ1IjoiYWFzbWFoODAiLCJhIjoiY2xlcmRwa3c0MGEyNDN0cXRqZGhzd3R2eSJ9.UJ-Z1_jLdagx-AD4wKMqeg';
// This is the map instance
let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-112.167047, 37.662321],
    zoom: 5,
});
// TODO: add a marker to the map at the first coordinates in the array busStops. The marker variable should be named "marker"
// Create a new marker.
var marker = new mapboxgl.Marker()
    //sample code marker.setLngLat([-114.532962,36.485874]);
    //use upperCase / camelCase for setLngLat
marker.setLngLat(canyons[0]);
marker.addTo(map);


// counter here represents the index of the current bus stop
var counter = 0;
//sample code  move frm dr Abel's lesson
function move() {
    // TODO: move the marker on the map every 1000ms. Use the function marker.setLngLat() to update the marker coordinates
    setTimeout(() => {
        // Use counter to access bus stops in the array busStops
        if (counter >= canyons.length) return;
        marker.setLngLat(canyons[counter]);
        counter++;
        // Make sure you call move() after you increment the counter.
        move();
    }, 1000);
}
