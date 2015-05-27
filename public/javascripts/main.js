(function(angular) {
  var app = angular.module('wk-movie-o-rama', [ 'profiles-wkmor', 'ngRoute', 'auth-wkmor']);


  app.config(['$locationProvider', '$routeProvider', '$httpProvider', function($locationProvider, $routeProvider, $httpProvider) {
    $httpProvider.useApplyAsync(true);
    
    $routeProvider
      .when('/app', {
        templateUrl: '/ng-view/index.html',
        controller: ['$scope', function($scope) {
          $scope.title = "wk-movie-o-rama";
        }],
      })
      .when('/app/login', {
        templateUrl: '/ng-view/login.html',
      })
      .when('/app/dashboard', {
        templateUrl: '/ng-view/dashboard/index.html',
      })
      .when('/app/dashboard/movies', {
        templateUrl: '/ng-view/dashboard/movies.html',
      })
      .when('/app/dashboard/myshares', {
        templateUrl: '/ng-view/dashboard/myshares.html',
      })
      .when('/app/dashboard/mylikes', {
        templateUrl: '/ng-view/dashboard/mylikes.html',
      })
      .when('/app/dashboard/profiles', {
        templateUrl: '/ng-view/dashboard/profiles.html',
      })      
      // .when('/app/login#:id', {
      //   templateUrl: '/ng-view/tpl-login.html',
      // })
      .otherwise({
        redirectTo: 'app',
      });

    $locationProvider.html5Mode(true);


  }]);
  //  app.run(function(api) {
  //    api.init();
  //  });






})(window.angular);
