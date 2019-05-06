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
    var p_lat = parseFloat(document.getElementById('place_lat').value);
    var p_lon = parseFloat(document.getElementById('place_lon').value);
    var d_lat = parseFloat(document.getElementById('dist_lat').value);
    var d_lon = parseFloat(document.getElementById('dist_lon').value);

    var start_point = new google.maps.LatLng(p_lon, p_lat);
    var end_point = new google.maps.LatLng(d_lon, d_lat);

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: start_point
    });

    marker1 = new google.maps.Marker({
      map: map,
      draggable: false,
      position: start_point
    });

    marker2 = new google.maps.Marker({
      map: map,
      draggable: false,
      position: end_point
    });

    var bounds = new google.maps.LatLngBounds(
        marker1.getPosition(), marker2.getPosition());
        map.fitBounds(bounds);

    poly = new google.maps.Polyline({
      strokeColor: '#ef0000',
      strokeOpacity: 1.0,
      strokeWeight: 3,
      map: map,
    });

    geodesicPoly = new google.maps.Polyline({
      strokeColor: '#CC0099',
      strokeOpacity: 1.0,
      strokeWeight: 3,
      geodesic: true,
      map: map
    });

    update();

  }

  function update() {
        var path = [marker1.getPosition(), marker2.getPosition()];
        poly.setPath(path);
        geodesicPoly.setPath(path);
        var heading = google.maps.geometry.spherical.computeHeading(path[0], path[1]);
  }