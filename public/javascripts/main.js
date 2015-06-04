(function(angular) {
  var app = angular.module('wk-movie-o-rama', ['profiles-wkmor', 'ngRoute', 'auth-wkmor', 'dashboard-wkmor', 'movies-wkmor']);

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
        templateUrl: '/ng-view/dashboard/profile.html',
        controller: 'meController',
      })
      .when('/app/profiles/:id', {
        templateUrl: '/ng-view/dashboard/profile.html',
        controller: 'profileController'
      })
      .when('/app/dashboard/movies', {
        templateUrl: '/ng-view/dashboard/movies.html',
      })
      .when('/app/dashboard/movie/:id', {
        templateUrl: '/ng-view/dashboard/movie.html',
        controller: 'SharesLikesAccordionController'
      })
      // .when('/app/dashboard/myshares', {
      //   templateUrl: '/ng-view/dashboard/myshares.html',
      // })
      // .when('/app/dashboard/mylikes', {
      //   templateUrl: '/ng-view/dashboard/mylikes.html',
      // })
      .when('/app/dashboard/profiles', {
        templateUrl: '/ng-view/dashboard/profiles.html',
      })
      .otherwise({
        redirectTo: 'app',
      });

    $locationProvider.html5Mode(true);


  }]);
  //  app.run(function(api) {
  //    api.init();
  //  });

  app.controller('SharesLikesAccordionController', ['$scope', function($scope) {
    $scope.accordionToggle = { 
        shares: false, 
        likes: false,
      toggleShares: function(){
        this.shares = !this.shares;
        
      },
      toggleLikes: function(){ 
        this.likes = !this.likes;
        
      }
    };

  }]);




})(window.angular);
