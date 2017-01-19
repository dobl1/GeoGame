angular.module('Game')

.controller('GameCtrl', function($scope, GameService) {

  $scope.game = {};
  $scope.game.questions = [];

  $scope.$on("$ionicView.enter", function(event, data){
    GameService.getGames($scope);
    $scope.$on('getGamesOK', function (event, data) {
      $scope.games = data;
    });
  });



  $scope.groups = [];
  for (var i=0; i<1; i++) {
    $scope.groups[i] = {
      name: i,
      items: []
    };
    for (var j=0; j<3; j++) {
      $scope.groups[i].items.push(i + '-' + j);
    }
  }

  /*
  * if given group is the selected group, deselect it
  * else, select the given group
  */
  $scope.toggleGroup = function(group) {
    if ($scope.isGroupShown(group)) {
      $scope.shownGroup = null;
    } else {
      $scope.shownGroup = group;
    }
  };
  $scope.isGroupShown = function(group) {
    return $scope.shownGroup === group;
  };


});
