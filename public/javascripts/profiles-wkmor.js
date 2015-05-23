(function(angular) {

  var profiles_wkmor = angular.module('profiles-wkmor', []);

  profiles_wkmor.factory('profiles', ['$http', function($http) {
    var urlBase = '/api/profiles/';
    var promise = null;

    return {
      get: function() {
        $http.get(urlBase).
        success(function(data, status, headers, config) {
          return (data);
        }).
        error(function(data, status, headers, config) {
          return (data);
        });
      },
    };
  }]);


  profiles_wkmor.directive('profilesList', function() {
    return {
      restrict: 'E',
      templateUrl: '/ng-view/profiles-list.html',
      scope: true,
      controller: ['$scope', 'profiles', function($scope, profiles) {
        $scope.profiles = profiles.get();
      }],
      controllerAs: 'profilesList',
      link: function(scope){
        var unwatch =  $scope.$watch('profiles', function(v) {
                     scope.profiles = v;
                     unwatch(); //Remove the watch
                });
      }
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
