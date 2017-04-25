angular.module('Register',['firebase'])
    .controller('RegisterCtrl', RegisterCtrl);


    function RegisterCtrl($firebaseArray, $scope) {
        $scope.title = 'Registro de Encuestados';
         navigator.geolocation.getCurrentPosition(function(location){
            $scope.geolocation = location;
            $scope.$digest();
         })
        var ref = firebase.database().ref().child("encuestados");
        $scope.encuestados = $firebaseArray(ref);
    }