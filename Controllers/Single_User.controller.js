app.controller('SingleUserController', function ($scope, PersonService) {

  // GET ALL USERS
  var list = PersonService.getAllPeople()
  list.then(res => {
    console.log('result =>', res.data)
    $scope.people = res.data;
  })

  // SEARCH HANDLER
  $scope.searchHandler = function () {
    $scope.user = $scope.people.find(item => item.id == $scope.ID)
    console.log("ID =>", $scope.ID)
    console.log("USER =>", $scope.user)
  }

})