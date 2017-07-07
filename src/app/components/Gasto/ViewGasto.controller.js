(function () {
	'use strict';
	angular.module('app')
	.controller('ViewGasto.controller', viewCtrl);
	
	viewCtrl.$inject = ['GastoService', '$stateParams', '$log'];
	function viewCtrl(GastoService, $stateParams, $log) {
		var vm = this;
		vm.location = 'view';
		$log.debug($stateParams.id);
		vm.gastoForm = GastoService.get({id: $stateParams.id});
	}
})();