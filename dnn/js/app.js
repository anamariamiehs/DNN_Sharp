	// create the module and name it dnnApp
	var dnnApp = angular.module('dnnApp', ['ngRoute', 'ui.clockpicker', '720kb.datepicker']);

	// configure our routes
	dnnApp.config(function($routeProvider) {
		$routeProvider

			// route for the appointment page
			.when('/', {
				templateUrl : 'pages/appointment.html',
				controller  : 'appointmentController'
			})

			// route for the about page
			.when('/about', {
				templateUrl : 'pages/about.html',
				controller  : 'aboutController'
			})

	});