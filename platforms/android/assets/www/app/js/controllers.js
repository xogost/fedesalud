'use strict';

/* Controllers */

var ModuleMyApp = angular.module('myApp.controllers', []);
  ModuleMyApp.controller('MyCtrl1', [function() {

  }]);
  ModuleMyApp.controller('MyCtrl2', [function() {

  }]);
  ModuleMyApp.controller('instrumentosController', ['$scope', function($scope) {
  	$scope.title = "Listado de Instrumentos";
  }]);
  ModuleMyApp.controller('instrumentounoController', ['$scope', function($scope) {
  	$scope.title = "Instrumento No. 1";
  }]);
