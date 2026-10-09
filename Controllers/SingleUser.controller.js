app.controller('SingleUserController', ['$scope', '$http', '$routeParams', '$window',
  function ($scope, $http, $routeParams, $window) {
    $scope.vm = {
      loading: true,
      selectedUser: {},
      back: function () {
        $window.history.back();
      }
    }

    $http.get(`https://jsonplaceholder.typicode.com/users/${$routeParams.userID}`)
      .then(function (data) {
        $scope.vm.selectedUser = data.data;
        $scope.vm.loading = false;
      })

    console.log('shared Data =>', $routeParams, $scope.vm.selectedUser)
  }])