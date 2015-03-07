var app = angular.module('app', ['ngRoute','titleBar']);

app.config(['$routeProvider',
	function ($routeProvider) {
		$routeProvider.when('/', {
			controller: 'appController',
			templateUrl: 'resource/views/appView.html'
		})
		.otherwise({
			redirectTo: '/'
		});
	}
]);


