let btnId = document.getElementById('bt_clickMe');
// console.log(btnId);
let btnClass = document.getElementsByClassName('bt');
// console.log(btnClass);
// console.log(btnClass[0]);
// console.log(btnClass[1]);

let btnName = document.getElementsByTagName('button');
// console.log(btnName);
// console.log(btnName[0]);
// console.log(btnName[1]);

//selector as selector css
let btnSelector = document.querySelectorAll('.bt-block');
console.log(btnSelector);

btnSelector[0].onclick = function(){
	// alert('click me 3');
	document.getElementsByTagName('h2')[0].innerHTML = "";
}

btnName[1].addEventListener('click', function() {
	// alert('btn 2');
	let data = document.getElementsByTagName('h1')[0].innerHTML;
	alert(data);
});

btnName[3].addEventListener('click', function() {
	// alert('btn 2');
	let data = document.getElementsByTagName('input')[0].value;
	// alert(data);

	// document.getElementsByTagName('input')[0].type = "button";

	document.getElementsByTagName('input')[0].setAttribute('type', 'button');;
});


// hide img
btnName[4].addEventListener('click', function() {
	document.getElementsByTagName('img')[0].style.display = 'none';
});

btnName[5].addEventListener('click', function() {
	document.getElementsByTagName('img')[0].style.display = '';
	document.getElementsByTagName('img')[0].style.width = '300px';
	document.getElementsByTagName('img')[0].style.height = '300px';
	document.getElementsByTagName('img')[0].style.marginLeft = '100px';
});

// check textarea
btnName[6].addEventListener('click', function() {
	data = document.getElementsByTagName('textarea')[0].value;

	if(data === ''){
		document.getElementsByTagName('textarea')[0].style.border = '5px solid red';
	} else {
		document.getElementsByTagName('textarea')[0].style.border='';
	}
});