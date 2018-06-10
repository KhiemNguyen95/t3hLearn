let inputa = document.getElementById('num_a');
let inputb = document.getElementById('num_b');
let inputc = document.getElementById('num_c');
let err = document.getElementById('err');
let displayResult = document.getElementById('result');
// checkNum
function checkNum(num){
  // let regNum = /^(\-\d{1,}|\d{1,})$/g;
  let regNum = /^(\-\d{1,}|\d{1,})(\d*||\.\d{1,})$/g;
  return regNum.test(num);
}

// solve
function ptBac2(a, b, c){
	let result = [];
	function delta(){
		return (b*b - 4*a*c);
	}
	var d = delta();
	
	if(d < 0){
		return false;
	} else if(d == 0){
		result[0] = -b/(2*a);
	} else {
		result[0] = (-b + Math.sqrt(d))/(2*a);
		result[1]= (-b - Math.sqrt(d))/(2*a);		
	}
	return result;	
}

// click reset
document.getElementById('btnReset').onclick = function(){
	inputa.value = '';
	inputb.value = '';
	inputc.value = '';

	inputa.style = '';
	inputb.style = '';
	inputc.style = '';

	err.style.display = 'none';
	displayResult.innerHTML = '';
};
// click solve
document.getElementById('btnSolve').onclick = function(){
	// reset thong bao nghiem
	displayResult.innerHTML = '';
	let regNum = /^(\-\d{1,}|\d{1,})$/g;

	let numa = inputa.value;
	let numc = inputc.value;
	let numb = inputb.value;
	let flag = true;
	// alert(numa - numb);
	// let fa = regNum.test(numa);
	// let fb = regNum.test(numb);
	// let fc = regNum.test(numc);
	// console.log(`${numa} -${fa}/${numb}-${fb}/${numc}-${fc} `);

	// check input a
	if(checkNum(numa)){
		numa = parseFloat(numa);
		inputa.style = '';
	} else {
		inputa.style.border = '1px solid red';
		flag = false;
	}


	// check input b
	if(checkNum(numb)){
		numb = parseFloat(numb);
		inputb.style = '';
	} else {
		inputb.style.border = '1px solid red';
		flag = false;
	}

	// check input c
	if(checkNum(numc)){
		numc = parseFloat(numc);
		inputc.style = '';
	} else {
		inputc.style.border = '1px solid red';
		flag = false;
	}
	// check flag
	if(flag){
		// he so nhap dung
		// alert('giai');
		err.style.display = 'none';
		let result = ptBac2(numa, numb, numc);
		if(result === false){
			// pt vo nghiem
			displayResult.innerHTML = '<h2>vô nghiệm</h2>';
		} else if(result.length == 1){
			// pt co 1 nghiem
			displayResult.innerHTML = `<h2>có nghiệm</h2> <p>x = ${result[0]}  </p>`;
		} else{
			// pt co 2 nghiem
			displayResult.innerHTML = `<h2>có nghiệm</h2>
			 <p>x1 = ${result[0]}  </p>
			<p>x2 = ${result[1]}  </p>`;
		}
	} else {
		// he so nhap thieu hoac sai
		err.style.display = 'block';
	}
};