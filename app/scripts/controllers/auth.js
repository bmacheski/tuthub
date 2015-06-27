'use strict';

angular
	.module('tutHubApp')
	.controller('AuthCtrl', function ($rootScope, $location, Auth){
		var vm = this;
		vm.login = function (){
			Auth.$authWithPassword(vm.user)
			.then(function (auth){
				$location.path('#/');
				$rootScope.auth = auth;
			}).catch(function(err){
				console.log('Login failed.', err)
			})
		};
		vm.register = function (){
			Auth.$createUser(vm.user)
			.then(function (){
				vm.login();
			}).catch(function(err){
				console.log('Registration failed.', err)
			})
		}
	})
