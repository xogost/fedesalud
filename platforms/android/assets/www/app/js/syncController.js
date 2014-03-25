'use strict';

/* Controllers */

var Modulesync = angular.module('sync.controllers', []);

ModuleMyApp.controller('sincronizarController', ['$scope', '$http' , function($scope, $http) {
  if(window.localStorage.getItem("user") == undefined){
    window.location = '#/login';
  }
  else{
    $scope.sincronizar = function(){
      jQuery("#sincronizando").html("Se esta realizando el proceso de sincronización por favor espere...");
      var db = window.openDatabase("fedesaludDB", "1.0", "Fedesalud DB", 200000);
        db.transaction($scope.queryGetSync, $scope.errorDB);
    };

    $scope.queryGetSync = function(tx){
      var sql = 'SELECT * FROM ENCUESTAS WHERE SINCRONIZADO = 0';
      tx.executeSql(sql, [], $scope.pushResultServer, $scope.errorDB);
    };

    $scope.pushResultServer = function(tx, result){
      for (var i = result.rows.length - 1; i >= 0; i--) {
        $http({
            method: "GET",
            url: "http://181.135.188.48:10005/fedesalud-sync/fedesalud-sync/index.php/getData",          
            params: {"data": JSON.stringify(result.rows.item(i))},
          }).success(function(idSync) {
            

          }).error(function() {
        });

        var sqlUpdate = "UPDATE ENCUESTAS SET SINCRONIZADO = 1 WHERE ID = " + result.rows.item(i).ID;
        tx.executeSql(sqlUpdate ,[], function(err){ console.log(err); });         

        var sql = 'SELECT * FROM DATAENCUESTAS WHERE SINCRONIZADO = 0';
        tx.executeSql(sql, [], $scope.pushResultDataEncuestasServer, $scope.errorDB);


      };
    };

    $scope.pushResultDataEncuestasServer = function(tx, result){
      if(result.rows.length == 0){
        jQuery("#sincronizando").html("No existen elementos a sincronizar");
      }
      for (var i = result.rows.length - 1; i >= 0; i--) {
        $http({
            method: "GET",
            url: "http://181.135.188.48:10005/fedesalud-sync/index.php/getData/DataEncuestas",          
            params: {"data": JSON.stringify(result.rows.item(i))},
          }).success(function(idSync) {
            

          }).error(function() {
        });

        var sqlUpdate = "UPDATE DATAENCUESTAS SET SINCRONIZADO = 1 WHERE ID = " + result.rows.item(i).ID;
        tx.executeSql(sqlUpdate ,[], function(err){ console.log(err); });         
      }
    };

    $scope.errorDB = function(error){
      console.log(error.code);
      console.log(error);
    };
  }
}]);