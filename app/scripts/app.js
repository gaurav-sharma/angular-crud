'use strict';

/**
 * @ngdoc overview
 * @name angularCrudApp
 * @description
 * # angularCrudApp
 *
 * Main module of the application.
 */
angular
  .module('angularCrudApp', [
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'firebase'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/front', {
        templateUrl: 'views/front.html',
        controller: 'FrontCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
