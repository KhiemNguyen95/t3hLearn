<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>demo g-p</title>
</head>
<body>
	<?php 
		if(isset($_POST['Check'])){
			$year = $_POST['year'];
			if(is_numeric($year)){
				if (($year % 400 == 0) || ($year % 4 == 0 && $year % 100 != 0)) {
					echo "nam nhuan";
				} else {
					echo "ko nhuan";
				}
			} else {
				echo "moi nhap so";
			}
		}
	?>
	<form action="#" method="POST">
		year: <input type="number" name="year" value="<?= $year ?? ''?>">
		<input type="submit" name="Check" value="check">		
	</form>
	
</body>
</html>