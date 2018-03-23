(function () { 
    var Experience = function ($http) {
       
        var serviceUrl = GetStoredObject('restApiPath');
        
        var GetCarrers = function () {
            try {
                return $http.get(serviceUrl + 'experience/getExperience')
                    .then(function (response) {
                        return response.data;
                    })
            } catch (error) {
                console.log(error);
            }
        }

        var GetResponsibilitiesByCareerId = function (CareerId) {
            try {
                return $http.get(serviceUrl + 'experience/getResponsibilitiesByCareer/' + CareerId)
                    .then(function (response) {
                        return response.data;
                    })
            } catch (error) {
                console.log(error);
            }
        }

        var GetSkillSByCareerId = function (CareerId) {
            try {
                return $http.get(serviceUrl + 'experience/getSkillsByCareer/' + CareerId)
                    .then(function (response) {
                        return response.data;
                    })
            } catch (error) {
                console.log(error);
            }
        }

        return {
            GetCarrers: GetCarrers,
            GetResponsibilitiesByCareerId: GetResponsibilitiesByCareerId,
            GetSkillSByCareerId: GetSkillSByCareerId
        }
    }
    var module = angular.module('app');
    module.factory('experience', Experience);
}());