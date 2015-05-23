(function(angular) {
  var app = angular.module('wk-movie-o-rama', ['auth-wkmor', 'profiles-wkmor','ngRoute']);


  app.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {

    $routeProvider
      .when('/app', {
        templateUrl: '/ng-view/index.html',
        controller: ['$scope', function($scope) {
          $scope.title = "wk-movie-o-rama"
        }],
      })
      .when('/app/login', {
        templateUrl: '/ng-view/tpl-login.html',
      })
        .otherwise({
          redirectTo: 'app',
       });

    $locationProvider.html5Mode(true);

  }]);
  //  app.run(function(api) {
  //    api.init();
  //  });




})(window.angular);
