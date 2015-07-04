'use strict';

angular
	.module('tutHubApp')
	.controller('NavbarCtrl', NavbarCtrl);

	function NavbarCtrl($rootScope, $location, Auth) {
		var vm = this;

		vm.logout = function (){
			Auth.$unauth();
			$rootScope.auth = null;
			$location.path('/login');
		};
	}
