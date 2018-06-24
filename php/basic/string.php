<?php 
$string = 'chuoi \'s\'s';
echo $string;
$fruit = 'táoo,s,d,f,g';
$arrFruit = explode(',', $fruit);
print_r($arrFruit);
echo "<br>";
$arrFruit1 = implode(' ', $arrFruit);
var_dump($arrFruit1);
echo strlen($arrFruit1);
echo "<br>";
echo mb_strlen($arrFruit1);
echo "<br>";
echo str_word_count($arrFruit1);
echo "<br>";
echo str_repeat($arrFruit1, 2);
echo "<br>";
echo str_replace('s', 'change', $arrFruit1);
echo md5('123456789');
echo htmlentities("<h1>: )</h1>");

$cookie ='<script>document.cookie</script>';
echo($cookie);
echo "<br>";
$str = '<h1><strong><u>string</u></strong></h1>';
// echo(strip_tags($str,"<p><u>"));
$str1  = 'toi nay dfsk;fsd';
// echo(substr($str1, 0, 6));
echo "<br>";
// echo(strstr($str1,'nay'));

// if(strpos($str1,'toi') !== false){
// 	echo str_replace('toi', 'CR7', $str1);
// }
echo '--------------';
$url = 'https://gfgfg-j/.coms-ff-6789.html';
$target = rtrim($url,'.html');

do{
	$target = strstr($target,'-');
	$target = ltrim($target,'-');
}while($pos = strpos($target,'-') > 0);
// 
echo "<br>";
echo $target;

function getId(string $url) : string{
	$target = rtrim($url,'.html');
	do{
	$target = strstr($target,'-');
	$target = ltrim($target,'-');
	}while($pos = strpos($target,'-') > 0);
	return $target;
}