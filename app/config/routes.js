(function(){
	angular.module('shiftManager')
		.config(function($stateProvider, $urlRouterProvider){
	
			$stateProvider
				.state('home', {
					url: '',
					template: '<div class="content"><keeps-component></keeps-component></div>'
				})
				.state('auth', {
					abstract: true,
					template: '<div class="content"><ui-view></ui-view></div>',
					resolve: {
						isAuthed: function(MemberService, $state){
							if(!MemberService.getAuth()){
								return $state.go('home')
							}
						}
					}
				})
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
		})
}())