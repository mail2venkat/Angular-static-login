var loginApp = angular.module('loginApp', ['ngRoute']);

loginApp.config(function($locationProvider, $routeProvider){
	
	$locationProvider.hashPrefix('');
	
	$routeProvider	
	.when('/', {
		templateUrl: 'userlogin.html'
	})
	.when('/home', {
		resolve:{
			"check": function($location, $rootScope){
				if(!$rootScope.logedIn){
					$location.path('/');
				}
			}	
		},
		templateUrl: 'home.html'
	})
	.otherwise({
		redirectTo: '/'
	})
	
});

loginApp.controller('loginCtrl', function($scope,$rootScope,  $location){
	$scope.submit = function(){	
		
		if($scope.username == 'admin' && $scope.password == 'admin'){
			$rootScope.logedIn = true;
			$location.path('/home');
		}else{
			$scope.error = "Please enter a valid  username/password !";
		}
	};
});
	