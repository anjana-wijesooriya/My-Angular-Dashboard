(function () {
    var education = function ($http) {

        var serviceUrl = GetStoredObject("restApiPath");

        var getEducationExperiences = function () {
            return $http.get(serviceUrl + "education/get")
                .then(function (response) {
                    return response.data;
                });
        };
        return {
            getEducationExperiences: getEducationExperiences
        };
    };

    var module = angular.module("app");
    module.factory("education", education);
}());
