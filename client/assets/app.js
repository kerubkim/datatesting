// Create Angular App
var app = angular.module("myApp", ['ngRoute']);

// Configure Angular Routes
app.config(function($routeProvider) {
    $routeProvider
        .when('/',{
            templateUrl: 'partials/loginReg.html',
            controller:'loginController'
        })
        .when('/wall', {
            templateUrl: 'partials/wall.html',
            controller: 'wallController'
        })
        .otherwise({
            redirectTo: '/'
        })
});
