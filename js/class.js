class Student {
	// don't create value here
	// method
	// method lifecyle
	constructor(id, name, adr){
		this.id = id;
		this.name = name;
		this.adr = adr;
	}
	sleep(){
		return 'sleeping';
	}

	getName(){
		return this.name;
	}
}

let st = new Student();

class aaarr{
	constructor(arr){
		this.arr = arr;
	}

	findTBC(myArr){
		let kq = 0;
		for (let i = 0; i < myArr.length; i++) {
			kq += myArr[i];
		}
		return kq/myArr.length;
	}
}

let number = [1,2,4,5];

// let test = new aaarr();
// a = test.findTBC(number);

// ------------------------------STATIC----------------------------
//  
class Rain {
	static trumua(){
		return 'duoi hien nha';
	}

	// this.static = not error
	static tanhmua(){
		return 'co can tru ' + this.trumua();
	}
	// this.static = error
	tammua(){
		return " : )" + Rain.trumua(); 
	}

	// this.static = error
	static venha(){
		return this.nghihoc();
	}

	nghihoc(){
		return "troi mua nghi hoc";
	}
}

// let obj = new Rain();
// console.log(obj.trumua()); //error
// console.log(Rain.tanhmua());
// console.log(Rain.venha.bind(obj)());

// ------------------------EXTENDS-------------------------------------
// parent class
class Animal{
	constructor(name = ":)"){
		console.log("this is animal "+name);
	}

	eat(){
		return "Eating ";		
	}
}
// child class
class Dog extends Animal{
	constructor(name){
		// have to call constructor parent
		console.log("this is dog " +name);
		// call constructor parent
		super();
	}

	doSomeThing(){
		// super.function call parent function
		// this.function  call child function
		return super.eat() + this.eat();
	}
	// override
	eat(){
		return "fish";		
	}
}

// let obj = new Dog('nick');
// 
let year = prompt('nhap nam: ');
year = Number.parseInt(year);

class checkYear{
	constructor(y){
		this.year = y;
	}

	check(){
		if(this.year % 400 == 0){
			return true;
		} else if(this.year % 4 == 0 && this.year % 100 != 0){
			return true;
		}
		return false;
	}
}

let obj = new checkYear(year);
// console.log(obj.check());
