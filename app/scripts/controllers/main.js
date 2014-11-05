'use strict';

/**
 * @ngdoc function
 * @name angularCrudApp.controller:MainCtrl
 * @description # MainCtrl Controller of the angularCrudApp
 */
angular.module('angularCrudApp').controller('MainCtrl',
		function($scope, $firebase) {

			var ref = new Firebase("https://tradsey-crud.firebaseio.com/");

			var sync = $firebase(ref);

			$scope.items = sync.$asArray();

			$scope.newItem = {
				name : '',
				price : '',
				color : '',
				condition : ''
			};

			$scope.addItem = function() {
				$scope.items.$add($scope.newItem);

				$scope.newItem = {
					name : '',
					price : '',
					color : '',
					condition : ''
				};
			};

			$scope.predicate = 'name';
		});
