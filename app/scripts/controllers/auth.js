'use strict';

angular
  .module('tutHubApp')
  .controller('AuthCtrl', AuthCtrl);

  function AuthCtrl($rootScope, $location, Auth) {
    var vm = this;

    Auth.$onAuth(function (auth){
      $rootScope.auth = auth;
    });

    // authenticate with GitHub
    vm.login = function (){
      Auth.$authWithOAuthPopup('github')
      .then(function (){
        $location.path('#/');
      }).catch(function(err){
        console.log('Login failed.', err);
      });
    };
  }
