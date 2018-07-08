<?php 
$strNum = $_POST['key'];

$arrNum = explode(',', $strNum);
$result = [];
foreach ($arrNum as $num) {
	if ((int)$num % 5 == 0){
		$result[] = $num;
		
	}
}
echo "<p>cac so chia het cho 5 la:</p>";
print_r(implode('-', $result));