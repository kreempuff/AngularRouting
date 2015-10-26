(function () {
    angular.module("AngularRoutingDemo", ['ngRoute'])
        .config(function ($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: '/ngViews/viewA.html',
                    controller: 'ViewAController',
                    controllerAs: 'vm'
                })
                .when('/viewA', {
                    templateUrl: '/ngViews/viewA.html',
                    controller: 'ViewAController',
                    controllerAs: 'vm'
                })
                .when('/viewB/:id', {
                    templateUrl: '/ngViews/viewB.html',
                    controller: 'ViewBController',
                    controllerAs: 'vm'
                })
                .otherwise({
                    templateUrl: '/ngViews/notFound.html'
                });
        });
})();