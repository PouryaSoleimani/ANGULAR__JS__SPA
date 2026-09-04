app.service('PersonService', function ($http) {
  const baseURL = 'https://fakestoreapi.com/users'
  this.getAllPerson = function () {
    return $http.get(baseURL, {
      headers: { 'Content-Type': "Application/json" }
    })
  }

  this.getPersonById = function (id) {
    return $http.get(`http://localhost:10304/api/people/${+id}`)
  }

  this.addPerson = function (person) {
    var result = $http({
      url: `http://localhost:10304/api/people`,
      method: 'POST',
      data: person
    })
    return result;
  }

  this.editPerson = function (id, person) {
    var result = $http({
      url: `http://localhost:10304/api/people/${+id}`,
      method: "PUT",
      data: person,
    })
    return result
  }

  this.deletePerson = function (id) {
    var result = $http({
      url: `http://localhost:10304/api/people/${+id}`,
      method: "DELETE"
    })
    return result;
  }
}) 