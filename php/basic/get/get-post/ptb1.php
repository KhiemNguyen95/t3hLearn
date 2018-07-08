<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>method</title>
</head>
<body>
	<?php 
		$a = $_GET['a'] ?? ''; 
		$b = $_GET['b'] ?? ''; 
		$result = $_GET['result']; 
	?>
	<form action="giai.php" method="POST" accept-charset="utf-8">
		a <input type="number" name="hsa" value="<?= $a?>">	
		b <input type="number" name="hsb" value="<?= $b ?>">
		<input type="submit" name="giais" value="giai">
	</form>
	<p>Nghiem <?= $result?></p>
</body>
</html>