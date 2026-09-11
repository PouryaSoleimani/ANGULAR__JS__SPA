var app = angular.module('UsersApp', ["ngRoute"]) // DEPENDENCIES => NG_ROUTE

// APP.FACTORY ==========================================================
app.factory("SharedData", function () {
  return {
    value: 0,
    isAdded: false,
    people: []
  }
})

// APP CONFIG | ROUTE_PROVIDER ===========================================================
app.config(["$routeProvider", function ($routeProvider) {

  $routeProvider.when("/", {
    templateUrl: "/AllUsers.html",
    controller: "AllPeopleController"
  })

  $routeProvider.when("/AllUsers", {
    templateUrl: "/AllUsers.html",
    controller: "AllPeopleController"
  })

  $routeProvider.when("/SearchUser", {
    templateUrl: "/SearchUser.html",
    controller: "SingleUserController"
  })

  $routeProvider.when("/AddNewPerson", {
    templateUrl: "/AddUser.html",
    controller: "AddPersonController"
  })

}])
