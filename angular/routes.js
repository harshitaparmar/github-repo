//var myApp = angular.module('blogApp', ['ngRoute']); 

myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/',{
            // location of the template
        	templateUrl		: 'views/index-view.html',
        	// Which controller it should use 
            controller 		: 'mainController',
            // what is the alias of that controller.
        	controllerAs 	: 'myRepos'
        })
        .when('/repos/:owner/:repo/issues',{

            templateUrl     : 'views/issue-view.html',
            controller      : 'issueTitleController',
            controllerAs    : 'issueTitle'
        })
        .when('/repos/:owner/:repo/issues/:number',{

            templateUrl     : 'views/issue-detail.html',
            controller      : 'issueDetailController',
            controllerAs    : 'issueDetail'
        })
        .when('/users/:username',{

            templateUrl     : 'views/user-detail-view.html',
            controller      : 'userDetailController',
            controllerAs    : 'userDetail'
        })
        .otherwise(
            {
                //redirectTo:'/'
                template   : '<h1>page not found</h1>'
           
            }
        );
}]);