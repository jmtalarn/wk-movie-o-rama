  //app.controller('auth', function($scope, $location, $cookieStore, authorization, api) {
  angular.module('auth-wkmor', ['ngStorage']).controller('auth', function($scope, $localStorage, authorization, api) {
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
            $localStorage.token = res.token;
              //$location.path('/');
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
      authorization.logout().success(success).error(error);
    }
  });

  angular.module('auth-wkmor', []).factory('authorization', function($http, config) {
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
  });
  angular.module('auth-wkmor', []).factory('httpInterceptor', function httpInterceptor($q, $window, $location) {
    return function(promise) {
      var success = function(response) {
        return response;
      };

      var error = function(response) {
        if (response.status === 401) {
          $location.url('/login');
        }

        return $q.reject(response);
      };

      return promise.then(success, error);
    };
  });
  angular.module('auth-wkmor', ['ngStorage']).factory('api', function($http, $localStorage) {
    return {
      init: function(token) {
        $http.defaults.headers.common['X-Access-Token'] = token || $localStorage.token;
      }
    };
  });

  angular.module('auth-wkmor', ['auth']).directive('loginLink', function(auth) {
    return {
      restrict: 'E',
      templateUrl: 'ng-view/login-link.html',
      controller:  function() {
        this.logged = auth.logged;
        this.logout = function(){
          auth.logout();
        }
      },
      controllerAs: 'loginlink'
    };
  });