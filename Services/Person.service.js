app.service('PersonService', function ($http, SharedData) {
  const BASE_URL = 'https://fakestoreapi.com/users'

  this.getAllPeople = function () {
    return $http.get(BASE_URL)
  }

  this.getPersonById = function (ID) {
    return allUsers.find(item => item.id == ID)
  }

  this.addPerson = function (person) {
    allUsers.push(person)
    return allUsers
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
