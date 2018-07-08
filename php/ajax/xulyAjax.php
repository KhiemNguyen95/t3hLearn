<?php 
$key = $_POST["key"] ?? '';

// response data
// text
// echo $key;

// html
// echo "<h1>$key </h1>";
// require 'result.php';
// json
// $data = [];
// $data["keyw"] = $key;
// $data["name"] = "khiem";

// $res = json_encode($data);
// echo $res;

if ($key != '') {
	# code...
	$music = fopen('music.txt', "r");
	if($music){
		$dataMusic = fread($music, filesize('music.txt'));
		fclose($music);	
		$arrMusic = explode(';', $dataMusic);
		$arrSinger = [];
		foreach ($arrMusic as $val) {
			$arrSinger[] = explode('/', $val);
		}

		$result = [];
		foreach ($arrSinger as $value) {
			if (strpos($value[1],$key) > -1 ) {
				$result[] = $value;
			}			
		}
		// var_dump($result);
		// 	die();
		// print_r($arrSinger);
		require 'view/listmusic.php';
	}
}