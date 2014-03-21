'use strict';

/* Controllers */

var ModuleMyApp = angular.module('myApp.controllers', []);

  //=================================================================
  //=============        InstrumentoUno Controller   ================
  //=================================================================
  ModuleMyApp.controller('instrumentounoController', ['$scope', '$cookies' , function($scope, $cookies) {
  	
    $scope.formData = {};

    $scope.guardar = function(){
      console.log(this.formData);

      var db = window.openDatabase("fedesaludDB", "1.0", "Fedesalud DB", 200000);
      db.transaction($scope.querySaveEncuesta, $scope.errorDB);
    };

    //En caso de error
    $scope.querySaveEncuesta = function(tx) {
      var arrayData =  $scope.formData;
      console.log($cookies.iduser);
      for(var item in arrayData){
        var sql = "INSERT INTO ENCUESTAS (IDCAMPO, VALOR, SINCRONIZADO, USUARIO) VALUES ('" + item + "','" + arrayData[item] + "', 0, '" + $cookies.user + "')";
        //console.log(sql);
        tx.executeSql(sql);
      }
      alert("La encuesta se almaceno correctamente!");
      window.location = '#/menu'
    };

    //En caso de error
    $scope.errorDB = function(error) {
      alert("Error BD: " + error.code);
      console.log(error);
    };

  }]);

  //=================================================================
  //=============        Login Contoller             ================
  //=================================================================

  ModuleMyApp.controller('loginController', ['$scope', '$cookies', function($scope, $cookies) {
      
    $scope.userName = 0;
    $scope.passWord = 0; 

    $scope.queryUsuarios = function(tx) {
      var domUserName = document.getElementById("txtuser");
      var query = "SELECT * FROM USUARIOS WHERE USUARIOS.NOMBRE = '" + domUserName.value + "'";
      tx.executeSql(query, [], $scope.queryCorrecto, $scope.errorDB);
    };
    
    $scope.queryAdmin = function (tx) {
      tx.executeSql("CREATE TABLE IF NOT EXISTS USUARIOS (ID INTEGER PRIMARY KEY AUTOINCREMENT, NOMBRE TEXT NOT NULL, PASSWORD TEXT NOT NULL)");
      //tx.executeSql("DROP TABLE ENCUESTAS");
      tx.executeSql("CREATE TABLE IF NOT EXISTS ENCUESTAS (ID INTEGER PRIMARY KEY AUTOINCREMENT, IDCAMPO TEXT NOT NULL, VALOR TEXT NOT NULL, SINCRONIZADO INTEGER NOT NULL, USUARIO TEXT NOT NULL)");
      var query = "SELECT * FROM USUARIOS WHERE USUARIOS.NOMBRE = 'ADMIN'";
      tx.executeSql(query, [], $scope.CreateAmdin, $scope.errorDB);
    };

    $scope.login = function(){
      var db = window.openDatabase("fedesaludDB", "1.0", "Fedesalid DB", 200000);
      db.transaction($scope.queryUsuarios, $scope.errorDB);
    };

    $scope.onDeviceReady = function(){
      if($cookies.user == undefined){
        var db = window.openDatabase("fedesaludDB", "1.0", "Fedesalud DB", 200000);
        db.transaction($scope.queryAdmin, $scope.errorDB);
      }else{
        window.location = '#/menu';
      }
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
        $scope.idUser = resultados.rows.item(0).ID;
        $scope.userName = resultados.rows.item(0).NOMBRE;
        $scope.passWord = resultados.rows.item(0).PASSWORD;

        var domUserName = document.getElementById("txtuser");
        var domPassword = document.getElementById("txtpassword");

        if($scope.userName == domUserName.value && $scope.passWord == domPassword.value){
          var favoriteCookie = $cookies.myFavorite;
        
          $cookies.user = $scope.idUser + ":" + $scope.userName;
          
          window.location = '#/menu';
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
  
  //=================================================================
  //=============            Menu Controller         ================
  //=================================================================

  ModuleMyApp.controller('MenuController', ['$scope', '$cookies', function($scope, $cookies) {
    if($cookies.user == undefined){
      window.location = '#/login';
    }
  }]);

  //=================================================================
  //=============            Logout Controller         ================
  //=================================================================

  ModuleMyApp.controller('logoutController', ['$scope', '$cookies', function($scope, $cookies) {
    $scope.logout = function(){
      $cookies.user = undefined;
      window.location = "#/login";
    };
  }]);
