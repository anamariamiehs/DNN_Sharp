dnnApp.factory('eventService', ['$rootScope', function ($rootScope) {

    var service = {

        model: {
            timestamp: '',
            title: '',
            content: ''
        },

        SaveState: function () {
            sessionStorage.eventService = angular.toJson(service.model);
        },

        RestoreState: function () {
            service.model = angular.fromJson(sessionStorage.eventService);
        }
    }

    $rootScope.$on("savestate", service.SaveState);
    $rootScope.$on("restorestate", service.RestoreState);

    return service;
}]);