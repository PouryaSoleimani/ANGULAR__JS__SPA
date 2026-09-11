app.controller('AllProductsController', function ($scope, ProductService) {
  var productsList = ProductService.getAllProducts()
  productsList.then(res => {
    $scope.products = res.data
    console.log({ products: res.data })
    return res
  })
})