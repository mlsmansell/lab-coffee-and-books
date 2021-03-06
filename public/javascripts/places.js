function initMap() {
    const mapInstance = new
    drawMap()
  getPlacesFromAPI()
}

function drawMap() {

  mapInstance = new google.maps.Map(document.querySelector('#placesMap'),
    {
      center: { lat: 40.423086, lng: -3.706298 },
      zoom: 15, 
      styles: mapStyles.retro
    }
  )
}

function getPlacesFromAPI() {
  axios
    .get('/api/places')
    .then(response => drawPlaces(response.data))
    .catch(err => console.log(err))
}

function drawPlaces(places) {

  places.forEach(elm => {

    let position = { lat: elm.location.coordinates[0], lng: elm.location.coordinates[1] }
    console.log(position)

    new google.maps.Marker({
      map: mapInstance,
      position,
      title: elm.name
  })
  })
}

initMap();