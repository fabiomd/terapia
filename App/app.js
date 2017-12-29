// Created by : Fábio Moreira Duarte
// Date : 12/29/2017

angular.module('app',['ngRoute']).config(['$routeProvider',function($routeProvider){
	$routeProvider.when('/',{
		controller : 'MainCtrl',
		templateUrl : 'App/templates/home.html'
	}).when('/content',{
		templateUrl : 'App/templates/content.html'
	}).otherwise({
		templateUrl : '/'
	});
}]);