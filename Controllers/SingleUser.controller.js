app.controller('SingleUserController', ['$scope', '$http', 'sharedData', '$routeParams',
  function ($scope, $http, sharedData, $routeParams,) {
    $scope.vm = {
      selectedUser: {},
    }
    $http.get(`https://jsonplaceholder.typicode.com/users/${$routeParams.userID}`).then(function (data) {
      $scope.vm.selectedUser = data.data
    })
    console.log('shared Data =>', $routeParams, $scope.vm.selectedUser)
  }])