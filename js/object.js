let myCar = {
	name: 'BMW',
	weight: 1000,
	color: 'red',
	start: function(){
		return 'begin';
	},
	stop: function(){
		return 'end';
	}
};

let nameCar = myCar.name;
let start = myCar.start();
// for (i in object) -  i : key
// for (let i in  myCar){
// 	// console.log(i);
// 	console.log(myCar[i]);
// }
// -----------------
let person = {
	name: 'k',
	age: 22,
	work: {
		nameWork: 'dev',
		money: 100,
		company: "vn"
	}
};

let com = person.work.company;


// --------------------------
let NV = [
	{
		name: 'k',
		age: 22,
		work: {
			nameWork: 'dev',
			money: 100,
			company: "vn"
		}
	},

	{
		name: 'h',
		age: 22,
		work: {
			nameWork: 'dev',
			money: 200,
			company: "vn2"
		}
	}


];

// console.log(NV[1].work.company);

// object constructor function
function giaiPTBN(hsa, hsb){
	this.a = hsa;
	this.b = hsb;

	this.giai = function(){
		return this.b/this.a;
	}

	this.result = function(){
		return this.giai();
	}
}

let kq = new giaiPTBN(4,5);
// console.log(`nghiem ${kq.giai()}`);
// console.log(`nghiem ${kq.result()}`);


// -------------------
let arrNumber = [200,400,500,1000,2];

function findMinArr(arr){
	this.arr = arr;
	this.min = this.arr[0];

	this.find = function(){
		for(let i of arr){
			if(this.min > i)
				this.min = i;		
		}
		return this.min;
	}

	this.result = function(){
		return this.find();
	}
}

// let myMin = new findMinArr(arrNumber);
// console.log(`min = ${myMin.result()} `);

// pt b 1 2 an

function solPTBN2A(a1, a2, b1, b2, c1, c2){
	this.x;
	this.y;

	this.D = a1*c2 - a2*c1;
	this.dx = a1*b2 - a2*b1;
	this.dy = b1*c2 - b2*c1;

	this.solve = function(){
		this.x = this.dx/this.D;
		this.y = this.dy/this.D;

		return [this.x,this.y];
	}

	this.result  = function(){
		return this.solve();
	}
}

// let a1 = Math.round(Math.random() * 1000) % 100;
// let a2 = Math.round(Math.random() * 1000) % 100;
// let b1 = Math.round(Math.random() * 1000) % 100;
// let b2 = Math.round(Math.random() * 1000) % 100;
// let c1 = Math.round(Math.random() * 1000) % 100;
// let c2 = Math.round(Math.random() * 1000) % 100;

// kq = new solPTBN2A(a1, a2, b1, b2, c1, c2);
// console.log(kq.result());

// prototype
function Student(){
	this.id = 1000;
	this.name = "k";

	this.sleep = function(){
		return 'at 2 a.m';
	};

	this.game = function(){
		return 'fo3';
	}
}

// add method

Student.prototype.money = 3000000;
Student.prototype.eat = function(){
	return '3 per day';
}
// person line 22

person.prototype.exp = 4;
person.prototype.add = function(){
	return 'Nd';
}
