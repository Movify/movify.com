$(function() {


var markers = [

];

$('.c-map .c-map__list li').each(function(){
  var long = $(this).attr('data-map-long');
  var lat = $(this).attr('data-map-lat');
  var name = $(this).attr('data-map-lat');
  markers.push([long,lat,name])
});

var markers = [
  ['Belgium', 50.824020, 4.404050],
  ['Luxembourg', 49.604200, 6.136410]
];

var style = [
    {
        "featureType": "all",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "weight": "2.00"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#9c9c9c"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#f2f2f2"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 45
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#eeeeee"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#7b7b7b"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#465256"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#363744"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#070707"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    }
]

function initMap() {
  var center = {lat: 51.5159729, lng: -0.1015987},
      map = new google.maps.Map(document.getElementById('map'), {
        disableDefaultUI: true,
        center: center,
        zoom: 11,
        styles:style,
        zoomControl: true,
        streetViewControl: true,
  });
  var Markers = [];
  var iconNormal = 'https://res.cloudinary.com/dbeff0s0t/image/upload/v1580673292/movify/pin-movify.svg',
      iconSelected = 'https://res.cloudinary.com/dbeff0s0t/image/upload/v1580673292/movify/pin-movify.svg',
      bounds = new google.maps.LatLngBounds();
  function setMarkers(map) {
    for (var i = 0; i < markers.length; i++) {
      var marker = markers[i],
          myLatLng = new google.maps.LatLng(marker[1], marker[2]),
          eachMarker = new google.maps.Marker({
            record_id: i,
            position: myLatLng,
            map: map,
            animation: google.maps.Animation.DROP,
            icon: iconNormal,
            title: marker[0],
      });
      //var selectedMarker;
      bounds.extend(myLatLng);
      Markers.push(eachMarker);
      // choose from list
      $('.c-map__list li').on('click', function(){
        mapItem = $(this).index();
        changeMarker(mapItem);
        var thisLat = markers[mapItem] [1],
            thisLon = markers[mapItem] [2];
        map.panTo({lat: thisLat, lng: thisLon});
        setTimeout(function() {
            map.setZoom(16);
        }, 700);
      });
      function changeMarker(record_id){
        for (i in Markers){
          Markers[i].setIcon(iconNormal);
          Markers[record_id].setIcon(iconSelected);
        }
      }
    }
  }
  map.fitBounds(bounds);
  setMarkers(map);
}
google.maps.event.addDomListener(window, 'load', initMap);
});
