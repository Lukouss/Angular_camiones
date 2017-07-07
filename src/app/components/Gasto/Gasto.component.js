(function () {
	'use strict';

	angular
	.module('app')
	.component('Gasto', {
		templateUrl: 'app/components/Gasto/Gasto.html',
		controller: gastoCtrl,
		controllerAs: 'vm'
	});

	gastoCtrl.$inject = ['GastoService'];

	function gastoCtrl(GastoService) {
		var vm = this;
		GastoService.query().$promise.then(function (data) {
			vm.gastos = data;
		});
	}
})();