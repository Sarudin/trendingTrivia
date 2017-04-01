angular.module('triviaApp').service('triviaService', function($http) {
  this.getAllQuestions = function() {
    return $http.get('https://practiceapi.devmountain.com/api/trivia/questions/').then(function(response) {
      if (response.status === 200) {
        return response.data;
      }
    })
  }

  this.getQuestionsWithDifficulty = function(difficulty) {
    return $http.get('https://practiceapi.devmountain.com/api/trivia/questions/difficulty/' + difficulty).then(function(response) {
      if (response.status === 200) {
        return response.data;
      }
    })
  }
});
