'use strict';

angular
	.module('tutHubApp')
	.controller('TopicsCtrl', function (Topic){
		var vm = this;
		vm.saveTopic = function(){
			Topic.create(vm.topic, function(){});
		};

		Topic.getAll(function (topics){
			vm.topics = topics;
		});
	});
