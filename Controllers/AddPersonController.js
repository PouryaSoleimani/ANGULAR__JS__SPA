app.controller('AddPersonController',
  function ($scope, $location, PersonService) {
    $scope.ID = 0
    $scope.save = function () {
      var person = {
        ID: $scope.ID,
        Name: $scope.Name,
        Family: $scope.Family,
        Age: $scope.Age,
      }
      var result = PersonService.addPersoon(person)
      result.then(function () {
        $location.path('/')
      })
    }
  }) 