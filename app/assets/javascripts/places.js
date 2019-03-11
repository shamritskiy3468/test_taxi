// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
var fuck1, fuck2;

function initMap(lat, lng) {
    var myCoords = new google.maps.LatLng(lat, lng);
    var mapOptions = {
    center: myCoords,
    zoom: 14
    };
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);
    var marker = new google.maps.Marker({
        position: myCoords,
        map: map
    });
}

function initMap2() {
    var lat = document.getElementById('place_latitude').value;
    var lng = document.getElementById('place_longitude').value;
    var loc = {};
    var geocoder = new google.maps.Geocoder();
    // if not defined create default position
    if (!lat || !lng) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var cur = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            fuck1 = cur.lat;
            fuck2 = cur.lng;

            document.getElementById('place_latitude').value = fuck1;
            document.getElementById('place_longitude').value = fuck2;
                //   infoWindow.setPosition(cur);
                //   infoWindow.setContent('You');
            });
        fuck1 = document.getElementById('place_latitude').value = lat;
        fuck2 = document.getElementById('place_longitude').value = lng;

    }
        console.log("I'm HERE --- >" + fuck1);
        console.log("I'm HERE --- >" + fuck2);
        var myCoords = new google.maps.LatLng(fuck1, fuck2);
        var mapOptions = {
            center: myCoords,
            zoom: 14
        };
        var map = new google.maps.Map(document.getElementById('map2'), mapOptions);
        var marker = new google.maps.Marker({
            position: myCoords,
            animation: google.maps.Animation.DROP,
            map: map,
            draggable: true
        });

        // refresh marker position and recenter map on marker
        function refreshMarker(){
            var lat = document.getElementById('place_latitude').value;
            var lng = document.getElementById('place_longitude').value;
            var myCoords = new google.maps.LatLng(lat, lng);
            marker.setPosition(myCoords);
            map.setCenter(marker.getPosition());   
        }

        // when input values change call refreshMarker
        document.getElementById('place_latitude').onchange = refreshMarker;
        document.getElementById('place_longitude').onchange = refreshMarker;

        // when marker is dragged update input values
        marker.addListener('drag', function() {
            latlng = marker.getPosition();
            newlat=(Math.round(latlng.lat()*1000000))/1000000;
            newlng=(Math.round(latlng.lng()*1000000))/1000000;
            document.getElementById('place_latitude').value = newlat;
            document.getElementById('place_longitude').value = newlng;
        });

        // When drag ends, center (pan) the map on the marker position
        marker.addListener('dragend', function() {
            map.panTo(marker.getPosition());   
        });
}



    // loc.lat = google.loader.ClientLocation.latitude;
    // loc.lng = google.loader.ClientLocation.longitude;
    // var latlng = new google.maps.LatLng(loc.lat, loc.lng);
    // geocoder.geocode({'latLng': latlng}, function(results, status) {
    //     if(status == google.maps.GeocoderStatus.OK) {
    //         alert(results[0]['formatted_address']);
    //     };
    // });