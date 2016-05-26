<<<<<<< HEAD

(function(){
	angular.module('shiftManager')
		.config(function($stateProvider, $urlRouterProvider){
			
			$stateProvider
				.state('home', {
					url: '',
					template: '<div class="content"><home-component></home-component></div>'
=======
(function(){
	angular.module('shiftManager')
		.config(function($stateProvider, $urlRouterProvider){
	
			$stateProvider
				.state('home', {
					url: '',
					template: '<div class="content"><keeps-component></keeps-component></div>'
>>>>>>> 79232fbd6197a6e6173c35797a88b85f4006efcb
				})
				.state('auth', {
					abstract: true,
					template: '<div class="content"><ui-view></ui-view></div>',
					resolve: {
<<<<<<< HEAD
						isAuthed: function(AuthService, $state){
							if(!AuthService.getAuth()){
=======
						isAuthed: function(MemberService, $state){
							if(!MemberService.getAuth()){
>>>>>>> 79232fbd6197a6e6173c35797a88b85f4006efcb
								return $state.go('home')
							}
						}
					}
				})
<<<<<<< HEAD
				.state('auth.members', {
					url: '/members',
					template: '<members-component></members-component>'
            })
                 .state('auth.employee',{
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
                .state('auth.requests',{
                    url: '/requests',
                    template: '<requests-component></requests-component>'
                })
                .state('auth.shift-swap',{
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
=======
				.state('auth.', {
					url: '/members',
					template: '<members-component></members-component>'
				})
				.state('auth.', {
					url: '/keeps',
					template: '<keeps-component></keeps-component>'
				})
				.state('auth.', {
					url: '/keep',
					template: '<keep-component></keep-component>'
				})
>>>>>>> 79232fbd6197a6e6173c35797a88b85f4006efcb
		})
}())