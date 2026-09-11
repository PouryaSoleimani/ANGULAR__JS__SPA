app.controller('AddPersonController',

  function ($scope, $location, PersonService, SharedData) {
    const toast = document.querySelector('.toast')
    const notValidHTML = `
    <i class="ph-fill ph-warning error"></i>
    <p>FORM IS NOT VALID</p>
`
    const validHTML = `
   <i class="ph-fill ph-check-fat success"></i>
    <p>FORM SUBMITTED SUCCESSFULLY</p>
    `
    const allInputs = document.querySelectorAll('input')

    var list = PersonService.getAllPeople()
    SharedData.people = list
    $scope.people = list;
    console.log('%c ALL USERS =>', "color:yellow", $scope.people)

    $scope.save = function (e) {
      console.log(e)
      if (e.type == "click" || (e.type == "keydown" && e.key == 'Enter')) {

        if (!$scope.firstname || !$scope.lastname || !$scope.age) {
          console.log('NOT VALID')
          allInputs.forEach(item => {
            if (!item.readOnly && item.value == '') {
              item.classList.add('error')
            }
          })
          toast.innerHTML = notValidHTML;
          toast.classList.add('active')

          setTimeout(() => {
            toast.classList.remove('active')
            allInputs.forEach(item => item.classList.remove('error'))
          }, 2000);
          return;
        }

        else {
          var person = {
            id: $scope.people.length + 1,
            firstname: $scope.firstname,
            lastname: $scope.lastname,
            age: $scope.age,
          }

          var newAllUsers = PersonService.addPerson(person)
          SharedData.isAdded = true;
          $scope.people = newAllUsers;
          SharedData.people = newAllUsers;
          $location.path('/')

          allInputs.forEach(item => item.value = '')
          toast.innerHTML = validHTML;
          toast.classList.add('active')
          setTimeout(() => {
            toast.classList.remove('active')
          }, 2000);

        }

      }

    }
  }) 