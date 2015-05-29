(function(angular) {
    var movies_wkmor = angular.module('movies-wkmor', []);

    movies_wkmor.factory('movies', ['$http', '$timeout', '$q', function($http, $timeout, $q) {
        var urlBase = '/api/movies/';
        var results = {};

        function _get() {
            var d = $q.defer();
            $timeout(function() {
                d.resolve(
                    $http.get(urlBase).success(function(data, status, headers, config) {
                        return (data);
                    }).error(function(data, status, headers, config) {
                        return (data);
                    })
                );

            }, 5000);

            return d.promise;
        }
        results.get = _get;
        return results;
    }]);

    movies_wkmor.controller('moviesCatalogController', ['$scope', '$element', '$attrs', '$transclude', '$http', '$routeParams', 'movies',

        function($scope, $element, $attrs, $transclude, $http, $routeParams, movies) {
            $scope.loading = true;
            $scope.results = [];
            movies.get().then(
                function(res) {
                    $scope.results = res.data;
                    $scope.loading = false;
                },
                function(err) {
                    $scope.loading = false;
                    console.error(err);
                }
            );
        }
    ]);

    movies_wkmor.directive('moviesCatalog', function() {
        return {
            restrict: 'E',
            templateUrl: '/directives/movies-catalog.html',
            scope: true,

            controller: 'moviesCatalogController',

        };
    });
    movies_wkmor.directive('movieCover', function() {
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                var url = attrs.movieCover;
                element.css({
                    'background-image': 'url(' + url + ')',
                    'background-size': 'cover'
                });
            }
        };
    });
    movies_wkmor.directive('slick', function($timeout) {
        return {
            restrict: 'A',
            controller: 'moviesCatalogController',
            scope: true,
            link: function(scope, el, attrs) {
                scope.$watchCollection(function($timeout) {
                    return scope.results;
                }, function(newValue, oldValue) {
                    if (newValue.length>0) {
                        $timeout( function(){
                            
                            $(el).slick({
                                //arrows: true,
                                dots: true,
                                infinite: true,
                                autoplay: true,
                                autoplaySpeed: 2000,
                                speed: 300,
                                centerMode: true,
                                centerPadding: '30px',
                                slidesToShow: 1,
                                //slidesToScroll: 1,
                                fade: true,
                                cssEase: 'linear',
                                prevArrow: '<a href class="button round left  left-arrow"><i class="fa  fa-arrow-left"></i></a>',
                                nextArrow: '<a href class="button round right right-arrow"><i class="fa  fa-arrow-right"></i></a>'
                            });
                        }, 100);
                    }

                });
            }
        }
    });

})(window.angular);
