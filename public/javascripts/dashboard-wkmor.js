(function(angular) {

  var dashboard_wkmor = angular.module('dashboard-wkmor', []);


  dashboard_wkmor.directive('dashboardMenu', function() {
    return {
      restrict: 'E',
      templateUrl: '/directives/dashboard-menu.html',
      scope: true,
      controller: ['$scope', '$element', '$attrs', '$location', 
        function($scope, $element, $attrs, $transclude, $location ) {
            $scope.loading = false;
            $scope.isActive = function(route) {
                    return route === $location.path();
            };
    }],   

      // link: function(scope, element, attrs) {
        
        
      // },
      controllerAs: 'dashoardMenu',

    };
  });


})(window.angular);
