app.controller('AllPeopleController', function ($scope, $location, PersonService, ShareData) {
  var list = PersonService.getAllPerson()
  list.then(function (result) {
    $scope.people = result.data;
  })
}) 