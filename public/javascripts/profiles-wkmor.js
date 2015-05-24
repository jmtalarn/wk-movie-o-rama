(function(angular) {

  var profiles_wkmor = angular.module('profiles-wkmor', []);

  profiles_wkmor.factory('profiles', ['$http', '$timeout', '$q', function($http, $timeout, $q) {
    var urlBase = '/api/profiles/';
    var results = {};

    function _get() {
      var d = $q.defer();
      $timeout(function() {
        d.resolve(
          $http.get(urlBase).success(function(data, status, headers, config) {
            return (data);
          }).error(function(data, status, headers, config) {
            return (data);
          })
        );

      }, 5000);

      return d.promise;
    }
    results.get = _get;
    return results;
  }]);

  profiles_wkmor.directive('profilesList', function() {
    return {
      restrict: 'E',
      templateUrl: '/ng-view/profiles-list.html',
      scope: true,
      controller: ['$scope', '$element', '$attrs', '$transclude', '$http', '$routeParams', 'profiles',
        function($scope, $element, $attrs, $transclude, $http, $routeParams, profiles) {
          $scope.results = [];
          profiles.get().then(
            function(res) {
              $scope.results = res.data;
            },
            function(err) {
              console.error(err);
            }
          );


          $scope.text = "Lorem ipsum";
        }
      ],
      controllerAs: 'profilesList',

    };
  });

})(window.angular);
