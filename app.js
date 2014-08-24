(function(ng) {
	var controllers = ng.module('controllers', []);
	var app = ng.module('app', ['ngQuery', 'controllers']);

	controllers.controller('MainCtrl', function($scope) {

	});

	ng.element(document).ready(function() {
		ng.bootstrap(document, ['app']);
	});
})(angular);