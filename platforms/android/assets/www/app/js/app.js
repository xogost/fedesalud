'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'ngCookies',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers',
  'sync.controllers',
  'ui.bootstrap',
  'mobile-angular-ui',
  'mobile-angular-ui.touch',
  'mobile-angular-ui.scrollable',
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {templateUrl: 'partials/login.html', controller: 'loginController'});
  $routeProvider.when('/logout', {templateUrl: 'partials/logout.html', controller: 'logoutController'});
  $routeProvider.when('/menu', {templateUrl: 'partials/menu.html', controller: 'MenuController'});
  $routeProvider.when('/instrumentouno', {templateUrl: 'partials/instrumentouno.html', controller: 'instrumentounoController'});
  $routeProvider.when('/editarInstrumentouno/:id', {templateUrl: 'partials/editInstrumentoUno.html', controller: 'editarEncuestaController'});
  $routeProvider.when('/listencuestas', {templateUrl: 'partials/listEncuestas.html', controller: 'listadoInstrumentosController'});
  $routeProvider.when('/sincronizar', {templateUrl: 'partials/sincronizar.html', controller: 'sincronizarController'});
  
  $routeProvider.otherwise({redirectTo: '/login'});
}]);
