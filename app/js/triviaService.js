angular.module('triviaApp').service('triviaService', function($http) {
  this.getAllQuestions = function() {
    return $http.get('https://practiceapi.devmountain.com/api/trivia/questions/').then(function(response) {
      if (response.status === 200) {
        return response.data;
      }
    })
  }

  this.getEasyQuestions = function() {
    return $http.get('https://practiceapi.devmountain.com/api/trivia/questions/difficulty/1').then(function(response) {
      if (response.status === 200) {
        return response.data;
      }
    })
  }

  this.getMediumQuestions = function() {
    return $http.get('https://practiceapi.devmountain.com/api/trivia/questions/difficulty/2').then(function(response) {
      if (response.status === 200) {
        return response.data;
      }
    })
  }

  this.getHardQuestions = function() {
    return $http.get('https://practiceapi.devmountain.com/api/trivia/questions/difficulty/3').then(function(response) {
      if (response.status === 200) {
        return response.data;
      }
    })
  }
});
