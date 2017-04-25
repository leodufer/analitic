angular.module('Main',['firebase'])
    .controller('MainCtrl', MainCtrl);

    function MainCtrl($firebaseArray, $scope){
        var ref = firebase.database().ref().child("encuestados");
        $scope.operadores = $firebaseArray(ref);
       /* $scope.operadores.$add({name:'German'});
        $scope.operadores.$add({name:'Pedro'});*/
    };