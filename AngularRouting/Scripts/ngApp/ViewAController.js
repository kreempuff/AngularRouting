(function () {
    angular.module("AngularRoutingDemo")
        .controller("ViewAController", function ($location) {
            var vm = this;

            vm.message = "Hello from View A!";

            vm.move = function (id) {
                $location.path('viewB/' + id);
            }
        });
})();