angular.module('triviaApp').controller('mainCtrl', function($scope, triviaService) {
  $scope.questions = [];

  $scope.getAllQuestions = function() {
    triviaService.getAllQuestions().then(function(response) {
      $scope.questions = response;
    })
  }

  $scope.getEasyQuestions = function() {
    triviaService.getEasyQuestions().then(function(response) {
      $scope.questions = response;
    })
  }

  $scope.getMediumQuestions = function() {
    triviaService.getMediumQuestions().then(function(response) {
      $scope.questions = response;
    })
  }

  $scope.getHardQuestions = function() {
    triviaService.getHardQuestions().then(function(response) {
      $scope.questions = response;
    })
  }
});
