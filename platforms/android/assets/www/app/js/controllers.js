'use strict';

/* Controllers */

var ModuleMyApp = angular.module('myApp.controllers', []);

//=================================================================
//=============        InstrumentoUno Controller   ================
//=================================================================
ModuleMyApp.controller('instrumentounoController', ['$scope', '$routeParams', function($scope, $routeParams) {
        if(window.localStorage.getItem("user") != undefined){
            var user = window.localStorage.getItem("user");
            user = user.split(":");
            jQuery("#nameUser").html(user[1].toUpperCase());
        }
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
                        jQuery("#idaliascampo2910").attr("disabled", "true").removeAttr("checked");
                    }
                });
                // jQuery("[id*='idradiosaliascampo2909']").trigger("change");
                // jQuery("[id*='idradiosaliascampo2916']").change(function() {
                // if (jQuery("#idradiosaliascampo291612940").is(":checked")) {
                // jQuery("#idaliascampo2917").removeAttr("disabled");
                // }
                // else {
                // jQuery("#idaliascampo2917").attr("disabled", "true").removeAttr("checked");
                // }
                // });

                // jQuery("[id*='idradiosaliascampo2930']").trigger("change");
                // jQuery("#idchecksaliascampo300513326").change(function() {
                    // if (jQuery(this).is(":checked")) {
                        // jQuery("[id*='idradiosaliascampo3009']").removeAttr("disabled");
                    // }
                    // else {
                        // jQuery("[id*='idradiosaliascampo3009']").attr("disabled", "true").removeAttr("checked");
                    // }
                // });
                 //jQuery("#idchecksaliascampo300513326").trigger("change");
                 jQuery("[id*='idradiosaliascampo3012']").change(function() {
                     if (jQuery("#idradiosaliascampo301213359").is(":checked")) {
                         jQuery("#idaliascampo3014").removeAttr("disabled");
                     }
                     else {
                         jQuery("#idaliascampo3014").attr("disabled", "true").removeAttr("checked");
                   }
                });
                jQuery("[id*='idradiosaliascampo3012']").trigger("change");
                jQuery("#idchecksaliascampo301113351").change(function() {
                    if (jQuery(this).is(":checked")) {
                        jQuery("[id*='idradiosaliascampo3016']").removeAttr("disabled");
                    }
                    else {
                        jQuery("[id*='idradiosaliascampo3016']").attr("disabled", "true").removeAttr("checked");
                    }
                });
                jQuery("#idchecksaliascampo301113351").trigger("change");
                jQuery("#idchecksaliascampo292512947").change(function() {
                    if (jQuery(this).is(":checked")) {
                        jQuery("[id*='idradiosaliascampo2929']").removeAttr("disabled");
                    }
                    else {
                        jQuery("[id*='idradiosaliascampo2929']").attr("disabled", "true").removeAttr("checked");
                    }
                });
                jQuery("#idchecksaliascampo292512947").trigger("change");
                jQuery("#idchecksaliascampo297313267").change(function() {
                    if (jQuery(this).is(":checked")) {
                        jQuery("[id*='idradiosaliascampo2979']").removeAttr("disabled");
                    }
                    else {
                        jQuery("[id*='idradiosaliascampo2979']").attr("disabled", "true").removeAttr("checked");
                    }
                });
                jQuery("#idchecksaliascampo297313267").trigger("change");
                
                jQuery("#idchecksaliascampo297313268").change(function() {
                    if (jQuery(this).is(":checked")) {
                        jQuery("[id*='idradiosaliascampo2979']").removeAttr("disabled");
                    }
                    else {
                        jQuery("[id*='idradiosaliascampo2979']").attr("disabled", "true").removeAttr("checked");
                    }
                });
                jQuery("#idchecksaliascampo297313268").trigger("change");

                jQuery("#idchecksaliascampo308713751").change(function() {
                    if (jQuery(this).is(":checked")) {
                        jQuery("[id*='idchecksaliascampo3088']").removeAttr("disabled");
                    }
                    else {
                        jQuery("[id*='idchecksaliascampo3088']").attr("disabled", "true").removeAttr("checked");
                    }
                });
                jQuery("#idchecksaliascampo308713751").trigger("change");
                jQuery("#idchecksaliascampo309513776").change(function() {
                    if (jQuery(this).is(":checked")) {
                        jQuery("[id*='idradiosaliascampo3096']").removeAttr("disabled");
                    }
                    else {
                        jQuery("[id*='idradiosaliascampo3096']").attr("disabled", "true").removeAttr("checked");
                    }
                });
                jQuery("#idchecksaliascampo309513776").trigger("change");
                jQuery("[id*='idradiosaliascampo2929']").change(function() {
                    if (jQuery("#idradiosaliascampo292912970").is(":checked")) {
                        jQuery("#idaliascampo2931").removeAttr("disabled");
                    }
                    else {
                        jQuery("#idaliascampo2931").attr("disabled", "true").removeAttr("checked");
                    }
                });
                // jQuery("[id*='idradiosaliascampo2929']").trigger("change");
                // jQuery("#idchecksaliascampo301113350").change(function() {
                    // if (jQuery(this).is(":checked")) {
                        // jQuery("[id*='idradiosaliascampo3012'],[id*='idradiosaliascampo3016']").removeAttr("disabled");
                    // }
                    // else {
                        // jQuery("[id*='idradiosaliascampo3012'],[id*='idradiosaliascampo3016']").attr("disabled", "true").removeAttr("checked");
                    // }
                // });
                jQuery("#idchecksaliascampo301113350").trigger("change");
                jQuery("#idchecksaliascampo300513325").change(function() {
                    if (jQuery(this).is(":checked")) {
                        jQuery("[id*='idradiosaliascampo3008'],[id*='idradiosaliascampo3007'],[id*='idradiosaliascampo3006'],[id*='idradiosaliascampo3009']").removeAttr("disabled");
                    }
                    else {
                        jQuery("[id*='idradiosaliascampo3008'],[id*='idradiosaliascampo3007'],[id*='idradiosaliascampo3006'],[id*='idradiosaliascampo3009']").attr("disabled", "true").removeAttr("checked");
                    }
                });
                jQuery("#idchecksaliascampo300513325").trigger("change");
                jQuery("[id*='idradiosaliascampo2979']").change(function() {
                    if (jQuery("#idradiosaliascampo297913293").is(":checked")) {
                        jQuery("#idaliascampo2982").removeAttr("disabled");
                    }
                    else {
                        jQuery("#idaliascampo2982").attr("disabled", "true").removeAttr("checked");
                    }
                });
                jQuery("[id*='idradiosaliascampo2979']").trigger("change");
                jQuery("#idchecksaliascampo292712962").change(function() {
                    if (jQuery(this).is(":checked")) {
                        jQuery("#idaliascampo2928").removeAttr("disabled");
                    }
                    else {
                        jQuery("#idaliascampo2928").attr("disabled", "true").removeAttr("checked");
                    }
                });
                jQuery("#idchecksaliascampo292712962").trigger("change");
                jQuery("#idchecksaliascampo292512946").change(function() {
                    if (jQuery(this).is(":checked")) {
                        jQuery("[id*='idradiosaliascampo2929']").removeAttr("disabled");
                    }
                    else {
                        jQuery("[id*='idradiosaliascampo2929']").attr("disabled", "true").removeAttr("checked");
                    }
                });
                jQuery("#idchecksaliascampo292512946").trigger("change");
                jQuery("#idchecksaliascampo292512948").change(function() {
                    if (jQuery(this).is(":checked")) {
                        jQuery("[id*='idchecksaliascampo2926'],[id*='idchecksaliascampo2927'],[id*='idradiosaliascampo2929']").removeAttr("disabled");
                    }
                    else {
                        jQuery("[id*='idchecksaliascampo2926'],[id*='idchecksaliascampo2927'],[id*='idradiosaliascampo2929']").attr("disabled", "true").removeAttr("checked");
                    }
                });
                jQuery("#idchecksaliascampo292512948").trigger("change");
                jQuery("#idchecksaliascampo292512949").change(function() {
                    if (jQuery(this).is(":checked")) {
                        jQuery("[id*='idchecksaliascampo2926'],[id*='idchecksaliascampo2927'],[id*='idradiosaliascampo2929']").removeAttr("disabled");
                    }
                    else {
                        jQuery("[id*='idchecksaliascampo2926'],[id*='idchecksaliascampo2927'],[id*='idradiosaliascampo2929']").attr("disabled", "true").removeAttr("checked");
                    }
                });
                jQuery("#idchecksaliascampo292512949").trigger("change");
                jQuery("#idchecksaliascampo292512950").change(function() {
                    if (jQuery(this).is(":checked")) {
                        jQuery("[id*='idchecksaliascampo2926'],[id*='idchecksaliascampo2927'],[id*='idradiosaliascampo2929']").removeAttr("disabled");
                    }
                    else {
                        jQuery("[id*='idchecksaliascampo2926'],[id*='idchecksaliascampo2927'],[id*='idradiosaliascampo2929']").attr("disabled", "true").removeAttr("checked");
                    }
                });
                jQuery("#idchecksaliascampo292512950").trigger("change");
                jQuery("#idchecksaliascampo292612951").change(function() {
                    if (jQuery(this).is(":checked")) {
                        jQuery("[id*='idradiosaliascampo2929']").removeAttr("disabled");
                    }
                    else {
                        jQuery("[id*='idradiosaliascampo2929']").attr("disabled", "true").removeAttr("checked");
                    }
                });
                jQuery("#idchecksaliascampo292612951").trigger("change");
                jQuery("#idchecksaliascampo292612952").change(function() {
                    if (jQuery(this).is(":checked")) {
                        jQuery("[id*='idradiosaliascampo2929']").removeAttr("disabled");
                    }
                    else {
                        jQuery("[id*='idradiosaliascampo2929']").attr("disabled", "true").removeAttr("checked");
                    }
                });
                jQuery("#idchecksaliascampo292612952").trigger("change");
                jQuery("#idchecksaliascampo292612953").change(function() {
                    if (jQuery(this).is(":checked")) {
                        jQuery("[id*='idchecksaliascampo2927'],[id*='idradiosaliascampo2929']").removeAttr("disabled");
                    }
                    else {
                        jQuery("[id*='idchecksaliascampo2927'],[id*='idradiosaliascampo2929']").attr("disabled", "true").removeAttr("checked");
                    }
                });
                jQuery("#idchecksaliascampo292612953").trigger("change");
                jQuery("#idchecksaliascampo292612954").change(function() {
                    if (jQuery(this).is(":checked")) {
                        jQuery("[id*='idchecksaliascampo2927'],[id*='idradiosaliascampo2929']").removeAttr("disabled");
                    }
                    else {
                        jQuery("[id*='idchecksaliascampo2927'],[id*='idradiosaliascampo2929']").attr("disabled", "true").removeAttr("checked");
                    }
                });
                jQuery("#idchecksaliascampo292612954").trigger("change");
                jQuery("#idchecksaliascampo292612955").change(function() {
                    if (jQuery(this).is(":checked")) {
                        jQuery("[id*='idchecksaliascampo2927'],[id*='idradiosaliascampo2929']").removeAttr("disabled");
                    }
                    else {
                        jQuery("[id*='idchecksaliascampo2927'],[id*='idradiosaliascampo2929']").attr("disabled", "true").removeAttr("checked");
                    }
                });
                jQuery("#idchecksaliascampo292612955").trigger("change");
                jQuery("#idaliascampo2962").change(function() {
                    if (jQuery.trim(jQuery(this).val()).length != 0 && jQuery(this).val() != "") {
                        jQuery("#idaliascampo2966").removeAttr("disabled");
                    }
                    else {
                        jQuery("#idaliascampo2966").attr("disabled", "true").removeAttr("checked");
                    }
                }
                );
                jQuery("#idaliascampo2962").trigger("change");
                jQuery("#idaliascampo2963").change(function() {
                    if (jQuery.trim(jQuery(this).val()).length != 0 && jQuery(this).val() != "") {
                        jQuery("#idaliascampo2965").removeAttr("disabled");
                    }
                    else {
                        jQuery("#idaliascampo2965").attr("disabled", "true").removeAttr("checked");
                    }
                }
                );
                jQuery("#idaliascampo2963").trigger("change");
                jQuery("#idaliascampo2964").change(function() {
                    if (jQuery.trim(jQuery(this).val()).length != 0 && jQuery(this).val() != "") {
                        jQuery("#idaliascampo2967").removeAttr("disabled");
                    }
                    else {
                        jQuery("#idaliascampo2967").attr("disabled", "true").removeAttr("checked");
                    }
                }
                );
                jQuery("#idaliascampo2964").trigger("change");
                jQuery("#idchecksaliascampo297313269").change(function() {
                    if (jQuery(this).is(":checked")) {
                        jQuery("[id*='idradiosaliascampo2974'],[id*='idradiosaliascampo2976'],[id*='idradiosaliascampo2979']").removeAttr("disabled");
                    }
                    else {
                        jQuery("[id*='idradiosaliascampo2974'],[id*='idradiosaliascampo2976'],[id*='idradiosaliascampo2979']").attr("disabled", "true").removeAttr("checked");
                    }
                });
                jQuery("#idchecksaliascampo297313269").trigger("change");
                jQuery("#idchecksaliascampo297313270").change(function() {
                    if (jQuery(this).is(":checked")) {
                        jQuery("[id*='idradiosaliascampo2974'],[id*='idradiosaliascampo2976'],[id*='idradiosaliascampo2979']").removeAttr("disabled");
                    }
                    else {
                        jQuery("[id*='idradiosaliascampo2974'],[id*='idradiosaliascampo2976'],[id*='idradiosaliascampo2979']").attr("disabled", "true").removeAttr("checked");
                    }
                });
                jQuery("#idchecksaliascampo297313270").trigger("change");
                jQuery("#idchecksaliascampo297313271").change(function() {
                    if (jQuery(this).is(":checked")) {
                        jQuery("[id*='idradiosaliascampo2974'],[id*='idradiosaliascampo2976'],[id*='idradiosaliascampo2979']").removeAttr("disabled");
                    }
                    else {
                        jQuery("[id*='idradiosaliascampo2974'],[id*='idradiosaliascampo2976'],[id*='idradiosaliascampo2979']").attr("disabled", "true").removeAttr("checked");
                    }
                });
                jQuery("#idchecksaliascampo301913376").trigger("change");
                jQuery("#idchecksaliascampo308713752").change(function() {
                    if (jQuery(this).is(":checked")) {
                        jQuery("[id*='idchecksaliascampo3090']").removeAttr("disabled");
                    }
                    else {
                        jQuery("[id*='idchecksaliascampo3090']").attr("disabled", "true").removeAttr("checked");
                    }
                });
                jQuery("#idchecksaliascampo308713752").trigger("change");
                jQuery("#idchecksaliascampo308813756").change(function() {
                    if (jQuery(this).is(":checked")) {
                        jQuery("#idaliascampo3089").removeAttr("disabled");
                    }
                    else {
                        jQuery("#idaliascampo3089").attr("disabled", "true").removeAttr("checked");
                    }
                });
                jQuery("#idchecksaliascampo308813756").trigger("change");
                jQuery("#idchecksaliascampo308813754").change(function() {
                    if (jQuery(this).is(":checked")) {
                        jQuery("[id*='idradiosaliascampo3091'],[id*='idradiosaliascampo3092']").removeAttr("disabled");
                    }
                    else {
                        jQuery("[id*='idradiosaliascampo3091'],[id*='idradiosaliascampo3092']").attr("disabled", "true").removeAttr("checked");
                    }
                });
                jQuery("#idchecksaliascampo308813754").trigger("change");
                jQuery("#idchecksaliascampo308813754").change(function() {
                    if (jQuery(this).is(":checked")) {
                        jQuery("[id*='idchecksaliascampo3090']").removeAttr("disabled");
                    }
                    else {
                        jQuery("[id*='idchecksaliascampo3090']").attr("disabled", "true").removeAttr("checked");
                    }
                });
                jQuery("#idchecksaliascampo308813754").trigger("change");
                jQuery("#idchecksaliascampo308813755").change(function() {
                    if (jQuery(this).is(":checked")) {
                        jQuery("[id*='idchecksaliascampo3090'],[id*='idradiosaliascampo3091'],[id*='idradiosaliascampo3092']").removeAttr("disabled");
                    }
                    else {
                        jQuery("[id*='idchecksaliascampo3090'],[id*='idradiosaliascampo3091'],[id*='idradiosaliascampo3092']").attr("disabled", "true").removeAttr("checked");
                    }
                });
                jQuery("#idchecksaliascampo308813755").trigger("change");
                jQuery("#idchecksaliascampo309013757").change(function() {
                    if (jQuery(this).is(":checked")) {
                        //jQuery("[id*='idradiosaliascampo3091'],[id*='idradiosaliascampo3092']").removeAttr("disabled");
                    }
                    else {
                        //jQuery("[id*='idradiosaliascampo3091'],[id*='idradiosaliascampo3092']").attr("disabled", "true").removeAttr("checked");
                    }
                });
                jQuery("#idchecksaliascampo309013757").trigger("change");
                jQuery("#idchecksaliascampo308813756").change(function() {
                    if (jQuery(this).is(":checked")) {
                        jQuery("[id*='idradiosaliascampo3092'],[id*='idradiosaliascampo3091'],[id*='idchecksaliascampo3090']").removeAttr("disabled");
                    }
                    else {
                        jQuery("[id*='idradiosaliascampo3092'],[id*='idradiosaliascampo3091'],[id*='idchecksaliascampo3090']").attr("disabled", "true").removeAttr("checked");
                    }
                });
                jQuery("#idchecksaliascampo308813756").trigger("change");
                jQuery("#idchecksaliascampo309513774").change(function() {
                    if (jQuery(this).is(":checked")) {
                        jQuery("[id*='idradiosaliascampo3096']").removeAttr("disabled");
                    }
                    else {
                        jQuery("[id*='idradiosaliascampo3096']").attr("disabled", "true").removeAttr("checked");
                    }
                });
                jQuery("#idchecksaliascampo309513774").trigger("change");
                jQuery("#idchecksaliascampo309513775").change(function() {
                    if (jQuery(this).is(":checked")) {
                        jQuery("[id*='idradiosaliascampo3096']").removeAttr("disabled");
                    }
                    else {
                        jQuery("[id*='idradiosaliascampo3096']").attr("disabled", "true").removeAttr("checked");
                    }
                });
                jQuery("#idchecksaliascampo309513775").trigger("change");
                jQuery("[id*='idradiosaliascampo3096']").change(function() {
                    if (jQuery("#idradiosaliascampo309613782").is(":checked")) {
                        jQuery("#idaliascampo3097").removeAttr("disabled");
                    }
                    else {
                        jQuery("#idaliascampo3097").attr("disabled", "true").removeAttr("checked");
                    }
                });
                /*Validaciones Pedro*/

                // jQuery("#idchecksaliascampo922712961").change(function() {
                // if (jQuery(idchecksaliascampo922712961).is(":checked")) {
                // jQuery("[id*='idaliascampo3038']").attr("disabled", "true").val("");
                // }
                // else {
                // jQuery("[id*='idaliascampo3038']").removeAttr("disabled");
                // }
                // });
                jQuery("#idaliascampo3038").change(function() {
                    console.log(parseInt(jQuery("#idaliascampo3038").val()));
                    if (parseInt(jQuery("#idaliascampo3038").val()) < parseInt(jQuery("#idaliascampo3037").val()))
                    {
                        alert("El año de grado como especialista no debe ser menor al año de grado como Médico. Por favor verifique.");
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
                    if (jQuery("#idchecksaliascampo291412926").is(":checked")) {
                        jQuery("input[name='namealiascampo2915']").attr("disabled", "disabled");
                        jQuery("input[name='namealiascampo2915']").removeAttr("checked");
                    } else {
                        jQuery("input[name='namealiascampo2915']").removeAttr("disabled");
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
                jQuery("input[name='3b1name']").change(function() {
                    if (jQuery("#3b14").is(":checked") || jQuery("#3b15").is(":checked")) {
                        jQuery("#3b2cual").attr("disabled", "disabled");
                        jQuery("#3b2cual").val("");
                        jQuery("input[name='3b3name']").attr("disabled", "disabled");
                        jQuery("input[name='3b3name']").removeAttr("checked");
                    } else {
                        if (jQuery("#3b14").is(":checked") && jQuery("#3b15").is(":checked")) {
                        } else {
                            jQuery("#3b2cual").removeAttr("disabled");
                            jQuery("input[name='3b3name']").removeAttr("disabled");
                        }
                    }
                });
                jQuery("input[name='3c1name']").change(function() {
                    if (jQuery("#3c14").is(":checked") || jQuery("#3c15").is(":checked")) {
                        jQuery("#3c2cual").attr("disabled", "disabled");
                        jQuery("#3c2cual").val("");
                        jQuery("input[name='3c3name']").attr("disabled", "disabled");
                        jQuery("input[name='3c3name']").removeAttr("checked");
                    } else {
                        if (jQuery("#3c14").is(":checked") && jQuery("#3c15").is(":checked")) {
                        } else {
                            jQuery("#3c2cual").removeAttr("disabled");
                            jQuery("input[name='3c3name']").removeAttr("disabled");
                        }
                    }
                });
                jQuery("input[name='3c1name']").change(function() {
                    if (jQuery("#3c14").is(":checked") || jQuery("#3c15").is(":checked")) {
                        jQuery("#3c2cual").attr("disabled", "disabled");
                        jQuery("#3c2cual").val("");
                        jQuery("input[name='3c3name']").attr("disabled", "disabled");
                        jQuery("input[name='3c3name']").removeAttr("checked");
                    } else {
                        if (jQuery("#3c14").is(":checked") && jQuery("#3c15").is(":checked")) {
                        } else {
                            jQuery("#3c2cual").removeAttr("disabled");
                            jQuery("input[name='3c3name']").removeAttr("disabled");
                        }
                    }
                });
                jQuery("input[name='3d1name']").change(function() {
                    if (jQuery("#3d14").is(":checked") || jQuery("#3d15").is(":checked")) {
                        jQuery("#3d2cual").attr("disabled", "disabled");
                        jQuery("#3d2cual").val("");
                        jQuery("input[name='3d3name']").attr("disabled", "disabled");
                        jQuery("input[name='3d3name']").removeAttr("checked");
                    } else {
                        if (jQuery("#3d14").is(":checked") && jQuery("#3d15").is(":checked")) {
                        } else {
                            jQuery("#3d2cual").removeAttr("disabled");
                            jQuery("input[name='3d3name']").removeAttr("disabled");
                        }
                    }
                });
                jQuery("input[name='3e1name']").change(function() {
                    if (jQuery("#3e14").is(":checked") || jQuery("#3e15").is(":checked")) {
                        jQuery("#3e2cual").attr("disabled", "disabled");
                        jQuery("#3e2cual").val("");
                        jQuery("input[name='3e3name']").attr("disabled", "disabled");
                        jQuery("input[name='3e3name']").removeAttr("checked");
                    } else {
                        if (jQuery("#3e14").is(":checked") && jQuery("#3e15").is(":checked")) {
                        } else {
                            jQuery("#3e2cual").removeAttr("disabled");
                            jQuery("input[name='3e3name']").removeAttr("disabled");
                        }
                    }
                });
                jQuery("input[name='3e1name']").trigger('change');

                jQuery("input[name='namealiascampo2973']").change(function() {
                    if (jQuery("#idchecksaliascampo297313267").is(":checked") || jQuery("#idchecksaliascampo297313268").is(":checked")) {
                        jQuery("input[name='namealiascampo2976']").attr("disabled", "disabled");
                        jQuery("input[name='namealiascampo2976']").removeAttr("checked");
                        jQuery("input[name='namealiascampo2974']").attr("disabled", "disabled");
                        jQuery("input[name='namealiascampo2974']").removeAttr("checked");
                    } else {
                        if (jQuery("#idchecksaliascampo297313267").is(":checked") && jQuery("#idchecksaliascampo297313268").is(":checked")) {
                        } else {
                            jQuery("input[name='namealiascampo2976']").removeAttr("disabled");
                            jQuery("input[name='namealiascampo2974']").removeAttr("disabled");
                        }
                    }
                });
                
                jQuery("input[name='namealiascampo2973']").trigger("change");

                jQuery("input[name='namealiascampo3019']").change(function() {
                    if (jQuery("#idchecksaliascampo301913376").is(":checked")) {
                        jQuery("#idaliascampo3080").removeAttr("disabled");
                    } else {
                        jQuery("#idaliascampo3080").attr("disabled", "disabled");
                        jQuery("#idaliascampo3080").val("");
                    }
                });

                jQuery("input[name='namealiascampo3019']").change(function() {
                    if (jQuery("#idchecksaliascampo301913377").is(":checked")) {
                        jQuery("#idaliascampo3081").removeAttr("disabled");
                    } else {
                        jQuery("#idaliascampo3081").attr("disabled", "disabled");
                        jQuery("#idaliascampo3081").val("");
                    }
                });
                jQuery("input[name='namealiascampo3087']").change(function() {
                    if (jQuery("#idradiosaliascampo308713752").is(":checked")) {
                        jQuery("input[name='namealiascampo3088']").attr("disabled", "disabled");
                        jQuery("input[name='namealiascampo3088']").removeAttr("checked");
                        jQuery("input[name='namealiascampo3090']").removeAttr("disabled");
                        // jQuery("input[name='namealiascampo3090']").attr("disabled", "disabled");
                        // jQuery("input[name='namealiascampo3090']").removeAttr("checked");
                        // jQuery("input[name='namealiascampo3091']").attr("disabled", "disabled");
                        // jQuery("input[name='namealiascampo3091']").removeAttr("checked");
                        // jQuery("input[name='namealiascampo3092']").attr("disabled", "disabled");
                        // jQuery("input[name='namealiascampo3092']").removeAttr("checked");
                    } else {
                        jQuery("input[name='namealiascampo3088']").removeAttr("disabled");
                        jQuery("input[name='namealiascampo3090']").removeAttr("disabled");
                        jQuery("input[name='namealiascampo3091']").removeAttr("disabled");
                        jQuery("input[name='namealiascampo3092']").removeAttr("disabled");
                    }
                });
                jQuery("input[name='namealiascampo3088']").change(function() {
                    if (jQuery("#idradiosaliascampo308813756").is(":checked")) {
                        jQuery("#idaliascampo3089").removeAttr("disabled");
                    } else {
                        jQuery("#idaliascampo3089").attr("disabled", "disabled");
                        jQuery("#idaliascampo3089").val("");
                    }
                });
                jQuery("input[name='namealiascampo3088']").change(function() {
                    if (jQuery("#idradiosaliascampo308813753").is(":checked")) {
                        jQuery("input[name='namealiascampo3090']").attr("disabled", "disabled");
                        jQuery("input[name='namealiascampo3090']").removeAttr("checked");
                        jQuery("input[name='namealiascampo3091']").attr("disabled", "disabled");
                        jQuery("input[name='namealiascampo3091']").removeAttr("checked");
                        jQuery("input[name='namealiascampo3092']").attr("disabled", "disabled");
                        jQuery("input[name='namealiascampo3092']").removeAttr("checked");
                    } else {
                        jQuery("input[name='namealiascampo3090']").removeAttr("disabled");
                        jQuery("input[name='namealiascampo3091']").removeAttr("disabled");
                        jQuery("input[name='namealiascampo3092']").removeAttr("disabled");
                    }
                });

                jQuery("input[name='namealiascampo2925']").change(function() {
                    if (jQuery("#idchecksaliascampo292512946").is(":checked") || jQuery("#idchecksaliascampo292512947").is(":checked")) {
                        jQuery("input[name='namealiascampo2926']").attr("disabled", "disabled");
                        jQuery("input[name='namealiascampo2926']").removeAttr("checked");
                        jQuery("input[name='namealiascampo2927']").attr("disabled", "disabled");
                        jQuery("input[name='namealiascampo2927']").removeAttr("checked");
                    } else {
                        if (jQuery("#idchecksaliascampo292512946").is(":checked") && jQuery("#idchecksaliascampo292512947").is(":checked")) {
                        } else {
                            jQuery("input[name='namealiascampo2926']").removeAttr("disabled");
                            jQuery("input[name='namealiascampo2927']").removeAttr("disabled");
                        }
                    }
                });
                jQuery("input[name='namealiascampo2926']").change(function() {
                    if (jQuery("#idchecksaliascampo292612951").is(":checked") || jQuery("#idchecksaliascampo292612952").is(":checked")) {
                        jQuery("input[name='namealiascampo2927']").attr("disabled", "disabled");
                        jQuery("input[name='namealiascampo2927']").removeAttr("checked");
                    } else {
                        if (jQuery("#idchecksaliascampo292612951").is(":checked") && jQuery("#idchecksaliascampo292612952").is(":checked")) {
                        } else {
                            jQuery("input[name='namealiascampo2927']").removeAttr("disabled");
                        }
                    }
                });
                jQuery("input[name='namealiascampo2930']").change(function() {
                    if (jQuery("#idradiosaliascampo293012979").is(":checked")) {
                        jQuery("#idaliascampo2932").removeAttr("disabled");
                    } else {
                        jQuery("#idaliascampo2932").attr("disabled", "disabled");
                        jQuery("#idaliascampo2932").val("");
                    }
                });
                jQuery("input[name='namealiascampo3095']").change(function() {
                    if (jQuery("#idradiosaliascampo309513773").is(":checked")) {
                        jQuery("input[name='namealiascampo3096']").attr("disabled", "disabled");
                        jQuery("input[name='namealiascampo3096']").removeAttr("checked");
                    } else {
                        jQuery("input[name='namealiascampo3096']").removeAttr("disabled");
                    }
                });
                jQuery("input[name='3a1name']").change(function() {
                    if (jQuery("#3a14").is(":checked") || jQuery("#3a15").is(":checked")) {
                        jQuery("#3a2cual").attr("disabled", "disabled");
                        jQuery("#3a2cual").val("");
                        jQuery("input[name='3a3name']").attr("disabled", "disabled");
                        jQuery("input[name='3a3name']").removeAttr("checked");
                    } else {
                        if (jQuery("#3a14").is(":checked") && jQuery("#3a15").is(":checked")) {
                        } else {
                            jQuery("#3a2cual").removeAttr("disabled");
                            jQuery("input[name='3a3name']").removeAttr("disabled");
                        }
                    }
                });
                jQuery("input[name='3b1name']").change(function() {
                    if (jQuery("#3b14").is(":checked") || jQuery("#3b15").is(":checked")) {
                        jQuery("#3b2cual").attr("disabled", "disabled");
                        jQuery("#3b2cual").val("");
                    } else {
                        if (jQuery("#3b14").is(":checked") && jQuery("#3b15").is(":checked")) {
                        } else {
                            jQuery("#3b2cual").removeAttr("disabled");
                        }
                    }
                });
                jQuery("input[name='3c1name']").change(function() {
                    if (jQuery("#3c14").is(":checked") || jQuery("#3c15").is(":checked")) {
                        jQuery("#3c2cual").attr("disabled", "disabled");
                        jQuery("#3c2cual").val("");
                    } else {
                        if (jQuery("#3c14").is(":checked") && jQuery("#3c15").is(":checked")) {
                        } else {
                            jQuery("#3c2cual").removeAttr("disabled");
                        }
                    }
                });
                jQuery("input[name='3d1name']").change(function() {
                    if (jQuery("#3d14").is(":checked") || jQuery("#3d15").is(":checked")) {
                        jQuery("#3d2cual").attr("disabled", "disabled");
                        jQuery("#3d2cual").val("");
                    } else {
                        if (jQuery("#3d14").is(":checked") && jQuery("#3d15").is(":checked")) {
                        } else {
                            jQuery("#3d2cual").removeAttr("disabled");
                        }
                    }
                });
                jQuery("input[name='3e1name']").change(function() {
                    if (jQuery("#3e14").is(":checked") || jQuery("#3e15").is(":checked")) {
                        jQuery("#3e2cual").attr("disabled", "disabled");
                        jQuery("#3e2cual").val("");
                    } else {
                        if (jQuery("#3e14").is(":checked") && jQuery("#3e15").is(":checked")) {
                        } else {
                            jQuery("#3e2cual").removeAttr("disabled");
                        }
                    }
                });
                jQuery("input[name='namealiascampo2916']").change(function() {
                    if (jQuery("#idradiosaliascampo291612940").is(":checked")) {
                        jQuery("#idaliascampo2917").removeAttr("disabled");
                    } else {
                        jQuery("#idaliascampo2917").attr("disabled", "disabled");
                        jQuery("#idaliascampo2917").val("");
                    }
                });

                jQuery("input[name='namealiascampo3036']").change(function() {
                    if (jQuery("#idradiosaliascampo303613610").is(":checked")) {
                        jQuery("#idaliascampo3038").attr("disabled", "disabled");
                        jQuery("#idaliascampo3038").val("");
                        jQuery("#idaliascampo3037").removeAttr("disabled");
                    } else {
                        jQuery("#idaliascampo3038").removeAttr("disabled");
                        jQuery("#idaliascampo3037").removeAttr("disabled");

                    }
                });

                jQuery("input[name='namealiascampo2914']").change(function() {
                    if (jQuery("#idchecksaliascampo291412925").is(":checked")) {
                        jQuery("input[name='namealiascampo2916']").attr("disabled", "disabled");
                        jQuery("input[name='namealiascampo2916']").removeAttr("checked");
                        jQuery("input[name='namealiascampo2915']").removeAttr("disabled");
                    } else {
                        jQuery("input[name='namealiascampo2915']").attr("disabled", "disabled");
                        jQuery("input[name='namealiascampo2915']").removeAttr("checked");
                        jQuery("input[name='namealiascampo2916']").removeAttr("disabled");
                    }
                });

                jQuery("input[name='namealiascampo3011']").change(function() {
                    if (jQuery("#idchecksaliascampo301113351").is(":checked")) {
                        jQuery("input[name='namealiascampo3012']").attr("disabled", "disabled");
                        jQuery("input[name='namealiascampo3012']").removeAttr("checked");
                    } else {
                        jQuery("input[name='namealiascampo3012']").removeAttr("disabled");
                    }
                });

                jQuery("#idchecksaliascampo309013757").change(function() {
                    if (jQuery("#idchecksaliascampo309013757").is(":checked")) {
                        jQuery("#idchecksaliascampo309013758").removeAttr("checked");
                        jQuery("input[name='namealiascampo3091']").removeAttr("disabled");
                        jQuery("input[name='namealiascampo3092']").removeAttr("disabled");
                    }
                });

                jQuery("#idchecksaliascampo309013758").change(function() {
                    if (jQuery("#idchecksaliascampo309013758").is(":checked")) {
                        jQuery("#idchecksaliascampo309013757").removeAttr("checked");
                        jQuery("input[name='namealiascampo3091']").attr("disabled", "disabled");
                        jQuery("input[name='namealiascampo3092']").attr("disabled", "disabled");
                    }
                });

                //Fin validaciones Pedro

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
        $scope.errores = 0;
        $scope.guardar = function(urlPagina) {
            $scope.pagina = urlPagina;
            // Validaciones anteriores al guardado

            if (jQuery("#nombreEncuesta").length == 0) {

            }
            else
            {
                if (jQuery("#nombreEncuesta").val().length != 9) {
                    alert("El identificador de encuesta debe tener 9 digitos. Por favor verifique.");
                    $scope.errores = $scope.errores + 1;
                    jQuery("#nombreEncuesta").focus();
                    return false;
                } else {
                }
            }

            //Validacion de numeros en nombres

            if (jQuery("#idaliascampo2903").length == 0) {
                //no existe el control
            } else {
                //validar la expresion y mostrar el mensaje
                var validacion = new RegExp(/^[^0-9()]+$/);
                if (!jQuery("#idaliascampo2903").val().match(validacion)) {
                    alert("El campo Nombres y Apellidos no debe contener números. Por favor verifique.");
                    jQuery("#idaliascampo2903").focus();
                    return false;
                }
            }
            //

            if (jQuery("#idaliascampo2962").length == 0) {
                //no existe el control
            } else {
                if (jQuery("#idaliascampo2962").prop('disabled') == false && jQuery("#idaliascampo2966").prop('disabled') == false) {
                    //ambos estan habilitados
                    if (jQuery("#idaliascampo2966").val().length < 1) {
                        //el segundo campo tiene datos
                        alert("Debe especificar el uso del medicamento. Por favor verifique.");
                        $scope.errores = $scope.errores + 1;
                        jQuery("#idaliascampo2966").focus();
                        return false;
                    } else {
                        //el segundo campo no tiene datos
                    }
                } else {
                    //ambos no estan habilitados
                }
            }

            if (jQuery("#idaliascampo2963").length == 0) {
                //no existe el control
            } else {
                if (jQuery("#idaliascampo2963").prop('disabled') == false && jQuery("#idaliascampo2965").prop('disabled') == false) {
                    //ambos estan habilitados
                    if (jQuery("#idaliascampo2965").val().length < 1) {
                        //el segundo campo tiene datos
                        alert("Debe especificar el uso del medicamento. Por favor verifique.");
                        $scope.errores = $scope.errores + 1;
                        jQuery("#idaliascampo2965").focus();
                        return false;
                    } else {
                        //el segundo campo no tiene datos
                    }
                } else {
                    //ambos no estan habilitados
                }
            }

            if (jQuery("#idaliascampo2964").length == 0) {
                //no existe el control
            } else {
                if (jQuery("#idaliascampo2964").prop('disabled') == false && jQuery("#idaliascampo2967").prop('disabled') == false) {
                    //ambos estan habilitados
                    if (jQuery("#idaliascampo2967").val().length < 1) {
                        //el segundo campo tiene datos
                        alert("Debe especificar el uso del medicamento. Por favor verifique.");
                        $scope.errores = $scope.errores + 1;
                        jQuery("#idaliascampo2967").focus();
                        return false;
                    } else {
                        //el segundo campo no tiene datos
                    }
                } else {
                    //ambos no estan habilitados
                }
            }

            /////// Inicio Otro Cual

            if (jQuery("#idaliascampo2910").length == 0) {
                //no existe el control
            } else {
                //si existe validar que este activo
                if (jQuery("#idaliascampo2910").prop('disabled') == false) {
                    //esta activo
                    if (jQuery("#idaliascampo2910").val().length < 1) {
                        //esta vacio
                        alert("Debe especificar el valor del campo Otro. Por favor verifique.");
                        $scope.errores = $scope.errores + 1;
                        jQuery("#idaliascampo2910").focus();
                        return false;
                    } else {
                        //tiene datos
                    }
                } else {
                    //esta inactivo
                }
            }

            if (jQuery("#idaliascampo2917").length == 0) {
                //no existe el control
            } else {
                //si existe validar que este activo
                if (jQuery("#idaliascampo2917").prop('disabled') == false) {
                    //esta activo
                    if (jQuery("#idaliascampo2917").val().length < 1) {
                        //esta vacio
                        alert("Debe especificar el valor del campo Otro. Por favor verifique.");
                        $scope.errores = $scope.errores + 1;
                        jQuery("#idaliascampo2917").focus();
                        return false;
                    } else {
                        //tiene datos
                    }
                } else {
                    //esta inactivo
                }
            }

            if (jQuery("#idaliascampo2917").length == 0) {
                //no existe el control
            } else {
                //si existe validar que este activo
                if (jQuery("#idaliascampo2917").prop('disabled') == false) {
                    //esta activo
                    if (jQuery("#idaliascampo2917").val().length < 1) {
                        //esta vacio
                        alert("Debe especificar el valor del campo Otro. Por favor verifique.");
                        $scope.errores = $scope.errores + 1;
                        jQuery("#idaliascampo2917").focus();
                        return false;
                    } else {
                        //tiene datos
                    }
                } else {
                    //esta inactivo
                }
            }

            if (jQuery("#idaliascampo2928").length == 0) {
                //no existe el control
            } else {
                //si existe validar que este activo
                if (jQuery("#idaliascampo2928").prop('disabled') == false) {
                    //esta activo
                    if (jQuery("#idaliascampo2928").val().length < 1) {
                        //esta vacio
                        alert("Debe especificar el valor del campo Otro. Por favor verifique.");
                        $scope.errores = $scope.errores + 1;
                        jQuery("#idaliascampo2928").focus();
                        return false;
                    } else {
                        //tiene datos
                    }
                } else {
                    //esta inactivo
                }
            }

            if (jQuery("#idaliascampo2931").length == 0) {
                //no existe el control
            } else {
                //si existe validar que este activo
                if (jQuery("#idaliascampo2931").prop('disabled') == false) {
                    //esta activo
                    if (jQuery("#idaliascampo2931").val().length < 1) {
                        //esta vacio
                        alert("Debe especificar el valor del campo Otro. Por favor verifique.");
                        $scope.errores = $scope.errores + 1;
                        jQuery("#idaliascampo2931").focus();
                        return false;
                    } else {
                        //tiene datos
                    }
                } else {
                    //esta inactivo
                }
            }

            if (jQuery("#idaliascampo2932").length == 0) {
                //no existe el control
            } else {
                //si existe validar que este activo
                if (jQuery("#idaliascampo2932").prop('disabled') == false) {
                    //esta activo
                    if (jQuery("#idaliascampo2932").val().length < 1) {
                        //esta vacio
                        alert("Debe especificar el valor del campo Otro. Por favor verifique.");
                        $scope.errores = $scope.errores + 1;
                        jQuery("#idaliascampo2932").focus();
                        return false;
                    } else {
                        //tiene datos
                    }
                } else {
                    //esta inactivo
                }
            }

            if (jQuery("#3a3cual").length == 0) {
                //no existe el control
            } else {
                //si existe validar que este activo
                if (jQuery("#3a3cual").prop('disabled') == false) {
                    //esta activo
                    if (jQuery("#3a3cual").val().length < 1) {
                        //esta vacio
                        alert("Debe especificar el valor del campo Otro. Por favor verifique.");
                        $scope.errores = $scope.errores + 1;
                        jQuery("#3a3cual").focus();
                        return false;
                    } else {
                        //tiene datos
                    }
                } else {
                    //esta inactivo
                }
            }

            if (jQuery("#3b2cual").length == 0) {
                //no existe el control
            } else {
                //si existe validar que este activo
                if (jQuery("#3b2cual").prop('disabled') == false) {
                    //esta activo
                    if (jQuery("#3b2cual").val().length < 1) {
                        //esta vacio
                        alert("Debe especificar el valor del campo. Por favor verifique.");
                        $scope.errores = $scope.errores + 1;
                        jQuery("#3b2cual").focus();
                        return false;
                    } else {
                        //tiene datos
                    }
                } else {
                    //esta inactivo
                }
            }

            if (jQuery("#3b2cual").length == 0) {
                //no existe el control
            } else {
                //si existe validar que este activo
                if (jQuery("#3b2cual").prop('disabled') == false) {
                    //esta activo
                    if (jQuery("#3b2cual").val().length < 1) {
                        //esta vacio
                        alert("Debe especificar el valor del campo. Por favor verifique.");
                        $scope.errores = $scope.errores + 1;
                        jQuery("#3b2cual").focus();
                        return false;
                    } else {
                        //tiene datos
                    }
                } else {
                    //esta inactivo
                }
            }

            if (jQuery("#3b3cual").length == 0) {
                //no existe el control
            } else {
                //si existe validar que este activo
                if (jQuery("#3b3cual").prop('disabled') == false) {
                    //esta activo
                    if (jQuery("#3b3cual").val().length < 1) {
                        //esta vacio
                        alert("Debe especificar el valor del campo Otro. Por favor verifique.");
                        $scope.errores = $scope.errores + 1;
                        jQuery("#3b3cual").focus();
                        return false;
                    } else {
                        //tiene datos
                    }
                } else {
                    //esta inactivo
                }
            }

            if (jQuery("#3c3cual").length == 0) {
                //no existe el control
            } else {
                //si existe validar que este activo
                if (jQuery("#3c3cual").prop('disabled') == false) {
                    //esta activo
                    if (jQuery("#3c3cual").val().length < 1) {
                        //esta vacio
                        alert("Debe especificar el valor del campo. Por favor verifique.");
                        $scope.errores = $scope.errores + 1;
                        jQuery("#3c3cual").focus();
                        return false;
                    } else {
                        //tiene datos
                    }
                } else {
                    //esta inactivo
                }
            }

            if (jQuery("#3d2cual").length == 0) {
                //no existe el control
            } else {
                //si existe validar que este activo
                if (jQuery("#3d2cual").prop('disabled') == false) {
                    //esta activo
                    if (jQuery("#3d2cual").val().length < 1) {
                        //esta vacio
                        alert("Debe especificar el valor del campo. Por favor verifique.");
                        $scope.errores = $scope.errores + 1;
                        jQuery("#3d2cual").focus();
                        return false;
                    } else {
                        //tiene datos
                    }
                } else {
                    //esta inactivo
                }
            }

            if (jQuery("#3d3cual").length == 0) {
                //no existe el control
            } else {
                //si existe validar que este activo
                if (jQuery("#3d3cual").prop('disabled') == false) {
                    //esta activo
                    if (jQuery("#3d3cual").val().length < 1) {
                        //esta vacio
                        alert("Debe especificar el valor del campo. Por favor verifique.");
                        $scope.errores = $scope.errores + 1;
                        jQuery("#3d3cual").focus();
                        return false;
                    } else {
                        //tiene datos
                    }
                } else {
                    //esta inactivo
                }
            }

            if (jQuery("#3e2cual").length == 0) {
                //no existe el control
            } else {
                //si existe validar que este activo
                if (jQuery("#3e2cual").prop('disabled') == false) {
                    //esta activo
                    if (jQuery("#3e2cual").val().length < 1) {
                        //esta vacio
                        alert("Debe especificar el valor del campo. Por favor verifique.");
                        $scope.errores = $scope.errores + 1;
                        jQuery("#3e2cual").focus();
                        return false;
                    } else {
                        //tiene datos
                    }
                } else {
                    //esta inactivo
                }
            }

            if (jQuery("#3e3cual").length == 0) {
                //no existe el control
            } else {
                //si existe validar que este activo
                if (jQuery("#3e3cual").prop('disabled') == false) {
                    //esta activo
                    if (jQuery("#3e3cual").val().length < 1) {
                        //esta vacio
                        alert("Debe especificar el valor del campo. Por favor verifique.");
                        $scope.errores = $scope.errores + 1;
                        jQuery("#3e3cual").focus();
                        return false;
                    } else {
                        //tiene datos
                    }
                } else {
                    //esta inactivo
                }
            }

            if (jQuery("#idaliascampo2982").length == 0) {
                //no existe el control
            } else {
                //si existe validar que este activo
                if (jQuery("#idaliascampo2982").prop('disabled') == false) {
                    //esta activo
                    if (jQuery("#idaliascampo2982").val().length < 1) {
                        //esta vacio
                        alert("Debe especificar el valor del campo. Por favor verifique.");
                        $scope.errores = $scope.errores + 1;
                        jQuery("#idaliascampo2982").focus();
                        return false;
                    } else {
                        //tiene datos
                    }
                } else {
                    //esta inactivo
                }
            }

            if (jQuery("#idaliascampo3014").length == 0) {
                //no existe el control
            } else {
                //si existe validar que este activo
                if (jQuery("#idaliascampo3014").prop('disabled') == false) {
                    //esta activo
                    if (jQuery("#idaliascampo3014").val().length < 1) {
                        //esta vacio
                        alert("Debe especificar el valor del campo. Por favor verifique.");
                        $scope.errores = $scope.errores + 1;
                        jQuery("#idaliascampo3014").focus();
                        return false;
                    } else {
                        //tiene datos
                    }
                } else {
                    //esta inactivo
                }
            }

            if (jQuery("#idaliascampo3089").length == 0) {
                //no existe el control
            } else {
                //si existe validar que este activo
                if (jQuery("#idaliascampo3089").prop('disabled') == false) {
                    //esta activo
                    if (jQuery("#idaliascampo3089").val().length < 1) {
                        //esta vacio
                        alert("Debe especificar el valor del campo. Por favor verifique.");
                        $scope.errores = $scope.errores + 1;
                        jQuery("#idaliascampo3089").focus();
                        return false;
                    } else {
                        //tiene datos
                    }
                } else {
                    //esta inactivo
                }
            }

            if (jQuery("#idaliascampo3097").length == 0) {
                //no existe el control
            } else {
                //si existe validar que este activo
                if (jQuery("#idaliascampo3097").prop('disabled') == false) {
                    //esta activo
                    if (jQuery("#idaliascampo3097").val().length < 1) {
                        //esta vacio
                        alert("Debe especificar el valor del campo. Por favor verifique.");
                        $scope.errores = $scope.errores + 1;
                        jQuery("#idaliascampo3097").focus();
                        return false;
                    } else {
                        //tiene datos
                    }
                } else {
                    //esta inactivo
                }
            }

            //Otro cual prescriptores

            if (jQuery("#idaliascampo3053").length == 0) {
                //no existe el control
            } else {
                //si existe validar que este activo
                if (jQuery("#idaliascampo3053").prop('disabled') == false) {
                    //esta activo
                    if (jQuery("#idaliascampo3053").val().length < 1) {
                        //esta vacio
                        alert("Debe especificar el valor del campo. Por favor verifique.");
                        $scope.errores = $scope.errores + 1;
                        jQuery("#idaliascampo3053").focus();
                        return false;
                    } else {
                        //tiene datos
                    }
                } else {
                    //esta inactivo
                }
            }

            if (jQuery("#idaliascampo563054").length == 0) {
                //no existe el control
            } else {
                //si existe validar que este activo
                if (jQuery("#idaliascampo563054").prop('disabled') == false) {
                    //esta activo
                    if (jQuery("#idaliascampo563054").val().length < 1) {
                        //esta vacio
                        alert("Debe especificar el valor del campo. Por favor verifique.");
                        $scope.errores = $scope.errores + 1;
                        jQuery("#idaliascampo563054").focus();
                        return false;
                    } else {
                        //tiene datos
                    }
                } else {
                    //esta inactivo
                }
            }

            if (jQuery("#idaliascampo3054").length == 0) {
                //no existe el control
            } else {
                //si existe validar que este activo
                if (jQuery("#idaliascampo3054").prop('disabled') == false) {
                    //esta activo
                    if (jQuery("#idaliascampo3054").val().length < 1) {
                        //esta vacio
                        alert("Debe especificar el valor del campo. Por favor verifique.");
                        $scope.errores = $scope.errores + 1;
                        jQuery("#idaliascampo3054").focus();
                        return false;
                    } else {
                        //tiene datos
                    }
                } else {
                    //esta inactivo
                }
            }

            if (jQuery("#idaliascampo3069").length == 0) {
                //no existe el control
            } else {
                //si existe validar que este activo
                if (jQuery("#idaliascampo3069").prop('disabled') == false) {
                    //esta activo
                    if (jQuery("#idaliascampo3069").val().length < 1) {
                        //esta vacio
                        alert("Debe especificar el valor del campo. Por favor verifique.");
                        $scope.errores = $scope.errores + 1;
                        jQuery("#idaliascampo3069").focus();
                        return false;
                    } else {
                        //tiene datos
                    }
                } else {
                    //esta inactivo
                }
            }

            if (jQuery("#idaliascampo3069").length == 0) {
                //no existe el control
            } else {
                //si existe validar que este activo
                if (jQuery("#idaliascampo3069").prop('disabled') == false) {
                    //esta activo
                    if (jQuery("#idaliascampo3069").val().length < 1) {
                        //esta vacio
                        alert("Debe especificar el valor del campo. Por favor verifique.");
                        $scope.errores = $scope.errores + 1;
                        jQuery("#idaliascampo3069").focus();
                        return false;
                    } else {
                        //tiene datos
                    }
                } else {
                    //esta inactivo
                }
            }

            /////// Fin Otro Cual

            ////////Inicio Valida porcentaje

            if (jQuery("#idaliascampo3042").length == 0) {
                //no existe el control
            } else {
                //si existe generar las 4 variables y validar

                if (jQuery("#idaliascampo3042").val() == '') {
                    //Verificar si el campo esta vacio y volverlo un cero
                    var porc1 = 0;
                } else {
                    //Si no es cero sumar el valor
                    var porc1 = jQuery("#idaliascampo3042").val();
                }

                if (jQuery("#idaliascampo3043").val() == '') {
                    //Verificar si el campo esta vacio y volverlo un cero
                    var porc2 = 0;
                } else {
                    //Si no es cero sumar el valor
                    var porc2 = jQuery("#idaliascampo3043").val();
                }

                if (jQuery("#idaliascampo3044").val() == '') {
                    //Verificar si el campo esta vacio y volverlo un cero
                    var porc3 = 0;
                } else {
                    //Si no es cero sumar el valor
                    var porc3 = jQuery("#idaliascampo3044").val();
                }

                if (jQuery("#idaliascampo3045").val() == '') {
                    //Verificar si el campo esta vacio y volverlo un cero
                    var porc4 = 0;
                } else {
                    //Si no es cero sumar el valor
                    var porc4 = jQuery("#idaliascampo3045").val();
                }

                var porc5 = parseInt(porc1) + parseInt(porc2) + parseInt(porc3) + parseInt(porc4);

                if (porc5 != 100) {
                    //El valor es diferente del 100%
                    alert('La suma de los porcentajes de usuarios que atiende debe sumar 100%. Por favor verifique.');
                    $scope.errores = $scope.errores + 1;
                    jQuery("#idaliascampo3042").focus();
                    return false;
                } else {
                }

            }

            ////////Fin Valida porcentaje
            
            ////////Inicia validación completitud radios
            var arrayNameRadios = [];
            jQuery("input[type='radio']").each(function(){
                if(arrayNameRadios.indexOf(jQuery(this).attr("name")) == -1 && jQuery(this).attr("disabled") == undefined){
                    arrayNameRadios.push(jQuery(this).attr("name"));
                }
            });
            
            for(var itemRadiosName in arrayNameRadios){ 
                if(!jQuery("input[name='" + arrayNameRadios[itemRadiosName] + "']").is(":checked")){
                    jQuery("input[name='" + arrayNameRadios[itemRadiosName] + "']").focus();
                    $scope.errores = $scope.errores + 1;
                    console.log(jQuery("input[name='" + arrayNameRadios[itemRadiosName] + "']").parent().parent().parent().find(".textinfo").html());
                    var noPreguntaError = jQuery.trim(jQuery("input[name='" + arrayNameRadios[itemRadiosName] + "']").parent().parent().parent().find(".textinfo").html());
                    alert("Existen preguntas sin responder, la primera vacia es la no. " + noPreguntaError);
                    break;
                } 
            }
            
            ////////Fin validación completitud radios
            
            // fin Validaciones anteriores al guardado

            if ($scope.errores == 0) {
                var confirmarGuardado = confirm("Esta seguro que desea almacenar la encuesta?");
                if (confirmarGuardado) {
                    var db = window.openDatabase("fedesaludDB", "1.0", "Fedesalud DB", 200000);
                    db.transaction($scope.querySaveEncuesta, $scope.errorDB);
                }
            }
            $scope.errores = 0;
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
                                if (objControl[itemControl].value == result.rows.item(i).VALOR){
                                    objControl[itemControl].checked = true;
                                    jQuery(objControl[itemControl]).trigger("change");
                                }
                            }
                            else if(objControl[itemControl].type != undefined){
                                objControl[itemControl].value = result.rows.item(i).VALOR;
                                jQuery(objControl[itemControl]).trigger("change");
                            }
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
            var arrayData = jQuery(".form-container").serializeObject();
            //var arrayData = $scope.formData;
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
                for (var itemUpdate in arrayData) {
                    if (arrayData[itemUpdate] != "nombreEncuesta" && arrayData[itemUpdate] != "tipoEncuesta") {
                        var sql = "DELETE FROM DATAENCUESTAS WHERE IDENCUESTA = " + $scope.idEncuesta + " AND IDCAMPO = '" + itemUpdate + "'";
                        tx.executeSql(sql);

                        sql = "INSERT INTO DATAENCUESTAS (IDENCUESTA, IDCAMPO, VALOR, SINCRONIZADO, USUARIO) VALUES (" + $scope.idEncuesta + ",'" + itemUpdate + "','" + arrayData[itemUpdate] + "', 0, '" + usercookie + "')";
                        tx.executeSql(sql);
                    }
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
        $scope.queryAdmin = function(tx) {
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
        $scope.login = function() {
            var db = window.openDatabase("fedesaludDB", "1.0", "Fedesalid DB", 200000);
            db.transaction($scope.queryUsuarios, $scope.errorDB);
        };
        $scope.onDeviceReady = function() {
            if (window.localStorage.getItem("user") == undefined) {
                var db = window.openDatabase("fedesaludDB", "1.0", "Fedesalud DB", 200000);
                db.transaction($scope.queryAdmin, $scope.errorDB);
            } else {
                window.location = '#/menu';
            }
        };
        //En caso de error
        $scope.errorDB = function(error) {
            alert("Error BD: " + error.code);
        };
        $scope.CreateAmdin = function(tx, resultados) {
            var encontroUsuario = resultados.rows.length;
            if (encontroUsuario == 0) {
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
        $scope.queryCorrecto = function(tx, resultados) {
            var encontroUsuario = resultados.rows.length;
            if (encontroUsuario >= 1) {
                $scope.idUser = resultados.rows.item(0).ID;
                $scope.userName = resultados.rows.item(0).NOMBRE;
                $scope.passWord = resultados.rows.item(0).PASSWORD;
                var domUserName = document.getElementById("txtuser");
                var domPassword = document.getElementById("txtpassword");
                if ($scope.userName == domUserName.value && $scope.passWord == domPassword.value) {
                    window.localStorage.setItem("user", $scope.idUser + ":" + $scope.userName);
                    window.location = '#/menu';
                }
                else {
                    alert("Nombre de usuario o contraseña invalidos, intentelo de nuevo.");
                }
            }
            else {
                alert("Nombre de usuario o contraseña invalidos, intentelo de nuevo.");
            }
        };
    }]);
//=================================================================
//=============            Menu Controller         ================
//=================================================================

ModuleMyApp.controller('MenuController', ['$scope', function($scope) {

        localStorage.removeItem("idEncuesta");     
        if(window.localStorage.getItem("user") != undefined){
            var user = window.localStorage.getItem("user");
            user = user.split(":");
            jQuery("#nameUser").html(user[1].toUpperCase());
        }
        jQuery(".btn").click(function() {
            jQuery("#waiting").css("display", "block");
        });
        if (window.localStorage.getItem("user") == undefined) {
            window.location = '#/login';
        }
    }]);
//=================================================================
//=============            Logout Controller         ==============
//=================================================================

ModuleMyApp.controller('logoutController', ['$scope', function($scope) {
        $scope.logout = function() {
            window.localStorage.removeItem("user");
            window.location = "#/login";
        };
    }]);
//=================================================================
//=============            Listado Controller         =============
//=================================================================
ModuleMyApp.controller('listadoInstrumentosController', ['$scope', function($scope) {
        if(window.localStorage.getItem("user") != undefined){
            var user = window.localStorage.getItem("user");
            user = user.split(":");
            jQuery("#nameUser").html(user[1].toUpperCase());
        }
        if (window.localStorage.getItem("user") == undefined) {
            window.location = '#/login';
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
                var sql = 'select ENCUESTAS.ID, ENCUESTAS.NOMBRE, ENCUESTAS.TIPOENCUESTA, DATAENCUESTAS.valor from ENCUESTAS left join DATAENCUESTAS on ENCUESTAS.ID = DATAENCUESTAS.IDENCUESTA where DATAENCUESTAS.IDCAMPO = \'namealiascampo2903\' AND ENCUESTAS.TIPOENCUESTA = 1 group by ENCUESTAS.ID, ENCUESTAS.NOMBRE, ENCUESTAS.TIPOENCUESTA ';
                tx.executeSql(sql, [],
                        function(tx, result) {
                            var html = '<thead><tr><th>IDENTIFICADOR</th><th>NOMBRE</th><th>TIPO</th><th></th></tr></thead><tbody>';
                            for (var i = 0; i < result.rows.length; i++) {
                                html += "<tr><td>" + result.rows.item(i).NOMBRE + "</td><td>" + result.rows.item(i).VALOR + "</td><td>Usuarios</td><td><a class='btn btn-primary btn-md' href='#/instrumentouno/" + result.rows.item(i).ID + "' >Editar</a></td></tr>";
                            }
                            html += "</tbody>";
                            //localStorage.setItem("htmlEncuestas", html);
                            jQuery("#tablaEncuestas").html(html);
                        },
                        function(error) {
                            //console.log(error.code);
                        }
                );

                var sql = 'select ENCUESTAS.ID, ENCUESTAS.NOMBRE, ENCUESTAS.TIPOENCUESTA, \'\' as VALOR from ENCUESTAS Where ENCUESTAS.TIPOENCUESTA = 2';
                tx.executeSql(sql, [],
                        function(tx, result) {
                            var html = '';
                            for (var i = 0; i < result.rows.length; i++) {
                                html += "<tr><td>" + result.rows.item(i).NOMBRE + "</td><td>N/A</td><td>Prescriptores</td><td><a class='btn btn-primary btn-md' href='#/instrumentodos/" + result.rows.item(i).ID + "' >Editar</a></td></tr>";
                            }
                            html += "</tbody>";
                            //localStorage.setItem("htmlEncuestas", html);
                            var htmlTable = jQuery("#tablaEncuestas").html();
                            jQuery("#tablaEncuestas").html(htmlTable + html)
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
    }]);
