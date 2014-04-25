require('firebase/firebase');
require('firebase-simple-login/firebase-simple-login');
require('angular/angular');
require('angular-ui-router/release/angular-ui-router');
require('angularfire/angularfire');

var pkg = require('../package.json');


angular.module('app', ['ui.router', 'firebase'])
.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/login');
  $stateProvider
  .state('login', {
    url: '/login',
    controller: require('./controllers/login'),
    template: require('./templates/login.html')
  })
  .state('vote', {
    url: '/vote',
    controller: require('./controllers/vote'),
    template: require('./templates/vote.html')
  })
  .state('results', {
    url: '/results',
    controller: require('./controllers/results'),
    template: require('./templates/results.html')
  });
})
.constant('$us', require('underscore'))
.constant('$fbUrl', pkg.firebase)
.constant('$items', pkg.items)
.factory('$dataRef', function($fbUrl) {
  return function() {
    var ref = new Firebase($fbUrl);
    return ref;
  }
})
.controller('ApplicationCtrl', function($scope, 
  $firebaseSimpleLogin, $fbUrl, $state, $firebase, $items) {
  var dataRef = new Firebase($fbUrl);
  $scope.loginObj = $firebaseSimpleLogin(dataRef);
  $scope.items = $items;

  $scope.$on("$firebaseSimpleLogin:login", function(e, user) {
    $firebase(new Firebase($fbUrl + '/votes/' + user.id))
      .$on('value', function(value) {
        var page = 'vote';
        if (value.snapshot.value) {
          page = 'results';
        }
        $state.go(page);
      });
    console.log("User " + user.id + " successfully logged in!");
  });  
});
