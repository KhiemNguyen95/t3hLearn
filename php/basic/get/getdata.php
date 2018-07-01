<?php 
if (isset($_GET["btn_sm"])) {
	$user = strip_tags($_GET["txt_name"]) ?? "";
	$pass = strip_tags($_GET["txt_password"]) ?? "";
	if ($user == "" || $pass =="") {
		header("Location:form.php");
	} else if ($user === "admin" || $pass === "admin"){
		header("Location:home.php");
	} else {
		echo "false";
	}
}