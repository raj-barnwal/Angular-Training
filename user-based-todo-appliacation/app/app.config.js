var angular = require('angular');
require('angular-ui-router');
require('ngstorage');
angular.module('myApp', ['ui.router','ngStorage']);

require('./scripts/controllers');
require('./scripts/directives');
require('./scripts/uiRouters/routeConfig');