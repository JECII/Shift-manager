

(function () {
  angular.module('shiftManager')
    .config(function ($stateProvider, $urlRouterProvider) {

      $stateProvider
        .state('auth', {
          abstract: true,
          template: '<div class="content"><ui-view></ui-view></div>',
          resolve: {

            url: '/members',
            template: '<members-component></members-component>'

              .state('auth.employee', {
                url: '/employees',
                template: '<employee-component></employee-component>'
              })
              .state('auth.alerts', {
                url: '/alerts',
                template: '<alerts-component></alert-component>'
              })
              .state('auth.create', {
                url: '/create',
                template: '<create-schedule-component></create-schedule-component>'
              })
              .state('auth.requests', {
                url: '/requests',
                template: '<requests-component></requests-component>'
              })
              .state('auth.shift-swap', {
                url: '/shift-swap',
                template: '<shift-swap-component></shift-swap-component>'
              })
              .state('auth.staff-dashboard', {
                url: '/staff-dashboard',
                template: '<staff-dashboard-component></staff-dashboard-component>'
              })
              .state('auth.updates', {
                url: '/updates',
                template: '<updates-component></update-component>'
              })
          }
        }

        )
    })
} ())