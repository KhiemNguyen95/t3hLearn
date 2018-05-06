let fruit = new Array('apple','banana','cucumber');
let number = [1,2,3];

let myArr = [[1,23],':)',['hml','css']];

console.log(fruit.length);

console.log(fruit[2]);
console.log(myArr[2][1]);

for (var i = 0; i < number.length; i++) {
	console.log(number[i]);
}

myArr.forEach(function (value,index,array){
	console.log(` ${value} - ${index}`);
});

for(i of number){
	// console.log(number[i]);
	console.log(i);
}

number = [-3,-87,-6,2,6,1,6,7,8,6];
console.log('-------');
for(i of number){
	// console.log(number[i]);
	if (i%2 == 0)
		console.log(i);
}

//forEach
let findMax = (a) =>{
	var max = a[0];
	a.forEach(function (value){
		if(value > max)
			max = value;		
	});
	return max;
}

let test1 = findMax(number);

// protocol
//add last
number.push(100);
// delete last 
test1 = number.pop();
// add first
number.unshift(test1);
// delete first
number.shift();
// test1 = key or -1
// number.indexOf(target,[start]); find start to end array
test1 = number.indexOf(6,6);
// number.lastIndexOf(target,[start]); find start to begin array
number.lastIndexOf(6);
// create sub array
test1 = number.slice(2,-5);
// change value
number.splice();


let subBeginTarget = (array,target) =>{
	let posOfTaget = array.indexOf(target);
	var result;
	if(posOfTaget > -1){
		result = array.slice(posOfTaget);
	}else{
		array.unshift(target);
		result = array;
	}
	return result;
}

test1 = subBeginTarget(number,3);

let test2 = [];
test2 = test2.concat('sd','fd');

let arrStr = number.join('*');

number.sort(function(a,b){
	return a-b;//incre; b-a gian
});
// sort a> 0 tang dan ; a< 0 giam dan
let mySort = (array,a) =>{
	var lenArr = array.length;
	if(a>0){
		let swap;
		// tang dan
		for(let i = 0; i<lenArr; i++)
			for(let j = 0; j<lenArr; j++)
				if(array[i] < array[j])
				{
					swap = array[i];
					array[i] = array[j];
					array[j] = swap;
				}
	} else {
		let swap;
		// giam dan
		for(let i = 0; i<lenArr; i++)
			for(let j = 0; j<lenArr; j++)
				if(array[i] > array[j])
				{
					swap = array[i];
					array[i] = array[j];
					array[j] = swap;
				}
	}
	return array;
}
number = [1,100,90,1,4,5,80,50,20];
test1 = mySort(number,10);