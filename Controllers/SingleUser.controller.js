app.controller('SingleUserController', ['$scope', '$http', '$routeParams', '$window',
  function ($scope, $http, $routeParams, $window) {
    $scope.vm = {
      loading: true,
      selectedUser: {},
      selectedID: $routeParams.userID,
      getUser: function () {
        $http.get(`https://jsonplaceholder.typicode.com/users/${$scope.vm.selectedID}`)
          .then(function (data) {
            $scope.vm.selectedUser = data.data;
            $scope.vm.loading = false;
          })
      },
      back: function () {
        $window.history.back();
      },
      prev: function () {
        $scope.vm.selectedID--
        $scope.vm.getUser()
      },
      next: function () {
        $scope.vm.selectedID++
        $scope.vm.getUser()
      },

    }

    $scope.vm.getUser()

    console.log('shared Data =>', $routeParams, $scope.vm.selectedUser)
  }])