(function () { 

    angular.module('app')
        .controller('HightlightCtrl', ['$scope', 'dashboard', '$log', '$timeout', HightlightCtrl])
        .controller('horizontalBarsCtrl', ['$scope', 'dashboard', '$log', horizontalBarsCtrl])


    function HightlightCtrl($scope, dashboard, $log, $timeout) {
        var highlight = this;

        highlight.title = "I'm Casual But Not Usual";
        highlight.secondTitle = "Techs & Tools I Most Used";

        var OnError = function (reason) {
            $log.info("Could not fetch data....");
        };

        var OnGetTechComplete = function (data) {
            highlight.techs = data;
            $timeout(function () { InitiateTechCarousel(); }, 500);
            //InitiateTechCarousel();
        }

        var getDashboardTechs = function () {
            dashboard.getDashboardTechs().then(OnGetTechComplete, OnError);
        }
        getDashboardTechs();

        var InitiateTechCarousel = function () {
            //tech tools slider
            var owl = $('.techs-tools');
            owl = $('.techs-tools').owlCarousel({
                loop: true,
                margin: 10,
                autoWidth: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 3
                    },
                    1000: {
                        items: 5
                    }
                }
            });
            // Custom Navigation Events
            $(".next").click(function () {
                $(".techs-tools .owl-next").click();
            })
            $(".prev").click(function () {
                $(".techs-tools .owl-prev").click();
            })
            $(".play").click(function () {
                owl.trigger('play.owl.autoplay', [200]);//owl.play event accept autoPlay speed as second parameter
            })
            $(".stop").click(function () {
                owl.trigger('stop.owl.autoplay');
            })
        }

        //cartoon photo slider carosusel
        $("#owl-single").owlCarousel({
            navigation: true, // Show next and prev buttons
            slideSpeed: 300,
            nav: true,
            items: 1,
            loop: true,
            paginationSpeed: 400,
            singleItem: true,
            autoPlay: 5000, //Set AutoPlay to 3 seconds
        });

    }

    horizontalBarsCtrl.$inject = ['$scope'];
    function horizontalBarsCtrl($scope, dashboard, $log) {

        var bars = this;
        bars.title = 'Know About Me';

        bars.gender = [

        ];

        var OnError = function (reason) {
            $log.info("Could not fetch data....");
        };

        var OnGetSkillsComplete = function (data) {
            bars.source = data;
        }

        var getDashboardSkills = function () {
            dashboard.getDashboardSkills().then(OnGetSkillsComplete, OnError);
        }
        getDashboardSkills();
    }
}());