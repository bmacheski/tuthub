'use strict';

angular
	.module('tutHubApp')
	.controller('LoginCtrl', function ($scope, $rootScope, $location, FB_URL){
		var vm = this;
		vm.login = function (){
			var ref = new Firebase(FB_URL);
			ref.authWithPassword({
				email: vm.email,
				password: vm.password
			}, function (err, authData){
					if (err){
						console.log('Login failed.', err);
					}
					else {
						$location.path('#/');
						$rootScope.auth = authData;
						$scope.$apply();
					}
				});
		};
	})
