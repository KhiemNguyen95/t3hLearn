<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>Form</title>
	<link rel="stylesheet" href="">
</head>
<body>
	<?php $state = $_GET['state'];  ?>
	<?php if($state === 'err'): ?>
		<p>thieu thong tin</p>
	<?php elseif ($state === 'cancel'): ?>
		<p>sai thong tin</p>
	<?php endif; ?>
	<form action="postdata.php" method="POST">
		name: <input type="text" name="txt_name" >
		password: <input type="password" name="txt_password" >
		<input type="submit" name="btn_sm" value="Send">
	</form>
</body>
</html>