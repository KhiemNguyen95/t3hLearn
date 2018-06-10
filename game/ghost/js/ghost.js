let time = 0;
let audio = document.getElementsByTagName('audio')[0];
// 
function autoPlayAudio(){
	audio.play();
}
// 
function countTime(){	
	// one time
	// setTimeout(function() {
	// 	time++;
	// }, 1000);

	// re run
	var count = setInterval(function() {
		time++;
		document.getElementById('time').innerHTML = time;
		if(time == 5){
			clearInterval(count);
			document.getElementById('mainFunny').style.display = 'block';
			document.getElementsByClassName('container')[0].style.display = 'none';
			audio.play();
		}
	}, 1000);
}
countTime();

