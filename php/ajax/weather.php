<?php 
	$city = $_POST["key"] ?? '';
	$city  = is_numeric($city) ? $city : strtolower($city);
	// 
	$dataWeather = [
		[
			'id' => 1,
			"name" => 'ha noi',
			'temp' => 21,
			'hum' => 80,
			'wind' => 3
		],
		[
			'id' => 2,
			"name" => 'da nang',
			'temp' => 28,
			'hum' => 69,
			'wind' => 3
		],
		[
			'id' => 3,
			"name" => 'sa pa',
			'temp' => 18,
			'hum' => 50,
			'wind' => 5
		],
		[
			'id' => 4,
			"name" => 'nam dinh',
			'temp' => 25,
			'hum' => 90,
			'wind' => 2
		],
	];

//
foreach ($dataWeather as $value) {
	if ($city == $value['id'] || $city == $value['name']) {
		$result = $value;
		break;
	}
}

require 'view/detailweather.php';