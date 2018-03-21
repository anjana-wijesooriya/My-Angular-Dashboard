(function () { 

    angular.module('app').controller('AchievementCtrl', ['$scope', '$log', 'dashboard', AchievementCtrl]);

    function AchievementCtrl($scope, $log, dashboard) {
        var achievement = this;
        var OnError = function (reason) {
            $log.info("Could not fetch data....");
        }

        var OnGetAchievementComplete = function (data) {
            achievement.Maindata = data;
        }

        var GetDashboardAchievements = function () {
            dashboard.getDashboardAchievements().then(OnGetAchievementComplete, OnError);
        }

        GetDashboardAchievements();
    }
}());