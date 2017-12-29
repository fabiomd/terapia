// Created by : Fábio Moreira Duarte
// Date : 12/29/2017

angular.module('app',['ngRoute']).config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){
	$routeProvider.when('/',{
		controller : 'HomeCtrl',
		templateUrl : 'App/templates/home.html'
	}).when('/content',{
		templateUrl : 'App/templates/content.html'
	}).otherwise({
		templateUrl : '/'
	});

	$locationProvider.html5Mode({
	  enabled: true,
	  requireBase: false
	});
}]);