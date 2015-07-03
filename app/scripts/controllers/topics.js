'use strict';

angular
	.module('tutHubApp')
	.controller('TopicsCtrl', TopicsCtrl)

	function TopicsCtrl(Topic) {
		var vm = this;
		vm.topics = Topic.all;

		vm.saveTopic = function(topic){
			Topic.create(vm.topic, function(){});
		};
	};
