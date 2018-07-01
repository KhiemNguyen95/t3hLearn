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
// desoft($oderNumber);
// print_r($oderNumber);

// 

$Students = [
	[
		"id" => 112,
		"name" => "nva",
		"add" => "ND",
		"id_class" => 1,
		"hocbong" => 1200000,
		'gender' => 1
	],
	[
		"id" => 113,
		"name" => "nb",
		"add" => "HN",
		"id_class" => 1,
		"hocbong" => 2000000,
		'gender' => 0
	],
	[
		"id" => 114,
		"name" => "nvc",
		"add" => "NB",
		"id_class" => 2,
		"hocbong" => 0,
		'gender' => 1
	]
];

$Class = [
	[
		"id_class" => 1,
		"name" => "THMO",
		"teacher" => "DVN"
	],
	[
		"id_class" => 2,
		"name" => "MMT",
		"teacher" => "H"
	],
	[
		"id_class" => 3,
		"name" => "PHP",
		"teacher" => "LK"
	]
];


foreach ($Students as $keys => $student) {
	foreach ($Class as $keyc => $class) {
		if($student["id_class"] == $class["id_class"])
			$Students[$keys]['className'] = $class["name"];
	}
}

// xu ly xoa
if (isset($_GET['id'])) {
	$msv = $_GET['id'];
	foreach ($Students as $keys => $student) {
		if ($student['id'] == $msv) {
			unset($Students[$keys]);
		}
	}
}
// echo "<pre>";
// print_r($Students);
?>
<table width="100%" border="2" cellpadding="0" cellspacing="0">
	<caption>Student</caption>
	<thead>
		<tr>
			<th>MSV</th>
			<th>Ho ten</th>
			<th>Dia chi</th>
			<th>Lop</th>
			<th>Gioi tinh</th>
			<th>Hoc bong</th>
			<th colspan="2" width="5%" align="center">Action</th>
		</tr>
	</thead>
	<tbody>
	</tbody>
		<?php $tong =0; ?>
		<?php foreach($Students  as $key => $student): ?>
			<tr>
				<td>
					<?= $student['id']; ?>
				</td>
				<td>
					<?= $student['name']; ?>
				</td>
				<td>
					<?= $student['add']; ?>
				</td>
				<td>
					<?= $student['className']; ?>
				</td>
				<td>
					<?php echo($student['gender'] == 1? "nam":"nu"); ?>
				</td>
				<td>
					<?= number_format($student['hocbong']); ?>
				</td>
				<td><a href="#">[EDIT]</a></td>
				<td><a href="array.php?id=<?= $student['id']; ?>">[DELETE]</a></td>
			</tr>
			<?php $tong += $student['hocbong']; ?>
		<?php endforeach; ?>
		<tfoot>
			<tr>
				<td>Tong hoc bong</td>
				<td colspan="4"></td>
				<td colspan="3"><?= number_format($tong,0,",","."); ?></td>
			</tr>
		</tfoot>
	</tbody>
</table>
