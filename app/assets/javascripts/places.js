function initMap(lat, lng) {
    console.log('MARK1');
    debugger;
    var myCoords = new google.maps.LatLng(lat, lng);
    var mapOptions = {
    center: myCoords,
    zoom: 16
    };
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);
    var marker = new google.maps.Marker({
        position: myCoords,
        map: map
    });
}

function initMap2() {
    var lat = document.getElementById('trip_place_attributes_longitude').value;
    var lng = document.getElementById('trip_place_attributes_latitude').value;
    if (!lat || !lng){
        lat=53.891037;
        lng=27.550839;
        document.getElementById('trip_place_attributes_longitude').value = lat;
        document.getElementById('trip_place_attributes_latitude').value = lng;
    }
    var myCoords = new google.maps.LatLng(lat, lng);
    var mapOptions = {
    center: myCoords,
    zoom: 16
    };
    var map = new google.maps.Map(document.getElementById('map2'), mapOptions);
    var marker = new google.maps.Marker({
        position: myCoords,
        animation: google.maps.Animation.DROP,
        map: map,
        draggable: true
    });
    function refreshMarker(){
        var lat = document.getElementById('trip_place_attributes_longitude').value;
        var lng = document.getElementById('trip_place_attributes_latitude').value;
        var myCoords = new google.maps.LatLng(lat, lng);
        marker.setPosition(myCoords);
        map.setCenter(marker.getPosition());   
    }
    document.getElementById('trip_place_attributes_longitude').onchange = refreshMarker;
    document.getElementById('trip_place_attributes_latitude').onchange = refreshMarker;
    marker.addListener('drag', function() {
        latlng = marker.getPosition();
        newlat=(Math.round(latlng.lat()*1000000))/1000000;
        newlng=(Math.round(latlng.lng()*1000000))/1000000;
        document.getElementById('trip_place_attributes_longitude').value = newlat;
        document.getElementById('trip_place_attributes_latitude').value = newlng;
    });
    marker.addListener('dragend', function() {
        map.panTo(marker.getPosition());   
    });
}

function initMap3() {
    var lat = document.getElementById('trip_destination_attributes_longitude').value;
    var lng = document.getElementById('trip_destination_attributes_latitude').value;
    if (!lat || !lng){
        lat=53.931561;
        lng=27.646166;
        document.getElementById('trip_destination_attributes_longitude').value = lat;
        document.getElementById('trip_destination_attributes_latitude').value = lng;
    }
    var myCoords = new google.maps.LatLng(lat, lng);
    var mapOptions = {
    center: myCoords,
    zoom: 16
    };
    var map = new google.maps.Map(document.getElementById('map3'), mapOptions);
    var marker = new google.maps.Marker({
        position: myCoords,
        animation: google.maps.Animation.DROP,
        map: map,
        draggable: true
    });
    function refreshMarker(){
        var lat = document.getElementById('trip_destination_attributes_longitude').value;
        var lng = document.getElementById('trip_destination_attributes_latitude').value;
        var myCoords = new google.maps.LatLng(lat, lng);
        marker.setPosition(myCoords);
        map.setCenter(marker.getPosition());   
    }
    document.getElementById('trip_destination_attributes_longitude').onchange = refreshMarker;
    document.getElementById('trip_destination_attributes_latitude').onchange = refreshMarker;
    marker.addListener('drag', function() {
        latlng = marker.getPosition();
        newlat=(Math.round(latlng.lat()*1000000))/1000000;
        newlng=(Math.round(latlng.lng()*1000000))/1000000;
        document.getElementById('trip_destination_attributes_longitude').value = newlat;
        document.getElementById('trip_destination_attributes_latitude').value = newlng;
    });
    marker.addListener('dragend', function() {
        map.panTo(marker.getPosition());   
    });
}

        var marker1, marker2;
      var poly, geodesicPoly;
      function initMapDist() {
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 1,
          center: {lat: 53.932685, lng: 27.646016}
        });

        map.controls[google.maps.ControlPosition.TOP_CENTER].push(
            document.getElementById('info'));

        marker1 = new google.maps.Marker({
          map: map,
          draggable: true,
          position: {lat: 53.931413, lng: 27.646213 }
        });

        marker2 = new google.maps.Marker({
          map: map,
          draggable: true,
          position: {lat: 53.919659, lng: 27.595443 }
        });

        var bounds = new google.maps.LatLngBounds(
            marker1.getPosition(), marker2.getPosition());
        map.fitBounds(bounds);

        poly = new google.maps.Polyline({
          strokeColor: '#1ec310',
          strokeOpacity: 1.0,
          strokeWeight: 3,
          map: map,
        });

        geodesicPoly = new google.maps.Polyline({
          strokeColor: '#CC0099',
          strokeOpacity: 1.0,
          strokeWeight: 3,
          map: map
        });
      }