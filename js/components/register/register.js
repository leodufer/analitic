angular.module('Register',['firebase'])
    .controller('RegisterCtrl', RegisterCtrl)
    .controller('NewRegisterCtrl',NewRegisterCtrl);


    function RegisterCtrl($firebaseArray, $scope) {
        $scope.title = 'Registro de Encuestados';
        var ref = firebase.database().ref().child("encuestados");
        $scope.encuestados = $firebaseArray(ref);
    }
    function NewRegisterCtrl($firebaseArray, $scope,$location){

         navigator.geolocation.getCurrentPosition(function(location){
            $scope.geolocation = location;
            console.log($scope.geolocation);
            $scope.$digest();
         });

        var ref = firebase.database().ref().child("encuestados");
        $scope.encuestados = $firebaseArray(ref);

        $scope.save = function(encuestado){
            geolocation = {};
            geolocation.latitude = $scope.geolocation.coords.latitude;
            geolocation.longitude = $scope.geolocation.coords.longitude;
            geolocation.timestamp = $scope.geolocation.timestamp;

            encuestado.geolocation = geolocation;
            $scope.encuestados.$add(encuestado);
            $location.url('register')
            console.log(encuestado);
        };


        
    }