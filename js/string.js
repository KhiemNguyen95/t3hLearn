let str1 = "0123456789987654321";

// // indexOf('sub',startFind)  -> -1 not found
// console.log(str1.indexOf('1',0));

// // str1.lastIndexOf('sub',stopFind) stopFind -> 0
// console.log(str1.lastIndexOf('s',9));

// // slice(a,b) cut i>=a i<b
// console.log('slice: '+ str1.slice(4,-9));

// // split str ->arr
// console.log(str1.split(' '));

// // substr(start,length)
// console.log(str1.substr(4,9));

// substring(a,b) cut i>a i<b //b<0 => sub 0-a
// console.log('substring :' + str1.substring(5,-9));\\

// toLowerCase())
// toUpperCase()

// eval() str - number
// toString

//------------------------- RegExp Reference-----------------------

str1 = 'class php';
let  myReg = /php/gi;

// myReg = /^[1-9]{1}[0-9]{1}[1,3,5,7,9]{1}$/gi;
// myReg = /^[1-9]{1}[0-9]{1}[0,2,4,6,8]{1}[0-9]{1}[0,5]{1}$/gi;
// \d = [0-9]
// myReg = /^[1-9]\d[0,2,4,6,8]\d[0,5]$/gi;
let regViettelPhone10 = /^0(9[6-8]|8[6])\d{7}$/gi;
let regViettelPhone11 = /^016[2-9]{8}$/gi;


// date  dd/mm/YYYY
let regDate = /^(0[1-9]|1\d|2\d|3[0,1])\/(0[1-9]|1[0-2])\/[1-9]\d{3}$/gi;
let testNum = '30/09/2016';
// kiem tra dung dinh dang ngay chua
if(regDate.test(testNum)){	
	// lay chuoi thoa man regDate trong  testNum
	let condition = testNum.match(regDate);
	let strDate = condition.join();
	let arrDate = strDate.split('/');

	let day = arrDate[0];
	day = Number.parseInt(day);
	let month = arrDate[1];
	month = Number.parseInt(month);
	let year = arrDate[2];
	year = Number.parseInt(year);

	let month31 = [1,3,5,7,8,10,12];
	let month30 = [4,6,9,11];
	// kiem tra ngay hop le
	// check thang 2
	if(month === 2)
	{
		if(day == 29){
			// check year
			if((year % 400 == 0) || (year % 4 == 0 && year % 100 != 0)){
				console.log('thang 2 ok');
			} else {
				console.log(`${year} ko la nam nhuan`);
			}
		} else if(day >29){
			console.log('thang 2 co 29 ngay');
		} else{
			console.log('thang 2 ok');
		}
	}else if(month31.indexOf(month) != 1 && day > 31){
		// month have 31 day
		console.log(`thang ${month}  co 31 ngay`);

	}else if(month30.indexOf(month) != 1 && day > 30){
		// month have 30 day
		console.log(`thang ${month}  co 30 ngay`);
	}else {
		console.log('dinh dang ngay dung');
	}
	
	

}else{
	console.log('sai');
}
//end date  dd/mm/YYYY
// ---------------------------------
// replace
let strclass = 'class js ad';
let checkTu = /js/gi;

strclass = strclass.replace(checkTu,'php')
// console.log(strclass);

// 
let strNum =' 20 la so chan';
let checkNum = /\d/gi;

// kiem tra ton tai so trong chuoi
if(checkNum.test(strNum)){	
	let num = strNum.match(checkNum);
	// num =['2','0'];
	// string to number
	let num1  = 0;
	num.forEach( function(el){
		num1 += el;
		num1 = Number.parseInt(num1);
	});

	// let num = checkNum.exec(strNum);
	num = num.toString().replace(",","");
	num = Number.parseInt(num);
	console.log(num1);
	if(num1 % 2 == 0){
		strNum = strNum.replace('chan','le');
		strNum = strNum.replace(checkNum,'69');
	}
	
}
// -------------------------------
let checkNum6 = /^[1-9][0,2,4,6,8]\d[1,3,5,7,9]\d[0,5]$/gi;
strNum = '281305';
console.log(strNum);
if(checkNum6.test(strNum)){	
	console.log('true');
}else{
	console.log('false');
}


// checkpassword
console.log('-----------------check pass-------------------------------');
let arrPassWord = ['1gV','AHHjj4','12345678','asdfghjk','DfsvvGtGBygGGGG','ASDFGHJK','DFasdFgh','SD54GGJF','1fgh5gr2','2jjfAFj2S','4dsdh123KK','df15588741','AdS12f14jDg5uj845'];


let regPassWord = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[A-Za-z0-9]{8,}$/g;//(\d{1,})([a-z]{1,})([A-Z]{1,}) (\d+)([a-z]+)([A-Z]+)

console.log(regPassWord.test('4dsdKKh123'));
let checkPass = (pass)=>{
	let regLength8 = /\w{8,}/g;
	let regUpCase = /[A-Z]/g;
	let regLowCase = /[a-z]/g;
	let regNum = /[0-9]/g;

	let flag = false;

	// if(regLength8.test(pass) && regUpCase.test(pass) && regLowCase.test(pass) && regNum.test(pass)){
	// 	flag = true;
	// }

	if(regPassWord.test(pass)){
		return true;
	}
	return flag;

}
arrPassWord.forEach(function(pass){
	if(regPassWord.test(pass)){
		console.log(''+pass+' hop le :');//+pass.match(regPassWord)
		//console.log(pass.match(regPassWord));
	} else{
		console.log(''+pass+' khong hop le');
	}
});
console.log('-----------------check pass-------------------------------');
