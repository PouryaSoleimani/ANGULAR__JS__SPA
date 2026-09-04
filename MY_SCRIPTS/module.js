var app = angular.module('PersonApp', ["ngRoute"]) // DEPENDENCIES => NG_ROUTE

function ListController($scope) { }

// APP.FACTORY ==========================================================
app.factory("SharedData", function () {
  return { value: 0 }
})

// APP CONFIG ===========================================================
app.config(["$routeProvider", function ($routeProvider) {
  $routeProvider.when("/", {
    templateUrl: "/list.html",
    controller: "ListController"
  })
  $routeProvider.when("/List", {
    templateUrl: "/list.html",
    controller: "ListController"
  })
  $routeProvider.when("/AddNewPerson", {
    templateUrl: "/addPerson.html",
    controller: "AddPersonController"
  })
  $routeProvider.when("/EditPerson", {
    templateUrl: "/editPerson.html",
    controller: "EditPersonController"
  })
  $routeProvider.when("/AllPeople", {
    templateUrl: "/allPeople.html",
    controller: "AllPeopleController"
  })
}])
