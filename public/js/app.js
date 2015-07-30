angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives']).
    config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'partials/listOfShops.html',
                controller:indexCtrl
            }).
            when('/addShop',{
                templateUrl:'partials/addShop.html',
                controller: addShopCtrl
            }).
            when('/addThing/:id',{
                templateUrl:'partials/addThing.html',
                controller:addThingCtrl
            }).
            when('/tableOfThings/:id',{
                templateUrl:'partials/tableOfThings.html',
                controller: tableOfThingsCtrl
            }).
            when('/editThing/:id',{
                templateUrl:'partials/editThing.html',
                controller:editThingCtrl
            }).
            when('/editShop/:id',{
                templateUrl:'partials/editShop.html',
                controller:editShopCtrl
            }).
            otherwise({
                redirectTo: '/'
            });
        $locationProvider.html5Mode(true);
    }]);