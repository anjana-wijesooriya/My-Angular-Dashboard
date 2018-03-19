(function () { 

    angular.module('app').controller('AchievementCtrl', ['$scope', AchievementCtrl]);

    function AchievementCtrl($scope) {
        var achievement = this;
        achievement.Maindata = [
            {
                title: 'Projects',
                icon: 'fa-puzzle-piece',
                value: '10',
                class: 'projects'
            },
            {
                title: 'Experence',
                icon: 'fa-code',
                value: '2+',
                class: 'experience'
            },
            {
                title: 'Awards',
                icon: 'fa-trophy',
                value: '2',
                class: 'awards'

            },
            {
                title: 'Glasses of Beer',
                icon: 'fa-glass',
                value: '1000+',
                class: 'beer'
            }
        ];
    }
}());