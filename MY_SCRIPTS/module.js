var app = angular.module('PersonApp', ["ngRoute"])

function ListController($scope) {

}

app.factory("SharedData", function () {
  return { value: 0 }
})

app.config(["$routeProvider", function ($routeProvider) {
  $routeProvider.when("/List", {
    templateUrl: "/list.html",
    controller: "ListController"
  })
}])