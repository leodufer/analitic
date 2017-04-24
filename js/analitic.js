angular.module('analitic',['firebase'])
    .controller('MainCtrl', MainCtrl);

    function MainCtrl($firebaseArray, $scope){
        
        navigator.geolocation.getCurrentPosition(function(location){
            $scope.geolocation = location;
            console.log($scope.geolocation);
            $scope.$digest();
         })
        var ref = firebase.database().ref().child("encuestados");
        $scope.operadores = $firebaseArray(ref);
        $scope.operadores.$add({name:'German'});
        $scope.operadores.$add({name:'Pedro'});


    };