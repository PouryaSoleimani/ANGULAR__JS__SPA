app.controller('AllPeopleController',
  function ($scope, $location, PersonService, SharedData) {
    $scope.vm = {
      editModal: document.querySelector('.edit_person_modal'),
      selectedUser: {}
    }
    var list = PersonService.getAllPerson()
    list.then(function (result) {
      console.log('%c ALL USERS =>', "color:yellow", result.data)
      $scope.people = result.data;
    })

    $scope.userDeleteHandler = function (ID) {
      console.log({ ID })
      const newList = $scope.people.filter((item) => item.id !== ID)
      $scope.people = newList
    }

    $scope.openModalHandler = function (user) {
      $scope.vm.editModal.classList.add('active')
      $scope.vm.selectedUser = user
    }

    $scope.closeModalHandler = function () {
      $scope.vm.editModal.classList.remove('active')
    }

    $scope.submitEditFormHandler = function () {
      console.log('SUBMIT')
      $scope.closeModalHandler()
    }
  }) 