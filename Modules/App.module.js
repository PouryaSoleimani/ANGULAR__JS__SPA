var app = angular.module('UsersApp', ["ngRoute"]) // DEPENDENCIES => NG_ROUTE

// APP.FACTORY ==========================================================
app.factory("SharedData", function () {
  return { value: 0 }
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

  $routeProvider.when("/SingleUser", {
    templateUrl: "/SingleUser.html",
    controller: "SingleUserController"
  })

  // $routeProvider.when("/AddNewPerson", {
  //   templateUrl: "/addPerson.html",
  //   controller: "AddPersonController"
  // })

  // $routeProvider.when("/EditPerson", {
  //   templateUrl: "/editPerson.html",
  //   controller: "EditPersonController"
  // })

}])
