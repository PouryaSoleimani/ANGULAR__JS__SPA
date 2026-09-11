app.controller("SearchProductController", function ($scope, ProductService) {
  var productsList = ProductService.getAllProducts();
  productsList.then((res) => {
    $scope.products = res.data;
    return res;
  });

  $scope.productSearchHandler = function () {
    $scope.selectedProduct = $scope.products.find(
      (item) => item.id == +$scope.productID,
    );
  };
});
