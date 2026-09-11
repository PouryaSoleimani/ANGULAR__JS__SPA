app.service('ProductService', function ($http, SharedData) {
  const BASE_URL = "https://fakestoreapi.com/products"

  this.getAllProducts = function () {
    return $http.get(BASE_URL)
  }

})