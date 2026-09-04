var app = angular.module('PersonApp', ["ngRoute"]) // DEPENDENCIES => NG_ROUTE

function ListController($scope) { }

// APP.FACTORY ==========================================================
app.factory("SharedData", function () {
  return { value: 0 }
})

// APP CONFIG ===========================================================
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
    controller: "AllPeopleController"
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
