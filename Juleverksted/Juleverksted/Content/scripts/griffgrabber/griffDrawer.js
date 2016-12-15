define([], function () {

    var canvas;
    var context;
    var coords = [
		[23, 18],
		[69, 18],
		[115, 18],
		[161, 18],
		[207, 18],
		[23, 54],
		[69, 54],
		[115, 54],
		[161, 54],
		[207, 54],
		[23, 90],
		[69, 90],
		[115, 90],
		[161, 90],
		[207, 90],
		[23, 126],
		[69, 126],
		[115, 126],
		[161, 126],
		[207, 126],
		[23, 162],
		[69, 162],
		[115, 162],
		[161, 162],
		[207, 162],
		[23, 198],
		[69, 198],
		[115, 198],
		[161, 198],
		[207, 198]
    ];

    var init = function (data) {
        canvas = data.pictureCanvas;
        context = canvas.getContext("2d");
        drawBackground();
    };

    var drawBackground = function () {
        var img = new Image();
        img.src = "../content/images/christmasgame/Gift-faded.png";
        img.onload = function () {
            context.save();
            context.globalAlpha = 0.3;
            context.drawImage(img, 0, 0);
            context.restore();
        };
    };

    function randomColor() {
        var red = Math.floor(Math.random() * 255);
        var green = Math.floor(Math.random() * 255);
        var blue = Math.floor(Math.random() * 255);
        return "rgba(" + red + "," + green + "," + blue + ",1)";
    }

    var trigger = function (i) {
        drawPart(i);
    };

    var drawPart = function (i) {
        var image = new Image();
        image.src = "../content/images/christmasgame/Gift_" + i + ".png";
        image.onload = function () {
            var x = coords[i][0];
            var y = coords[i][1];
            context.drawImage(image, x - image.width / 2, y - image.height / 2);
        };
    };

    var clear = function () {
        context.clearRect(0, 0, canvas.width, canvas.height);
        drawBackground();
    };

    return {
        init: init,
        trigger: trigger,
        clear: clear
    };
});