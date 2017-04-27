angular.module('Location',['firebase'])
    .controller('LocationCtrl',LocationCtrl);

    function LocationCtrl($scope,$firebaseArray) {

        var ref = firebase.database().ref().child("encuestados");
        $scope.encuestados = $firebaseArray(ref);
        $scope.encuestados.$loaded(function () {
            $scope.initialise();
            console.log('load')
        });

        $scope.title  = 'Ver ubicación'
            // Map Settings //
        $scope.initialise = function() {
            var myLatlng = new google.maps.LatLng(-24.065721999999997, -54.306978699999995);
            var mapOptions = {
                center: myLatlng,
                zoom: 16,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            var map = new google.maps.Map(document.getElementById("map"), mapOptions);
        // Geo Location /
           /* navigator.geolocation.getCurrentPosition(function(pos) {
                map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
                var myLocation = new google.maps.Marker({
                    position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
                    map: map,
                    animation: google.maps.Animation.DROP,
                    title: "Mi ubicación"
                });
            });*/
            $scope.map = map;
            // Additional Markers //
            $scope.markers = [];
            var infoWindow = new google.maps.InfoWindow();
            var n = 0;
            var createMarker = function (info){
                n++;
                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(info.geolocation.latitude, info.geolocation.longitude),
                    map: $scope.map,
                    animation: google.maps.Animation.DROP,
                    title: info.name
                });
                marker.content = '<div class="infoWindowContent">' + n + '</div>';
                console.log(info.name);
                google.maps.event.addListener(marker, 'click', function(){
                    infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
                    infoWindow.open($scope.map, marker);
                });
                $scope.markers.push(marker);
            }  
            for (i = 0; i < $scope.encuestados.length; i++){
                createMarker($scope.encuestados[i]);
            }

        };
      //  google.maps.event.addDomListener(document.getElementById("map"), 'load', $scope.initialise());
}