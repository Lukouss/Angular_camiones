(function () {
	'use strict';
	angular.module('app')
	.controller('StoreGasto.controller', store);
	
	store.$inject = ['GastoService', '$log', 'GeneroService'];
	
	function store(GastoService, $log, GeneroService) {
		var vm = this;
		vm.location = 'store';
		vm.gastoForm = {
			fecha: null,
		  monto: null,
		  desc: null,
		  id_genero: null
		};
		vm.generos = GeneroService.query();
		vm.gastos = null;
		GastoService.query().$promise.then(success, error);
		vm.semanticAction = function (form) {
			console.log(form);
			form.id_genero = form.id_genero.id_genero;
			form.fecha = convertDate(form.fecha);
			GastoService.save(form, success, error);
		};
		// Private functions
		function success(data) {
			vm.gastos = data;
			$log.debug(vm.gastos);
		}
		function error(data) {
			$log.debug(data);
		}
		function convertDate(str) {
			var date = new Date(str);
			var mnth = ('0' + (date.getMonth() + 1)).slice(-2);
			var day = ('0' + date.getDate()).slice(-2);
			return [date.getFullYear(), mnth, day].join('-');
		}
	}
})();