var canvas = document.getElementById("c1");
var ctx = canvas.getContext("2d");


let prevX = 0;
let prevY = 0;

canvas.onmousedown = function (event) {

    canvas.onmousemove = function (event) {
        var x = event.offsetX
        var y = event.offsetY
        let cellsize = 50;

        ctx.fillRect(x-cellsize / 2,y-cellsize / 2,cellsize,cellsize);
        //ctx.stroke();



    }
    canvas.onmouseup = function (event) {
        canvas.onmousemove = null;
    }
}