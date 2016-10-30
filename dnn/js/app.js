	// create the module and name it dnnApp
	angular.module('dnnApp', ['ngRoute', 'ui.bootstrap.timepicker', '720kb.datepicker']);
	var dnnApp = angular.module('dnnApp');

	dnnApp.constant('Constants', {
		Facets: {
			0: 'lateral-0',
			1: 'lateral-1',
			2: 'lateral-2',
			3: 'lateral-3',
			4: 'top',
			5: 'bottom'
		},
		AnimateCube: {
			0: 'show-front',
			1: 'show-right',
			2: 'show-back',
			3: 'show-left',
			4: 'show-top',
			5: 'show-bottom'
		}
	});
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