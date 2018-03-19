(function () {
    var app = angular.module('app');

    app.controller('MainCtrl', ['$scope', function ($scope) { 
        var home = this;
        home.messege = 'welcome to my dashbpoard';
    }])
}());