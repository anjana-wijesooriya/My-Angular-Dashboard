(function () { 
    angular.module('app')
        .controller("ExperienceCtrl", ["$scope", "$log", "$filter", "experience", ExperienceCtrl]);
    
    function ExperienceCtrl($scope, $log, $filter, experience) {
        
        var OnError = function (reason) {
            $log.info("Could not fetch data from Experience controller....");
        }

        var OnCompleteGetCareers = function (data) {
            var experience = [];
            var resposibilities = $scope.resposibilities;
            var cSkills = $scope.skills;
            var bg = ['bg-blue-gradient', 'bg-yellow-gradient', 'bg-green-gradient']
            angular.forEach(data, function (career, key) {
                var careerObj = {};
                careerObj = career;
                var duties = $filter('filter')(resposibilities, { CareerId: career.CareerId });
                var skills = $filter('filter')(cSkills, { CareerId: career.CareerId });
                careerObj.Resposibilities = duties;
                careerObj.Skills = skills;
                careerObj.Color = bg[key];
                experience.push(careerObj);
            });
            $scope.experience = $filter('orderBy')(experience, "-CareerId");
        }

        var OnCompleteGetResponsibilities = function (data) {
            $scope.resposibilities = data;
        }

        var OnCompleteGetSkills = function (data) {
            $scope.skills = data;
        }

        var GetCareers = function () {
            experience.GetCareers().then(OnCompleteGetCareers, OnError); 
        }

        var GetResponsibilitiesByCareerId = function (careerId) {
            experience.GetResponsibilitiesByCareerId(careerId).then(OnCompleteGetResponsibilities, OnError);
        }

        var GetSkillSByCareerId = function (careerId) {
            experience.GetSkillSByCareerId(careerId).then(OnCompleteGetSkills, OnError);
        }

        var GetSkills = function () {
            experience.GetSkills().then(OnCompleteGetSkills, OnError);
        }
        var GetResposibilities = function () {
            experience.GetResposibilities().then(OnCompleteGetResponsibilities, OnError);
        }
        GetResposibilities();
        GetSkills();
        GetCareers();
    };

}());