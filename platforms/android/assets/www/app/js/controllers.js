'use strict';

/* Controllers */

var ModuleMyApp = angular.module('myApp.controllers', []);

//=================================================================
//=============        InstrumentoUno Controller   ================
//=================================================================
ModuleMyApp.controller('instrumentounoController', ['$scope', '$routeParams', function($scope, $routeParams) {

        $scope.idEncuesta = $routeParams.id;

        $scope.formData = {};

        $scope.load = function() {
            jQuery(document).ready(function() {
                $scope.formData = {
                    tipoEncuesta: jQuery("#tipoEncuesta").val()
                };

                jQuery("input[type='radio']").css("width", "3em;");
                jQuery("input[type='radio']").css("height", "3em;");

                jQuery(".btn").each(function() {
                    jQuery(this).css("width", "100%");
                    jQuery(this).css("clear", "both");
                });

                jQuery("#idchecksaliascampo305213647").change(function() {
                    if (jQuery(this).is(":checked")) {
                        jQuery("#idaliascampo3053").removeAttr("disabled");
                    } else {
                        jQuery("#idaliascampo3053").attr("disabled", "disabled");
                        jQuery("#idaliascampo3053").val("");
                    }
                });

                jQuery("#idchecksaliascampo305213654").change(function() {
                    if (jQuery(this).is(":checked")) {
                        jQuery("#idaliascampo3054").removeAttr("disabled");
                    } else {
                        jQuery("#idaliascampo3054").attr("disabled", "disabled");
                        jQuery("#idaliascampo3054").val("");
                    }
                });

                jQuery("#idchecksaliascampo305213649").change(function() {
                    if (jQuery(this).is(":checked")) {
                        jQuery("#idaliascampo563054").removeAttr("disabled");
                    } else {
                        jQuery("#idaliascampo563054").attr("disabled", "disabled");
                        jQuery("#idaliascampo563054").val("");
                    }
                });

                jQuery("#idaliascampo3084").change(function() {
                    if (jQuery("#idradiosaliascampo308313740").is(":checked") && parseInt(jQuery(this).val()) > 4 && parseInt(jQuery(this).val()) > 0) {
                        jQuery(this).val("");
                        alert("El valor no puede ser mayor a 4 para la opcion seleccionada.");
                    } else if (jQuery("#idradiosaliascampo308313741").is(":checked") && parseInt(jQuery(this).val()) > 12 && parseInt(jQuery(this).val()) > 0) {
                        jQuery(this).val("");
                        alert("El valor no puede ser mayor a 12 para la opcion seleccionada.");
                    }
                });

                jQuery("[id*='idradiosaliascampo2909']").change(function() {
                    if (jQuery("#idradiosaliascampo290912916").is(":checked")) {
                        jQuery("#idaliascampo2910").removeAttr("disabled");
                    }
                    else {
                        jQuery("#idaliascampo2910").attr("disabled", "true").val("").removeAttr("checked");
                    }
                });
                jQuery("[id*='idradiosaliascampo2909']").trigger("change");
                jQuery("[id*='idradiosaliascampo2916']").change(function() {
                    if (jQuery("#idradiosaliascampo291612940").is(":checked")) {
                        jQuery("#idaliascampo2917").removeAttr("disabled");
                    }
                    else {
                        jQuery("#idaliascampo2917").attr("disabled", "true").val("").removeAttr("checked");
                    }
                });
                jQuery("[id*='idradiosaliascampo2916']").trigger("change");
                jQuery("#idchecksaliascampo291412925").change(function() {
                    if (jQuery(this).is(":checked")) {
                        jQuery("[id*='idradiosaliascampo2915'],[id*='idradiosaliascampo2916']").removeAttr("disabled");
                    }
                    else {
                        jQuery("[id*='idradiosaliascampo2915'],[id*='idradiosaliascampo2916']").attr("disabled", "disabled").val("").removeAttr("checked");
                    }
                });

                jQuery("[id*='idradiosaliascampo2930']").trigger("change");
                jQuery("#idchecksaliascampo300513326").change(function() {
                    if (jQuery(this).is(":checked")) {
                        jQuery("[id*='idradiosaliascampo3009']").removeAttr("disabled");
                    }
                    else {
                        jQuery("[id*='idradiosaliascampo3009']").attr("disabled", "true").val("").removeAttr("checked");
                    }
                });
                jQuery("#idchecksaliascampo300513326").trigger("change");
                jQuery("[id*='idradiosaliascampo3012']").change(function() {
                    if (jQuery("#idradiosaliascampo301213359").is(":checked")) {
                        jQuery("#idaliascampo3014").removeAttr("disabled");
                    }
                    else {
                        jQuery("#idaliascampo3014").attr("disabled", "true").val("").removeAttr("checked");
                    }
                });
                jQuery("[id*='idradiosaliascampo3012']").trigger("change");
                jQuery("#idchecksaliascampo301113351").change(function() {
                    if (jQuery(this).is(":checked")) {
                        jQuery("[id*='idradiosaliascampo3016']").removeAttr("disabled");
                    }
                    else {
                        jQuery("[id*='idradiosaliascampo3016']").attr("disabled", "true").val("").removeAttr("checked");
                    }
                });
                jQuery("#idchecksaliascampo301113351").trigger("change");
                jQuery("#idchecksaliascampo292512947").change(function() {
                    if (jQuery(this).is(":checked")) {
                        jQuery("[id*='idradiosaliascampo2929']").removeAttr("disabled");
                    }
                    else {
                        jQuery("[id*='idradiosaliascampo2929']").attr("disabled", "true").val("").removeAttr("checked");
                    }
                });
                jQuery("#idchecksaliascampo292512947").trigger("change");
                jQuery("#idchecksaliascampo297313267").change(function() {
                    if (jQuery(this).is(":checked")) {
                        jQuery("[id*='idradiosaliascampo2979']").removeAttr("disabled");
                    }
                    else {
                        jQuery("[id*='idradiosaliascampo2979']").attr("disabled", "true").val("").removeAttr("checked");
                    }
                });
                jQuery("#idchecksaliascampo297313267").trigger("change");
                jQuery("#idchecksaliascampo297313268").change(function() {
                    if (jQuery(this).is(":checked")) {
                        jQuery("[id*='idradiosaliascampo2979']").removeAttr("disabled");
                    }
                    else {
                        jQuery("[id*='idradiosaliascampo2979']").attr("disabled", "true").val("").removeAttr("checked");
                    }
                });
                jQuery("#idchecksaliascampo297313268").trigger("change");
                jQuery("#idchecksaliascampo308713751").change(function() {
                    if (jQuery(this).is(":checked")) {
                        jQuery("[id*='idchecksaliascampo3088']").removeAttr("disabled");
                    }
                    else {
                        jQuery("[id*='idchecksaliascampo3088']").attr("disabled", "true").val("").removeAttr("checked");
                    }
                });
                jQuery("#idchecksaliascampo308713751").trigger("change");
                jQuery("#idchecksaliascampo309513776").change(function() {
                    if (jQuery(this).is(":checked")) {
                        jQuery("[id*='idradiosaliascampo3096']").removeAttr("disabled");
                    }
                    else {
                        jQuery("[id*='idradiosaliascampo3096']").attr("disabled", "true").val("").removeAttr("checked");
                    }
                });
                jQuery("#idchecksaliascampo309513776").trigger("change");
                jQuery("[id*='idradiosaliascampo2929']").change(function() {
                    if (jQuery("#idradiosaliascampo292912970").is(":checked")) {
                        jQuery("#idaliascampo2931").removeAttr("disabled");
                    }
                    else {
                        jQuery("#idaliascampo2931").attr("disabled", "true").val("").removeAttr("checked");
                    }
                });
                jQuery("[id*='idradiosaliascampo2929']").trigger("change");
                jQuery("#idchecksaliascampo301113350").change(function() {
                    if (jQuery(this).is(":checked")) {
                        jQuery("[id*='idradiosaliascampo3012'],[id*='idradiosaliascampo3016']").removeAttr("disabled");
                    }
                    else {
                        jQuery("[id*='idradiosaliascampo3012'],[id*='idradiosaliascampo3016']").attr("disabled", "true").val("").removeAttr("checked");
                    }
                });
                jQuery("#idchecksaliascampo301113350").trigger("change");
                jQuery("#idchecksaliascampo300513325").change(function() {
                    if (jQuery(this).is(":checked")) {
                        jQuery("[id*='idradiosaliascampo3008'],[id*='idradiosaliascampo3007'],[id*='idradiosaliascampo3006'],[id*='idradiosaliascampo3009']").removeAttr("disabled");
                    }
                    else {
                        jQuery("[id*='idradiosaliascampo3008'],[id*='idradiosaliascampo3007'],[id*='idradiosaliascampo3006'],[id*='idradiosaliascampo3009']").attr("disabled", "true").val("").removeAttr("checked");
                    }
                });
                jQuery("#idchecksaliascampo300513325").trigger("change");
                jQuery("[id*='idradiosaliascampo2979']").change(function() {
                    if (jQuery("#idradiosaliascampo297913293").is(":checked")) {
                        jQuery("#idaliascampo2982").removeAttr("disabled");
                    }
                    else {
                        jQuery("#idaliascampo2982").attr("disabled", "true").val("").removeAttr("checked");
                    }
                });
                jQuery("[id*='idradiosaliascampo2979']").trigger("change");
                jQuery("#idchecksaliascampo292712962").change(function() {
                    if (jQuery(this).is(":checked")) {
                        jQuery("#idaliascampo2928").removeAttr("disabled");
                    }
                    else {
                        jQuery("#idaliascampo2928").attr("disabled", "true").val("").removeAttr("checked");
                    }
                });
                jQuery("#idchecksaliascampo292712962").trigger("change");
                jQuery("#idchecksaliascampo292512946").change(function() {
                    if (jQuery(this).is(":checked")) {
                        jQuery("[id*='idradiosaliascampo2929']").removeAttr("disabled");
                    }
                    else {
                        jQuery("[id*='idradiosaliascampo2929']").attr("disabled", "true").val("").removeAttr("checked");
                    }
                });
                jQuery("#idchecksaliascampo292512946").trigger("change");
                jQuery("#idchecksaliascampo292512948").change(function() {
                    if (jQuery(this).is(":checked")) {
                        jQuery("[id*='idchecksaliascampo2926'],[id*='idchecksaliascampo2927'],[id*='idradiosaliascampo2929']").removeAttr("disabled");
                    }
                    else {
                        jQuery("[id*='idchecksaliascampo2926'],[id*='idchecksaliascampo2927'],[id*='idradiosaliascampo2929']").attr("disabled", "true").val("").removeAttr("checked");
                    }
                });
                jQuery("#idchecksaliascampo292512948").trigger("change");
                jQuery("#idchecksaliascampo292512949").change(function() {
                    if (jQuery(this).is(":checked")) {
                        jQuery("[id*='idchecksaliascampo2926'],[id*='idchecksaliascampo2927'],[id*='idradiosaliascampo2929']").removeAttr("disabled");
                    }
                    else {
                        jQuery("[id*='idchecksaliascampo2926'],[id*='idchecksaliascampo2927'],[id*='idradiosaliascampo2929']").attr("disabled", "true").val("").removeAttr("checked");
                    }
                });
                jQuery("#idchecksaliascampo292512949").trigger("change");
                jQuery("#idchecksaliascampo292512950").change(function() {
                    if (jQuery(this).is(":checked")) {
                        jQuery("[id*='idchecksaliascampo2926'],[id*='idchecksaliascampo2927'],[id*='idradiosaliascampo2929']").removeAttr("disabled");
                    }
                    else {
                        jQuery("[id*='idchecksaliascampo2926'],[id*='idchecksaliascampo2927'],[id*='idradiosaliascampo2929']").attr("disabled", "true").val("").removeAttr("checked");
                    }
                });
                jQuery("#idchecksaliascampo292512950").trigger("change");
                jQuery("#idchecksaliascampo292612951").change(function() {
                    if (jQuery(this).is(":checked")) {
                        jQuery("[id*='idradiosaliascampo2929']").removeAttr("disabled");
                    }
                    else {
                        jQuery("[id*='idradiosaliascampo2929']").attr("disabled", "true").val("").removeAttr("checked");
                    }
                });
                jQuery("#idchecksaliascampo292612951").trigger("change");
                jQuery("#idchecksaliascampo292612952").change(function() {
                    if (jQuery(this).is(":checked")) {
                        jQuery("[id*='idradiosaliascampo2929']").removeAttr("disabled");
                    }
                    else {
                        jQuery("[id*='idradiosaliascampo2929']").attr("disabled", "true").val("").removeAttr("checked");
                    }
                });
                jQuery("#idchecksaliascampo292612952").trigger("change");
                jQuery("#idchecksaliascampo292612953").change(function() {
                    if (jQuery(this).is(":checked")) {
                        jQuery("[id*='idchecksaliascampo2927'],[id*='idradiosaliascampo2929']").removeAttr("disabled");
                    }
                    else {
                        jQuery("[id*='idchecksaliascampo2927'],[id*='idradiosaliascampo2929']").attr("disabled", "true").val("").removeAttr("checked");
                    }
                });
                jQuery("#idchecksaliascampo292612953").trigger("change");
                jQuery("#idchecksaliascampo292612954").change(function() {
                    if (jQuery(this).is(":checked")) {
                        jQuery("[id*='idchecksaliascampo2927'],[id*='idradiosaliascampo2929']").removeAttr("disabled");
                    }
                    else {
                        jQuery("[id*='idchecksaliascampo2927'],[id*='idradiosaliascampo2929']").attr("disabled", "true").val("").removeAttr("checked");
                    }
                });
                jQuery("#idchecksaliascampo292612954").trigger("change");
                jQuery("#idchecksaliascampo292612955").change(function() {
                    if (jQuery(this).is(":checked")) {
                        jQuery("[id*='idchecksaliascampo2927'],[id*='idradiosaliascampo2929']").removeAttr("disabled");
                    }
                    else {
                        jQuery("[id*='idchecksaliascampo2927'],[id*='idradiosaliascampo2929']").attr("disabled", "true").val("").removeAttr("checked");
                    }
                });
                jQuery("#idchecksaliascampo292612955").trigger("change");
                jQuery("#idaliascampo2962").focusout(function() {
                    if (jQuery.trim(jQuery(this).val()).length != 0 && jQuery(this).val() != "") {
                        jQuery("#idaliascampo2966").removeAttr("disabled");
                    }
                    else {
                        jQuery("#idaliascampo2966").attr("disabled", "true").val("").removeAttr("checked");
                    }
                }
                );
                jQuery("#idaliascampo2962").trigger("focusout");
                jQuery("#idaliascampo2963").focusout(function() {
                    if (jQuery.trim(jQuery(this).val()).length != 0 && jQuery(this).val() != "") {
                        jQuery("#idaliascampo2965").removeAttr("disabled");
                    }
                    else {
                        jQuery("#idaliascampo2965").attr("disabled", "true").val("").removeAttr("checked");
                    }
                }
                );
                jQuery("#idaliascampo2963").trigger("focusout");
                jQuery("#idaliascampo2964").focusout(function() {
                    if (jQuery.trim(jQuery(this).val()).length != 0 && jQuery(this).val() != "") {
                        jQuery("#idaliascampo2967").removeAttr("disabled");
                    }
                    else {
                        jQuery("#idaliascampo2967").attr("disabled", "true").val("").removeAttr("checked");
                    }
                }
                );
                jQuery("#idaliascampo2964").trigger("focusout");
                jQuery("#idchecksaliascampo297313269").change(function() {
                    if (jQuery(this).is(":checked")) {
                        jQuery("[id*='idradiosaliascampo2974'],[id*='idradiosaliascampo2976'],[id*='idradiosaliascampo2979']").removeAttr("disabled");
                    }
                    else {
                        jQuery("[id*='idradiosaliascampo2974'],[id*='idradiosaliascampo2976'],[id*='idradiosaliascampo2979']").attr("disabled", "true").val("").removeAttr("checked");
                    }
                });
                jQuery("#idchecksaliascampo297313269").trigger("change");
                jQuery("#idchecksaliascampo297313270").change(function() {
                    if (jQuery(this).is(":checked")) {
                        jQuery("[id*='idradiosaliascampo2974'],[id*='idradiosaliascampo2976'],[id*='idradiosaliascampo2979']").removeAttr("disabled");
                    }
                    else {
                        jQuery("[id*='idradiosaliascampo2974'],[id*='idradiosaliascampo2976'],[id*='idradiosaliascampo2979']").attr("disabled", "true").val("").removeAttr("checked");
                    }
                });
                jQuery("#idchecksaliascampo297313270").trigger("change");
                jQuery("#idchecksaliascampo297313271").change(function() {
                    if (jQuery(this).is(":checked")) {
                        jQuery("[id*='idradiosaliascampo2974'],[id*='idradiosaliascampo2976'],[id*='idradiosaliascampo2979']").removeAttr("disabled");
                    }
                    else {
                        jQuery("[id*='idradiosaliascampo2974'],[id*='idradiosaliascampo2976'],[id*='idradiosaliascampo2979']").attr("disabled", "true").val("").removeAttr("checked");
                    }
                });
                jQuery("#idchecksaliascampo297313271").trigger("change");
                jQuery("#idchecksaliascampo301913377").change(function() {
                    if (jQuery(this).is(":checked")) {
                        jQuery("#idaliascampo3081").removeAttr("disabled");
                    }
                    else {
                        jQuery("#idaliascampo3081").attr("disabled", "true").val("").removeAttr("checked");
                    }
                });
                jQuery("#idchecksaliascampo301913377").trigger("change");
                jQuery("#idchecksaliascampo301913376").change(function() {
                    if (jQuery(this).is(":checked")) {
                        jQuery("#idaliascampo3080").removeAttr("disabled");
                    }
                    else {
                        jQuery("#idaliascampo3080").attr("disabled", "true").val("").removeAttr("checked");
                    }
                });
                jQuery("#idchecksaliascampo301913376").trigger("change");
                jQuery("#idchecksaliascampo308713752").change(function() {
                    if (jQuery(this).is(":checked")) {
                        jQuery("[id*='idchecksaliascampo3090']").removeAttr("disabled");
                    }
                    else {
                        jQuery("[id*='idchecksaliascampo3090']").attr("disabled", "true").val("").removeAttr("checked");
                    }
                });
                jQuery("#idchecksaliascampo308713752").trigger("change");
                jQuery("#idchecksaliascampo308813756").change(function() {
                    if (jQuery(this).is(":checked")) {
                        jQuery("#idaliascampo3089").removeAttr("disabled");
                    }
                    else {
                        jQuery("#idaliascampo3089").attr("disabled", "true").val("").removeAttr("checked");
                    }
                });
                jQuery("#idchecksaliascampo308813756").trigger("change");
                jQuery("#idchecksaliascampo308813754").change(function() {
                    if (jQuery(this).is(":checked")) {
                        jQuery("[id*='idradiosaliascampo3091'],[id*='idradiosaliascampo3092']").removeAttr("disabled");
                    }
                    else {
                        jQuery("[id*='idradiosaliascampo3091'],[id*='idradiosaliascampo3092']").attr("disabled", "true").val("").removeAttr("checked");
                    }
                });
                jQuery("#idchecksaliascampo308813754").trigger("change");
                jQuery("#idchecksaliascampo308813754").change(function() {
                    if (jQuery(this).is(":checked")) {
                        jQuery("[id*='idchecksaliascampo3090']").removeAttr("disabled");
                    }
                    else {
                        jQuery("[id*='idchecksaliascampo3090']").attr("disabled", "true").val("").removeAttr("checked");
                    }
                });
                jQuery("#idchecksaliascampo308813754").trigger("change");
                jQuery("#idchecksaliascampo308813755").change(function() {
                    if (jQuery(this).is(":checked")) {
                        jQuery("[id*='idchecksaliascampo3090'],[id*='idradiosaliascampo3091'],[id*='idradiosaliascampo3092']").removeAttr("disabled");
                    }
                    else {
                        jQuery("[id*='idchecksaliascampo3090'],[id*='idradiosaliascampo3091'],[id*='idradiosaliascampo3092']").attr("disabled", "true").val("").removeAttr("checked");
                    }
                });
                jQuery("#idchecksaliascampo308813755").trigger("change");
                jQuery("#idchecksaliascampo309013757").change(function() {
                    if (jQuery(this).is(":checked")) {
                        jQuery("[id*='idradiosaliascampo3091'],[id*='idradiosaliascampo3092']").removeAttr("disabled");
                    }
                    else {
                        jQuery("[id*='idradiosaliascampo3091'],[id*='idradiosaliascampo3092']").attr("disabled", "true").val("").removeAttr("checked");
                    }
                });
                jQuery("#idchecksaliascampo309013757").trigger("change");
                jQuery("#idchecksaliascampo308813756").change(function() {
                    if (jQuery(this).is(":checked")) {
                        jQuery("[id*='idradiosaliascampo3092'],[id*='idradiosaliascampo3091'],[id*='idchecksaliascampo3090']").removeAttr("disabled");
                    }
                    else {
                        jQuery("[id*='idradiosaliascampo3092'],[id*='idradiosaliascampo3091'],[id*='idchecksaliascampo3090']").attr("disabled", "true").val("").removeAttr("checked");
                    }
                });
                jQuery("#idchecksaliascampo308813756").trigger("change");
                jQuery("#idchecksaliascampo309513774").change(function() {
                    if (jQuery(this).is(":checked")) {
                        jQuery("[id*='idradiosaliascampo3096']").removeAttr("disabled");
                    }
                    else {
                        jQuery("[id*='idradiosaliascampo3096']").attr("disabled", "true").val("").removeAttr("checked");
                    }
                });
                jQuery("#idchecksaliascampo309513774").trigger("change");
                jQuery("#idchecksaliascampo309513775").change(function() {
                    if (jQuery(this).is(":checked")) {
                        jQuery("[id*='idradiosaliascampo3096']").removeAttr("disabled");
                    }
                    else {
                        jQuery("[id*='idradiosaliascampo3096']").attr("disabled", "true").val("").removeAttr("checked");
                    }
                });
                jQuery("#idchecksaliascampo309513775").trigger("change");
                jQuery("[id*='idradiosaliascampo3096']").change(function() {
                    if (jQuery("#idradiosaliascampo309613782").is(":checked")) {
                        jQuery("#idaliascampo3097").removeAttr("disabled");
                    }
                    else {
                        jQuery("#idaliascampo3097").attr("disabled", "true").val("").removeAttr("checked");
                    }
                });

                /*Validaciones Pedro*/
                jQuery("[id*='3b15']").trigger("change");
                jQuery("#3b15").change(function() {
                    if (jQuery(this).is(":checked")) {
                        jQuery("[id*='3b2cual']").attr("disabled", "true").val("").removeAttr("checked");
                        jQuery("[id*='3b31']").attr("disabled", "true").val("").removeAttr("checked");
                        jQuery("[id*='3b33']").attr("disabled", "true").val("").removeAttr("checked");
                        jQuery("[id*='3b34']").attr("disabled", "true").val("").removeAttr("checked");
                        jQuery("[id*='3b35']").attr("disabled", "true").val("").removeAttr("checked");
                        jQuery("[id*='3b36']").attr("disabled", "true").val("").removeAttr("checked");
                        jQuery("[id*='3b37']").attr("disabled", "true").val("").removeAttr("checked");
                        jQuery("[id*='3b38']").attr("disabled", "true").val("").removeAttr("checked");
                        jQuery("[id*='3b39']").attr("disabled", "true").val("").removeAttr("checked");
                        jQuery("[id*='3b40']").attr("disabled", "true").val("").removeAttr("checked");
                        jQuery("[id*='3b41']").attr("disabled", "true").val("").removeAttr("checked");
                        jQuery("[id*='3b3cual']").attr("disabled", "true").val("").removeAttr("checked");
                    }
                    else {
                        jQuery("[id*='3b2cual']").removeAttr("disabled");
                        jQuery("[id*='3b31']").removeAttr("disabled");
                        jQuery("[id*='3b33']").removeAttr("disabled");
                        jQuery("[id*='3b34']").removeAttr("disabled");
                        jQuery("[id*='3b35']").removeAttr("disabled");
                        jQuery("[id*='3b36']").removeAttr("disabled");
                        jQuery("[id*='3b37']").removeAttr("disabled");
                        jQuery("[id*='3b38']").removeAttr("disabled");
                        jQuery("[id*='3b39']").removeAttr("disabled");
                        jQuery("[id*='3b40']").removeAttr("disabled");
                        jQuery("[id*='3b41']").removeAttr("disabled");
                        jQuery("[id*='3b3cual']").removeAttr("disabled");
                    }
                });

                jQuery("[id*='3b14']").trigger("change");
                jQuery("#3b14").change(function() {
                    if (jQuery(this).is(":checked")) {
                        jQuery("[id*='3b2cual']").attr("disabled", "true").val("").removeAttr("checked");
                        jQuery("[id*='3b31']").attr("disabled", "true").val("").removeAttr("checked");
                        jQuery("[id*='3b33']").attr("disabled", "true").val("").removeAttr("checked");
                        jQuery("[id*='3b34']").attr("disabled", "true").val("").removeAttr("checked");
                        jQuery("[id*='3b35']").attr("disabled", "true").val("").removeAttr("checked");
                        jQuery("[id*='3b36']").attr("disabled", "true").val("").removeAttr("checked");
                        jQuery("[id*='3b37']").attr("disabled", "true").val("").removeAttr("checked");
                        jQuery("[id*='3b38']").attr("disabled", "true").val("").removeAttr("checked");
                        jQuery("[id*='3b39']").attr("disabled", "true").val("").removeAttr("checked");
                        jQuery("[id*='3b40']").attr("disabled", "true").val("").removeAttr("checked");
                        jQuery("[id*='3b41']").attr("disabled", "true").val("").removeAttr("checked");
                        jQuery("[id*='3b3cual']").attr("disabled", "true").val("").removeAttr("checked");
                    }
                    else {
                        jQuery("[id*='3b2cual']").removeAttr("disabled");
                        jQuery("[id*='3b31']").removeAttr("disabled");
                        jQuery("[id*='3b33']").removeAttr("disabled");
                        jQuery("[id*='3b34']").removeAttr("disabled");
                        jQuery("[id*='3b35']").removeAttr("disabled");
                        jQuery("[id*='3b36']").removeAttr("disabled");
                        jQuery("[id*='3b37']").removeAttr("disabled");
                        jQuery("[id*='3b38']").removeAttr("disabled");
                        jQuery("[id*='3b39']").removeAttr("disabled");
                        jQuery("[id*='3b40']").removeAttr("disabled");
                        jQuery("[id*='3b41']").removeAttr("disabled");
                        jQuery("[id*='3b3cual']").removeAttr("disabled");
                    }
                });

                jQuery("#idchecksaliascampo922712961").change(function() {
                    if (jQuery(idchecksaliascampo922712961).is(":checked")) {
                        jQuery("[id*='idaliascampo3038']").attr("disabled", "true").val("");
                    }
                    else {
                        jQuery("[id*='idaliascampo3038']").removeAttr("disabled");
                    }
                });

                jQuery("#idaliascampo3038").change(function() {
                    console.log(parseInt(jQuery("#idaliascampo3038").val()));
                    if (parseInt(jQuery("#idaliascampo3038").val()) < parseInt(jQuery("#idaliascampo3037").val()))
                    {
                        alert("El año de grado como especialista no es correcto. Por favor verifique.");
                        jQuery("#idaliascampo3038").val("");
                    }
                });

                jQuery("input[name='3a3name']").change(function() {
                    if (jQuery("#3a41").is(":checked")) {
                        jQuery("#3a3cual").removeAttr("disabled");
                    } else {
                        jQuery("#3a3cual").attr("disabled", "disabled");
                        jQuery("#3a3cual").val("");
                    }
                });

                jQuery("input[name='namealiascampo2914']").change(function() {
                    if (jQuery("#idchecksaliascampo291412925").is(":checked")) {
                        jQuery("input[name='namealiascampo2915']").removeAttr("disabled");
                    } else {
                        jQuery("input[name='namealiascampo2915']").attr("disabled", "disabled");
                        jQuery("input[name='namealiascampo2915']").removeAttr("checked");
                    }

                });

                jQuery("input[name='namealiascampo2914']").change(function() {
                    if (jQuery("#idchecksaliascampo291412926").is(":checked")) {
                        jQuery("input[name='namealiascampo2916']").removeAttr("disabled");
                    } else {
                        jQuery("input[name='namealiascampo2916']").attr("disabled", "disabled");
                        jQuery("input[name='namealiascampo2916']").removeAttr("checked");
                    }

                });

                jQuery("input[name='namealiascampo3068']").change(function() {
                    if (jQuery("#idradiosaliascampo306813709").is(":checked")) {
                        jQuery("#idaliascampo3069").removeAttr("disabled");
                    } else {
                        jQuery("#idaliascampo3069").attr("disabled", "disabled");
                        jQuery("#idaliascampo3069").val("");
                    }
                });

                jQuery("input[name='3b3name']").change(function() {
                    if (jQuery("#3b41").is(":checked")) {
                        jQuery("#3b3cual").removeAttr("disabled");
                    } else {
                        jQuery("#3b3cual").attr("disabled", "disabled");
                        jQuery("#3b3cual").val("");
                    }
                });

                jQuery("input[name='3c3name']").change(function() {
                    if (jQuery("#3c41").is(":checked")) {
                        jQuery("#3c3cual").removeAttr("disabled");
                    } else {
                        jQuery("#3c3cual").attr("disabled", "disabled");
                        jQuery("#3c3cual").val("");
                    }
                });

				                jQuery("input[name='3d3name']").change(function() {
                    if (jQuery("#3d41").is(":checked")) {
                        jQuery("#3d3cual").removeAttr("disabled");
                    } else {
                        jQuery("#3d3cual").attr("disabled", "disabled");
                        jQuery("#3d3cual").val("");
                    }
                });
				
								                jQuery("input[name='3e3name']").change(function() {
                    if (jQuery("#3e41").is(":checked")) {
                        jQuery("#3e3cual").removeAttr("disabled");
                    } else {
                        jQuery("#3e3cual").attr("disabled", "disabled");
                        jQuery("#3e3cual").val("");
                    }
                });
				
                jQuery("[id*='idradiosaliascampo3096']").trigger("change");

                if ($scope.idEncuesta != undefined && $scope.idEncuesta != null) {
                    $scope.cargarEncuesta();
                }

            });

            function flujoavance(maxresp, respuniq, grupo) {
                var i = 1;

                //validar numeros de respuestas
                jQuery(".grp" + grupo).each(function() {
                    if (jQuery(this).attr("type") != "radio" && jQuery(this).attr("type") != "checkbox") {
                        if (jQuery.trim(jQuery(this).val()) != "")
                            i++;
                    }
                    else if (jQuery(this).is(":checked"))
                        i++;
                }
                );
                jQuery(".grp" + grupo).each(function() {
                    if (i <= maxresp && jQuery.trim(jQuery(this).val()) == "") {
                        jQuery(this).removeAttr("disabled");
                    }
                    else if (i > maxresp && jQuery.trim(jQuery(this).val()) == "") {
                        jQuery(this).attr("disabled", "true");
                    }
                }
                );
                //validar unicos
                if (respuniq == 1) {
                    jQuery(jQuery(".grp" + grupo).get().reverse()).each(function(key) {
                        if (buscaconcidencia(grupo, jQuery(this)) && key != 0) {
                            jQuery(this).val("");
                        }
                    }
                    );
                }
            }

            function buscaconcidencia(grupo, obj) {
                var resp = false;
                var i = 1;
                jQuery(".grp" + grupo).each(function() {
                    if (jQuery(this).attr("id") != jQuery(obj).attr("id") && jQuery.trim(jQuery(this).val()) == jQuery(obj).val() && jQuery(this).val() != "")
                        i++;
                }
                );
                if (i > 1)
                    resp = true;

                return resp;
            }

            jQuery(function() {
                jQuery("select").change(function() {
                    jQuery(this);
                });
            });


        };

        $scope.guardar = function(urlPagina) {
            $scope.pagina = urlPagina;
            var confirmarGuardado = confirm("Esta seguro que desea almacenar la encuesta!");
            if (confirmarGuardado) {
                var db = window.openDatabase("fedesaludDB", "1.0", "Fedesalud DB", 200000);
                db.transaction($scope.querySaveEncuesta, $scope.errorDB);
            }
        };

        $scope.cargarEncuesta = function() {
            var db = window.openDatabase("fedesaludDB", "1.0", "Fedesalud DB", 200000);
            var sql = "SELECT * FROM DATAENCUESTAS WHERE IDENCUESTA = " + $scope.idEncuesta;

            db.transaction(function(tx) {
                tx.executeSql(sql, [], function(tx, result) {
                    for (var i = 0; i < result.rows.length; i++) {
                        var objControl = document.getElementsByName(result.rows.item(i).IDCAMPO);
                        for (var itemControl in objControl) {
                            if (objControl[itemControl].type == 'radio') {
                                if (objControl[itemControl].value == result.rows.item(i).VALOR)
                                    objControl[itemControl].checked = true;
                                jQuery(objControl[itemControl]).trigger("change");
                            }
                            else
                                objControl[itemControl].value = result.rows.item(i).VALOR;
                            //jQuery(objControl[itemControl]).trigger("change");
                        }

                        if (objControl.length == 0)
                        {
                            objControl = document.getElementById(result.rows.item(i).IDCAMPO);
                            //console.log(objControl);
                            if (objControl != null) {
                                if (objControl.type == 'checkbox') {
                                    objControl.checked = result.rows.item(i).VALOR;
                                    jQuery(objControl).trigger("change");
                                }
                            }
                        }
                    }
                }, $scope.errorDB);
            }, $scope.errorDB);
        };

        //En caso de error
        $scope.querySaveEncuesta = function(tx) {
            var arrayData = $scope.formData;

            var usercookie = window.localStorage.getItem("user");
            var nombreEncuesta = arrayData["nombreEncuesta"];
            var tipoEncuesta = arrayData["tipoEncuesta"];

            if ($scope.idEncuesta == undefined) {
                if (window.localStorage.getItem("idEncuesta") == null) {
                    var sql = "INSERT INTO ENCUESTAS (NOMBRE, TIPOENCUESTA, SINCRONIZADO, USUARIO) VALUES ('" + nombreEncuesta + "','" + tipoEncuesta + "',0, '" + usercookie + "')";
                    tx.executeSql(sql, [], function(error) {
                        console.log(error);
                    });

                    tx.executeSql("SELECT MAX(ID) as ID FROM ENCUESTAS", [],
                            function(tx, result) {
                                window.localStorage.setItem("idEncuesta", result.rows.item(0).ID);
                                for (var item in arrayData) {
                                    var sql = "INSERT INTO DATAENCUESTAS (IDENCUESTA, IDCAMPO, VALOR, SINCRONIZADO, USUARIO) VALUES (" + result.rows.item(0).ID + ",'" + item + "','" + arrayData[item] + "', 0, '" + usercookie + "')";
                                    tx.executeSql(sql);
                                }
                            },
                            function(err) {
                                //console.log("Error: " + err); alert(err.code); 
                            }
                    );

                } else {
                    for (var item in arrayData) {
                        if (item != "nombreEncuesta" && item != "tipoEncuesta") {
                            var sql = "INSERT INTO DATAENCUESTAS (IDENCUESTA, IDCAMPO, VALOR, SINCRONIZADO, USUARIO) VALUES (" + localStorage.getItem("idEncuesta") + ",'" + item + "','" + arrayData[item] + "', 0, '" + usercookie + "')";
                            tx.executeSql(sql);
                        }
                    }
                }
            } else if ($scope.idEncuesta != undefined) {
                //console.log(arrayData);
                //console.log(Object.keys(arrayData).length);
                for (var i = 0; i < Object.keys(arrayData).length; i++) {
                    tx.executeSql("SELECT COUNT(1) as Cantidad FROM DATAENCUESTAS WHERE IDENCUESTA = " + $scope.idEncuesta + " AND IDCAMPO = '" + i + "'", [], function(tx, result) {
                        if (i != "nombreEncuesta" && i != "tipoEncuesta") {
                            if (result.rows.item(0).Cantidad > 0) {
                                var sql = "UPDATE DATAENCUESTAS SET SINCRONIZADO = 0, VALOR = '" + arrayData[i] + "' WHERE IDENCUESTA = " + $scope.idEncuesta + " AND IDCAMPO = '" + i + "'";
                                //console.log(sql);
                                tx.executeSql(sql);
                            } else {
                                var sql = "INSERT INTO DATAENCUESTAS (IDENCUESTA, IDCAMPO, VALOR, SINCRONIZADO, USUARIO) VALUES (" + $scope.idEncuesta + ",'" + i + "','" + arrayData[i] + "', 0, '" + usercookie + "')";
                                //console.log(sql);
                                tx.executeSql(sql);
                            }
                        }
                    }, $scope.errorDB);
                }
            }

            if ($scope.pagina == "ultima") {
                localStorage.removeItem("idEncuesta");
                alert("La encuesta se almaceno correctamente!");
                window.location = '#/menu';
            } else {
                if ($scope.idEncuesta != undefined && $scope.idEncuesta != null) {
                    window.location = '#/' + $scope.pagina + "/" + $scope.idEncuesta;
                } else {
                    window.location = '#/' + $scope.pagina;
                }

            }
        };

        //En caso de error
        $scope.errorDB = function(error) {
            alert("Error BD: " + error.code);
            //console.log(error);
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
        tx.executeSql("INSERT INTO USUARIOS (NOMBRE, PASSWORD) VALUES ('Encuestador4', 'Encuestador#4')");
        tx.executeSql("INSERT INTO USUARIOS (NOMBRE, PASSWORD) VALUES ('Encuestador5', 'Encuestador#5')");
        tx.executeSql("INSERT INTO USUARIOS (NOMBRE, PASSWORD) VALUES ('Encuestador6', 'Encuestador#6')");
        tx.executeSql("INSERT INTO USUARIOS (NOMBRE, PASSWORD) VALUES ('Encuestador7', 'Encuestador#7')");
        tx.executeSql("INSERT INTO USUARIOS (NOMBRE, PASSWORD) VALUES ('Encuestador8', 'Encuestador#8')");
        tx.executeSql("INSERT INTO USUARIOS (NOMBRE, PASSWORD) VALUES ('Encuestador9', 'Encuestador#9')");
        tx.executeSql("INSERT INTO USUARIOS (NOMBRE, PASSWORD) VALUES ('Encuestador10', 'Encuestador#10')");
        tx.executeSql("INSERT INTO USUARIOS (NOMBRE, PASSWORD) VALUES ('Encuestador11', 'Encuestador#11')");
        tx.executeSql("INSERT INTO USUARIOS (NOMBRE, PASSWORD) VALUES ('Encuestador12', 'Encuestador#12')");
        tx.executeSql("INSERT INTO USUARIOS (NOMBRE, PASSWORD) VALUES ('Encuestador13', 'Encuestador#13')");
        tx.executeSql("INSERT INTO USUARIOS (NOMBRE, PASSWORD) VALUES ('Encuestador14', 'Encuestador#14')");
        tx.executeSql("INSERT INTO USUARIOS (NOMBRE, PASSWORD) VALUES ('Encuestador15', 'Encuestador#15')");
        tx.executeSql("INSERT INTO USUARIOS (NOMBRE, PASSWORD) VALUES ('Encuestador16', 'Encuestador#16')");
        tx.executeSql("INSERT INTO USUARIOS (NOMBRE, PASSWORD) VALUES ('Encuestador17', 'Encuestador#17')");
        tx.executeSql("INSERT INTO USUARIOS (NOMBRE, PASSWORD) VALUES ('Encuestador18', 'Encuestador#18')");
        tx.executeSql("INSERT INTO USUARIOS (NOMBRE, PASSWORD) VALUES ('Encuestador19', 'Encuestador#19')");
        tx.executeSql("INSERT INTO USUARIOS (NOMBRE, PASSWORD) VALUES ('Encuestador20', 'Encuestador#20')");
        tx.executeSql("INSERT INTO USUARIOS (NOMBRE, PASSWORD) VALUES ('Encuestador21', 'Encuestador#21')");
        tx.executeSql("INSERT INTO USUARIOS (NOMBRE, PASSWORD) VALUES ('Encuestador22', 'Encuestador#22')");
        tx.executeSql("INSERT INTO USUARIOS (NOMBRE, PASSWORD) VALUES ('Encuestador23', 'Encuestador#23')");
        tx.executeSql("INSERT INTO USUARIOS (NOMBRE, PASSWORD) VALUES ('Encuestador24', 'Encuestador#24')");
        tx.executeSql("INSERT INTO USUARIOS (NOMBRE, PASSWORD) VALUES ('Encuestador25', 'Encuestador#25')");
        tx.executeSql("INSERT INTO USUARIOS (NOMBRE, PASSWORD) VALUES ('Encuestador26', 'Encuestador#26')");
        tx.executeSql("INSERT INTO USUARIOS (NOMBRE, PASSWORD) VALUES ('Encuestador27', 'Encuestador#27')");
        tx.executeSql("INSERT INTO USUARIOS (NOMBRE, PASSWORD) VALUES ('Encuestador28', 'Encuestador#28')");
        tx.executeSql("INSERT INTO USUARIOS (NOMBRE, PASSWORD) VALUES ('Encuestador29', 'Encuestador#29')");
        tx.executeSql("INSERT INTO USUARIOS (NOMBRE, PASSWORD) VALUES ('Encuestador30', 'Encuestador#30')");
        tx.executeSql("INSERT INTO USUARIOS (NOMBRE, PASSWORD) VALUES ('Encuestador31', 'Encuestador#31')");
        tx.executeSql("INSERT INTO USUARIOS (NOMBRE, PASSWORD) VALUES ('Encuestador32', 'Encuestador#32')");

      }
      else
      {
        tx.executeSql("DELETE FROM USUARIOS");

        tx.executeSql("INSERT INTO USUARIOS (NOMBRE, PASSWORD) VALUES ('Administrador', '123456')");
        tx.executeSql("INSERT INTO USUARIOS (NOMBRE, PASSWORD) VALUES ('Encuestador1', 'Encuestador#1')");
        tx.executeSql("INSERT INTO USUARIOS (NOMBRE, PASSWORD) VALUES ('Encuestador2', 'Encuestador#2')");
        tx.executeSql("INSERT INTO USUARIOS (NOMBRE, PASSWORD) VALUES ('Encuestador3', 'Encuestador#3')");
        tx.executeSql("INSERT INTO USUARIOS (NOMBRE, PASSWORD) VALUES ('Encuestador4', 'Encuestador#4')");
        tx.executeSql("INSERT INTO USUARIOS (NOMBRE, PASSWORD) VALUES ('Encuestador5', 'Encuestador#5')");
        tx.executeSql("INSERT INTO USUARIOS (NOMBRE, PASSWORD) VALUES ('Encuestador6', 'Encuestador#6')");
        tx.executeSql("INSERT INTO USUARIOS (NOMBRE, PASSWORD) VALUES ('Encuestador7', 'Encuestador#7')");
        tx.executeSql("INSERT INTO USUARIOS (NOMBRE, PASSWORD) VALUES ('Encuestador8', 'Encuestador#8')");
        tx.executeSql("INSERT INTO USUARIOS (NOMBRE, PASSWORD) VALUES ('Encuestador9', 'Encuestador#9')");
        tx.executeSql("INSERT INTO USUARIOS (NOMBRE, PASSWORD) VALUES ('Encuestador10', 'Encuestador#10')");
        tx.executeSql("INSERT INTO USUARIOS (NOMBRE, PASSWORD) VALUES ('Encuestador11', 'Encuestador#11')");
        tx.executeSql("INSERT INTO USUARIOS (NOMBRE, PASSWORD) VALUES ('Encuestador12', 'Encuestador#12')");
        tx.executeSql("INSERT INTO USUARIOS (NOMBRE, PASSWORD) VALUES ('Encuestador13', 'Encuestador#13')");
        tx.executeSql("INSERT INTO USUARIOS (NOMBRE, PASSWORD) VALUES ('Encuestador14', 'Encuestador#14')");
        tx.executeSql("INSERT INTO USUARIOS (NOMBRE, PASSWORD) VALUES ('Encuestador15', 'Encuestador#15')");
        tx.executeSql("INSERT INTO USUARIOS (NOMBRE, PASSWORD) VALUES ('Encuestador16', 'Encuestador#16')");
        tx.executeSql("INSERT INTO USUARIOS (NOMBRE, PASSWORD) VALUES ('Encuestador17', 'Encuestador#17')");
        tx.executeSql("INSERT INTO USUARIOS (NOMBRE, PASSWORD) VALUES ('Encuestador18', 'Encuestador#18')");
        tx.executeSql("INSERT INTO USUARIOS (NOMBRE, PASSWORD) VALUES ('Encuestador19', 'Encuestador#19')");
        tx.executeSql("INSERT INTO USUARIOS (NOMBRE, PASSWORD) VALUES ('Encuestador20', 'Encuestador#20')");
        tx.executeSql("INSERT INTO USUARIOS (NOMBRE, PASSWORD) VALUES ('Encuestador21', 'Encuestador#21')");
        tx.executeSql("INSERT INTO USUARIOS (NOMBRE, PASSWORD) VALUES ('Encuestador22', 'Encuestador#22')");
        tx.executeSql("INSERT INTO USUARIOS (NOMBRE, PASSWORD) VALUES ('Encuestador23', 'Encuestador#23')");
        tx.executeSql("INSERT INTO USUARIOS (NOMBRE, PASSWORD) VALUES ('Encuestador24', 'Encuestador#24')");
        tx.executeSql("INSERT INTO USUARIOS (NOMBRE, PASSWORD) VALUES ('Encuestador25', 'Encuestador#25')");
        tx.executeSql("INSERT INTO USUARIOS (NOMBRE, PASSWORD) VALUES ('Encuestador26', 'Encuestador#26')");
        tx.executeSql("INSERT INTO USUARIOS (NOMBRE, PASSWORD) VALUES ('Encuestador27', 'Encuestador#27')");
        tx.executeSql("INSERT INTO USUARIOS (NOMBRE, PASSWORD) VALUES ('Encuestador28', 'Encuestador#28')");
        tx.executeSql("INSERT INTO USUARIOS (NOMBRE, PASSWORD) VALUES ('Encuestador29', 'Encuestador#29')");
        tx.executeSql("INSERT INTO USUARIOS (NOMBRE, PASSWORD) VALUES ('Encuestador30', 'Encuestador#30')");
        tx.executeSql("INSERT INTO USUARIOS (NOMBRE, PASSWORD) VALUES ('Encuestador31', 'Encuestador#31')");
        tx.executeSql("INSERT INTO USUARIOS (NOMBRE, PASSWORD) VALUES ('Encuestador32', 'Encuestador#32')");

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
      }
    };

    //En caso de error
    $scope.errorDB = function(error) {
      alert("Error BD: " + error.code);
      console.log(error);
    };

  }]);

//=================================================================
//=============            Listado Controller         =============
//=================================================================
ModuleMyApp.controller('listadoInstrumentosController', ['$scope', function($scope) {
        if (window.localStorage.getItem("user") == undefined) {
            window.location = '#/login';
>>>>>>> e23396613f1afe410d4b6e89ab95283d1284be40
        }
        else {
            $scope.refresh = function() {
                window.location = '#/listencuestas';
            };

            $scope.obtenerEncuestas = function() {
                var db = window.openDatabase("fedesaludDB", "1.0", "Fedesalid DB", 200000);
                db.transaction($scope.queryEncuestas, $scope.errorDB);

                /*var div = document.getElementById("tablaEncuestas");
                 div.innerHTML = localStorage.getItem("htmlEncuestas");
                 localStorage.removeItem("htmlEncuestas");*/
            };

            $scope.editarEncuesta = function(id) {
                window.location = '#/editarInstrumentouno/' + id;
            };

            $scope.queryEncuestas = function(tx) {
                var sql = 'select ID,NOMBRE, TIPOENCUESTA from ENCUESTAS';
                tx.executeSql(sql, [],
                        function(tx, result) {
                            var html = '<thead><tr><th>IDENTIFICADOR</th><th>TIPO</th><th></th></tr></thead><tbody>';
                            for (var i = 0; i < result.rows.length; i++) {
                                if (result.rows.item(i).TIPOENCUESTA == '1') {
                                    html += "<tr><td>" + result.rows.item(i).NOMBRE + "</td><td>Usuarios</td><td><a class='btn btn-primary btn-md' href='#/instrumentouno/" + result.rows.item(i).ID + "' >Editar</a></td></tr>";
                                } else if (result.rows.item(i).TIPOENCUESTA == '2') {
                                    html += "<tr><td>" + result.rows.item(i).NOMBRE + "</td><td>Prescriptores</td><td><a class='btn btn-primary btn-md' href='#/instrumentodos/" + result.rows.item(i).ID + "' >Editar</a></td></tr>";
                                }
                            }
                            html += "</tbody>";
                            //localStorage.setItem("htmlEncuestas", html);
                            jQuery("#tablaEncuestas").html(html);
                        },
                        function(error) {
                            //console.log(error.code);
                        }
                );
            };

            //En caso de error
            $scope.errorDB = function(error) {
                alert("Error BD: " + error.code);
            };
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
    
    localStorage.removeItem("idEncuesta");

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

        /*var div = document.getElementById("tablaEncuestas");
        div.innerHTML = localStorage.getItem("htmlEncuestas");
        localStorage.removeItem("htmlEncuestas");*/
      };
      
      $scope.editarEncuesta = function(id){
        window.location = '#/editarInstrumentouno/' + id;
      };

      $scope.queryEncuestas = function(tx){ 
        var sql = 'select ID,NOMBRE, TIPOENCUESTA from ENCUESTAS';
        tx.executeSql(sql, [], 
          function(tx, result){
            var html = '<thead><tr><th>IDENTIFICADOR</th><th>TIPO</th><th></th></tr></thead><tbody>';
            for(var i = 0; i < result.rows.length; i++){
              if(result.rows.item(i).TIPOENCUESTA == '1'){
                html += "<tr><td>" + result.rows.item(i).NOMBRE  + "</td><td>Usuarios</td><td><a class='btn btn-primary btn-md' href='#/instrumentouno/" + result.rows.item(i).ID + "' >Editar</a></td></tr>";
              }else if(result.rows.item(i).TIPOENCUESTA == '2'){
                html += "<tr><td>" + result.rows.item(i).NOMBRE  + "</td><td>Prescriptores</td><td><a class='btn btn-primary btn-md' href='#/instrumentodos/" + result.rows.item(i).ID + "' >Editar</a></td></tr>";
              }
            }
            html += "</tbody>";
            //localStorage.setItem("htmlEncuestas", html);
            jQuery("#tablaEncuestas").html(html);
          },
          function(error){
            console.log(error.code);
          }
        );
      };

      //En caso de error
      $scope.errorDB = function(error) {
        alert("Error BD: " + error.code);
      };
    }
  }]);
=======
    }]);
>>>>>>> e23396613f1afe410d4b6e89ab95283d1284be40

