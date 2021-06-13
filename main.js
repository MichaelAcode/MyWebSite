canvas=document.getElementById("mycanvas");
 ctx=canvas.getContext("2d");
 var color="blue";
 var linewidth=1;
 var mouseevent="empty";
 var lastposX,lastposY;
var screenwidth=screen.width;
var newWidth=screen.width-70;
var newheight=screen.height-200;
if(screenwidth<992){
document.getElementById("mycanvas").width=newWidth;
document.getElementById("mycanvas").height=newheight;
document.body.style.overflow="hidden";

}
canvas.addEventListener("touchstart",mytouchstart);
function mytouchstart(e){
   color=document.getElementById("colorInput").value;
   linewidth=document.getElementById("widthInput").value;
 lastposX=e.touches[0].clientX-canvas.offsetLeft;
 lastposY=e.touches[0].clientY-canvas.offsetTop;
}
canvas.addEventListener("touchmove",mytouchmove);
function mytouchmove(e){
  currentposX=e.touches[0].clientX-canvas.offsetLeft;
 currentposY=e.touches[0].clientY-canvas.offsetTop;
 ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=linewidth;
ctx.moveTo(lastposX,lastposY)
ctx.lineTo(currentposX,currentposY);
ctx.stroke();
lastposX=currentposX;
lastposY=currentposY;

}


















//  ctx.beginPath();
//  ctx.strokeStyle=color;
//  ctx.lineWidth=5;
//  ctx.arc(200,200,30,0,2*Math.PI);
//  ctx.stroke();
//  function circle(x,y){
//     ctx.beginPath();
//     ctx.strokeStyle=color;
//     ctx.lineWidth=5;
//     ctx.arc(x,y,30,0,2*Math.PI);
//     ctx.stroke();

//  }
canvas.addEventListener("mousedown",mymousedown);
function mymousedown(e){
// x=e.clientX-canvas.offsetLeft;
// y=e.clientY-canvas.offsetTop;
// circle(x,y);
color=document.getElementById("colorInput").value;
linewidth=document.getElementById("widthInput").value;
mouseevent="mousedown";

}
canvas.addEventListener("mouseup",mymouseup);
function mymouseup(e){
mouseevent="mouseup";

}
canvas.addEventListener("mouseleave",mymouseleave);
function mymouseleave(e){
mouseevent="mouseleave";

}
canvas.addEventListener("mousemove",mymousemove);
function mymousemove(e){
currentposX=e.clientX-canvas.offsetLeft;
currentposY=e.clientY-canvas.offsetTop;
if(mouseevent=="mousedown")
{
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=linewidth;
ctx.moveTo(lastposX,lastposY)
ctx.lineTo(currentposX,currentposY);
ctx.stroke();



}
lastposX=currentposX;
lastposY=currentposY;
}
function cleararea(){
   console.log("insideclear");
   ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
   
}