(function () { 
    angular.module('app')
        .controller('SkillsCtrl', ['$scope', '$log', '$filter', 'skills', SkillsCtrl]);

    function SkillsCtrl($scope, $log, $filter, skills) {
        var skill = this;

        var OnError = function () {
            $log.info("Could not fetch data from GetHighlightedSkills....");
        }

        var OnGetSkillsComplete = function (data) {
            var stacks = { title: 'Web Development Stack', skills: $filter('filter')(data, { StackId: 1 }) };
            var design = { title: 'Design Stack', skills: $filter('filter')(data, { StackId: 2 }) };
            var programing = { title: 'Programing Stacks', skills: $filter('filter')(data, { StackId: 3 }) };
            var database = { title: 'Database Servers', skills: $filter('filter')(data, { StackId: 4 }) };
            var reporting = { title: 'Reporting Tools', skills: $filter('filter')(data, { StackId: 5 }) };
            var versionControl = { title: 'Version Control Tools', skills: $filter('filter')(data, { StackId: 6 }) };
            var workbench = { title: 'Programing Tools & Workbenches', skills: $filter('filter')(data, { StackId: 7 }) };
            var other = { title: 'Other Development Technologies & Tools', skills: $filter('filter')(data, { StackId: 8 }) };
            
            skill.data = [stacks, design, programing, database, reporting, versionControl, workbench, other];
        }

        var GetHighlightedSkills = function () {
            skills.GetHighlightedSkills().then(OnGetSkillsComplete, OnError);
        }

        GetHighlightedSkills();
    }
}());