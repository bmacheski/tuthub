'use strict';

angular
	.module('tutHubApp')
	.controller('NavbarCtrl', function ($rootScope, $location, Auth){
		var vm = this;

		vm.logout = function (){
			Auth.$unauth();
			$rootScope.auth = null;
			$location.path('/login');
		}
	})
