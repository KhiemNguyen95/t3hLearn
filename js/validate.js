document.getElementById('btnSubmit').onclick = function(){
	// get value
	let userName = document.getElementById('name').value;
	let pass= document.getElementById('pass').value;
	let email= document.getElementById('email').value;
	let phone= document.getElementById('phone').value;

	// alert(userName+pass+email+phone);
	let chkUser = null;
	let chkPass = null;
	let chkEmail = null;
	let chkPhone = null;
	// 
	// let regUser = /.{3,}/gi;
	if (userName === '' ||userName.length < 3 ) {
		chkUser = false;
		document.getElementById('errUser').innerHTML = "nhap nhieu hon 3 ky tu";
		document.getElementById('errUser').style.display = 'block';
	} else {
		chkUser = true;
		document.getElementById('errUser').innerHTML = "";
		document.getElementById('errUser').style.display = 'none';
	}
	// 
	if(checkPass(pass)){
		chkPass = true;
		document.getElementById('errPass').innerHTML = "";
		document.getElementById('errPass').style.display = 'none';
	}else{
		chkPass = false;
		document.getElementById('errPass').innerHTML = "mk > 8kt 1so, 1chu hoa, 1 chu thuong";
		document.getElementById('errPass').style.display = 'block';
	}
	// 
	if(email === ''){
		chkEmail = false;
		document.getElementById('errEmail').innerHTML = "moi nhap email";
		document.getElementById('errEmail').style.display = 'block';
	} else {
		chkEmail = true;
		document.getElementById('errEmail').innerHTML = "";
		document.getElementById('errEmail').style.display = 'none';
	}
	// 
	if(checkPhone(phone)){
		chkPhone = true;
		document.getElementById('errPhone').innerHTML = "";
		document.getElementById('errPhone').style.display = 'none';
	} else {
		chkPhone = false;
		document.getElementById('errPhone').innerHTML = "nhap sdt 10 so";
		document.getElementById('errPhone').style.display = 'block';
	}

	if(chkUser && chkPass && chkEmail && chkPhone){
		window.location.href = 'css.html';
	} else {
		return false;
	}
	// ckeck pass
	function checkPass(pass){
		let regPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[A-Za-z0-9]{8,}$/g;
		if(regPass.test(pass)){
			return true;
		}
		return false;
	}
	// check phone
	function checkPhone(phone){
		let regPhone = /^\d{10}$/gi;
		if(regPhone.test(phone)){
			return true;
		}
		return false;
	}
};