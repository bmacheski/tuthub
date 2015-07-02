'use strict';

angular
	.module('tutHubApp')
	.controller('AuthCtrl', function ($rootScope, $location, Auth){
		var vm = this;
		Auth.$onAuth(function (auth){
			$rootScope.auth = auth;
		});
		vm.login = function (){
			Auth.$authWithOAuthPopup("github")
			.then(function (){
				$location.path('#/');
			}).catch(function(err){
				console.log('Login failed.', err)
			})
		};
	})
