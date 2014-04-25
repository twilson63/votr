module.exports = function($scope, $state) {
  $scope.login = function() {
    $scope.loginObj.$login('anonymous')
    .then(function() {
      $state.go('vote');
    });
  };
};
