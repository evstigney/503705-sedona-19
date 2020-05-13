var initMap = function () {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: {lat: 59.936448, lng: 30.321076},
    disableDefaultUI: true,
  });

  var marker = new google.maps.Marker ({
    position: {lat: 59.935959, lng: 30.321002},
    icon: 'img/icon-map-marker.svg',
    map: map
  });
};