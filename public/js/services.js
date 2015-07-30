'use strict';

angular.module('myApp.services', []).
  value('version', '0.1').service('shopService',function(){
        this.shops = [];
        this.currShop = 0;
    });

