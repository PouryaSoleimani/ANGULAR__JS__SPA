app.controller('SingleUserController', function ($scope, PersonService) {

  // GET ALL USERS
  var list = PersonService.getAllPeople()
  $scope.people = list

  // SEARCH HANDLER
  $scope.searchHandler = function () {
    $scope.user = $scope.people.find(item => item.id == $scope.ID)
    console.log("ID =>", $scope.ID)
    console.log("USER =>", $scope.user)
  }

})