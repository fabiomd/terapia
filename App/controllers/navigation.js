angular.module('app').controller('NavCtrl',['$scope',function($scope){
	$scope.navigation = [
		{
			name : 'Home',
			link : '/'
		},
		{
			name : 'Content',
			link : '/content'
		},
		{
			name : 'Gallery',
			link : '/gallery'
		}
	];
}]);