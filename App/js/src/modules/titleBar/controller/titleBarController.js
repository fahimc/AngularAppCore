'use strict';

angular.module('titleBar').controller('titleBarController',function($scope,$rootScope,$location){

	function titleBarController(){
		$scope.onCloseClicked=this.onCloseClicked;
		$scope.onHomeClicked=this.onHomeClicked;
		this.init();
	};

	titleBarController.prototype=
	{
		init:function(){
			$scope.subtitle = "Example App";
		},
		onCloseClicked:function(){
			if(chrome.app.window)chrome.app.window.current().close();
		},
		onHomeClicked:function(){
			$location.path('/');
		}
	};


	return new titleBarController();

});
