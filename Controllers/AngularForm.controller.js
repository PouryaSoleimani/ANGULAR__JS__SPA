app.controller('AngularFormController', ['$scope',
  function ($scope) {
    $scope.vm = {

      init: function () {
        console.log('✔ ANGULAR FORM INIT')
      }
    }

    $scope.vm.init()
  }])