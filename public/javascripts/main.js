(function() {
  var app = angular.module('wk-movie-o-rama', ['auth-wkmor']);

  //app.config(function($routeProvider, $locationProvider, $httpProvider) {
  app.config(function($httpProvider) {
    $httpProvider.responseInterceptors.push('httpInterceptor');


    // $routeProvider
    //   .when('/', {
    //     templateUrl: 'views/ng/dashboard.html',
    //     controller: 'dashboard'
    //   })
    //   .when('/login', {
    //     templateUrl: 'views/ng/auth.html',
    //     controller: 'auth'
    //   })
    //   .otherwise({
    //     redirectTo: '/'
    //   });

    // $locationProvider.html5Mode(true);
  });
  app.run(function(api) {
    api.init();
  });



})();
