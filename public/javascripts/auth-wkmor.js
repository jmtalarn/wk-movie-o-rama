(function(angular) {

var auth_wkmor = angular.module('auth-wkmor', ['ngStorage']);

auth_wkmor.config(['$httpProvider' ,function($httpProvider) {

   $httpProvider.interceptors.push('httpInterceptor');


  }]);

  auth_wkmor.factory('api', ['$http', '$localStorage', function($http, $localStorage) {
    return {
      init: function(token) {
        $http.defaults.headers.common['X-Access-Token'] = token || $localStorage.token;
      }
    };
  }]);
  auth_wkmor.factory('authorization', ['$http', function($http) {
    var urlBase = '/api/auth/';

    return {
      login: function(credentials) {
        $http.post(urlBase + 'login', credentials).
        success(function(data, status, headers, config) {
          return (data);
        }).
        error(function(data, status, headers, config) {
          return (data);
        });

      },
      logout: function() {
        return $http.post(urlBase + 'logout');
      },
      check: function() {
        return $http.get(urlBase + 'check');
      }

    };
  }]);
  auth_wkmor.controller('auth', ['$scope', '$location', '$localStorage', 'authorization', 'api', function($scope, $location, $localStorage, authorization, api) {
    $scope.logged = false;

    $scope.login = function() {
      var credentials = {
        username: this.username,
        //token: this.token
        password: 'movieorama'
      };

      var success = function(data) {
        if (data.success) {
          if (data.token) {
            var token = data.token;
            $scope.logged = true;
            api.init(token);
            $localStorage.token = data.token;
            $location.path('/app/dashboard');
          }
        }
        else {
          return data;
        }
      };

      var error = function(data) {
        return data;
      };

      authorization.login(credentials).success(success).error(error);
    };
    $scope.logout = function() {
      var success = function(data) {
        if (data.success) {
          if (data.token) {
            $scope.logged = false;
            $localStorage.remove('token');
            $location.path('/');
          }
        }
        else {
          return data;
        }
      };
      var error = function(data) {
        return data;
      };

      authorization.logout().success(success).error(error);
    }
  }]);

  //angular.module('auth-wkmor', []).factory('authorization', function($http, config) {

  auth_wkmor.factory('httpInterceptor', ['$q', '$window', '$location', function httpInterceptor($q, $window, $location) {
    return {
      response: function(response) {
        // do something on success
        return response;
      },
      responseError: function(response) {
        // do something on error
        if (response.status === 401) {
          $location.url('/app/login');
        }

        return $q.reject(response);
      }
    };

  }]);


  auth_wkmor.directive('loginLink', function() {
   return {
      restrict: 'E',
      templateUrl: '/ng-view/login-link.html',
      controller: 'auth',
      controllerAs: 'loginLink',
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
