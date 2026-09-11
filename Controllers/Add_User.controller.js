app.controller('AddPersonController',

  function ($scope, $location, PersonService, SharedData) {
    const people = SharedData.people
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

    var list = PersonService.getAllPerson()
    list.then(function (result) {
      console.log('%c ALL USERS =>', "color:yellow", result.data)
      SharedData.people = result.data
      $scope.people = result.data;
    })

    $scope.save = function (e) {
      console.log(e)
      if (e.type == "click" || (e.type == "keydown" && e.key == 'Enter')) {

        if (!$scope.Name || !$scope.Family || !$scope.Age) {
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
          console.log({ people })
          var person = {
            ID: SharedData.people.length + 1,
            ID: 1,
            Name: $scope.Name,
            Family: $scope.Family,
            Age: $scope.Age,
          }

          allInputs.forEach(item => item.value = '')
          toast.innerHTML = validHTML;
          toast.classList.add('active')
          setTimeout(() => {
            toast.classList.remove('active')
          }, 2000);

          console.log({ person })
          var result = PersonService.addPerson(person)
          result.then(function () {
            SharedData.people.push(person)
            $scope.people.push(person)
            $location.path('/')
          })

        }

      }

    }
  }) 