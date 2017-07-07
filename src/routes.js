(function () {
  'use strict';
  angular
  .module('app')
  .config(routesConfig);

  /** @ngInject */
  function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true).hashPrefix('!');
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('app', {
        url: '/',
        component: 'app'
      })
      .state('gasto', {
        url: '/gasto',
        component: 'gasto'
      })
      .state('crearGasto', {
        url: '/gasto/crear',
        controller: 'StoreGasto.controller',
        controllerAs: 'vm',
        templateUrl: 'app/components/Gasto/FormGasto.html'
      })
      .state('verGasto', {
        url: '/gasto/:id/ver',
        controller: 'ViewGasto.controller',
        controllerAs: 'vm',
        templateUrl: 'app/components/Gasto/FormGasto.html'
      })
      .state('actualizarGasto', {
        url: '/gasto/:id/actualizar',
        controller: 'UpdateGasto.controller',
        controllerAs: 'vm',
        templateUrl: 'app/components/Gasto/FormGasto.html'
      });
  }
})();
