// This array contains the coordinates for all bus stops between MIT and Harvard
const canyons = [
  [36.2093° N, 115.1995° W],
  [37.2982° N, 113.0263° W],
  [37.5930° N, 112.1871° W],
  [38.7331° N, 109.5925° W],
  [43.0225° N, 89.3466° W],
  [38.2136° N, 109.9025° W],
  [ 36.456086°N, -114.5330392°W],
  
];
// TODO: add your own access token
mapboxgl.accessToken = 'pk.eyJ1IjoiYWFzbWFoODAiLCJhIjoiY2xlcmRwa3c0MGEyNDN0cXRqZGhzd3R2eSJ9.UJ-Z1_jLdagx-AD4wKMqeg';
// This is the map instance
let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [38.7331° N, 109.5925° W],
    zoom: 20,
});
// TODO: add a marker to the map at the first coordinates in the array busStops. The marker variable should be named "marker"
// Create a new marker.
var marker = new mapboxgl.Marker()
    //sample code marker.setLngLat([-71.092761, 42.357575]);
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
