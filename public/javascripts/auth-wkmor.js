(function(angular) {

    var auth_wkmor = angular.module('auth-wkmor', ['LocalStorageModule']);

    auth_wkmor.config(['$httpProvider', function($httpProvider) {

      $httpProvider.interceptors.push('httpInterceptor');

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
    auth_wkmor.controller('auth', ['$scope', '$window', 'localStorageService', 'authorization',  function($scope, $window, localStorageService, authorization) {
      //$scope.logged = false;
      $scope.isLogged  = function(){
        return (localStorageService.get('token')? true: false);
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
              localStorageService.remove('token');
              localStorageService.set('token',token);
              $window.location.href = '/app/dashboard';
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
              localStorageService.remove('token');
              $window.location.href = '/';
          } else {
            if (data.messagge.indexOf("jwt expired")!=-1){
              localStorageService.remove('token');
              $window.location.href = '/';
            }
            return data;
          }
        };
        var error = function(data) {
          return data;
        };
        //api.init();
        authorization.logout().success(success).error(error);
      };
    }]);

    auth_wkmor.factory('httpInterceptor', ['$q', '$window', '$location','localStorageService', function httpInterceptor($q, $window, $location,localStorageService) {
      return {
        request: function(config) {
          if (localStorageService.get("token")){
            config.headers["X-Access-Token"]=localStorageService.get("token");
          }

          return config;
        },
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
        link: function(scope, element, attrs) {
          if (scope.isLogged()){
           var callback = function() {
              scope.logout();
            };
            element.bind('click', callback);
            element.html("Logout <i class=\"fa fa-sign-out\"></i>");
          }else{
            element.attr("href","/app/login");
            element.html("Login <i class=\"fa fa-sign-in\"></i>");
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
