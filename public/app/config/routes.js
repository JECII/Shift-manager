

(function () {
  angular.module('shiftManager')
    .config(function ($stateProvider, $urlRouterProvider, DSFirebaseAdapterProvider) {
      DSFirebaseAdapterProvider.defaults.basePath = 'https://keeprio.firebaseio.com' 
      

      $stateProvider
        .state('home', {
          url: '',
          template:'hello'
        })
        .state('auth', {
          abstract: true,
          template: '<div class="content"><ui-view></ui-view></div>',
          resolve: {
            isAuthed: function (MemberService, $state) {
              if (!MemberService.getAuth()) {
                return $state.go('home') //home state not actually exist--login will not go anywhere for now
                //this code needs a state to go to--we will probably need it to check if the member is staff or employee state accordingly
              }
            }
          }
        })

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
    })
    .run(function(DS, DSFirebaseAdapter){
      // DS.registerAdapter('firebase', DSFirebaseAdapter, { default: true });
    })
} ())