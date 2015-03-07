'use strict';

angular.module('titleBar').controller('titleBarController',function($scope,$rootScope,$location){
	var Controller=
	{
		init:function(){
			$scope.onCloseClicked=this.onCloseClicked;
			$scope.onHomeClicked=this.onHomeClicked;
			$scope.subtitle = "Example App";
		},
		onCloseClicked:function(){
			if(chrome.app.window)chrome.app.window.current().close();
		},
		onHomeClicked:function(){
			$location.path('/');
		}
	};

	Controller.init();

	return Controller;
});
