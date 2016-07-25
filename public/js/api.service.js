angular.module('app')
.service('api', function($http, dataModel) {

  this.doSomething = doSomething;

  function doSomething(onSuc, onErr) {
    $http.get('/doSomething').then(onSuc, onErr);
  }

})
