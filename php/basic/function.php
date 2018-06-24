<?php
// only php 7. up
// show error
declare(strict_types = 1);

// 
function checkNumber(int $a) : bool{
	if ($a % 2 == 0) {
		# code...
		return true;
	}
	return false;
}

// $number = 8;
// $check = checkNumber($number);
// echo ($check) ?" $number so chan ":" $number la so le";
// 
function checkN() : int {
	$count = 0;
	for ($i=1; $i <=100; $i++) { 
		if ($i % 2 == 0  && $i % 3 == 0) {
			$count++;
		}		
	}
	return $count;
}
// $a = checkN(); 
// echo $a;

// pt bac 2
function ptb2(float $a,float $b,float $c) : array{
	$result =[];
	$delta = $b*$b - 4*$a*$c;
	if($delta <0){
		return [false];
	} elseif ($delta == 0) {
		return [(-$b/(2*$a))];
	} else {
		$result[0] =(-$b + $delta)/(2*$a); 
		$result[1] =(-$b - $delta)/(2*$a);
		return $result; 
	}

}

// $ptb2 = ptb2(1,5,3);
// var_dump($ptb2);

// giai thua 
function giaiThua(int $n) : int{
	$result = 1;
	for($i = 1; $i <= $n;$i++){
		$result *= $i;
	}
	return $result; 
}
$gt = 5;
echo giaiThua($gt);