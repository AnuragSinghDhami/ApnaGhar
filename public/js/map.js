mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: "mapbox://styles/mapbox/streets-v12", // A default style
    center: listing.geometry.coordinates, // Use listing's coordinates to center the map
    zoom: 9 // starting zoom
});

// Create a marker with a popup
const marker = new mapboxgl.Marker({ color: "red" })
    .setLngLat(listing.geometry.coordinates) // Set marker at listing's coordinates
    .setPopup(new mapboxgl.Popup({offset: 25}).setHTML(
        `<h6>${listing.title}</h6><p>Exact location provided after booking</p>`
    ))
    .addTo(map);