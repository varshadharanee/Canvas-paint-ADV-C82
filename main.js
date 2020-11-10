var mouse_event ;
var last_x;
var last_y;

var canvas = document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(){
    mouse_event="mouseDown";
    console.log(mouse_event);
}

canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(){
    mouse_event="mouseUp";
    console.log(mouse_event);
}

canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(){
    mouse_event="mouseLeave";
    console.log(mouse_event);
}

canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    var current_x = e.clientX - canvas.offsetLeft;
    var current_y = e.clientY - canvas.offsetTop;
    if(mouse_event=="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle = "deeppink";
        ctx.lineWidth = 2;
        ctx.moveTo(last_x,last_y);
        ctx.lineTo(current_x,current_y);
        console.log(last_x , " " , last_y , " " , current_y , " " , current_x);
        ctx.stroke();
    }
    last_x = current_x;
    last_y = current_y;
}

function clearArea(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}


