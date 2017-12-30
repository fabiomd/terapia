// Created by : Fábio Moreira Duarte
// Date : 12/29/2017

// ['ngAnimate', 'ngTouch']

angular.module('app',['ngRoute','ngTouch','ngAnimate']).config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){
	$routeProvider.when('/',{
		controller : 'HomeCtrl',
		templateUrl : 'App/templates/home.html'
	}).when('/content',{
		templateUrl : 'App/templates/content.html'
	}).when('/gallery',{
		controller : 'GalleryCtrl',
		templateUrl : 'App/templates/gallery.html'
	}).otherwise({
		templateUrl : '/'
	});

	$locationProvider.html5Mode({
	  enabled: true,
	  requireBase: false
	});
}]);