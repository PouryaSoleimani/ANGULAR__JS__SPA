app.service('PersonService', function ($http) {
  const BASE_URL = 'https://fakestoreapi.com/users'
  const allUsers = [
    { id: 1, firstname: 'MAMAD', lastname: 'YOUSEFI', age: 24 }
  ]

  this.getAllPeople = function () {
    return allUsers;
  }

  this.getPersonById = function (ID) {
    return allUsers.find(item => item.id == ID)
  }

  this.addPerson = function (person) {
    var result = $http({
      url: `${BASE_URL}`,
      method: 'POST',
      data: person
    })
    return result;
  }

  this.editPerson = function (id, person) {
    var result = $http({
      url: `${BASE_URL}${+id}`,
      method: "PUT",
      data: person,
    })
    return result
  }

  this.deletePerson = function (id) {
    var result = $http({
      url: `${BASE_URL}${+id}`,
      method: "DELETE"
    })
    return result;
  }
}) 
