app.controller('AngularFormController', ['$scope', '$timeout', '$document',
  function ($scope, $timeout, $document) {
    $scope.vm = {
      isFormSubmitted: false,
      init: function () {
        console.log('✔ ANGULAR FORM INIT')
      }
    }

    $scope.vm.init()
    $scope.toast = document.querySelector('.toast')

    $scope.toastToggle = function () {
      console.log('toast', $scope.toast)
      $scope.toast.classList.add('success')
      $scope.toast.classList.add('active');
      $scope.toast.textContent = 'FORM SUBMITTED SUCCESSFULLY';
      $timeout(function () {
        $scope.toast.classList.remove('active')
      }, 1500)
    }

    $scope.submitForm = function () {
      $scope.vm.isFormSubmitted = true;
      $scope.user.firstname = '';
      $scope.user.lastname = '';
      $scope.user.age = '';
      $scope.toastToggle()
    }
  }])