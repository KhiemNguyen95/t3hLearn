// browser object model
let heightBrowser = window.innerHeight;
let wB = window.innerWidth;

// 

let btn = document.getElementById('open');

btn.addEventListener('click', function() {
	// open new window
	window.open('http://www.facebook.com','fb','width=300px,height=100px;titlebar=0');
});
// 
document.getElementById('reload').addEventListener('click', function() {
	// reload
	// true: reload from server
	window.location.reload(true);
});

// 

document.getElementById('goto').onclick = function(){
	window.location.href='css.html';
};

// 

document.getElementById('btnScreen').addEventListener('click', function() {
	// get Screen
	let hScreen = screen.width;
	let wScreen = screen.height;
	alert(` H:${hScreen}-W:${wScreen}`);
});
// 

document.getElementById('btnBack').addEventListener('click', function() {
	// history back
	history.back();
});

// 
document.getElementById('btnForward').addEventListener('click', function() {
	history.forward();
});;