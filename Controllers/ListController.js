app.controller('AllPeopleController',
  function ($scope, $location, PersonService, SharedData) {
    var list = PersonService.getAllPerson()
    list.then(function (result) {
      console.log('result =>', result)
      $scope.people = result.data;
    })
  }) 