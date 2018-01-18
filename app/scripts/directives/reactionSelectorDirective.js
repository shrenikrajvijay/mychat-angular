(function(){

  /**
   * @ngdoc directive
   * @name mychat.directive:scrollBottom
   * @description
   * This directive is used to scroll the screen to the bottom.
   **/
  angular.module('mychat')
    .directive('reactionSelector', reaction);

  function reaction($http, API, ChatFactory) {
    return {
      replace: true,
      templateUrl: "/views/reactionSelector.html",
      scope: {
        openBox : "=",
        image: "="
      },
      link: function ($scope, element) {

        $scope.images = ["/images/addReaction.svg", "/images/frowny.svg", "/images/smiley.svg", "/images/tada.svg"]

        $scope.selectReaction = selectReaction

        function selectReaction(image) {
          $scope.image = image
        }
      }
    }
  }

})()
