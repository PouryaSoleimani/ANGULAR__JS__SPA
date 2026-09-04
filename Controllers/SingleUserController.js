app.controller('SingleUserController', function ($scope) {
  $scope.InputLogger = function () {
    console.log("ID =>", $scope.ID)
  }
})