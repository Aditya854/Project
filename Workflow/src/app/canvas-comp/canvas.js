angular.module('canvasApp', [])
  .directive('canvasDirective', function() {
    return {
      restrict: 'E',
      scope: {
        width: '@',
        height: '@'
      },
      link: function(scope, element, attrs) {
        var canvas = element[0];
        var ctx = canvas.getContext('2d');
        var rectangles = [];

        function drawRectangles() {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          rectangles.forEach(function(rectangle) {
            ctx.fillStyle = rectangle.color;
            ctx.fillRect(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
          });
        }

        scope.addRectangle = function() {
          var rectangle = {
            x: getRandomCoordinate(0, canvas.width - 50),
            y: getRandomCoordinate(0, canvas.height - 50),
            width: 50,
            height: 50,
            color: getRandomColor()
          };
          rectangles.push(rectangle);
          drawRectangles();
        };

        function getRandomCoordinate(min, max) {
          return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        function getRandomColor() {
          var letters = '0123456789ABCDEF';
          var color = '#';
          for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
          }
          return color;
        }
      }
    };
  });
