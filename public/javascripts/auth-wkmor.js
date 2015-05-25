(function(angular) {

    var auth_wkmor = angular.module('auth-wkmor', ['ngStorage']);

    auth_wkmor.config(['$httpProvider', function($httpProvider) {

      $httpProvider.interceptors.push('httpInterceptor');

    }]);
auth_wkmor.factory('loggedFactory',function() {
  return {isLogged: false };
});
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
          return $http.post(urlBase + 'login', credentials);
        },
        logout: function() {
          return $http.post(urlBase + 'logout');
        },
        check: function() {
          return $http.get(urlBase + 'check');
        }

      };
    }]);
    auth_wkmor.controller('auth', ['$scope', '$location', '$localStorage', 'authorization', 'api','loggedFactory', function($scope, $location, $localStorage, authorization, api, loggedFactory) {
      //$scope.logged = false;
      $scope.isLogged  = function(){
        return loggedFactory.isLogged;
      };
      $scope.login = function(username) {
        var credentials = {
          username: username,
          //token: this.token
          password: 'movieorama'
        };

        var success = function(data) {
          if (data.success) {
            if (data.token) {
              var token = data.token;
              loggedFactory.islogged = true;
              api.init(token);
              $localStorage.token = data.token;
              $location.path('/app/dashboard/').replace();
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
              loggedFactory.islogged = false;
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
      };
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
        restrict: 'A',
        scope: false,
        //templateUrl: '/directives/login-link.html',
        link: function(scope, element, attrs) {
          if (scope.isLogged()){
           var callback = function() {
              scope.logout();
            };
            element.bind('click', callback);
            element.html("Logout");
          }else{
            element.attr("href","/app/login");
            element.html("Login");
          }
          
        },
        controller: 'auth'
      };
    });

    auth_wkmor.directive('loginButton', function() {
        return {
          restrict: 'A',
          link: function(scope, element, attrs) {
            var callback = function() {
              scope.login(attrs.username);
            };
            element.bind('click', callback);
          },
          controller: 'auth'
        };
      });

    })(window.angular);
