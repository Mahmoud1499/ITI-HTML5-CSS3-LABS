function getLoc() {
  navigator.geolocation.getCurrentPosition(showLoc);
}
function showLoc(e) {
  var long = e.coords.longitude;
  var lat = e.coords.latitude;
  console.log(e, long, lat);
  location.assign("http://maps.google.com/maps?q" + lat + ",+" + long);
}
