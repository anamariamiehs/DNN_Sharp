	// create the module and name it dnnApp
	var dnnApp = angular.module('dnnApp', ['ngRoute', 'ui.clockpicker', '720kb.datepicker']);

	// configure our routes
	dnnApp.config(function($routeProvider) {
		$routeProvider

			// route for the event page
			.when('/', {
				templateUrl : 'pages/event.html',
				controller  : 'eventController'
			})

			// route for the about page
			.when('/about', {
				templateUrl : 'pages/about.html',
				controller  : 'aboutController'
			})

	});