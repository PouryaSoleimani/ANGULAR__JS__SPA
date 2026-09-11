app.controller('AllProductsController', function ($scope, ProductService) {
  // GET ALL PRODUCTS
  var productsList = ProductService.getAllProducts()
  productsList.then(res => {
    $scope.products = res.data
    console.log({ products: res.data })
    return res
  })

  

})