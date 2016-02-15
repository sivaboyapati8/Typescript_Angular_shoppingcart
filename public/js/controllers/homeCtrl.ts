/**
 * Created by sboyapati on 2/13/16.
 */
/// <reference path='../../../typings/angularjs/angular.d.ts' />
module app {

	angular.module('app').controller('homeController', ['$scope', '$http', 'ngCart', 'Books', function ($scope, $http, ngCart, Books) {
		$scope.formData = {};
		$scope.value = ngCart;
		$scope.books =
						[{
							"_id": "56b6090ac942d0b305abbec4",
							"quantity": 200,
							"price": 42.32,
							"publicationyear": "2016",
							"isbn10": "1430264489",
							"author": "Adam Freeman",
							"title": "Pro AngularJS (Expert's Voice in Web Development)",
							"__v": 0
						}, {
							"_id": "56b6098bc942d0b305abbec5",
							"quantity": 100,
							"price": 43.55,
							"publicationyear": "2014",
							"isbn10": "1430265957",
							"author": "Azat Mardan",
							"title": "Practical Node.js: Building Real-World Scalable Web Apps",
							"__v": 0
						}, {
							"_id": "56b60a6bc942d0b305abbec6",
							"quantity": 23,
							"price": 35.99,
							"publicationyear": "2013",
							"isbn10": "2343234432",
							"author": "Chandermani",
							"title": "AngularJS by Example",
							"__v": 0
						}, {
							"_id": "56b60b51c942d0b305abbec7",
							"quantity": 20,
							"price": 13.49,
							"publicationyear": "2012",
							"isbn10": "1323124124",
							"author": "Dane Cameron",
							"title": "Software Engineer Learns HTML5, JavaScript and jQuery",
							"__v": 0
						}, {
							"_id": "56b60bcbc942d0b305abbec8",
							"quantity": 34,
							"price": 33.89,
							"publicationyear": "2013",
							"isbn10": "3423132123",
							"author": "David Flanagan",
							"title": "JavaScript: The Definitive Guide: Activate Your Web Pages",
							"__v": 0
						}, {
							"_id": "56b60c06c942d0b305abbec9",
							"quantity": 198,
							"price": 26.9,
							"publicationyear": "2015",
							"isbn10": "1783551623",
							"author": "Artemij Fedosejev",
							"title": "React.js Essentials",
							"__v": 0
						}, {
							"_id": "56b60ca0c942d0b305abbeca",
							"quantity": 30,
							"price": 29.48,
							"publicationyear": "2013",
							"isbn10": "0321812182",
							"author": "David Herman",
							"title": "Effective JavaScript:",
							"__v": 0
						}, {
							"_id": "56b66b5f22fd721d0aa8d37a",
							"quantity": 7,
							"price": 700,
							"publicationyear": "2015",
							"isbn10": "3413234223",
							"author": "Bond Siva",
							"title": "James bond",
							"__v": 0
						}];

		$scope.products =
						[
							{id: 1, name: "Soap", desc: "soap desc", price: "25", Quantity: "10"},
							{id: 2, name: "Bag", desc: "bag desc", price: "100", Quantity: "15"},
							{id: 3, name: "Pen", desc: "pen desc", price: "15", Quantity: "13"}
						];

	}]);
}


