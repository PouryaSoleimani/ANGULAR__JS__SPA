var app = angular.module('PersonApp', ["ngRoute"])

function ListController($scope) {

}

app.factory("SharedData", function () {
  return { value: 0 }
})

// APP CONFIG ===========================================================
app.config(["$routeProvider", function ($routeProvider) {
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
}])
