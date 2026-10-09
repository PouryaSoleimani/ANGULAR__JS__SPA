app.controller('SingleUserController', ['$scope', '$http', '$routeParams', 'sharedData',
  function ($scope, $http, $routeParams, sharedData) {
    $scope.vm = {
      loading: true,
      selectedUser: {},
    }

    $http.get(`https://jsonplaceholder.typicode.com/users/${$routeParams.userID}`)
      .then(function (data) {
        $scope.vm.selectedUser = data.data;
        $scope.vm.loading = false;
      })

    console.log('shared Data =>', $routeParams, $scope.vm.selectedUser)
  }])