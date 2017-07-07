(function () {

'use strict';
angular
  .module('app')
  .component('app', {
    templateUrl: 'app/main.html',
    controller: appCtrl,
    controllerAs: 'vm'
  });



function appCtrl() {
	var vm =this;
	// body...
}
	
})();