(function () {
	'use strict';

	angular
	.module('app')
	.service('GastoService', gastoService);

	gastoService.$inject = ['$resource'];

	function gastoService($resource) {
		return $resource('http://localhost:8000/api/gastos/:id', {id: '@id'});
	}
})();