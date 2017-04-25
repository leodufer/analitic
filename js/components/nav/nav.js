angular.module('Nav',[])
    .directive('sideNav',function(){
        return {
            restrict: 'AE',
            replace:'true',
            templateUrl:'js/components/nav/nav.html'
        };
    });