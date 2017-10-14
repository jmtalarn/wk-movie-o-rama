(function(angular) {

  var profiles_wkmor = angular.module('profiles-wkmor', []);

  profiles_wkmor.factory('profiles', ['$http', '$timeout', '$q', function($http, $timeout, $q) {
    var urlBase = '/api/profiles/';
    var authUrlBase = '/api/auth/';
    var results = {};

    function _list() {
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
    
    function _get(id) {
      var d = $q.defer();
      $timeout(function() {
        d.resolve(
          $http.get(urlBase + "/" + id).success(function(data, status, headers, config) {
            return (data);
          }).error(function(data, status, headers, config) {
            return (data);
          })
        );

      }, 5000);

      return d.promise;
    }
    
    function _me() {
      var d = $q.defer();
      $timeout(function() {
        d.resolve(
          $http.get(authUrlBase + "check").success(function(data, status, headers, config) {
            return (data);
          }).error(function(data, status, headers, config) {
            return (data);
          })
        );

      }, 5000);

      return d.promise;
    }
    results.list = _list;
    results.get = _get;
    results.me = _me;
    return results;
  }]);
  profiles_wkmor.controller('profileController', ['$scope', '$http', '$routeParams', 'profiles',

    function($scope, $http, $routeParams, profiles) {
      $scope.loading = true;
      //$scope.movie = {};

      profiles.get($routeParams.id).then(
        function(res) {
          $scope.profile = res.data;
          $scope.loading = false;
        },
        function(err) {
          $scope.loading = false;
          console.error(err);
        }
      );
    }
  ]);
    profiles_wkmor.controller('meController', ['$scope', '$http', 'profiles',

    function($scope, $http, profiles) {
      $scope.loading = true;
      //$scope.movie = {};

      profiles.me().then(
        function(res) {
          $scope.profile = res.data;
          $scope.loading = false;
        },
        function(err) {
          $scope.loading = false;
          console.error(err);
        }
      );
    }
  ]);
  profiles_wkmor.directive('profilesLogin', function() {
    return {
      restrict: 'E',
      templateUrl: '/directives/profiles-login.html',
      scope: true,
      controller: ['$scope', '$element', '$attrs', '$transclude', '$http', '$routeParams', 'profiles',

        function($scope, $element, $attrs, $transclude, $http, $routeParams, profiles ) {
          $scope.loading = true;
          $scope.results = [];
          profiles.list().then(
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
          profiles.list().then(
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
        attrs.$observe('profileAvatar', function(url) {
        
        element.css({
          'background-image': 'url(' + url + ')',
          'background-size': 'cover'
        });
        });
      }
    };
  });
  

})(window.angular);
