angular.module('analitic',['Main','Nav','Register','Location','ngRoute'])
    
    .config(function($routeProvider) {
        $routeProvider
        .when("/", {
            templateUrl : 'js/components/main/main.html',
            controller:'MainCtrl'
        })
        .when("/users", {
            templateUrl : "js/components/users/users.html",
            controller:'UsersCtrl'
        })
        .when("/register", {
            templateUrl : "js/components/register/register.html",
            controller:'RegisterCtrl'
        })
        .when("/register/new", {
            templateUrl : "js/components/register/new.html",
            controller:'NewRegisterCtrl'
        })
        .when("/location", {
            templateUrl : "js/components/location/location.html",
            controller:'LocationCtrl'
        })
        .otherwise({
            redirectTo: "/"
        });
    });