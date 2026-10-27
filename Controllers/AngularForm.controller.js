app.controller('AngularFormController', ['$scope', '$timeout', '$document',
  function ($scope, $timeout, $document) {
    $scope.toast = document.querySelector('.toast')

    $scope.vm = {
      isFormSubmitted: false,
      init: function () {
        console.log('✔ ANGULAR FORM INIT')
      }
    }

    $scope.vm.init()

    $scope.user = {}

    $scope.toastToggle = function () {
      console.log('toast', $scope.toast)
      $scope.toast.classList.add('success')
      $scope.toast.classList.add('active');
      $scope.toast.textContent = 'FORM SUBMITTED SUCCESSFULLY';
      $timeout(function () {
        $scope.toast.classList.remove('active')
      }, 1500)
    }

    $scope.isUserExist = Object.values($scope.user).length

    $scope.submitForm = function () {
      $scope.toastToggle()
    }

    $scope.onSubmit = function () {
      console.log('user ', $scope.isUserExist)
      $scope.user = {}
      $scope.submitForm();
      $scope.myForm.$setSubmitted();
      $scope.myForm.$setPristine();
      $scope.myForm.$setUntouched();
    };
  }])