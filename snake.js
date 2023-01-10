var cvs=document.getElementById("canvas");
var ctx=cvs.getContext("2d");
var snakeW=10;
var snakeH=10;


function drawSnake(x,y){
ctx.fillStyle="white";
ctx.fillRect(x*snakeW,y*snakeH,snakeW,snakeH)
}


function demoX(x,y){
    ctx.fillStyle="red";
    ctx.fillRect(x*snakeW,y*snakeH,cvs.width,snakeH) 
}
for(var i=0;i<=50;i++){
    i++
    demoX(0,i);
}

function demoY(x,y){
    ctx.fillStyle="red";
    ctx.fillRect(x*snakeW,y*snakeH,10,500) 
}
for(var i=0;i<=50;i++){
    i++
    demoY(i,0);
}
drawSnake(1,2)