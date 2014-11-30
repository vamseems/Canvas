function clear_my () {
	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');
	ctx.fillStyle = "white";
	ctx.fillRect(0, 0, 400, 400);
}

function draw () {
	var i_x = document.getElementById('i_x').value;
	var i_y = document.getElementById('i_y').value;
	var f_x = document.getElementById('f_x').value;
	var f_y = document.getElementById('f_y').value;
	var colour = document.getElementById('colour').value;
	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');
	ctx.beginPath();
	ctx.moveTo(i_x, i_y);
	ctx.lineTo(f_x, f_y);
	ctx.strokeStyle = colour;
	ctx.stroke();
	ctx.closePath();
}

var angle = 0;

function rotate () {
	var x_rot = document.getElementById('x_rot').value;
	var y_rot = document.getElementById('y_rot').value;
	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');
	angle += 0.5;
	if (angle > Math.PI * 2){
		angle = 0;
	}
	ctx.save();
	clear_my();
	ctx.translate(x_rot, y_rot);
	ctx.rotate(angle);
	ctx.translate(-1*x_rot, -1*y_rot)
	draw();
	ctx.restore();
}

function init(){
	setInterval(rotate, 100);
}
