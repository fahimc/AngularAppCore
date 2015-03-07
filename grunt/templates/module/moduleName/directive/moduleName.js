'use strict';

angular.module('moduleName').directive('moduleName', function () {
	return {
		restrict: 'E',
		replace: true,
		templateUrl: 'modules/moduleName/templates/moduleName.html',
		scope: {},
		controller: 'moduleNameController'
	}
});
