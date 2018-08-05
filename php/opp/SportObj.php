<?php 
/**
 * 
 */
class Sport
{
	
	function __construct($name = 'as')
	{
		echo "this is construct $name";
	}

	function __destruct()
	{
		echo "this method ".__FUNCTION__." class ".__CLASS__;
	}
	function __call($resquest,$response){
		//sleep(3);
		//header("Location:sum.php");
	}
	static function __callStatic($resquest,$response){
		//sleep(3);
		//header("Location:sum.php");
	}
	public function __get($key){
		echo "don't exits";
	}
	public function __set($key,$value){
		echo " $key - $value ";
	}

	public function tennis()
	{
		return 'VN open';
	}
}

$sport = new Sport('football');
$sport->football();
$sport->name = 'gfg';
// echo($sport);