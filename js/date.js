//momth = [
// 	0=>1,
// 	11=>12
// ]
// let myDate = new Date(2016,3,28);
let myDate = new Date();
// myDate = myDate.getDate();

let myTime = myDate.getTime();

let myDay = '2018-05-29';
// console.log(Date.parse(myDay));
// console.log(myDate.getTime(myDay));
myDate.setDate(19);

// ----------------------------------------------------------
// day yyyy-mm-dd
let birthday = prompt('birthday(yyyy-mm-dd)');

function checkBirthDay(birthday){
	let curentDate = new Date();

	let curentDay =  (curentDate.getDate()<10) ? '0'+  curentDate.getDate() : curentDate.getDate();
	let curentMonth =  (curentDate.getMonth()+1<10) ? '0'+  (curentDate.getMonth()+1) : (curentDate.getMonth()+1);
	let curentYear =  curentDate.getFullYear();

	let today =  curentYear+ '-' + curentMonth + '-' +curentDay ;

	console.log(today);
	console.log(birthday);

	// let timeToday = curentDate.getTime(today);	
	// timeBirthday= curentDate.getTime(birthday);

	let timeBirthday = Date.parse(birthday);
	let timeToday = Date.parse(today);

	console.log(timeBirthday);
	console.log(timeToday);

	if(timeToday === timeBirthday){
		return true;
	} else if(timeToday > timeBirthday){
		return false;
	} else {
		console.log('ok');
		return Math.floor((timeBirthday-timeToday)/(1000*60*60*24));
	}

}
checkBirthDay(birthday);
// --------------------------------------------------------------