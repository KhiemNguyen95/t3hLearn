// body
function myResize(){
	console.log('thay doi kich thuoc');
}

// onerror
function myErr(){
	console.log('looi tai trang');
}

// onload
function myLoad(){
	console.log('complete');
}


function myClick(){
	alert('onclick');
}
// blur
function myBlur(obj){
	let value = obj.value;
	console.log(value);
}
//onforcus
function myFocus(obj){
	let value = obj.value;
	console.log(value);
}

// dbclick
function myDBClick(){
	console.log('this is db click');
}
// onchange
function myChange(gender){
	if(gender == 1){
		console.log('nam');
	}else if(gender == 0){
		console.log('nu');
	}
	
}

// onkeydown/press/up

function myKeyDown(){
	console.log('an phim');
}

function myKeyPress(){
	console.log('giu phim');
}

function myKeyUp(){
	console.log('nha phim');
}



//onmouse
function myMouseDown(){
	console.log('nhan chuot');
}

function myMouseUp(){
	console.log('nha chuot');
}

function myOver(obj){
	obj.width = 300;
}

function myOut(obj){
	obj.width = 50;
}


function myOut(obj){
	obj.width = 50;
}

function myMove(obj){
	obj.width = '100vh';
}

function mySelect(){
	console.log('boi den');
}

// unload
window.onbeforeunload = function(){
	return "bye";
}