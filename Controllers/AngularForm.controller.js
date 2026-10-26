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

    $scope.user = { firstname: '', lastname: '', age: '', country: '', phone: '', }

    $scope.toastToggle = function () {
      console.log('toast', $scope.toast)
      $scope.toast.classList.add('success')
      $scope.toast.classList.add('active');
      $scope.toast.textContent = 'FORM SUBMITTED SUCCESSFULLY';
      $timeout(function () {
        $scope.toast.classList.remove('active')
      }, 1500)
    }

    $scope.isUserExist = Object.values($scope.user).filter(function (item) { item.length !== 0 }).length

    $scope.submitForm = function () {
      $scope.toastToggle()
    }

    $scope.onSubmit = function () {
      $scope.user = { firstname: '', lastname: '', age: '', country: '', phone: '', }
      $scope.submitForm();
      $scope.myForm.$setSubmitted();
      $scope.myForm.$setPristine();
      $scope.myForm.$setUntouched();
    };
  }])