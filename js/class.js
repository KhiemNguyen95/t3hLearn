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

let test = new aaarr();
a = test.findTBC(number);