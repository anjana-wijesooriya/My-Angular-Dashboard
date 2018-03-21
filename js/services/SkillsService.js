(function () { 
    var skills = function ($http) {
        
        var serviceUrl = GetStoredObject('restApiPath');

        var GetHighlightedSkills = function () {
            return $http.get(serviceUrl + 'skill/getSkills')
                .then(function (response) {
                    return response.data;
                });
        };

        return {
            GetHighlightedSkills: GetHighlightedSkills
        };
    };

    var module = angular.module('app');
    module.factory('skills', skills);
}());