'use strict';

angular
  .module('tutHubApp')
  .controller('TutorialCtrl', TutorialCtrl);

  function TutorialCtrl($routeParams, $location, $firebaseArray, $firebaseObject, $rootScope, FB_URL) {
    var vm = this;
    vm.ghusername = $rootScope.auth.github.username;
    vm.topicid = $routeParams.topicid;
    vm.tutid = $routeParams.tutid;

    var tutref = new Firebase(FB_URL + '/topics/' + vm.topicid + '/tutorials');
    var tuts = $firebaseArray(tutref);
    vm.tutorials = tuts;

    var userref = new Firebase(FB_URL + '/users/' + vm.ghusername);
    var bmarkarr = $firebaseArray(userref.child('bookmarks'));

    var bmarkobjkey = $firebaseObject(userref.child('keys'));
    vm.bkeys = bmarkobjkey;

    vm.saveTut = function() {
      tuts.$add({
        URL: vm.tutorial.URL,
        title: vm.tutorial.title,
        type: vm.tutorial.type,
        count: 0,
        creator: vm.ghusername
      })
      .then(function (){
        $location.path('/topics/' + vm.topicid);
      });
    };

    vm.bookmarkTut = function(id, tid) {
      Materialize.toast('Added to bookmarks!', 1000);
      bmark.$add({
        title: vm.tutorials[id].title,
        url: vm.tutorials[id].URL,
        source: vm.tutorials[id].type,
        key: tid,
        commentsrc: '#/topics/' + vm.topicid + '/' + tid + '/comments'
      })
      .then(function() {
        bmarkobjkey[tid] = tid;
        bmarkobjkey.$save();
      });
    };

    vm.go = function() {
      $location.path('/topics/' + vm.topicid + '/new');
    };

    vm.deleteTut = function(id) {
      Materialize.toast('Tutorial deleted.', 1000);
      var delarr = $firebaseObject(tutref.child(id));
      delarr.$loaded()
      .then(function(){
        delarr.$remove(id);
      });
    };

    vm.incrementVote = function(id) {
      var newref = $firebaseObject(tutref.child(id));
      var voteref = $firebaseObject(userref.child(id));
      newref.$loaded()
      .then(function() {
        if(!voteref.hasOwnProperty('downvoted') && !voteref.hasOwnProperty('upvoted')){
          voteref['upvoted'] = 'upvoted';
          voteref.$save();
          newref.count++;
          newref.$save();
        }
        if(voteref.hasOwnProperty('downvoted')){
          voteref.$remove(voteref['downvoted']);
          voteref.$save();
          newref.count++;
          newref.$save();
        }
      });
    };

    vm.decrementVote = function(id) {
      var newref = $firebaseObject(tutref.child(id));
      var voteref = $firebaseObject(userref.child(id));
      newref.$loaded()
      .then(function() {
        if(!voteref.hasOwnProperty('upvoted') && !voteref.hasOwnProperty('downvoted')){
          voteref['downvoted'] = 'downvoted';
          voteref.$save();
          newref.count--;
          newref.$save();
        }
        if(voteref.hasOwnProperty('upvoted')){
          voteref.$remove(voteref['upvoted']);
          voteref.$save();
          newref.count--;
          newref.$save();
        }
      });
    };
  }
