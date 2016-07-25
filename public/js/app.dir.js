angular.module('app')
.directive('app', function($http, api, dataModel) {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'js/app.html',
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
