var myApp = angular.module('myApp', []);

var baseURL = 'http://localhost:8081/';
myApp.value('clientId', 'a12345654321x');
myApp.controller('AppCtrl', ['$scope', '$http', function ($scope, $http) {
    console.log("Hello World from controller");
}]);
