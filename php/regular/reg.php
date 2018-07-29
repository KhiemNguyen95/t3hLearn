<?php 
$input = "php language";
$Reg = "/^php/";

// if (preg_match($Reg, $input,$match)) {
// 	echo"ok";
// 	echo "<pre>";
// 	print_r($match);
// } else {
// 	echo "No";
// }
// ---------------------
$regNumber = "/^[2,4,6,8][1,3,5,7,9][2,4,6,8][1,3,5,7,9][0,5]$/";
$inputNum = "23451";
// if (preg_match($regNumber, $inputNum,$match)) {
// 	echo"ok";
// 	echo "<pre>";
// 	print_r($match);
// } else {
// 	echo "No";
// }

// -------------------------
$regPhoneVT = "/^[0]([9][6,7,8])|[8][6]\d{7}$|^[0][1][6][2-9]\d{7}$/";
$phone = "01621111111";
// if (preg_match($regPhoneVT, $phone,$match)) {
// 	echo"ok";
// 	echo "<pre>";
// 	print_r($match);
// } else {
// 	echo "No";
// }
// -----------------------
$regFormatDate = "/^([0][1-9]|[1,2]\d|[3][0,1])\/([0][1-9]|[1][0-2])\/(\d{4})$/";
$date = "29/02/2016";
// if (preg_match($regFormatDate, $date,$match)) {
// 	//echo"ok";
// 	echo "<pre>";
// 	print_r($match);
// 	$d = (int)$match[1];
// 	$m = (int)$match[2];
// 	$y = (int)$match[3];
// 	if ($m == 2){
// 		if($d < 29){
// 			echo "y";
// 		} else if($d == 29){
// 			if($y%400 == 0){
// 				echo "y";
// 			} else if($y%4 == 0 && $y%100 != 0){
// 				echo "y";
// 			} else {
// 				echo "no";
// 			}
// 		}else{
// 			echo "n";
// 		}
// 	}
// } else {
// 	echo "No";
// }
// -----------------------------
$regPass = "/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/"; 
$pass = "asdgAf8mv";
if (preg_match($regPass,$pass,$match)) {
	echo"ok";
	echo "<pre>";
	print_r($match);
} else {
	echo "No";
}