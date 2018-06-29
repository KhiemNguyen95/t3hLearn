<?php
$fruit = array(
	'mot' => 1,
	'two' => 2
);
$arr = ['tao','oi',1,2];
$person = [
	'name' => "nguyen v",
	'age' => 12,
	'learn' => ['php','js']
];

$student = array(
	array(
		'name' => 'b',
		'age' => 22
	),
	array(
		'name' => 'c',
		'age' => 12
	)
);

$testArr = [
	'work' => [
		[
			'name' => 'Dev',
			'money' => 1000,
			'company' =>[
				'name' => 'fpt'
			]
		] 
	],
];

$number = [1,2,1,7,13,4,5,6,7,8,9];
array_push($number, 100);
$lastNumber = array_pop($number);
array_unshift($number, $lastNumber);
$childArr = array_chunk($number, 5,true);
$childArr = array_slice($number, 5,2,true);
array_splice($number, 3,3,[100,111,112]);
echo "<pre>";
// var_dump(in_array(10,$number));
// echo(array_sum($number));
// print_r($number);

// $total = count($number);
// for ($i=0; $i < $total; $i++) {
// 	echo "key -$i - value :$number[$i] <br>";
// }
// $count = 0;
// foreach ($number as $value) {
// 	# code...
// 	if ($value % 2 == 0) {
// 		$count++;
// 	}
// }
// echo $count;

$money = [];
$money['vnd'] = 100;

$Chelsea = array(
	'd11' => 'Drogba'
);
$Chelsea['l8'] = 'lampard';
$Chelsea['cm'] = [
	'e5' => "essien",
	'b13' => "ballack"
];
// $Chelsea = array_change_key_case($Chelsea,1);
// var_dump(array_key_exists('d11', $Chelsea));
// var_dump(array_values($Chelsea));

echo "<pre>";
// print_r($Chelsea);
// 
$url = 'https://gfgfg-j/.coms-ff-6789.html';
$arrUrl = explode("-", $url);
$target = rtrim(end($arrUrl),'.html');
// echo($target);


$testArr = [
	"mot" => 1,
	"hai" => 100,
	"ba" => 300,
	"bon" => 10
];
$oderNumber = [200,300,1,2,4,5,1000,9,10];

function desoft(&$inArray){
	$length = count($inArray);
	for ($i=0; $i < $length-1 ; $i++) { 
		for ($j=$i+1; $j < $length ; $j++) { 
			if($inArray[$i] < $inArray[$j]){
				$tam = $inArray[$j];
				$inArray[$j] = $inArray[$i];
				$inArray[$i] = $tam;
			}
		}
	}
	// return $inArray;
}
desoft($oderNumber);
print_r($oderNumber);