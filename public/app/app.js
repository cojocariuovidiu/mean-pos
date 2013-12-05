﻿/* 
   This script must run before all others.
   The load order of the other scripts should be immaterial
*/
(function () {
    'use strict';
    
    // Create the 'app' module
    var app = angular.module('app', ['ngRoute', 'ngAnimate', 'ui.bootstrap', 'ui.jq']);

    app.routeResolve = {};

})();