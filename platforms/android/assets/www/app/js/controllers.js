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

  ModuleMyApp.controller('loginController', ['$scope', function($scope) {
      
    $scope.userName = 0;
    $scope.passWord = 0; 

    $scope.queryUsuarios = function(tx) {
      var domUserName = document.getElementById("txtuser");
      var query = "SELECT * FROM USUARIOS WHERE USUARIOS.NOMBRE = '" + domUserName.value + "'";
      tx.executeSql(query, [], $scope.queryCorrecto, $scope.errorDB);
    };
    
    $scope.queryAdmin = function (tx) {
      tx.executeSql("CREATE TABLE IF NOT EXISTS USUARIOS (ID INTEGER PRIMARY KEY AUTOINCREMENT, NOMBRE TEXT NOT NULL, PASSWORD TEXT NOT NULL)");
      var query = "SELECT * FROM USUARIOS WHERE USUARIOS.NOMBRE = 'ADMIN'";
      tx.executeSql(query, [], $scope.CreateAmdin, $scope.errorDB);
    };

    $scope.login = function(){
      var db = window.openDatabase("fedesaludDB", "1.0", "Fedesalid DB", 200000);
      db.transaction($scope.queryUsuarios, $scope.errorDB);
    };

    $scope.onDeviceReady = function(){
      var db = window.openDatabase("fedesaludDB", "1.0", "Fedesalud DB", 200000);
      db.transaction($scope.queryAdmin, $scope.errorDB);
    };

    //En caso de error
    $scope.errorDB = function(error) {
      alert("Error BD: " + error.code);
    };

    $scope.CreateAmdin = function (tx, resultados) {
      var encontroUsuario = resultados.rows.length;

      if(encontroUsuario == 0){
        tx.executeSql("INSERT INTO USUARIOS (NOMBRE, PASSWORD) VALUES ('Administrador', '123456')");
        tx.executeSql("INSERT INTO USUARIOS (NOMBRE, PASSWORD) VALUES ('Encuestador1', 'Encuestador#1')");
        tx.executeSql("INSERT INTO USUARIOS (NOMBRE, PASSWORD) VALUES ('Encuestador2', 'Encuestador#2')");
        tx.executeSql("INSERT INTO USUARIOS (NOMBRE, PASSWORD) VALUES ('Encuestador3', 'Encuestador#3')");
      }
      else
      {
        tx.executeSql("DELETE FROM USUARIOS");

        tx.executeSql("INSERT INTO USUARIOS (NOMBRE, PASSWORD) VALUES ('Administrador', '123456')");
        tx.executeSql("INSERT INTO USUARIOS (NOMBRE, PASSWORD) VALUES ('Encuestador1', 'Encuestador#1')");
        tx.executeSql("INSERT INTO USUARIOS (NOMBRE, PASSWORD) VALUES ('Encuestador2', 'Encuestador#2')");
        tx.executeSql("INSERT INTO USUARIOS (NOMBRE, PASSWORD) VALUES ('Encuestador3', 'Encuestador#3')");
      }
    };

    $scope.queryCorrecto = function (tx, resultados) {
      var encontroUsuario = resultados.rows.length;

      if(encontroUsuario >= 1){
        $scope.userName = resultados.rows.item(0).NOMBRE;
        $scope.passWord = resultados.rows.item(0).PASSWORD;

        var domUserName = document.getElementById("txtuser");
        var domPassword = document.getElementById("txtpassword");

        if($scope.userName == domUserName.value && $scope.passWord == domPassword.value){
          alert("Inició Sesión! Felicitaciones");
        }
        else{
          alert("Nombre de usuario o contraseña invalidos, intentelo de nuevo."); 
        }
      }
      else{
        alert("Nombre de usuario o contraseña invalidos, intentelo de nuevo.");
      }
    };

    document.addEventListener("deviceready", $scope.onDeviceReady , false);

  }]);
