'use strict';

angular
	.module('tutHubApp')
	.controller('TutorialCtrl', function ($routeParams, $location, Tutorial){
		var vm = this;
		vm.id = $routeParams.id;

		vm.saveTut = function (){}
		vm.go = function (){
			$location.path('/topics/' + vm.id + '/new')
		}
		Tutorial.getTuts(vm.id, function (tutorials){
			vm.tutorials = tutorials;
		});
	});
