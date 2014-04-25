module.exports = function($scope, $fbUrl, $firebase, $state) {
  // setup 3 way binding

  $scope.voteFor = function(item) {
    var vote = $firebase(new Firebase($fbUrl + '/votes/' +
      $scope.loginObj.user.id));
    vote.$set(item);
    //$state.go('results');
    console.log('voted for ' + item);
  };
};