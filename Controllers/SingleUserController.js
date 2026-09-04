app.controller('SingleUserController', function ($scope, PersonService) {
  // GET ALL USERS
  var list = PersonService.getAllPerson()
  list.then(function (result) {
    console.log('result =>', result)
    $scope.people = result.data;
  })

  $scope.searchHandler = function () {
    $scope.user = $scope.people.find(item => item.id == $scope.ID)
    console.log("ID =>", $scope.ID)
    console.log("USER =>", $scope.user)
  }
})