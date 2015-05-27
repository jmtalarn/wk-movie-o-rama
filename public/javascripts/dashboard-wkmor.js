(function(angular) {
  var dashboard_wkmor = angular.module('dashboard-wkmor', []);


  dashboard_wkmor.directive('dashboardMenu',['$location', function($location) {
    return {
      restrict: 'E',
      templateUrl: '/directives/dashboard-menu.html',
      //scope: true,
      controller: ['$scope', '$element', '$attrs',
        function($scope, $element, $attrs) {
          $scope.loading = false;
          $scope.isActive = function(route) {
            return route === $location.path();
          };
        }
      ],

      // link: function(scope, element, attrs) {


      // },
      controllerAs: 'dashboardMenu',

    };
  }]);


})(window.angular);
