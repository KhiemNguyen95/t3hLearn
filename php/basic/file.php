<?php
$file = fopen("data/database.txt", "w+");
if($file)
{
	// echo "ok";
	// ghi du lieu
	// echo $data;
	$data2 = "llll";
	fwrite($file, $data2);
	fclose($file);
	$file2 = fopen("data/database.txt", "a+");
	$data = fread($file2, filesize("data/database.txt"));	
	echo $data;
	fclose($file2);

} else
{
	echo "fail";
}

// if(file_exists("data/database.txt"))

// is_writable(filename)
// file_put_contents("data/database.txt", "data");
// rename("data/database.txt", "data/chan.txt");
// copy("data/chan.txt", "data/copy.txt");
// unlink("data/chan.txt");
if (!is_dir("ss")) {
	mkdir("ss");
}