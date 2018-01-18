(function(){
var $ = require('jquery')
/**
 * @ngdoc directive
 * @name mychat.directive:scrollBottom
 * @description
 * This directive is used to scroll the screen to the bottom.
 **/
angular.module('mychat')
  .directive('scrollBottom', scrollBottom);

  function scrollBottom() {
    return {
      scope: {
        scrollBottom: "="
      },
      link: function (scope, element) {
        scope.$watchCollection('scrollBottom', function (newValue) {
          if (newValue)
          {
            $(element).scrollTop($(element)[0].scrollHeight);
          }
        });
      }
    }
  }

})()
