'use strict';

angular
  .module('tuthubApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '',
        controller: ''
      })
      .otherwise({
        redirectTo: '/'
      });
  });
