(function () { 
    var Experience = function ($http) {
       
        var serviceUrl = GetStoredObject('restApiPath');
        
        var GetCareers = function () {
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

        var GetResposibilities = function () {
            try {
                return $http.get(serviceUrl + 'experience/getResponsibilities')
                    .then(function (response) {
                        return response.data;
                    });
            } catch (error) {
                
            };
        };

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

        var GetSkills = function () {
            try {
                return $http.get(serviceUrl + 'experience/getSkills')
                    .then(function (response) {
                        return response.data;
                    });
            } catch (error) {

            };
        };

        return {
            GetCareers: GetCareers,
            GetResponsibilitiesByCareerId: GetResponsibilitiesByCareerId,
            GetSkillSByCareerId: GetSkillSByCareerId,
            GetSkills: GetSkills,
            GetResposibilities: GetResposibilities
        }
    }
    var module = angular.module('app');
    module.factory('experience', Experience);
}());