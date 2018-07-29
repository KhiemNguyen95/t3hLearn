<?php 

function getDataWeatherApi($cityName){
	$api = "http://api.openweathermap.org/data/2.5/forecast?q={$cityName}&appid=073f342f34bacc8898356a523fa5b4f8&units=metric&lang=vi";
	$ch = curl_init();
	// truy cap api
	curl_setopt($ch, CURLOPT_URL, $api);
	// set time
	curl_setopt($ch, CURLOPT_TIMEOUT, 30);
	// set co doi ko
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	//doi excute thuc thi moi tra ket qua
	$result = curl_exec($ch);
	$data = json_decode($result, true);
	return $data;
}