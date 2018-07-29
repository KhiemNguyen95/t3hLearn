$(function(){
	//login
	$('button.btn-signin').click(function(){
		// 
		
		let dataLogin = getDataLogin();
		// neu nhap thieu thong tin
		if (dataLogin != false) {
			$.ajax({
				url: 'server/checkLogin.php',
				type: 'POST',
				data: dataLogin,
				success: function(res){
					$(".container").html(res)
				}
			});
		} else {
			alert('ban da nhap thieu thong tin');
		}
		
	});

	//get data login
	function getDataLogin(){
		let email = $(".form-signin #inputEmail").val();
		let pass = $(".form-signin #inputPassword").val();
		if(email != '' && pass != ''){
			return {
				user :email,
				password: pass,
			}
		} else{
			return false
		}
	}
	//show register
	$("p.register").click(function(){
		$.ajax({
		url: 'server/showRegister.php',
		type: 'GET',
		success: function(res){
			$(".container").html(res)
		}
		});
	});


});
