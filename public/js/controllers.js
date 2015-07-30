function indexCtrl($scope,$http,$location,shopService){
    $scope.shops = shopService.shops;
    $scope.getNum = shopService.getNum;
}

function addShopCtrl($scope,$location, shopService){
    $scope.shop = {};
    $scope.addShop = function(){
        var addedShop = {};
        addedShop = $scope.shop;
        addedShop.things = [];
        addedShop.num = shopService.shops.length;
        shopService.shops.push(addedShop);
        $location.path('/');
    }
}
function addThingCtrl($scope,shopService, $routeParams, $location){
    $scope.thing = {};
    $scope.id = $routeParams.id;
    $scope.addThing = function(){
        var addedThing = $scope.thing;
        addedThing.num = shopService.shops[$routeParams.id].things.length;
        shopService.shops[$routeParams.id].things.push(addedThing);
        $location.path('/tableOfThings/'+$routeParams.id);
    }
}
function tableOfThingsCtrl($scope,shopService, $routeParams, $location){
    $scope.shop = shopService.shops[$routeParams.id];
    shopService.currShop = $routeParams.id;
}
function editThingCtrl ($scope,shopService, $routeParams, $location){
    $scope.thing = {};
    $scope.thing.name = shopService.shops[shopService.currShop].things[$routeParams.id].name;
    $scope.thing.description = shopService.shops[shopService.currShop].things[$routeParams.id].description;
    $scope.id = shopService.currShop;
    $scope.save = function(){
        shopService.shops[shopService.currShop].things[$routeParams.id].name = $scope.thing.name;
        shopService.shops[shopService.currShop].things[$routeParams.id].description = $scope.thing.description;
        $location.path('/tableOfThings/' + shopService.currShop);
    }
}
function editShopCtrl($scope,shopService, $routeParams, $location){
    $scope.shop = {};
    $scope.shop.name = shopService.shops[$routeParams.id].name;
    $scope.shop.adress = shopService.shops[$routeParams.id].adress;
    $scope.shop.worktime = shopService.shops[$routeParams.id].worktime;
    $scope.save = function(){
        shopService.shops[$routeParams.id].name = $scope.shop.name;
        shopService.shops[$routeParams.id].adress = $scope.shop.adress;
        shopService.shops[$routeParams.id].worktime = $scope.shop.worktime;
        $location.path('/');
    }

}