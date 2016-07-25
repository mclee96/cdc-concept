angular.module('app')
.directive('app', function($http, api, dataModel) {
  return {
    restrict: 'E',
    templateUrl: 'js/app.html',
    replace: true,
		scope: true,
    link: function(scope, element, attrs) {

      scope.dm = dataModel;

      function doSomething() {
        api.doSomething(function(response) {
          console.log(response);
        }, onErr);
      }

      function onErr(error) {
        console.log(error);
      }

      doSomething();
    }
  }
});
