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
mapboxgl.accessToken = 'YOUR_MAPBOX_ACCESS_TOKEN'; // Replace with your actual access token

// This is the map instance
let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-112.167047, 37.662321],
    zoom: 5,
});

// TODO: add a marker to the map at the first coordinates in the array canyons. The marker variable should be named "marker"
// Create a new marker.
let marker = new mapboxgl.Marker()
    // Corrected: Use camelCase for setLngLat and access the first element of the canyons array
    .setLngLat(canyons[0])
    .addTo(map);

// counter here represents the index of the current canyon
let counter = 0;

function move() {
    // TODO: move the marker on the map every 1000ms. Use the function marker.setLngLat() to update the marker coordinates
    setTimeout(() => {
        // Use counter to access canyons in the array canyons
        if (counter >= canyons.length) return;  // Stop if counter exceeds the array length

        // Corrected: Use camelCase for setLngLat and access the current canyon using the counter
        marker.setLngLat(canyons[counter]);
        counter++;
        // Make sure you call move() after you increment the counter.
        move(); // Corrected: Recursively call move to continue the animation
    }, 1000);
}

// Start the animation.
move();
