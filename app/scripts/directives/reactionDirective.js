(function(){

  /**
   * @ngdoc directive
   * @name mychat.directive:scrollBottom
   * @description
   * This directive is used to scroll the screen to the bottom.
   **/
  angular.module('mychat')
    .directive('reaction', reaction);

  function reaction($http, API, ChatFactory, $rootScope) {
    return {
      replace: true,
      scope: {
        message: "="
      },
      templateUrl: "/views/reaction.html",
      link: function ($scope, element) {
        $scope.toggleReaction = toggleReaction;
        $scope.getReaction = getReaction;
        $scope.toggleOpenBox = toggleOpenBox

        $scope.getImage = getImage

        function getImage(){
          if($scope.image) return $scope.image
          return "/images/addReaction.svg"
        }

        $scope.openBox = false

        function toggleReaction() {
          $scope.message.reaction = !$scope.message.reaction
          $http.post(API.ROOMS + "/" + ChatFactory.getSelectedRoom().id + API.MESSAGES + "/" + $scope.message.id, $scope.message).then(() => {

          })
        }

        function getReaction() {
          if ($scope.message.reaction) return "/images/smiley.svg"
          return "/images/addReaction.svg"
        }

        function toggleOpenBox() {
          $rootScope.$broadcast("closeSelector")
          $scope.openBox = !$scope.openBox
        }

        $scope.$on("closeSelector", function () {
          $scope.openBox = false
        })
      }
    }
  }

})()
