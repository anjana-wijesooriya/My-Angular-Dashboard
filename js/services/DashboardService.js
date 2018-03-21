(function () {

    var dashboard = function ($http) {

        var serviceUrl = GetStoredObject('restApiPath');

        var getDashboardAchievements = function () {
            return $http.get(serviceUrl + 'dashboard/getachievements')
                .then(function (response) {
                    return response.data;
                });
        };

        var getDashboardSkills = function () {
            return $http.get(serviceUrl + 'dashboard/getSkills')
                .then(function (response) {
                    return response.data;
                });
        };

        var getDashboardTechs = function () {
            return $http.get(serviceUrl + 'dashboard/gettechs')
                .then(function (response) {
                    return response.data;
                });
        };

        return {
            getDashboardAchievements: getDashboardAchievements,
            getDashboardSkills: getDashboardSkills,
            getDashboardTechs: getDashboardTechs
        }
    };

    var module = angular.module('app');
    module.factory('dashboard', dashboard);
}());