// he phuong trinh
// a1*x + b1*y = c1
// a2*x + b2*y = c2
// Math.round(Math.random() * 1000) % 100
let a1 = Math.round(Math.random() * 1000) % 100;
let a2 = Math.round(Math.random() * 1000) % 100;
let b1 = Math.round(Math.random() * 1000) % 100;
let b2 = Math.round(Math.random() * 1000) % 100;
let c1 = Math.round(Math.random() * 1000) % 100;
let c2 = Math.round(Math.random() * 1000) % 100;

function solve(a1, a2, b1, b2, c1, c2){
	var x,y;
	console.log(`he pt \n ${a1}*x + ${b1}*y = ${c1}\n ${a2}*x + ${b2}*y = ${c2} `);
	if (a2*b1 - a1*b2 == 0) {
		if(c1*b2 - c2*b1 == 0){
			console.log(`\n co nghiem : y = (${c1} - ${a1}*x)/${b1} `);
		}else{
			console.log(`vo nghiem`);
		}
	}
	else{
		x = (c2*b1 - c1*b2)/(a2*b1 - a1*b2);
		y = (c1 - a1*x)/b1;
		console.log(`\n co nghiem: X = ${x} & Y = ${y}`);
	}
}

solve(a1, a2, b1, b2, c1, c2);