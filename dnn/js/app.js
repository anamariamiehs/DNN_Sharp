	// create the module and name it dnnApp
	angular.module('dnnApp', ['ngRoute', 'ui.bootstrap.timepicker', '720kb.datepicker']);
	var dnnApp = angular.module('dnnApp');
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