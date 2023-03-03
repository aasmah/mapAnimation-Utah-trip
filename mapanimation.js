// This array contains the coordinates for all bus stops between MIT and Harvard
const busStops = [
  [-71.093729, 42.359244],
  [-71.094915, 42.360175],
  [-71.0958, 42.360698],
  [-71.099558, 42.362953],
  [-71.103476, 42.365248],
  [-71.106067, 42.366806],
  [-71.108717, 42.368355],
  [-71.110799, 42.369192],
  [-71.113095, 42.370218],
  [-71.115476, 42.372085],
  [-71.117585, 42.373016],
  [-71.118625, 42.374863],
];
// TODO: add your own access token
mapboxgl.accessToken = 'pk.eyJ1IjoiYWFzbWFoODAiLCJhIjoiY2xlcmRwa3c0MGEyNDN0cXRqZGhzd3R2eSJ9.UJ-Z1_jLdagx-AD4wKMqeg';
// This is the map instance
let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-71.104081, 42.365554],
    zoom: 14,
});
// TODO: add a marker to the map at the first coordinates in the array busStops. The marker variable should be named "marker"
// Create a new marker.
var marker = new mapboxgl.Marker()
    //sample code marker.setLngLat([-71.092761, 42.357575]);
    //use upperCase / camelCase for setLngLat
marker.setLngLat(busStops[0]);
marker.addTo(map);


// counter here represents the index of the current bus stop
var counter = 0;
//sample code  move frm dr Abel's lesson
function move() {
    // TODO: move the marker on the map every 1000ms. Use the function marker.setLngLat() to update the marker coordinates
    setTimeout(() => { 
      // Use counter to access bus stops in the array busStops
        if (counter >= busStops.length) return;
        marker.setLngLat(busStops[counter]);
        counter++; 
        // Make sure you call move() after you increment the counter.
        move();
    }, 1000);
}