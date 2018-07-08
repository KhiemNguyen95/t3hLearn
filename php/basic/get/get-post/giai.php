<?php 
if (isset($_POST['giais'])) {
	$a = strip_tags($_POST['hsa']);
	$b = strip_tags($_POST['hsb']);

	if (is_numeric($a) && is_numeric($b)) {
		$result = $b/$a;
		header("Location:ptb1.php?a=$a&b=$b&result=$result");
	}
 	