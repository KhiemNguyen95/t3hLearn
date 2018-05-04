// function

function demoFunc(a,b) {
	return a+b;
}
let test1 = 1;
let test2 = 2;
// let sum = demoFunc(a,b);

// console.log(typeof(sum));
// console.log(sum);
// console.log(`${a} + ${b} = ${sum}`)

function checkNumber(number  = 10,d){
	if(number % 2 == 0 && d > 0 )
	{
		return true;
	}
	// return false;
	console.log(typeof(d));
}

test1 = 11;

// let check = checkNumber(a)
// if(check)
// {
// 	console.log(`so ${a} la chan `);
// }
// else
// {
// 	console.log(`so ${a} la le `);
// }

function soNguyenTo(number){
	if(number <= 0){
		return false;
	}

	if(number == 1 || number == 2 || number == 3){
		return true;
	}

	for (var i = 2; i < Math.sqrt(number) ; i++) {
		if(number % i == 0)
		{
			return false;
		}
	}

	return true;
}

// test1 = 78;
// if (soNguyenTo(test1)) {
// 	console.log(`${test1} la SNT`);
// } else {
// 	console.log(`${test1} ko la SNT`);
// }

function boi3Vs5(number){
	for (var i = 1; i < number; i++) {
		if(i % 3 == 0 && i % 5 == 0)
			console.log(i);
	}
}

// boi3Vs5(100);
//   anonymous
let dientich = function(a,b){
	return a*b;
} 

// console.log(typeof(dientich));
// test2 = dientich(3,3);

function dienTichHThang(lon, be, cao){
	function sumDay(){
		return lon + be;
	}
	return sumDay;
}

// test2 = dienTichHThang(9,8,5);
// ax2 + bx + c = 0
function ptBac2(a, b, c){
	function delta(){
		return (b*b - 4*a*c);
	}
	var d = delta();

	function nghiem(){
		if(d < 0){
			console.log('pt vo nghiem');
		} else if(d == 0){
			let x = -b/(2*a);
			console.log(`nghiem kep x = ${x}`);
		} else {
			let x1 = (-b + Math.sqrt(d))/(2*a);
			let x2 = (-b - Math.sqrt(d))/(2*a);
			console.log("pt co 2 ngiem:");
			console.log(`x1 = ${x1} `);
			console.log(`x2 = ${x2} `);
		}
		
	}

	return nghiem;

}

// test2=ptBac2(1,10,3)();

// Constructor
let myFunc = new Function("a","b","return a+b");
 console.log(myFunc);
let useMyFunc = function(a,b){
	return myFunc(a,b);
}
test2 = useMyFunc(12,1);
console.log(test2);


// test2 = useMyFunc(1,2);
// arrow function
let funcArrow = (name) =>{
	console.log(`hello ${name} `);
}

funcArrow('khiem');