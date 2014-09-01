(function($, ng) {
	var module = ng.module('ngQuery', []);
	module.directive('ngQuery', function() {
		var link = function(scope, el, attrs) {};

		return {
			restrict: 'E',
			templateUrl: 'ng-query-root.html',
			scope: {},
			link: link,
			controller: function($scope) {
				$scope.node = {
					id: 1,
					parent: null
				};

				var i = 2;

				$scope.addField = function(node) {
					var newNode = {
						field: true,
						tree: false,
						id: i++,
						parent: node
					};
					if (!node.nodes) {
						node.nodes = [newNode];
					} else {
						node.nodes.push(newNode);
					}
				};

				$scope.addTree = function(node) {
					var newNode = {
						field: false,
						tree: true,
						id: i++,
						parent: node
					};
					if (!node.nodes) {
						node.nodes = [newNode];
					} else {
						node.nodes.push(newNode);
					}
				};

				$scope.removeFromParent = function(id, parent) {
					if (!id || !parent) return;

					for (var j = 0; j < parent.nodes.length; j++) {
						if (parent.nodes[j].id === id) {
							parent.nodes.splice(j, 1);
							return;
						}
					}
				};

				$scope.printNode = function(node) {
					return JSON.stringify(node, function(key, value) {
						if (key === 'parent') return;
						else if (key === '$$hashKey') return;
						else return value;
					}, true);
				};
			}
		};
	});
})(jQuery, angular);