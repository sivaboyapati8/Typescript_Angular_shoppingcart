/// <reference path='../../../typings/angularjs/angular.d.ts' />

module app {
	//var app = angular.module('app');
	//export interface IcheckoutCtrl extends ng.IScope {
	//	_confirmationNumber :string;
	//}
	//export class _checkoutCtrl {
	//	static $inject = ["$scope", "$http"];
	//
	//	constructor(protected $scope:app.IcheckoutCtrl, protected $http:ng.IHttpService) {
	//
	//	}
	//
	//	public makepayment():void {
	//		//this.$scope.confirmationNumber = "131234-1343";
	//		this.$scope._confirmationNumber = this.getConfirmationNumber();
	//	}
	//
	//	public getConfirmationNumber():string {
	//		function s4() {
	//			return Math.floor((1 + Math.random()) * 0x10000)
	//							.toString(16)
	//							.substring(1);
	//		}
	//
	//		return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
	//						s4() + '-' + s4() + s4() + s4();
	//
	//	}
	//}
	angular.module('app').controller('checkoutController', ['$scope', '$http', 'ngCart', 'Books', function ($scope, $http, ngCart, Books) {
		$scope.value = ngCart;

		$scope.makePayment = function () {
			$scope.confirmationNumber = $scope.getConfirmationNumber();
		}

		$scope.getConfirmationNumber = function () {
			function s4() {
				return Math.floor((1 + Math.random()) * 0x10000)
								.toString(16)
								.substring(1);
			}

			return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
							s4() + '-' + s4() + s4() + s4();
		}
	}]);
}




