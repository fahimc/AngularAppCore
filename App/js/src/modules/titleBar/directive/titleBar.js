'use strict';

angular.module('titleBar').directive('titleBar', function () {
	return {
		restrict: 'E',
		replace: true,
		templateUrl: 'js/src/modules/titleBar/templates/titleBar.html',
		scope: {},
		controller: 'titleBarController'
	}
});
