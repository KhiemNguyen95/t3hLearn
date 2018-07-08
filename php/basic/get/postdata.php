<?php
$user = strip_tags($_POST["txt_name"]) ?? '';
$pass = strip_tags($_POST["txt_password"]) ?? '';

if ($user === '' && $pass === '') {
	header("Location:form.php?state=err");
} else {
	$login = fopen("../data/login.txt",'r');
	if($login){
		$data = fread($login, filesize('../data/login.txt'));
		$check = explode('/', $data);
		if($check[0] == $user && $check[1] == $pass){
			echo "hello $user";
		} else {
			header("Location:form.php?state=cancel");
		}
	} else{
		header("Location:form.php?state=fail");
	}
}