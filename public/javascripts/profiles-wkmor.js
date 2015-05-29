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

  profiles_wkmor.directive('profilesLogin', function() {
    return {
      restrict: 'E',
      templateUrl: '/directives/profiles-login.html',
      scope: true,
      controller: ['$scope', '$element', '$attrs', '$transclude', '$http', '$routeParams', 'profiles',

        function($scope, $element, $attrs, $transclude, $http, $routeParams, profiles ) {
          $scope.loading = true;
          $scope.results = [];
          profiles.get().then(
            function(res) {
              $scope.results = res.data;
              $scope.loading = false;
            },
            function(err) {
              $scope.loading = false;
              console.error(err);
            }
          );
        }
      ],
      controllerAs: 'profilesLogin',

    };
  });
    profiles_wkmor.directive('otherProfiles', function() {
    return {
      restrict: 'E',
      templateUrl: '/directives/other-profiles.html',
      scope: true,
      controller: ['$scope', '$element', '$attrs', '$transclude', '$http', '$routeParams', 'profiles',

        function($scope, $element, $attrs, $transclude, $http, $routeParams, profiles ) {
          $scope.loading = true;
          $scope.results = [];
          profiles.get().then(
            function(res) {
              $scope.results = res.data;
              $scope.loading = false;
            },
            function(err) {
              $scope.loading = false;
              console.error(err);
            }
          );
        }
      ],
      controllerAs: 'otherProfiles',

    };
  });
  profiles_wkmor.directive('profileAvatar', function() {
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {
        var url = attrs.profileAvatar;
        element.css({
          'background-image': 'url(' + url + ')',
          'background-size': 'cover'
        });
      }
    };
  })

})(window.angular);
