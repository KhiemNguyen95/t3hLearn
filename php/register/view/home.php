<?php
echo "home";
	if(isset($user)){
		echo "
		<h1>Login success</h1>
		$user
		";
	} else {
		include 'view/login.php';
	}
 ?>