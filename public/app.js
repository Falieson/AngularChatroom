(function() {

  var app = angular.module('chatroom', ['luegg.directives']);


  app.directive('chat', function($interval, $http) {
    return {
      restrict: 'E',
      templateUrl: 'chat-template.html',
      link: function($scope) {
        $scope.messages = [];
        $scope.messages.push({message: 'Hello Florian' + Math.random(), username: "Juha", time: new Date()});

        $scope.sender = 'swag';
        $scope.newMessage = 'hello';

        $scope.saveMessage = function() {
          if(!$scope.newMessage || !$scope.sender) {
            alert("hey guy, add your nickname or a message");
            return;
          }

          var url = '/messages';
          var data = {message: $scope.newMessage, username: $scope.sender, time: new Date()};

          $http
            .post(url, data)
            .then(function(result) {
              $scope.messages.push(data);

              $scope.newMessage = '';
            }, function(error) {
              console.warn('error from backend in post', error.data.message)
            })
        };

      }
    }

  });

  app.directive('messageText', function() {
    return {
      restrict: 'E',
      templateUrl: 'chat-message-text-template.html',
      scope: {
        message: "="
      },
      link: function($scope) {
        $scope.message = $scope.message;
      }
    }

  });





})();
