'use strict';

angular
	.module('tutHubApp')
	.controller('TutorialCtrl', function ($routeParams, Tutorial){
		var vm = this;
		vm.id = $routeParams.id;

		vm.saveTut = function (){}
		Tutorial.getTuts(vm.id, function (tutorials){
			vm.tutorials = tutorials;
		});
	});
