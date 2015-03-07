angular.module('app').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('modules/titleBar/templates/titleBar.html',
    "<div class=\"titlebar header-title-banner\"><nav class=\"navbar navbar-default\"><div class=\"container-fluid\"><div class=\"navbar-header\"><button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\"><span class=\"sr-only\">Toggle navigation</span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span></button> <a class=\"navbar-brand\" href=\"#\">APP CORE</a></div><div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\"><ul class=\"nav navbar-nav\"><li class=\"active\"><a href=\"#\" ng-click=\"onHomeClicked()\"><span class=\"home icon-home\"></span><span class=\"sr-only\">(current)</span></a></li></ul><ul class=\"nav navbar-nav navbar-right\"><li><a href=\"#\" ng-click=\"onCloseClicked()\"><span class=\"close icon-cancel\"></span></a></li></ul></div></div></nav></div>"
  );


  $templateCache.put('modules/views/appView.html',
    ""
  );

}]);
