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

  $mainService.postQuestion({
    animal: 'panda',
    correct_answer: 1,
    date_entered: new Date(),
    difficulty: 1,
    options: {
      1: 'yes',
      2: 'no',
      3: 'maybe',
      4: 'kinda'
    }
  })
});
