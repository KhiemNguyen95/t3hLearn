<?php
require '../service/handleWeather.php';

$cityName = $_POST["city"] ?? '';
if ($cityName != '') {
	$data = getDataWeatherApi($cityName);
	$pronvive = $data['city']['name'];
	$data = isset($data['list']) ? $data['list'] : [];
	require '../view/weather_view.php';
 }
