//^ TEST PAGE CONTROLLER
app.controller('TestPageController',
  function ($scope) {
    $scope.vm = {
      people: ["mamad", 'majid', 'mahyar', 'ehsan', 'nima'],
      prices: [123124, 2412421, 515125, 123123, 51512, 1412412]
    }
  })

// DIRECTIVES
app.directive('separator', function () {
  return {
    restrict: 'E',
    template: "<div class='separator'></div>"
  }
})

app.directive('superman', function () {
  return {
    restrict: 'E',
    template: "<div>HERE I AM SUPERMAN</div>"
  }
})