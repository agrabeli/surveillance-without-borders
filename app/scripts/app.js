'use strict';

/**
 * @ngdoc overview
 * @name cloakAndDaggerApp
 * @description
 * # cloakAndDaggerApp
 *
 * Main module of the application.
 */
angular
  .module('cloakAndDaggerApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'datamaps'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
