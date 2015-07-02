'use strict';

angular
	.module('tutHubApp')
	.controller('TopicsCtrl', function (Topic){
		var vm = this;
		vm.topics = Topic.all;

		vm.saveTopic = function(topic){
			Topic.create(vm.topic, function(){});
		};
	});
