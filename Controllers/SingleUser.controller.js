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
          }).then(() => {
            $scope.vm.loading = false;
          })
      },
      back: function () {
        $window.history.back();
      },
      prev: function () {
        if (Number($scope.vm.selectedID) <= 1) {
          $scope.vm.selectedID = 10
        } else {
          $scope.vm.selectedID--
        }
        $scope.vm.getUser()
      },
      next: function () {
        if (Number($scope.vm.selectedID) >= 10) {
          $scope.vm.selectedID = 1
        } else {
          $scope.vm.selectedID++
        }
        $scope.vm.getUser()
      },
      keyboardHandler: function () {
        $window.addEventListener('keydown', function (e) {
          if (e.key !== 'ArrowRight' || e.key !== "ArrowLeft") return;

          if (e.key == 'ArrowRight') {
            $scope.vm.prev()
          } else if (e.key == 'ArrowLeft') {
            $scope.vm.next()
          }
          console.log(e.key)
        })
      }
    }
    $scope.vm.getUser()
    $scope.vm.keyboardHandler()
    console.log('shared Data =>', $routeParams, $scope.vm.selectedUser)
  }])