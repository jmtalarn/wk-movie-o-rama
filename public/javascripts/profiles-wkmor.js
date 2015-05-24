(function(angular) {

  var profiles_wkmor = angular.module('profiles-wkmor', ['auth-wkmor']);

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
      templateUrl: '/ng-view/profiles-login.html',
      scope: true,
      controller: ['$scope', '$element', '$attrs', '$transclude', '$http', '$routeParams', 'profiles','auth',

        function($scope, $element, $attrs, $transclude, $http, $routeParams, profiles, auth ) {
          $scope.results = [];
          profiles.get().then(
            function(res) {
              $scope.results = res.data;
            },
            function(err) {
              console.error(err);
            }
          );
          $scope.login = function(username) {
            auth.credentials.username(username);
            auth.login();
          };
        }
      ],
      controllerAs: 'profilesLogin',

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
