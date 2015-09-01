'use strict';

angular
  .module('tutHubApp')
  .controller('NavbarCtrl', NavbarCtrl);

  function NavbarCtrl($rootScope, $location, Auth) {
    var vm = this;

    vm.logout = function (){
      Materialize.toast('You have successfully logged out.', 3000);
      Auth.$unauth();
      $rootScope.auth = null;
      $location.path('/login');
    };
  }
