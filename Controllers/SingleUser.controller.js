app.controller('SingleUserController', ['$scope', 'sharedData',
  function ($scope, sharedData) {
    $scope.vm = {
      selectedUser: sharedData.selectedUser
    }
    console.log('shared Data =>', $scope.vm)
  }])