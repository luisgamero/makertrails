angular.module('Auth.login', [])
  .controller('LoginController', function($scope, $http, AuthFactory){
    $scope.login = function(){
      AuthFactory.login($scope.username, $scope.password)
    }
  });
