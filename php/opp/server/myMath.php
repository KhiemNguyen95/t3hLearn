<?php 
class MyMath
{
	private function sum($num1 = 0,$num2 = 0)
	{		
		return $num1 + $num2;
	}
	public function inputData($a = 0,$b = 0)
	{
		return [$a,$b];
	}

	public function showResult($n1 = 0,$n2 = 0)
	{
		$arrNum = $this->inputData($n1,$n2);
		$a = $arrNum[0];
		$b = $arrNum[1];
		return $this->sum($a,$b);
	}
}

if(isset($_POST['btnSum'])){
	$a = $_POST['nb1'] ?? '';
	$b = $_POST['nb2'] ?? '';

	if(!is_numeric($a) || !is_numeric($b)){
		header("Location:../sum.php?state=err");
	}else {
		$sum = new MyMath;
		$result = $sum->showResult($a,$b);
		echo($result);
	}
}