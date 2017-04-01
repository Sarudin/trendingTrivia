angular.module('triviaApp').controller('mainCtrl', function($scope, triviaService) {
  $scope.questions = [];

  $scope.getAllQuestions = function() {
    triviaService.getAllQuestions().then(function(response) {
      $scope.questions = response;
    })
  }

  $scope.getQuestionsWithDifficulty = function(difficulty) {
    triviaService.getQuestionsWithDifficulty(difficulty).then(function(response) {
      $scope.questions = response;
    })
  }
});
