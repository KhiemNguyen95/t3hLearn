var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
//draw line
//start line
ctx.moveTo(10,80);
// end line
ctx.lineTo(90,80);
// style line
ctx.lineWidth = 3;
ctx.strokeStyle = 'red';
//draw
ctx.stroke();
//----------------------------
//new draw
ctx.beginPath();

// draw art text
ctx.font = "italic 20px Harlow Solid Italic";
ctx.textAlign = 'center';
ctx.fillStyle = 'blue';
ctx.fillText('CHELSEA',120,120);
//----------------------------
// draw block
ctx.rect(250, 300, 50, 100);
//fill color
ctx.fillStyle = 'pink';
ctx.fill();

//border
ctx.lineWidth = 2;
ctx.strokeStyle = 'blue';
ctx.stroke();


// ------------------------------
// draw circle
//new draw
ctx.beginPath();
ctx.arc(200, 200, 40, 0, (Math.PI)*2, true);
ctx.fillStyle = 'black';
ctx.fill();
// ---
ctx.beginPath();
ctx.arc(200, 200, 40, Math.PI, (Math.PI)/2, true);
//ctx.arc(x, y, r, start(0-3h), long, true);
ctx.fillStyle = 'pink';
ctx.fill();

ctx.strokeStyle = 'blue';
ctx.stroke();