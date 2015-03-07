'use strict';

angular.module('app').controller('appController',function($scope,$rootScope){

	function AppController(){
		this.init();
	};

	AppController.prototype=
	{
		init:function(){
		}
	};


	return new AppController();

});
