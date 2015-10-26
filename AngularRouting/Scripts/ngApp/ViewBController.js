(function () {
    angular.module("AngularRoutingDemo")
        .controller("ViewBController", function ($routeParams) {
            var vm = this;

            vm.message = "Hello from View B! You requested id " + $routeParams.id;
        });
})();