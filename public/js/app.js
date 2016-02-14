//app = angular.module('app', ['ui.router', 'ngCart', 'booksService']);
//app.config(function ($stateProvider, $urlRouterProvider) {
//	$urlRouterProvider.otherwise('/home');
//	$stateProvider
//					.state('home', {
//						url: '/home',
//						templateUrl: '../partials/home.html'
//					})
//
//					.state('addbooks', {
//						url: '/addbooks',
//						templateUrl: '../partials/addbooks.html'
//					})
//
//					.state('checkout', {
//						url: '/checkout',
//						templateUrl: '../partials/checkout.html'
//					})
//});
/// <reference path='../../typings/angularjs/angular.d.ts' />
/// <reference path='../../typings/angular-ui-router/angular-ui-router.d.ts' />
var app;
(function (app) {
    angular.module('app', ['ui.router', 'ngCart', 'booksService']).config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');
        $stateProvider
            .state('home', {
            url: '/home',
            templateUrl: '../partials/home.html'
        })
            .state('addbooks', {
            url: '/addbooks',
            templateUrl: '../partials/addbooks.html'
        })
            .state('checkout', {
            url: '/checkout',
            templateUrl: '../partials/checkout.html'
        });
        angular.module('checkoutCtrl', []);
    });
})(app || (app = {}));
//# sourceMappingURL=app.js.map