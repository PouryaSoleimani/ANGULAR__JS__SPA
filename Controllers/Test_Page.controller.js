//^ TEST PAGE CONTROLLER
app.controller('TestPageController', ['$scope', '$http',
  function ($scope, $http) {
    $scope.vm = {
      people: ["mamad", 'majid', 'mahyar', 'ehsan', 'nima', 'milad'],
      prices: [123124, 2412421, 515125, 123123, 51512, 1412412],
    }
    $http.get('/data.json').then(function (data) {
      console.log('data =>', data)
      $scope.vm.mySelf = data.data[0];
    })
  }])

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

app.directive('space', function () {
  return {
    restrict: 'E',
    template: "<div class='space'></div>"
  }
})

app.directive('buttoncomponent', function () {
  return {
    restrict: 'E', // EXPRESSION
    template: "<button class='btn btn-black'>CLICK ME !</button>"
  }
})

app.directive('logger', function () {
  return {
    restrict: 'A', // ANCHOR
    link: function () {
      console.log('LINK | DIRECTIVE')
    }
  }
})

app.directive('loggerClass', function () {
  return {
    restrict: 'C', // CLASS
    link: function () {
      console.log('CLASS | DIRECTIVE')
    }
  }
})

app.directive('loggerComment', function () {
  return {
    restrict: 'M', // CLASS
    link: function () {
      console.log('COMMENT | DIRECTIVE')
    }
  }
}) 