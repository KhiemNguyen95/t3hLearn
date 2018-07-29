<?php 
	$email = $_POST['user'];
	$pass = $_POST['password'];
	$email = strip_tags($email);
	$pass = strip_tags($pass);
	$flagLogin = false;
	$DBUser = fopen('datauser.txt', "r");
	if($DBUser){
		$dataUser = fread($DBUser, filesize('datauser.txt'));
		fclose($DBUser);	
		$arrUsers = explode(';', $dataUser);
		foreach ($arrUsers as $user) {
			$infoUser = explode('/', $user);
			// print_r($infoUser);die();
			if ($email == $infoUser[0] && $pass = $infoUser[1]) {
				$user = $email;
				$flagLogin = true;
				break;
			}	else{
				$flagLogin = false;
			}		
		}

		if ($flagLogin) {
			echo "ok";
		} else {
			echo 'false';
		}
	}

 ?>