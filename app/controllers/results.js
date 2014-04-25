module.exports = function($scope, $us, $dataRef, $firebase) {
  var votes = $firebase($dataRef().child('votes'));
  votes.$on('value', function(data) {
    var foo = $us(data.snapshot.value).countBy(function(vote) {
      return vote;
    });
    $scope.$apply(function() {
      $scope.votes = foo;
    });
  });

};