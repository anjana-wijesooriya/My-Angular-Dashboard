
angular.module('app')
    .controller('HightlightCtrl', ['$scope', HightlightCtrl])
    .controller('horizontalBarsCtrl', ['$scope', horizontalBarsCtrl])


function HightlightCtrl($scope) {
    var highlight = this;

    highlight.title = "I'm Casual But Not Usual";
    highlight.secondTitle = "Techs & Tools I Most Used";

    highlight.skills = [
        {
            title: "Design & Development",
            theme: "aqua",
            percentage: 80
        },
        {
            title: "Communication",
            theme: "red",
            percentage: 83
        },
        {
            title: "Planning & Progressing",
            theme: "green",
            percentage: 75
        },
        {
            title: "Problem Solving & Decision Making",
            theme: "yellow",
            percentage: 85
        },
        {
            title: "Loyal & Dedication",
            theme: "aqua",
            percentage: 100
        },
        {
            title: "Fun & Friendly",
            theme: "green",
            percentage: 95
        },
        {
            title: "Lazy & Sleepy",
            theme: "red",
            percentage: 40
        }
    ];

    highlight.techs = [
        { name: 'C#', class: 'devicon-csharp-plain' },
        { name: 'Visual Studio', class: 'devicon-visualstudio-plain' },
        { name: 'HTML5', class: 'devicon-html5-plain' },
        { name: 'CSS3', class: 'devicon-css3-plain' },
        { name: 'SASS', class: 'devicon-sass-original' },
        { name: 'bootstrap', class: 'devicon-bootstrap-plain' },
        { name: 'MYSQL', class: 'devicon-mysql-plain' },
        { name: 'Javascript', class: 'devicon-javascript-plain' },
        { name: 'JQuery', class: 'devicon-jquery-plain' },
        { name: 'AngularJS', class: 'devicon-angularjs-plain' },
        { name: 'Typescript', class: 'devicon-typescript-original' },
        { name: 'GIT', class: 'devicon-git-plain' },
        { name: 'NodeJS', class: 'devicon-nodejs-plain' }
    ]

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
    setTimeout(() => {
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
    }, 200);
    
}

horizontalBarsCtrl.$inject = ['$scope'];
function horizontalBarsCtrl($scope) {

    var bars = this;
    bars.title = 'Know About Me';

    bars.gender = [
        
    ];

    bars.source = [
        {
            title: 'Design & Development',
            icon: 'icon-user',
            percent: 43,
            theme: 'progress-bar-aqua'
        },
        {
            title: 'Communication',
            icon: 'icon-user-female',
            percent: 37,
            theme: 'progress-bar-red'
        },
        {
            title: 'Planning & Progressing',
            icon: 'icon-globe',
            percent: 56,
            theme: 'progress-bar-green'
        },
        {
            title: 'Problem Solving & Decision Making',
            icon: 'icon-social-facebook',
            percent: 15,
            theme: 'progress-bar-yellow'
        },
        {
            title: 'Loyal & Dedication',
            icon: 'icon-social-twitter',
            percent: 11,
            theme: 'progress-bar-orange'
        },
        {
            title: 'Fun & Friendly',
            icon: 'icon-social-linkedin',
            percent: 8,
            theme: 'progress-bar-maroon'
        },
        {
            title: 'Lazy & Sleepy',
            icon: 'icon-social-linkedin',
            percent: 8,
            theme: 'progress-bar-purple'
        }
    ];
}