app.service('PersonService', function ($http) {
  const BASE_URL = 'https://fakestoreapi.com/users'
  
  this.getAllPerson = function () {
    return $http.get(BASE_URL, {
      headers: { 'Content-Type': "Application/json" }
    })
  }

  this.getPersonById = function (id) {
    return $http.get(`${BASE_URL}${+id}`)
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