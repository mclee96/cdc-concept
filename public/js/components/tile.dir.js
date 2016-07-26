angular.module('app')
.directive('tile', function($animate, $timeout) {
	return {
		restrict: 'E',
		templateUrl: 'js/components/tile.html',
		replace: true,
		scope: {
			frontText: '=',
			frontImg: '=',
			backText: '='
		},
		link: function(scope, element, attrs) {

			scope.flippedRight = false;
			scope.flippingRight = false;
			scope.flippedLeft = false;
			scope.flippingLeft = false;

			scope.startFlip = startFlip;
			scope.stopFlip = stopFlip;

			function startFlip(event) {
				if (scope.flippedRight || scope.flippingRight || scope.flippingLeft || scope.flippedLeft)
					return;
				if (event.movementX > 0) {
					scope.flippedRight = true;
					scope.flippingRight = true;
					$timeout(function() {
						scope.flippingRight = false;
					}, 400);
				} else {
					scope.flippedLeft = true;
					scope.flippingLeft = true;
					$timeout(function() {
						scope.flippingLeft = false;
					}, 400);
				}
			}

			function stopFlip() {
				scope.flippedRight = false;
				scope.flippedLeft = false;
			}
		}
	}
})
