'use strict';

/* Controllers */

var ModuleMyApp = angular.module('myApp.controllers', []);

  //=================================================================
  //=============        InstrumentoUno Controller   ================
  //=================================================================
  ModuleMyApp.controller('instrumentounoController', ['$scope', function($scope) {
  	
    $scope.formData = {};

    $scope.load = function(){
        jQuery(document).ready(function(){
        $scope.formData = {
          tipoEncuesta: jQuery("#tipoEncuesta").val()
        };
        jQuery("textarea, input, select").addClass("form-control");

        jQuery("[id*='idradiosaliascampo2909']").change(function () {
          if(jQuery("#idradiosaliascampo290912916").is(":checked")){
            jQuery("#idaliascampo2910").removeAttr("disabled");
          }
          else{
            jQuery("#idaliascampo2910").attr("disabled","true").val("").removeAttr("checked");
          }
        });
        jQuery("[id*='idradiosaliascampo2909']").trigger("change");
        jQuery("[id*='idradiosaliascampo2916']").change(function () {
          if(jQuery("#idradiosaliascampo291612940").is(":checked")){
            jQuery("#idaliascampo2917").removeAttr("disabled");
          }
          else{
            jQuery("#idaliascampo2917").attr("disabled","true").val("").removeAttr("checked");
          }
        });
        jQuery("[id*='idradiosaliascampo2916']").trigger("change");
        jQuery("#idchecksaliascampo291412925").change(function () {
          if(jQuery(this).is(":checked")){
            jQuery("[id*='idradiosaliascampo2915'],[id*='idradiosaliascampo2916']").removeAttr("disabled");
          }
          else{
            jQuery("[id*='idradiosaliascampo2915'],[id*='idradiosaliascampo2916']").attr("disabled","true").val("").removeAttr("checked");
          }
        });
        jQuery("#idchecksaliascampo291412925").trigger("change");
        jQuery("#idchecksaliascampo291412926").change(function () {
          if(jQuery(this).is(":checked")){
            jQuery("[id*='idradiosaliascampo2916']").removeAttr("disabled");
          }
          else{
            jQuery("[id*='idradiosaliascampo2916']").attr("disabled","true").val("").removeAttr("checked");
          }
        });
        jQuery("#idchecksaliascampo291412926").trigger("change");
        jQuery("[id*='idradiosaliascampo2930']").change(function () {
          if(jQuery("#idradiosaliascampo293012979").is(":checked")){
            jQuery("#idaliascampo2932").removeAttr("disabled");
          }
          else{
            jQuery("#idaliascampo2932").attr("disabled","true").val("").removeAttr("checked");
          }
        });
        jQuery("[id*='idradiosaliascampo2930']").trigger("change");
        jQuery("#idchecksaliascampo300513326").change(function () {
          if(jQuery(this).is(":checked")){
            jQuery("[id*='idradiosaliascampo3009']").removeAttr("disabled");
          }
          else{
            jQuery("[id*='idradiosaliascampo3009']").attr("disabled","true").val("").removeAttr("checked");
          }
        });
        jQuery("#idchecksaliascampo300513326").trigger("change");
        jQuery("[id*='idradiosaliascampo3012']").change(function () {
          if(jQuery("#idradiosaliascampo301213359").is(":checked")){
            jQuery("#idaliascampo3014").removeAttr("disabled");
          }
          else{
            jQuery("#idaliascampo3014").attr("disabled","true").val("").removeAttr("checked");
          }
        });
        jQuery("[id*='idradiosaliascampo3012']").trigger("change");
        jQuery("#idchecksaliascampo301113351").change(function () {
          if(jQuery(this).is(":checked")){
            jQuery("[id*='idradiosaliascampo3016']").removeAttr("disabled");
          }
          else{
            jQuery("[id*='idradiosaliascampo3016']").attr("disabled","true").val("").removeAttr("checked");
          }
        });
        jQuery("#idchecksaliascampo301113351").trigger("change");
        jQuery("#idchecksaliascampo292512947").change(function () {
          if(jQuery(this).is(":checked")){
            jQuery("[id*='idradiosaliascampo2929']").removeAttr("disabled");
          }
          else{
            jQuery("[id*='idradiosaliascampo2929']").attr("disabled","true").val("").removeAttr("checked");
          }
        });
        jQuery("#idchecksaliascampo292512947").trigger("change");
        jQuery("#idchecksaliascampo297313267").change(function () {
          if(jQuery(this).is(":checked")){
            jQuery("[id*='idradiosaliascampo2979']").removeAttr("disabled");
          }
          else{
            jQuery("[id*='idradiosaliascampo2979']").attr("disabled","true").val("").removeAttr("checked");
          }
        });
        jQuery("#idchecksaliascampo297313267").trigger("change");
        jQuery("#idchecksaliascampo297313268").change(function () {
          if(jQuery(this).is(":checked")){
            jQuery("[id*='idradiosaliascampo2979']").removeAttr("disabled");
          }
          else{
            jQuery("[id*='idradiosaliascampo2979']").attr("disabled","true").val("").removeAttr("checked");
          }
        });
        jQuery("#idchecksaliascampo297313268").trigger("change");
        jQuery("#idchecksaliascampo308713751").change(function () {
          if(jQuery(this).is(":checked")){
            jQuery("[id*='idchecksaliascampo3088']").removeAttr("disabled");
          }
          else{
            jQuery("[id*='idchecksaliascampo3088']").attr("disabled","true").val("").removeAttr("checked");
          }
        });
        jQuery("#idchecksaliascampo308713751").trigger("change");
        jQuery("#idchecksaliascampo309513776").change(function () {
          if(jQuery(this).is(":checked")){
            jQuery("[id*='idradiosaliascampo3096']").removeAttr("disabled");
          }
          else{
            jQuery("[id*='idradiosaliascampo3096']").attr("disabled","true").val("").removeAttr("checked");
          }
        });
        jQuery("#idchecksaliascampo309513776").trigger("change");
        jQuery("[id*='idradiosaliascampo2929']").change(function () {
          if(jQuery("#idradiosaliascampo292912970").is(":checked")){
            jQuery("#idaliascampo2931").removeAttr("disabled");
          }
          else{
            jQuery("#idaliascampo2931").attr("disabled","true").val("").removeAttr("checked");
          }
        });
        jQuery("[id*='idradiosaliascampo2929']").trigger("change");
        jQuery("#idchecksaliascampo301113350").change(function () {
          if(jQuery(this).is(":checked")){
            jQuery("[id*='idradiosaliascampo3012'],[id*='idradiosaliascampo3016']").removeAttr("disabled");
          }
          else{
            jQuery("[id*='idradiosaliascampo3012'],[id*='idradiosaliascampo3016']").attr("disabled","true").val("").removeAttr("checked");
          }
        });
        jQuery("#idchecksaliascampo301113350").trigger("change");
        jQuery("#idchecksaliascampo300513325").change(function () {
          if(jQuery(this).is(":checked")){
            jQuery("[id*='idradiosaliascampo3008'],[id*='idradiosaliascampo3007'],[id*='idradiosaliascampo3006'],[id*='idradiosaliascampo3009']").removeAttr("disabled");
          }
          else{
            jQuery("[id*='idradiosaliascampo3008'],[id*='idradiosaliascampo3007'],[id*='idradiosaliascampo3006'],[id*='idradiosaliascampo3009']").attr("disabled","true").val("").removeAttr("checked");
          }
        });
        jQuery("#idchecksaliascampo300513325").trigger("change");
        jQuery("[id*='idradiosaliascampo2979']").change(function () {
          if(jQuery("#idradiosaliascampo297913293").is(":checked")){
            jQuery("#idaliascampo2982").removeAttr("disabled");
          }
          else{
            jQuery("#idaliascampo2982").attr("disabled","true").val("").removeAttr("checked");
          }
        });
        jQuery("[id*='idradiosaliascampo2979']").trigger("change");
        jQuery("#idchecksaliascampo292712962").change(function () {
          if(jQuery(this).is(":checked")){
            jQuery("#idaliascampo2928").removeAttr("disabled");
          }
          else{
            jQuery("#idaliascampo2928").attr("disabled","true").val("").removeAttr("checked");
          }
        });
        jQuery("#idchecksaliascampo292712962").trigger("change");
        jQuery("#idchecksaliascampo292512946").change(function () {
          if(jQuery(this).is(":checked")){
            jQuery("[id*='idradiosaliascampo2929']").removeAttr("disabled");
          }
          else{
            jQuery("[id*='idradiosaliascampo2929']").attr("disabled","true").val("").removeAttr("checked");
          }
        });
        jQuery("#idchecksaliascampo292512946").trigger("change");
        jQuery("#idchecksaliascampo292512948").change(function () {
          if(jQuery(this).is(":checked")){
            jQuery("[id*='idchecksaliascampo2926'],[id*='idchecksaliascampo2927'],[id*='idradiosaliascampo2929']").removeAttr("disabled");
          }
          else{
            jQuery("[id*='idchecksaliascampo2926'],[id*='idchecksaliascampo2927'],[id*='idradiosaliascampo2929']").attr("disabled","true").val("").removeAttr("checked");
          }
        });
        jQuery("#idchecksaliascampo292512948").trigger("change");
        jQuery("#idchecksaliascampo292512949").change(function () {
          if(jQuery(this).is(":checked")){
            jQuery("[id*='idchecksaliascampo2926'],[id*='idchecksaliascampo2927'],[id*='idradiosaliascampo2929']").removeAttr("disabled");
          }
          else{
            jQuery("[id*='idchecksaliascampo2926'],[id*='idchecksaliascampo2927'],[id*='idradiosaliascampo2929']").attr("disabled","true").val("").removeAttr("checked");
          }
        });
        jQuery("#idchecksaliascampo292512949").trigger("change");
        jQuery("#idchecksaliascampo292512950").change(function () {
          if(jQuery(this).is(":checked")){
            jQuery("[id*='idchecksaliascampo2926'],[id*='idchecksaliascampo2927'],[id*='idradiosaliascampo2929']").removeAttr("disabled");
          }
          else{
            jQuery("[id*='idchecksaliascampo2926'],[id*='idchecksaliascampo2927'],[id*='idradiosaliascampo2929']").attr("disabled","true").val("").removeAttr("checked");
          }
        });
        jQuery("#idchecksaliascampo292512950").trigger("change");
        jQuery("#idchecksaliascampo292612951").change(function () {
          if(jQuery(this).is(":checked")){
            jQuery("[id*='idradiosaliascampo2929']").removeAttr("disabled");
          }
          else{
            jQuery("[id*='idradiosaliascampo2929']").attr("disabled","true").val("").removeAttr("checked");
          }
        });
        jQuery("#idchecksaliascampo292612951").trigger("change");
        jQuery("#idchecksaliascampo292612952").change(function () {
          if(jQuery(this).is(":checked")){
            jQuery("[id*='idradiosaliascampo2929']").removeAttr("disabled");
          }
          else{
            jQuery("[id*='idradiosaliascampo2929']").attr("disabled","true").val("").removeAttr("checked");
          }
        });
        jQuery("#idchecksaliascampo292612952").trigger("change");
        jQuery("#idchecksaliascampo292612953").change(function () {
          if(jQuery(this).is(":checked")){
            jQuery("[id*='idchecksaliascampo2927'],[id*='idradiosaliascampo2929']").removeAttr("disabled");
          }
          else{
            jQuery("[id*='idchecksaliascampo2927'],[id*='idradiosaliascampo2929']").attr("disabled","true").val("").removeAttr("checked");
          }
        });
        jQuery("#idchecksaliascampo292612953").trigger("change");
        jQuery("#idchecksaliascampo292612954").change(function () {
          if(jQuery(this).is(":checked")){
            jQuery("[id*='idchecksaliascampo2927'],[id*='idradiosaliascampo2929']").removeAttr("disabled");
          }
          else{
            jQuery("[id*='idchecksaliascampo2927'],[id*='idradiosaliascampo2929']").attr("disabled","true").val("").removeAttr("checked");
          }
        });
        jQuery("#idchecksaliascampo292612954").trigger("change");
        jQuery("#idchecksaliascampo292612955").change(function () {
          if(jQuery(this).is(":checked")){
            jQuery("[id*='idchecksaliascampo2927'],[id*='idradiosaliascampo2929']").removeAttr("disabled");
          }
          else{
            jQuery("[id*='idchecksaliascampo2927'],[id*='idradiosaliascampo2929']").attr("disabled","true").val("").removeAttr("checked");
          }
        });
        jQuery("#idchecksaliascampo292612955").trigger("change");
        jQuery("#idaliascampo2962").focusout(function () {
          if(jQuery.trim(jQuery(this).val()).length != 0 && jQuery(this).val() != ""){
            jQuery("#idaliascampo2966").removeAttr("disabled");
          }
          else{
            jQuery("#idaliascampo2966").attr("disabled","true").val("").removeAttr("checked");
          }
        }
                                          );
        jQuery("#idaliascampo2962").trigger("focusout");
        jQuery("#idaliascampo2963").focusout(function () {
          if(jQuery.trim(jQuery(this).val()).length != 0 && jQuery(this).val() != ""){
            jQuery("#idaliascampo2965").removeAttr("disabled");
          }
          else{
            jQuery("#idaliascampo2965").attr("disabled","true").val("").removeAttr("checked");
          }
        }
                                          );
        jQuery("#idaliascampo2963").trigger("focusout");
        jQuery("#idaliascampo2964").focusout(function () {
          if(jQuery.trim(jQuery(this).val()).length != 0 && jQuery(this).val() != ""){
            jQuery("#idaliascampo2967").removeAttr("disabled");
          }
          else{
            jQuery("#idaliascampo2967").attr("disabled","true").val("").removeAttr("checked");
          }
        }
                                          );
        jQuery("#idaliascampo2964").trigger("focusout");
        jQuery("#idchecksaliascampo297313269").change(function () {
          if(jQuery(this).is(":checked")){
            jQuery("[id*='idradiosaliascampo2974'],[id*='idradiosaliascampo2976'],[id*='idradiosaliascampo2979']").removeAttr("disabled");
          }
          else{
            jQuery("[id*='idradiosaliascampo2974'],[id*='idradiosaliascampo2976'],[id*='idradiosaliascampo2979']").attr("disabled","true").val("").removeAttr("checked");
          }
        });
        jQuery("#idchecksaliascampo297313269").trigger("change");
        jQuery("#idchecksaliascampo297313270").change(function () {
          if(jQuery(this).is(":checked")){
            jQuery("[id*='idradiosaliascampo2974'],[id*='idradiosaliascampo2976'],[id*='idradiosaliascampo2979']").removeAttr("disabled");
          }
          else{
            jQuery("[id*='idradiosaliascampo2974'],[id*='idradiosaliascampo2976'],[id*='idradiosaliascampo2979']").attr("disabled","true").val("").removeAttr("checked");
          }
        });
        jQuery("#idchecksaliascampo297313270").trigger("change");
        jQuery("#idchecksaliascampo297313271").change(function () {
          if(jQuery(this).is(":checked")){
            jQuery("[id*='idradiosaliascampo2974'],[id*='idradiosaliascampo2976'],[id*='idradiosaliascampo2979']").removeAttr("disabled");
          }
          else{
            jQuery("[id*='idradiosaliascampo2974'],[id*='idradiosaliascampo2976'],[id*='idradiosaliascampo2979']").attr("disabled","true").val("").removeAttr("checked");
          }
        });
        jQuery("#idchecksaliascampo297313271").trigger("change");
        jQuery("#idchecksaliascampo301913377").change(function () {
          if(jQuery(this).is(":checked")){
            jQuery("#idaliascampo3081").removeAttr("disabled");
          }
          else{
            jQuery("#idaliascampo3081").attr("disabled","true").val("").removeAttr("checked");
          }
        });
        jQuery("#idchecksaliascampo301913377").trigger("change");
        jQuery("#idchecksaliascampo301913376").change(function () {
          if(jQuery(this).is(":checked")){
            jQuery("#idaliascampo3080").removeAttr("disabled");
          }
          else{
            jQuery("#idaliascampo3080").attr("disabled","true").val("").removeAttr("checked");
          }
        });
        jQuery("#idchecksaliascampo301913376").trigger("change");
        jQuery("#idchecksaliascampo308713752").change(function () {
          if(jQuery(this).is(":checked")){
            jQuery("[id*='idchecksaliascampo3090']").removeAttr("disabled");
          }
          else{
            jQuery("[id*='idchecksaliascampo3090']").attr("disabled","true").val("").removeAttr("checked");
          }
        });
        jQuery("#idchecksaliascampo308713752").trigger("change");
        jQuery("#idchecksaliascampo308813756").change(function () {
          if(jQuery(this).is(":checked")){
            jQuery("#idaliascampo3089").removeAttr("disabled");
          }
          else{
            jQuery("#idaliascampo3089").attr("disabled","true").val("").removeAttr("checked");
          }
        });
        jQuery("#idchecksaliascampo308813756").trigger("change");
        jQuery("#idchecksaliascampo308813754").change(function () {
          if(jQuery(this).is(":checked")){
            jQuery("[id*='idradiosaliascampo3091'],[id*='idradiosaliascampo3092']").removeAttr("disabled");
          }
          else{
            jQuery("[id*='idradiosaliascampo3091'],[id*='idradiosaliascampo3092']").attr("disabled","true").val("").removeAttr("checked");
          }
        });
        jQuery("#idchecksaliascampo308813754").trigger("change");
        jQuery("#idchecksaliascampo308813754").change(function () {
          if(jQuery(this).is(":checked")){
            jQuery("[id*='idchecksaliascampo3090']").removeAttr("disabled");
          }
          else{
            jQuery("[id*='idchecksaliascampo3090']").attr("disabled","true").val("").removeAttr("checked");
          }
        });
        jQuery("#idchecksaliascampo308813754").trigger("change");
        jQuery("#idchecksaliascampo308813755").change(function () {
          if(jQuery(this).is(":checked")){
            jQuery("[id*='idchecksaliascampo3090'],[id*='idradiosaliascampo3091'],[id*='idradiosaliascampo3092']").removeAttr("disabled");
          }
          else{
            jQuery("[id*='idchecksaliascampo3090'],[id*='idradiosaliascampo3091'],[id*='idradiosaliascampo3092']").attr("disabled","true").val("").removeAttr("checked");
          }
        });
        jQuery("#idchecksaliascampo308813755").trigger("change");
        jQuery("#idchecksaliascampo309013757").change(function () {
          if(jQuery(this).is(":checked")){
            jQuery("[id*='idradiosaliascampo3091'],[id*='idradiosaliascampo3092']").removeAttr("disabled");
          }
          else{
            jQuery("[id*='idradiosaliascampo3091'],[id*='idradiosaliascampo3092']").attr("disabled","true").val("").removeAttr("checked");
          }
        });
        jQuery("#idchecksaliascampo309013757").trigger("change");
        jQuery("#idchecksaliascampo308813756").change(function () {
          if(jQuery(this).is(":checked")){
            jQuery("[id*='idradiosaliascampo3092'],[id*='idradiosaliascampo3091'],[id*='idchecksaliascampo3090']").removeAttr("disabled");
          }
          else{
            jQuery("[id*='idradiosaliascampo3092'],[id*='idradiosaliascampo3091'],[id*='idchecksaliascampo3090']").attr("disabled","true").val("").removeAttr("checked");
          }
        });
        jQuery("#idchecksaliascampo308813756").trigger("change");
        jQuery("#idchecksaliascampo309513774").change(function () {
          if(jQuery(this).is(":checked")){
            jQuery("[id*='idradiosaliascampo3096']").removeAttr("disabled");
          }
          else{
            jQuery("[id*='idradiosaliascampo3096']").attr("disabled","true").val("").removeAttr("checked");
          }
        });
        jQuery("#idchecksaliascampo309513774").trigger("change");
        jQuery("#idchecksaliascampo309513775").change(function () {
          if(jQuery(this).is(":checked")){
            jQuery("[id*='idradiosaliascampo3096']").removeAttr("disabled");
          }
          else{
            jQuery("[id*='idradiosaliascampo3096']").attr("disabled","true").val("").removeAttr("checked");
          }
        });
        jQuery("#idchecksaliascampo309513775").trigger("change");
        jQuery("[id*='idradiosaliascampo3096']").change(function () {
          if(jQuery("#idradiosaliascampo309613782").is(":checked")){
            jQuery("#idaliascampo3097").removeAttr("disabled");
          }
          else{
            jQuery("#idaliascampo3097").attr("disabled","true").val("").removeAttr("checked");
          }
        });
        jQuery("[id*='idradiosaliascampo3096']").trigger("change");
        
        });

        function flujoavance(maxresp, respuniq, grupo){
          var i = 1;
          
          //validar numeros de respuestas
          jQuery(".grp" + grupo).each(function(){
            if(jQuery(this).attr("type") != "radio" && jQuery(this).attr("type") != "checkbox"){
              if(jQuery.trim(jQuery(this).val()) != "")
                i++;
            }
            else if (jQuery(this).is(":checked"))
              i++;
          }
                                );
          jQuery(".grp" + grupo).each(function(){
            if(i <= maxresp && jQuery.trim(jQuery(this).val()) == ""){
              jQuery(this).removeAttr("disabled");
            }
            else if(i > maxresp && jQuery.trim(jQuery(this).val()) == ""){
              jQuery(this).attr("disabled","true");
            }
          }
                                );
          //validar unicos
          if(respuniq == 1){
            jQuery(jQuery(".grp"+grupo).get().reverse()).each(function(key){
              if(buscaconcidencia(grupo, jQuery(this)) && key != 0){
                jQuery(this).val("");
              }
            }
                                                   );
          }
        }
        
        function buscaconcidencia(grupo, obj){
          var resp = false;
          var i = 1;
          jQuery(".grp"+grupo).each(function(){
            if( jQuery(this).attr("id") != jQuery(obj).attr("id") && jQuery.trim(jQuery(this).val()) == jQuery(obj).val() && jQuery(this).val() != "")
              i++;
          }
                              );
          if(i > 1)
            resp = true;
          
          return resp;
        }
        jQuery(function(){
          jQuery("select").change(function(){
          jQuery(this);
        });
      }
     );

    };

    $scope.guardar = function(){
      //console.log(this.formData);
      var confirmarGuardado = confirm("Esta seguro que desea almacenar la encuesta!");
      if(confirmarGuardado){
        var db = window.openDatabase("fedesaludDB", "1.0", "Fedesalud DB", 200000);
        db.transaction($scope.querySaveEncuesta, $scope.errorDB);
      }
    };

    //En caso de error
    $scope.querySaveEncuesta = function(tx) {
      var arrayData =  $scope.formData;
      console.log(arrayData);
      var usercookie = window.localStorage.getItem("user");
      var nombreEncuesta = arrayData["nombreEncuesta"];
      var tipoEncuesta = arrayData["tipoEncuesta"];
      var sql = "INSERT INTO ENCUESTAS (NOMBRE, TIPOENCUESTA, SINCRONIZADO, USUARIO) VALUES ('" + nombreEncuesta + "','" + tipoEncuesta + "',0, '" + usercookie + "')";
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
      //tx.executeSql("DELETE FROM ENCUESTAS");
      //tx.executeSql("DELETE FROM DATAENCUESTAS");
      tx.executeSql("CREATE TABLE IF NOT EXISTS ENCUESTAS (ID INTEGER PRIMARY KEY AUTOINCREMENT, NOMBRE TEXT NOT NULL, TIPOENCUESTA TEXT NOT NULL, SINCRONIZADO INTEGER NOT NULL, USUARIO TEXT NOT NULL)");
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
    
    jQuery(".btn").click(function(){
      jQuery("#waiting").css("display", "block");
    });

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
        var sql = 'select ID,NOMBRE, TIPOENCUESTA from ENCUESTAS';
        tx.executeSql(sql, [], 
          function(tx, result){
            var html = '';
            for(var i = 0; i < result.rows.length; i++){
              console.log(result.rows.item(i).TIPOENCUESTA);
              if(result.rows.item(i).TIPOENCUESTA == '1'){
                html += "<tr><td>" + result.rows.item(i).NOMBRE  + "</td><td><a href='#/editarInstrumentouno/" + result.rows.item(i).ID + "' >Editar</a></td></tr>";
              }else if(result.rows.item(i).TIPOENCUESTA == '2'){
                html += "<tr><td>" + result.rows.item(i).NOMBRE  + "</td><td><a href='#/editarInstrumentodos/" + result.rows.item(i).ID + "' >Editar</a></td></tr>";
              }
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

    $scope.load = function(){
        jQuery(document).ready(function(){
        jQuery("textarea, input, select").addClass("form-control");
        
        jQuery("input[type='checkbox']").each(function(){
          jQuery(this).attr("ng-model","formData." + jQuery(this).attr("id"));
        });

        jQuery("[id*='idradiosaliascampo2909']").change(function () {
          if(jQuery("#idradiosaliascampo290912916").is(":checked")){
            jQuery("#idaliascampo2910").removeAttr("disabled");
          }
          else{
            jQuery("#idaliascampo2910").attr("disabled","true").val("").removeAttr("checked");
          }
        });
        jQuery("[id*='idradiosaliascampo2909']").trigger("change");
        jQuery("[id*='idradiosaliascampo2916']").change(function () {
          if(jQuery("#idradiosaliascampo291612940").is(":checked")){
            jQuery("#idaliascampo2917").removeAttr("disabled");
          }
          else{
            jQuery("#idaliascampo2917").attr("disabled","true").val("").removeAttr("checked");
          }
        });
        jQuery("[id*='idradiosaliascampo2916']").trigger("change");
        jQuery("#idchecksaliascampo291412925").change(function () {
          if(jQuery(this).is(":checked")){
            jQuery("[id*='idradiosaliascampo2915'],[id*='idradiosaliascampo2916']").removeAttr("disabled");
          }
          else{
            jQuery("[id*='idradiosaliascampo2915'],[id*='idradiosaliascampo2916']").attr("disabled","true").val("").removeAttr("checked");
          }
        });
        jQuery("#idchecksaliascampo291412925").trigger("change");
        jQuery("#idchecksaliascampo291412926").change(function () {
          if(jQuery(this).is(":checked")){
            jQuery("[id*='idradiosaliascampo2916']").removeAttr("disabled");
          }
          else{
            jQuery("[id*='idradiosaliascampo2916']").attr("disabled","true").val("").removeAttr("checked");
          }
        });
        jQuery("#idchecksaliascampo291412926").trigger("change");
        jQuery("[id*='idradiosaliascampo2930']").change(function () {
          if(jQuery("#idradiosaliascampo293012979").is(":checked")){
            jQuery("#idaliascampo2932").removeAttr("disabled");
          }
          else{
            jQuery("#idaliascampo2932").attr("disabled","true").val("").removeAttr("checked");
          }
        });
        jQuery("[id*='idradiosaliascampo2930']").trigger("change");
        jQuery("#idchecksaliascampo300513326").change(function () {
          if(jQuery(this).is(":checked")){
            jQuery("[id*='idradiosaliascampo3009']").removeAttr("disabled");
          }
          else{
            jQuery("[id*='idradiosaliascampo3009']").attr("disabled","true").val("").removeAttr("checked");
          }
        });
        jQuery("#idchecksaliascampo300513326").trigger("change");
        jQuery("[id*='idradiosaliascampo3012']").change(function () {
          if(jQuery("#idradiosaliascampo301213359").is(":checked")){
            jQuery("#idaliascampo3014").removeAttr("disabled");
          }
          else{
            jQuery("#idaliascampo3014").attr("disabled","true").val("").removeAttr("checked");
          }
        });
        jQuery("[id*='idradiosaliascampo3012']").trigger("change");
        jQuery("#idchecksaliascampo301113351").change(function () {
          if(jQuery(this).is(":checked")){
            jQuery("[id*='idradiosaliascampo3016']").removeAttr("disabled");
          }
          else{
            jQuery("[id*='idradiosaliascampo3016']").attr("disabled","true").val("").removeAttr("checked");
          }
        });
        jQuery("#idchecksaliascampo301113351").trigger("change");
        jQuery("#idchecksaliascampo292512947").change(function () {
          if(jQuery(this).is(":checked")){
            jQuery("[id*='idradiosaliascampo2929']").removeAttr("disabled");
          }
          else{
            jQuery("[id*='idradiosaliascampo2929']").attr("disabled","true").val("").removeAttr("checked");
          }
        });
        jQuery("#idchecksaliascampo292512947").trigger("change");
        jQuery("#idchecksaliascampo297313267").change(function () {
          if(jQuery(this).is(":checked")){
            jQuery("[id*='idradiosaliascampo2979']").removeAttr("disabled");
          }
          else{
            jQuery("[id*='idradiosaliascampo2979']").attr("disabled","true").val("").removeAttr("checked");
          }
        });
        jQuery("#idchecksaliascampo297313267").trigger("change");
        jQuery("#idchecksaliascampo297313268").change(function () {
          if(jQuery(this).is(":checked")){
            jQuery("[id*='idradiosaliascampo2979']").removeAttr("disabled");
          }
          else{
            jQuery("[id*='idradiosaliascampo2979']").attr("disabled","true").val("").removeAttr("checked");
          }
        });
        jQuery("#idchecksaliascampo297313268").trigger("change");
        jQuery("#idchecksaliascampo308713751").change(function () {
          if(jQuery(this).is(":checked")){
            jQuery("[id*='idchecksaliascampo3088']").removeAttr("disabled");
          }
          else{
            jQuery("[id*='idchecksaliascampo3088']").attr("disabled","true").val("").removeAttr("checked");
          }
        });
        jQuery("#idchecksaliascampo308713751").trigger("change");
        jQuery("#idchecksaliascampo309513776").change(function () {
          if(jQuery(this).is(":checked")){
            jQuery("[id*='idradiosaliascampo3096']").removeAttr("disabled");
          }
          else{
            jQuery("[id*='idradiosaliascampo3096']").attr("disabled","true").val("").removeAttr("checked");
          }
        });
        jQuery("#idchecksaliascampo309513776").trigger("change");
        jQuery("[id*='idradiosaliascampo2929']").change(function () {
          if(jQuery("#idradiosaliascampo292912970").is(":checked")){
            jQuery("#idaliascampo2931").removeAttr("disabled");
          }
          else{
            jQuery("#idaliascampo2931").attr("disabled","true").val("").removeAttr("checked");
          }
        });
        jQuery("[id*='idradiosaliascampo2929']").trigger("change");
        jQuery("#idchecksaliascampo301113350").change(function () {
          if(jQuery(this).is(":checked")){
            jQuery("[id*='idradiosaliascampo3012'],[id*='idradiosaliascampo3016']").removeAttr("disabled");
          }
          else{
            jQuery("[id*='idradiosaliascampo3012'],[id*='idradiosaliascampo3016']").attr("disabled","true").val("").removeAttr("checked");
          }
        });
        jQuery("#idchecksaliascampo301113350").trigger("change");
        jQuery("#idchecksaliascampo300513325").change(function () {
          if(jQuery(this).is(":checked")){
            jQuery("[id*='idradiosaliascampo3008'],[id*='idradiosaliascampo3007'],[id*='idradiosaliascampo3006'],[id*='idradiosaliascampo3009']").removeAttr("disabled");
          }
          else{
            jQuery("[id*='idradiosaliascampo3008'],[id*='idradiosaliascampo3007'],[id*='idradiosaliascampo3006'],[id*='idradiosaliascampo3009']").attr("disabled","true").val("").removeAttr("checked");
          }
        });
        jQuery("#idchecksaliascampo300513325").trigger("change");
        jQuery("[id*='idradiosaliascampo2979']").change(function () {
          if(jQuery("#idradiosaliascampo297913293").is(":checked")){
            jQuery("#idaliascampo2982").removeAttr("disabled");
          }
          else{
            jQuery("#idaliascampo2982").attr("disabled","true").val("").removeAttr("checked");
          }
        });
        jQuery("[id*='idradiosaliascampo2979']").trigger("change");
        jQuery("#idchecksaliascampo292712962").change(function () {
          if(jQuery(this).is(":checked")){
            jQuery("#idaliascampo2928").removeAttr("disabled");
          }
          else{
            jQuery("#idaliascampo2928").attr("disabled","true").val("").removeAttr("checked");
          }
        });
        jQuery("#idchecksaliascampo292712962").trigger("change");
        jQuery("#idchecksaliascampo292512946").change(function () {
          if(jQuery(this).is(":checked")){
            jQuery("[id*='idradiosaliascampo2929']").removeAttr("disabled");
          }
          else{
            jQuery("[id*='idradiosaliascampo2929']").attr("disabled","true").val("").removeAttr("checked");
          }
        });
        jQuery("#idchecksaliascampo292512946").trigger("change");
        jQuery("#idchecksaliascampo292512948").change(function () {
          if(jQuery(this).is(":checked")){
            jQuery("[id*='idchecksaliascampo2926'],[id*='idchecksaliascampo2927'],[id*='idradiosaliascampo2929']").removeAttr("disabled");
          }
          else{
            jQuery("[id*='idchecksaliascampo2926'],[id*='idchecksaliascampo2927'],[id*='idradiosaliascampo2929']").attr("disabled","true").val("").removeAttr("checked");
          }
        });
        jQuery("#idchecksaliascampo292512948").trigger("change");
        jQuery("#idchecksaliascampo292512949").change(function () {
          if(jQuery(this).is(":checked")){
            jQuery("[id*='idchecksaliascampo2926'],[id*='idchecksaliascampo2927'],[id*='idradiosaliascampo2929']").removeAttr("disabled");
          }
          else{
            jQuery("[id*='idchecksaliascampo2926'],[id*='idchecksaliascampo2927'],[id*='idradiosaliascampo2929']").attr("disabled","true").val("").removeAttr("checked");
          }
        });
        jQuery("#idchecksaliascampo292512949").trigger("change");
        jQuery("#idchecksaliascampo292512950").change(function () {
          if(jQuery(this).is(":checked")){
            jQuery("[id*='idchecksaliascampo2926'],[id*='idchecksaliascampo2927'],[id*='idradiosaliascampo2929']").removeAttr("disabled");
          }
          else{
            jQuery("[id*='idchecksaliascampo2926'],[id*='idchecksaliascampo2927'],[id*='idradiosaliascampo2929']").attr("disabled","true").val("").removeAttr("checked");
          }
        });
        jQuery("#idchecksaliascampo292512950").trigger("change");
        jQuery("#idchecksaliascampo292612951").change(function () {
          if(jQuery(this).is(":checked")){
            jQuery("[id*='idradiosaliascampo2929']").removeAttr("disabled");
          }
          else{
            jQuery("[id*='idradiosaliascampo2929']").attr("disabled","true").val("").removeAttr("checked");
          }
        });
        jQuery("#idchecksaliascampo292612951").trigger("change");
        jQuery("#idchecksaliascampo292612952").change(function () {
          if(jQuery(this).is(":checked")){
            jQuery("[id*='idradiosaliascampo2929']").removeAttr("disabled");
          }
          else{
            jQuery("[id*='idradiosaliascampo2929']").attr("disabled","true").val("").removeAttr("checked");
          }
        });
        jQuery("#idchecksaliascampo292612952").trigger("change");
        jQuery("#idchecksaliascampo292612953").change(function () {
          if(jQuery(this).is(":checked")){
            jQuery("[id*='idchecksaliascampo2927'],[id*='idradiosaliascampo2929']").removeAttr("disabled");
          }
          else{
            jQuery("[id*='idchecksaliascampo2927'],[id*='idradiosaliascampo2929']").attr("disabled","true").val("").removeAttr("checked");
          }
        });
        jQuery("#idchecksaliascampo292612953").trigger("change");
        jQuery("#idchecksaliascampo292612954").change(function () {
          if(jQuery(this).is(":checked")){
            jQuery("[id*='idchecksaliascampo2927'],[id*='idradiosaliascampo2929']").removeAttr("disabled");
          }
          else{
            jQuery("[id*='idchecksaliascampo2927'],[id*='idradiosaliascampo2929']").attr("disabled","true").val("").removeAttr("checked");
          }
        });
        jQuery("#idchecksaliascampo292612954").trigger("change");
        jQuery("#idchecksaliascampo292612955").change(function () {
          if(jQuery(this).is(":checked")){
            jQuery("[id*='idchecksaliascampo2927'],[id*='idradiosaliascampo2929']").removeAttr("disabled");
          }
          else{
            jQuery("[id*='idchecksaliascampo2927'],[id*='idradiosaliascampo2929']").attr("disabled","true").val("").removeAttr("checked");
          }
        });
        jQuery("#idchecksaliascampo292612955").trigger("change");
        jQuery("#idaliascampo2962").focusout(function () {
          if(jQuery.trim(jQuery(this).val()).length != 0 && jQuery(this).val() != ""){
            jQuery("#idaliascampo2966").removeAttr("disabled");
          }
          else{
            jQuery("#idaliascampo2966").attr("disabled","true").val("").removeAttr("checked");
          }
        }
                                          );
        jQuery("#idaliascampo2962").trigger("focusout");
        jQuery("#idaliascampo2963").focusout(function () {
          if(jQuery.trim(jQuery(this).val()).length != 0 && jQuery(this).val() != ""){
            jQuery("#idaliascampo2965").removeAttr("disabled");
          }
          else{
            jQuery("#idaliascampo2965").attr("disabled","true").val("").removeAttr("checked");
          }
        }
                                          );
        jQuery("#idaliascampo2963").trigger("focusout");
        jQuery("#idaliascampo2964").focusout(function () {
          if(jQuery.trim(jQuery(this).val()).length != 0 && jQuery(this).val() != ""){
            jQuery("#idaliascampo2967").removeAttr("disabled");
          }
          else{
            jQuery("#idaliascampo2967").attr("disabled","true").val("").removeAttr("checked");
          }
        }
                                          );
        jQuery("#idaliascampo2964").trigger("focusout");
        jQuery("#idchecksaliascampo297313269").change(function () {
          if(jQuery(this).is(":checked")){
            jQuery("[id*='idradiosaliascampo2974'],[id*='idradiosaliascampo2976'],[id*='idradiosaliascampo2979']").removeAttr("disabled");
          }
          else{
            jQuery("[id*='idradiosaliascampo2974'],[id*='idradiosaliascampo2976'],[id*='idradiosaliascampo2979']").attr("disabled","true").val("").removeAttr("checked");
          }
        });
        jQuery("#idchecksaliascampo297313269").trigger("change");
        jQuery("#idchecksaliascampo297313270").change(function () {
          if(jQuery(this).is(":checked")){
            jQuery("[id*='idradiosaliascampo2974'],[id*='idradiosaliascampo2976'],[id*='idradiosaliascampo2979']").removeAttr("disabled");
          }
          else{
            jQuery("[id*='idradiosaliascampo2974'],[id*='idradiosaliascampo2976'],[id*='idradiosaliascampo2979']").attr("disabled","true").val("").removeAttr("checked");
          }
        });
        jQuery("#idchecksaliascampo297313270").trigger("change");
        jQuery("#idchecksaliascampo297313271").change(function () {
          if(jQuery(this).is(":checked")){
            jQuery("[id*='idradiosaliascampo2974'],[id*='idradiosaliascampo2976'],[id*='idradiosaliascampo2979']").removeAttr("disabled");
          }
          else{
            jQuery("[id*='idradiosaliascampo2974'],[id*='idradiosaliascampo2976'],[id*='idradiosaliascampo2979']").attr("disabled","true").val("").removeAttr("checked");
          }
        });
        jQuery("#idchecksaliascampo297313271").trigger("change");
        jQuery("#idchecksaliascampo301913377").change(function () {
          if(jQuery(this).is(":checked")){
            jQuery("#idaliascampo3081").removeAttr("disabled");
          }
          else{
            jQuery("#idaliascampo3081").attr("disabled","true").val("").removeAttr("checked");
          }
        });
        jQuery("#idchecksaliascampo301913377").trigger("change");
        jQuery("#idchecksaliascampo301913376").change(function () {
          if(jQuery(this).is(":checked")){
            jQuery("#idaliascampo3080").removeAttr("disabled");
          }
          else{
            jQuery("#idaliascampo3080").attr("disabled","true").val("").removeAttr("checked");
          }
        });
        jQuery("#idchecksaliascampo301913376").trigger("change");
        jQuery("#idchecksaliascampo308713752").change(function () {
          if(jQuery(this).is(":checked")){
            jQuery("[id*='idchecksaliascampo3090']").removeAttr("disabled");
          }
          else{
            jQuery("[id*='idchecksaliascampo3090']").attr("disabled","true").val("").removeAttr("checked");
          }
        });
        jQuery("#idchecksaliascampo308713752").trigger("change");
        jQuery("#idchecksaliascampo308813756").change(function () {
          if(jQuery(this).is(":checked")){
            jQuery("#idaliascampo3089").removeAttr("disabled");
          }
          else{
            jQuery("#idaliascampo3089").attr("disabled","true").val("").removeAttr("checked");
          }
        });
        jQuery("#idchecksaliascampo308813756").trigger("change");
        jQuery("#idchecksaliascampo308813754").change(function () {
          if(jQuery(this).is(":checked")){
            jQuery("[id*='idradiosaliascampo3091'],[id*='idradiosaliascampo3092']").removeAttr("disabled");
          }
          else{
            jQuery("[id*='idradiosaliascampo3091'],[id*='idradiosaliascampo3092']").attr("disabled","true").val("").removeAttr("checked");
          }
        });
        jQuery("#idchecksaliascampo308813754").trigger("change");
        jQuery("#idchecksaliascampo308813754").change(function () {
          if(jQuery(this).is(":checked")){
            jQuery("[id*='idchecksaliascampo3090']").removeAttr("disabled");
          }
          else{
            jQuery("[id*='idchecksaliascampo3090']").attr("disabled","true").val("").removeAttr("checked");
          }
        });
        jQuery("#idchecksaliascampo308813754").trigger("change");
        jQuery("#idchecksaliascampo308813755").change(function () {
          if(jQuery(this).is(":checked")){
            jQuery("[id*='idchecksaliascampo3090'],[id*='idradiosaliascampo3091'],[id*='idradiosaliascampo3092']").removeAttr("disabled");
          }
          else{
            jQuery("[id*='idchecksaliascampo3090'],[id*='idradiosaliascampo3091'],[id*='idradiosaliascampo3092']").attr("disabled","true").val("").removeAttr("checked");
          }
        });
        jQuery("#idchecksaliascampo308813755").trigger("change");
        jQuery("#idchecksaliascampo309013757").change(function () {
          if(jQuery(this).is(":checked")){
            jQuery("[id*='idradiosaliascampo3091'],[id*='idradiosaliascampo3092']").removeAttr("disabled");
          }
          else{
            jQuery("[id*='idradiosaliascampo3091'],[id*='idradiosaliascampo3092']").attr("disabled","true").val("").removeAttr("checked");
          }
        });
        jQuery("#idchecksaliascampo309013757").trigger("change");
        jQuery("#idchecksaliascampo308813756").change(function () {
          if(jQuery(this).is(":checked")){
            jQuery("[id*='idradiosaliascampo3092'],[id*='idradiosaliascampo3091'],[id*='idchecksaliascampo3090']").removeAttr("disabled");
          }
          else{
            jQuery("[id*='idradiosaliascampo3092'],[id*='idradiosaliascampo3091'],[id*='idchecksaliascampo3090']").attr("disabled","true").val("").removeAttr("checked");
          }
        });
        jQuery("#idchecksaliascampo308813756").trigger("change");
        jQuery("#idchecksaliascampo309513774").change(function () {
          if(jQuery(this).is(":checked")){
            jQuery("[id*='idradiosaliascampo3096']").removeAttr("disabled");
          }
          else{
            jQuery("[id*='idradiosaliascampo3096']").attr("disabled","true").val("").removeAttr("checked");
          }
        });
        jQuery("#idchecksaliascampo309513774").trigger("change");
        jQuery("#idchecksaliascampo309513775").change(function () {
          if(jQuery(this).is(":checked")){
            jQuery("[id*='idradiosaliascampo3096']").removeAttr("disabled");
          }
          else{
            jQuery("[id*='idradiosaliascampo3096']").attr("disabled","true").val("").removeAttr("checked");
          }
        });
        jQuery("#idchecksaliascampo309513775").trigger("change");
        jQuery("[id*='idradiosaliascampo3096']").change(function () {
          if(jQuery("#idradiosaliascampo309613782").is(":checked")){
            jQuery("#idaliascampo3097").removeAttr("disabled");
          }
          else{
            jQuery("#idaliascampo3097").attr("disabled","true").val("").removeAttr("checked");
          }
        });
        jQuery("[id*='idradiosaliascampo3096']").trigger("change");
        
        });

    };

    $scope.guardar = function(){
      var confirmarGuardado = confirm("Esta seguro que desea almacenar la encuesta!");
      if(confirmarGuardado){
        var db = window.openDatabase("fedesaludDB", "1.0", "Fedesalud DB", 200000); 
        db.transaction($scope.queryUpdateEncuesta, $scope.errorDB);
      }
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

              if(objControl.length == 0)
              {
                objControl = document.getElementById(result.rows.item(i).IDCAMPO);
                if(objControl.type == 'checkbox'){
                    objControl.checked = result.rows.item(i).VALOR;
                }
              }
            }
          },$scope.errorDB); 
      }, $scope.errorDB);
    };

    //En caso de error
    $scope.queryUpdateEncuesta = function(tx) {
      var arrayData =  $scope.formData;
      console.log(arrayData);
      var usercookie = window.localStorage.getItem("user");
      var nombreEncuesta = arrayData["nombreEncuesta"];
      var sql = "UPDATE ENCUESTAS SET SINCRONIZADO = 0, NOMBRE = '" + nombreEncuesta + "' WHERE ID = " + $scope.idEncuesta;
      //tx.executeSql(sql, [], function(error){ console.log(error); });
      for(var item in arrayData){
        var sql = "UPDATE DATAENCUESTAS SET SINCRONIZADO = 0, VALOR = '" + arrayData[item] + "' WHERE IDENCUESTA = " + $scope.idEncuesta + " AND IDCAMPO = '" + item + "'";
        console.log(sql);
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
