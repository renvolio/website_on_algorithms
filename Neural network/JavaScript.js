var canvas = document.getElementById("c1");
var ctx = canvas.getContext("2d");


let prevX = 0;
let prevY = 0;

canvas.onmousedown = function (event) {

    canvas.onmousemove = function (event) {
        var x = event.offsetX
        var y = event.offsetY


        ctx.fillRect(x-5,y-5,5,5);
        //ctx.stroke();



    }
    canvas.onmouseup = function (event) {
        canvas.onmousemove = null;
    }
}