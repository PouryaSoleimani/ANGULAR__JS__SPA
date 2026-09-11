app.controller('AllPeopleController',
  function ($scope, $location, PersonService, SharedData) {

    var list = PersonService.getAllPerson()
    list.then(function (result) {
      console.log('%c ALL USERS =>', "color:yellow", result.data)
      $scope.people = result.data;
    })

    $scope.userDeleteHandler = function (ID) {
      console.log({ ID })
      const newList = $scope.people.filter((item) => item.id !== ID)
      $scope.people = newList
    }
  }) 