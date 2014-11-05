'use strict';

/**
 * @ngdoc function
 * @name angularCrudApp.controller:AboutCtrl
 * @description # AboutCtrl Controller of the angularCrudApp
 */
angular.module('angularCrudApp').controller('FrontCtrl',
		function($scope, $firebase) {
			var ref = new Firebase("https://tradsey-crud.firebaseio.com/");

			var sync = $firebase(ref);

			$scope.items = sync.$asArray();
		});
