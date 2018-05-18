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


// date VN dd/mm/YYYY
let regVNDate = /^(0[1-9]|1\d|2\d|3[0,1])\/(0[1-9]|1[0-2])\/[1-9]\d{3}$/gi;
let testNum = '01/01/2111';

if(regVNDate.test(testNum)){
	console.log("dung");
}else{
	console.log('sai');
}

