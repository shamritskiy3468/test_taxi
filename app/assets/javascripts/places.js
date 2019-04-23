// Place all the behaviors and hooks related to the matching controller here.

function initMap(lat, lng) {
    console.log('MARK1');
    debugger;
    var myCoords = new google.maps.LatLng(lat, lng);
    var mapOptions = {
    center: myCoords,
    zoom: 14
    };
    debugger;
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);
    debugger;
    var marker = new google.maps.Marker({
        position: myCoords,
        map: map
    });
}

function initMap2() {
    console.log('MARK2');
    debugger;
    var lat = document.getElementById('place_latitude').value;
    var lng = document.getElementById('place_longitude').value;
    // if not defined create default position
    if (!lat || !lng){
        lat=51.5;
        lng=-0.125;
        document.getElementById('place_latitude').value = lat;
        document.getElementById('place_longitude').value = lng;
    }
    debugger;
    var myCoords = new google.maps.LatLng(lat, lng);
    debugger;
    var mapOptions = {
    center: myCoords,
    zoom: 14
    };
    console.log("Initializeing");
    debugger;
    var map = new google.maps.Map(document.getElementById('map2'), mapOptions);
    debugger;
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