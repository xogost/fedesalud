'use strict';

/* Controllers */

var ModuleMyApp = angular.module('myApp.controllers', []);

  //=================================================================
  //=============        InstrumentoUno Controller   ================
  //=================================================================
  ModuleMyApp.controller('instrumentounoController', ['$scope', '$cookies' , function($scope, $cookies) {
  	
    $scope.formData = {};

    $scope.guardar = function(){
      //console.log(this.formData);

      var db = window.openDatabase("fedesaludDB", "1.0", "Fedesalud DB", 200000);
      db.transaction($scope.querySaveEncuesta, $scope.errorDB);
    };

    //En caso de error
    $scope.querySaveEncuesta = function(tx) {
      var arrayData =  $scope.formData;
      var usercookie = window.localStorage.getItem("user");
      var nombreEncuesta = arrayData["nombreEncuesta"];
      var sql = "INSERT INTO ENCUESTAS (NOMBRE, SINCRONIZADO, USUARIO) VALUES ('" + nombreEncuesta + "',0, '" + usercookie + "')";
      tx.executeSql(sql, [], function(error){ console.log(error); });
      tx.executeSql("SELECT MAX(ID) as ID FROM ENCUESTAS",[], 
        function(tx, result) { 
          for(var item in arrayData){
            var sql = "INSERT INTO DATAENCUESTAS (IDENCUESTA, IDCAMPO, VALOR, SINCRONIZADO, USUARIO) VALUES (" + result.rows.item(0).ID + ",'" + item + "','" + arrayData[item] + "', 0, '" + usercookie + "')";
            tx.executeSql(sql);
          }
        }, 
        function(err){ 
          console.log("Error: " + err); alert(err.code); 
        }
      );

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
      //tx.executeSql("DROP TABLE ENCUESTAS");
      //tx.executeSql("DROP TABLE DATAENCUESTAS");
      tx.executeSql("CREATE TABLE IF NOT EXISTS ENCUESTAS (ID INTEGER PRIMARY KEY AUTOINCREMENT, NOMBRE TEXT NOT NULL, SINCRONIZADO INTEGER NOT NULL, USUARIO TEXT NOT NULL)");
      tx.executeSql("CREATE TABLE IF NOT EXISTS DATAENCUESTAS (ID INTEGER PRIMARY KEY AUTOINCREMENT, IDENCUESTA INTEGER NOT NULL, IDCAMPO TEXT NOT NULL, VALOR TEXT NOT NULL, SINCRONIZADO INTEGER NOT NULL, USUARIO TEXT NOT NULL)");
      var query = "SELECT * FROM USUARIOS";
      tx.executeSql(query, [], $scope.CreateAmdin, $scope.errorDB);
    };

    $scope.login = function(){
      var db = window.openDatabase("fedesaludDB", "1.0", "Fedesalid DB", 200000);
      db.transaction($scope.queryUsuarios, $scope.errorDB);
    };

    $scope.onDeviceReady = function(){
      if(window.localStorage.getItem("user") == undefined){
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
          window.localStorage.setItem("user", $scope.idUser + ":" + $scope.userName);
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

  }]);
  
  //=================================================================
  //=============            Menu Controller         ================
  //=================================================================

  ModuleMyApp.controller('MenuController', ['$scope', function($scope) {
    if(window.localStorage.getItem("user") == undefined){
      window.location = '#/login';
    }
  }]);

  //=================================================================
  //=============            Logout Controller         ==============
  //=================================================================

  ModuleMyApp.controller('logoutController', ['$scope', function($scope) {
    $scope.logout = function(){
      window.localStorage.removeItem("user");
      window.location = "#/login";
    };
  }]);
  //=================================================================
  //=============            Listado Controller         =============
  //=================================================================
  ModuleMyApp.controller('listadoInstrumentosController', ['$scope', function($scope) {
    if(window.localStorage.getItem("user") == undefined){
      window.location = '#/login';
    }
    else{
      $scope.refresh = function(){
        window.location = '#/listencuestas';
      };   

      $scope.obtenerEncuestas = function(){
        var db = window.openDatabase("fedesaludDB", "1.0", "Fedesalid DB", 200000);
        db.transaction($scope.queryEncuestas, $scope.errorDB);

        var div = document.getElementById("tablaEncuestas");
        div.innerHTML = localStorage.getItem("htmlEncuestas");
        localStorage.removeItem("htmlEncuestas");
      };
      
      $scope.editarEncuesta = function(id){
        window.location = '#/editarInstrumentouno/' + id;
      };

      $scope.queryEncuestas = function(tx){ 
        var sql = 'select ID,NOMBRE from ENCUESTAS';
        tx.executeSql(sql, [], 
          function(tx, result){
            var html = '';
            for(var i = 0; i < result.rows.length; i++){
              html += "<tr><td>" + result.rows.item(i).NOMBRE  + "</td><td><a href='#/editarInstrumentouno/" + result.rows.item(i).ID + "' >Editar</a></td></tr>";
            }

            localStorage.setItem("htmlEncuestas", html);
          },
          function(error){
            console.log(error.code);
          }
        );
        console.log(localStorage.getItem("htmlEncuestas"));
        
      };

      //En caso de error
      $scope.errorDB = function(error) {
        alert("Error BD: " + error.code);
      };
    }
  }]);

  //=================================================================
  //=============        editarEncuesta Controller   ================
  //=================================================================
  ModuleMyApp.controller('editarEncuestaController', ['$scope', '$routeParams' , function($scope, $routeParams) {
    
    $scope.idEncuesta = $routeParams.id;
    $scope.formData = {};

    $scope.guardar = function(){
      var db = window.openDatabase("fedesaludDB", "1.0", "Fedesalud DB", 200000); 
      db.transaction($scope.queryUpdateEncuesta, $scope.errorDB);
    };

    $scope.cargarEncuesta = function(){
      var db = window.openDatabase("fedesaludDB", "1.0", "Fedesalud DB", 200000); 
      var sql = "SELECT * FROM DATAENCUESTAS WHERE IDENCUESTA = " + $scope.idEncuesta;
      db.transaction(function(tx){
          tx.executeSql(sql, [],function(tx, result){
            for(var i = 0; i < result.rows.length; i++){
              var objControl = document.getElementsByName(result.rows.item(i).IDCAMPO);
              for(var itemControl in objControl){
                if(objControl[itemControl].type == 'radio'){
                  if(objControl[itemControl].value == result.rows.item(i).VALOR)
                    objControl[itemControl].checked = true;
                }
                else
                  objControl[itemControl].value = result.rows.item(i).VALOR;
              }
              
              $scope[result.rows.item(i).IDCAMPO] = result.rows.item(i).VALOR;
            }
          },$scope.errorDB); 
      }, $scope.errorDB);

      document.getElementsByName("nombreEncuesta").value = "PRuebaaaaa";
    };

    //En caso de error
    $scope.queryUpdateEncuesta = function(tx) {
      var arrayData =  $scope.formData;
      var usercookie = window.localStorage.getItem("user");
      var nombreEncuesta = arrayData["nombreEncuesta"];
      var sql = "UPDATE ENCUESTAS SET SINCRONIZADO = 0, NOMBRE = '" + nombreEncuesta + "' WHERE ID = " + $scope.idEncuesta;
      tx.executeSql(sql, [], function(error){ console.log(error); });
      for(var item in arrayData){
        var sql = "UPDATE DATAENCUESTAS SET SINCRONIZADO = 0, VALOR = '" + arrayData[item] + "' WHERE IDENCUESTA = " + $scope.idEncuesta + " AND IDCAMPO = '" + item + "'";
        tx.executeSql(sql);
      }

      alert("La encuesta se actualizó correctamente!");
      window.location = '#/menu'
    };

    //En caso de error
    $scope.errorDB = function(error) {
      alert("Error BD: " + error.code);
      console.log(error);
    };

  }]);
