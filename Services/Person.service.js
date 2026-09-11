app.service('PersonService', function ($http, SharedData) {
  const BASE_URL = 'https://fakestoreapi.com/users'

  const allUsers = [
    { id: 1, firstname: 'MAMAD', lastname: 'YOUSEFI', age: 24 }
  ];

  this.getAllPeople = function () {
    console.log({ shared: SharedData, allusers: allUsers })
    if (SharedData.isAdded) {
      return SharedData.people;
    } else {
      return allUsers;
    }
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
