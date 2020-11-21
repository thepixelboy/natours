/* eslint-disable */
const locations = JSON.parse(document.getElementById('map').dataset.locations);
console.log(locations);

mapboxgl.accessToken =
  'pk.eyJ1IjoidGhlcGl4ZWxib3kiLCJhIjoiY2tocnk0dWVoMHo1ajJ0cnNwc2g5azVxdiJ9.Z2py9UEhaCAQ8xytNYjxwQ';

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/thepixelboy/ckhryg0js2ao419t7jn8ob79d',
  scrollZoom: false,
  // center: [-118.1476948, 34.148757],
  // zoom: 8,
  // interactive: false,
});

const bounds = new mapboxgl.LngLatBounds();

locations.forEach((loc) => {
  // Create marker
  const el = document.createElement('div');
  el.className = 'marker';

  // Add marker
  new mapboxgl.Marker({
    element: el,
    anchor: 'bottom',
  })
    .setLngLat(loc.coordinates)
    .addTo(map);

  // Add popup
  new mapboxgl.Popup({ offset: 30 })
    .setLngLat(loc.coordinates)
    .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
    .addTo(map);

  // Extend map bounds to include current location
  bounds.extend(loc.coordinates);
});

map.fitBounds(bounds, {
  padding: {
    top: 200,
    bottom: 150,
    left: 100,
    right: 100,
  },
});
