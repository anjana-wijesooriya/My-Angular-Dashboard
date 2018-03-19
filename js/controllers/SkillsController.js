(function () { 
    angular.module('app')
        .controller('SkillsCtrl', ['$scope', SkillsCtrl]);

    function SkillsCtrl($scope) {
        var skills = this;
        var Stacks = {
            title: 'Web Development Stack',
            skills: [
                { language: 'Javascript', value: '80', color: 'amber', imgPath: '' },
                { language: 'Jquery', value: '75', color: 'aqua', imgPath: '' },
                { language: 'AJAX', value: '80', color: 'blue', imgPath: '' },
                { language: 'KnockoutJS', value: '55', color: 'light-blue', imgPath: '' },
                { language: 'AngularJS', value: '60', color: 'brown', imgPath: '' },
                { language: 'Angular 4', value: '50', color: 'cyan', imgPath: '' },
                { language: 'Typescript', value: '55', color: 'blue-grey', imgPath: '' },
                { language: 'NodeJS', value: '60', color: 'green', imgPath: '' },
                { language: 'Gulp', value: '70', color: 'light-green', imgPath: '' },
            ]
        }

        var design = {
            title: 'Design Stack',
            skills: [
                { language: 'HTML5', value: '85', color: 'indigo', imgPath: '' },
                { language: 'CSS3', value: '80', color: 'khaki', imgPath: '' },
                { language: 'SAAS', value: '70', color: 'lime', imgPath: '' },
                { language: 'Bootstrap', value: '75', color: 'orange', imgPath: '' },
                { language: 'Adobe Lightroom', value: '65', color: 'deep-orange', imgPath: '' },
                { language: 'Adobe Photoshop', value: '50', color: 'pink', imgPath: '' },
                { language: 'UML', value: '55', color: 'purple', imgPath: '' },
            ]
        }

        var programing = {
            title: 'Programing Stacks',
            skills: [
                { language: 'Java', value: '50', color: 'deep-purple', imgPath: '' },
                { language: 'C#', value: '55', color: 'red', imgPath: '' },
                { language: 'ASP.NET - Web Forms', value: '65', color: 'sand', imgPath: '' },
                { language: 'ASP.NET - MVC', value: '75', color: 'teal', imgPath: '' },
                { language: 'Java - Hibernate', value: '55', color: 'yellow', imgPath: '' },
                { language: 'Java - Hibernate', value: '55', color: 'white', imgPath: '' },
                { language: 'JavaFX', value: '60', color: 'black', imgPath: '' },
                { language: 'C# - Entity Framework', value: '60', color: 'grey', imgPath: '' },
            ]
        }

        var database = {
            title: 'Database Servers',
            skills: [
                { language: 'MySQL', value: '60', color: 'light-grey', imgPath: '' },
                { language: 'MS SQL Server', value: '70', color: 'dark-grey', imgPath: '' },
            ]
        }

        var reporting = {
            title: 'Reporting Tools',
            skills: [
                { language: 'Jasper Soft Reports', value: '70', color: 'amber', imgPath: '' },
                { language: 'Crystal Reports', value: '70', color: 'aqua', imgPath: '' },
                { language: 'RDLC Reports', value: '70', color: 'blue', imgPath: '' },
            ]
        }

        var versionControl = {
            title: 'Version Control Tools',
            skills: [
                { language: 'TFS', value: '80', color: 'light-blue', imgPath: '' },
                { language: 'GIT', value: '70', color: 'brown', imgPath: '' },
                { language: 'Mercurial', value: '70', color: 'cyan', imgPath: '' },
                { language: 'SVN', value: '65', color: 'blue-grey', imgPath: '' },
            ]
        }

        var workbench = {
            title: 'Programing Tools 7 Workbenches',
            skills: [
                { language: 'Eclipse', value: '80', color: 'green', imgPath: '' },
                { language: 'Netbeans', value: '70', color: 'light-green', imgPath: '' },
                { language: 'Visual Studio', value: '80', color: 'indigo', imgPath: '' },
                { language: 'Visual Studio Code', value: '75', color: 'khaki', imgPath: '' },
                { language: 'Web Strom', value: '65', color: 'lime', imgPath: '' },
                { language: 'SQL Developer', value: '65', color: 'orange', imgPath: '' },
                { language: 'MySQL Workbench', value: '60', color: 'deep-orange', imgPath: '' },
                { language: 'SQL Server Management Studio', value: '70', color: 'pink', imgPath: '' },
                { language: 'WAMP', value: '70', color: 'purple', imgPath: '' },
            ]
        }

        var other = {
            title: 'Other Development Technologies & Tools',
            skills: [
                { language: 'JSON', value: '75', color: 'deep-purple', imgPath: '' },
                { language: 'REST-ful Web Services', value: '70', color: 'red', imgPath: '' },
                { language: 'Tomcat', value: '65', color: 'sand', imgPath: '' },
                { language: 'IIS', value: '75', color: 'teal', imgPath: '' },
                { language: 'Cloud Computing', value: '70', color: 'yellow', imgPath: '' },
            ]
        }

        // skills.data = [development, design, programing, database, reporting, versionControl, workbench, others];
        
        skills.data = [Stacks, design, programing, database, reporting, versionControl, workbench];
    }
}());