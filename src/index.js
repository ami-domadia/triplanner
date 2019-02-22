/*You will need the API key to use Mapbox. Here is a checklist for obtaining a key:

Go to https://www.mapbox.com/signup/ and sign up!
On the next page, choose "Integrate Mapbox" under Let's get started
On the next page, choose the "JS" option.
On the next page, choose the option "npm - Use a module bundler"
The following page contains instructions for using NPM. You should add the CSS link provided above your own CSS in your index.html file. It should looks something like the following
*/


const mapboxgl = require("mapbox-gl")
const key = require("./key.js")

mapboxgl.accessToken = key

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const markerDomEl = document.createElement("div"); // Create a new, detached DIV
markerDomEl.style.width = "32px";
markerDomEl.style.height = "39px";
markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

var marker = new mapboxgl.Marker(markerDomEl)
  .setLngLat([-74.009, 40.705])
  .addTo(map);