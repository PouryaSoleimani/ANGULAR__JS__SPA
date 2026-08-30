function MyController($scope) {
  $scope.name = "Pourya";
  $scope.family = "Soleimani";
  $scope.isUserLoggedIn = false;
  $scope.username = ""
  $scope.password = ""
  $scope.loginModal = document.querySelector(".login__modal");
  $scope.productName = "";
  $scope.toast = document.querySelector('.toast')
  $scope.toastText = $scope.toast.querySelector('p')

  $scope.products = [
    { id: 1, title: 'IPHONE__14PROMAX', isDone: false },
    { id: 2, title: 'MONITOR__49INCH', isDone: false },
    { id: 3, title: 'AIRPOD', isDone: false },
    { id: 4, title: 'APPLE__WATCH', isDone: false },
    { id: 5, title: 'MOTOR__CLICK', isDone: false },
    { id: 6, title: 'MACBOOK__PRO', isDone: false },
  ]

  $scope.people = [
    { id: 1, firstname: "pourya", lastname: "soleimani", age: 32 },
    { id: 2, firstname: "mamad", lastname: "boland", age: 33 },
    { id: 3, firstname: "majid", lastname: "kalhor", age: 31 },
    { id: 4, firstname: "ehsan", lastname: "gholipoor", age: 31 },
    { id: 5, firstname: "hamed", lastname: "mousavi", age: 26 },
    { id: 6, firstname: "ali", lastname: "ghazanfari", age: 25 },
    { id: 7, firstname: "ali", lastname: "mohammad", age: 25 },
    { id: 8, firstname: "mohammad", lastname: "yousefi", age: 24 },
    { id: 9, firstname: "ashkan", lastname: "hoseinpour", age: 26 },
    { id: 10, firstname: "shahriyar", lastname: "reyhani", age: 33 },
    { id: 11, firstname: "iman", lastname: "allahyari", age: 30 },
  ];

  $scope.themeToggle = function () {
    const i = document.querySelector("#theme__btn i");
    if (i.classList.contains("ph-moon")) {
      i.className = "ph-fill ph-sun";
      document.body.className = "light";
    } else {
      i.className = "ph-fill ph-moon";
      document.body.className = "dark";
    }
  };

  $scope.loginModalHandler = function () {

    const loginModalOpenBtn = document.querySelector("#login__btn");
    const loginModalCloseBtn = document.querySelector("#close__login__modal");

    loginModalOpenBtn.addEventListener("click", () => {
      $scope.loginModal.classList.add("active");
    });

    loginModalCloseBtn.addEventListener("click", () => {
      $scope.loginModal.classList.remove("active");
    });
  };

  $scope.loginHandler = function () {
    if ($scope.name.length == 0 || $scope.username.length == 0) {
      console.error('⛔ form validation failed')
      document.querySelector('.login__body').querySelectorAll('input').forEach(item => {
        item.classList.add('error')
        setTimeout(() => {
          item.classList.remove('error')
        }, 1000);
      })
      return
    }
    $scope.isUserLoggedIn = true
    $scope.loginModal.classList.remove('active')

  }

  $scope.logProductName = function () {

    const toastHandler = () => {
      $scope.toast.classList.add('active')
      $scope.toast.classList.add('success')
      $scope.toastText.textContent = "Product Added Successfully"

      setTimeout(() => {
        $scope.toast.classList.remove('active')
      }, 1500);

      setTimeout(() => {
        $scope.toast.classList.remove('success')
        $scope.toastText.textContent = "";
      }, 2000);
    }

    if ($scope.productName.length) {
      toastHandler();
      const object = {
        id: $scope.products.length + 1,
        title: $scope.productName.toUpperCase(),
        isDone: false
      }

      $scope.products.push(object)
      console.log({ products: $scope.products })
    }
  }
}

function MyCrtl($scope) {
  $scope.name = "Pourya";
  $scope.family = "Soleimani";
  $scope.fullName = function () {
    return $scope.name.toUpperCase() + " " + $scope.family.toUpperCase();
  };
  $scope.logger = function () {
    console.log("LOG LOG");
  };
}

var app = angular.module("appModule", []);
app.controller("AppController", function ($scope) {
  $scope.name = "Pourya";
  $scope.family = "Soleimani";
  $scope.logger = function () {
    console.log("LOG LOG");
  };
});

// SAMPLE PROJECT
var project = angular.module("ProjectModule", []);
project.controller("ProjectController", function ($scope) {
  $scope.count = 0;
  $scope.price = 1000;
  $scope.increase = function () {
    $scope.count = $scope.count + 1;
  };

  $scope.message = "";
  $scope.save = function () {

    if ($scope.message.length < 1) {
      throw new Error("TextArea is Empty");
    }

    let saved = $scope.message;
    $scope.message = "";
    console.log("SAVED => ", saved);
  };
});
