(function(angular) {

  var profiles_wkmor = angular.module('profiles-wkmor', []);

  profiles_wkmor.factory('profiles', ['$http', function($http) {
    var urlBase = '/api/profiles/';
    var promise = null;

    return {
      get: function() {
        if (promise) {
          return promise;
        } else {
          promise = $http.get(urlBase);
          return promise;
        }

      },

    };
  }]);


  profiles_wkmor.directive('profilesList', function() {
    return {
      restrict: 'E',
      templateUrl: '/ng-view/profiles-list.html',
      controller: ['$scope', 'profiles', function($scope, profiles) {
        $scope.profiles = profiles.get();
      }],
      controllerAs: 'profilesList',
      //['$scope',auth, function($scope,auth) {
      //   $scope.logged = auth.logged;
      //   $scope.logout = function() {
      //     auth.logout();
      //   };
      // }],
      // controllerAs: 'loginlink'
    };
  });

})(window.angular);
