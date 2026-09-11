// DEPENDENCIES FOR MODULE => NG_ROUTE
var app = angular.module("UsersApp", ["ngRoute"]);

// APP.FACTORY ==========================================================
app.factory("SharedData", function () {
  return { value: 0 };
});

// APP CONFIG | ROUTE_PROVIDER ===========================================================
app.config([
  "$routeProvider",
  function ($routeProvider) {
    // USERS ROUTES
    $routeProvider.when("/", {
      templateUrl: "/AllUsers.html",
      controller: "AllPeopleController",
    });
    $routeProvider.when("/AllUsers", {
      templateUrl: "/AllUsers.html",
      controller: "AllPeopleController",
    });
    $routeProvider.when("/SearchUser", {
      templateUrl: "/SearchUser.html",
      controller: "SingleUserController",
    });
    $routeProvider.when("/AddNewPerson", {
      templateUrl: "/AddUser.html",
      controller: "AddPersonController",
    });
    // PRODUCTS ROUTES
    $routeProvider.when("/AllProducts", {
      templateUrl: "/AllProducts.html",
      controller: "AllProductsController",
    });
    $routeProvider.when("/SearchProduct", {
      templateUrl: "/SearchProduct.html",
      controller: "SearchProductController",
    });
  },
]);
