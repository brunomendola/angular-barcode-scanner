!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define("angular-barcode-scanner",[],r):"object"==typeof exports?exports["angular-barcode-scanner"]=r():e["angular-barcode-scanner"]=r()}(this,function(){return function(e){function r(n){if(t[n])return t[n].exports;var a=t[n]={exports:{},id:n,loaded:!1};return e[n].call(a.exports,a,a.exports,r),a.loaded=!0,a.exports}var t={};return r.m=e,r.c=t,r.p="",r(0)}([function(e,r,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(r,"__esModule",{value:!0});var a=t(1),o=n(a),c=angular.module("barcodeScanner",[]);c.directive("barcodeScanner",o.default),r.default=c,e.exports=r.default},function(e,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=["$window",function(e){"ngInject";return{restrict:"AE",scope:{separatorChar:"=",triggerChar:"=",scanCallback:"=",triggerCallback:"="},link:function(r,t){var n="",a=function(e){var t=e.key,a=e.which||e.keyCode,o=parseInt(r.triggerChar,10),c=parseInt(r.separatorChar,10);if(a===o)r.triggerCallback(),e.preventDefault();else{var u=a>=32&&a<=255;u===!0&&a!==c?n+=t||String.fromCharCode(a):a===c&&(n.length>0&&r.scanCallback(n),n="")}};angular.element(e).on("keydown",a),t.on("$destroy",function(){angular.element(e).off("keydown",a)})}}}],e.exports=r.default}])});
//# sourceMappingURL=angular-barcode-scanner.js.map