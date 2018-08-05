<?php 
class Student {
	private $name = "nva";
	protected $age = 29;
	public $phone = 654432;
	public static $gender = 'nam';
	private static $address = 'ND';

	private function play(){
		return 'fo4';
	}

	public function eat(){
		return "$this->name eatting";
	}

	public function time(){
		return $this->play();
	}
	public static function wakeup(){
		return '11:am';
	}

	public function goHome(){
		// return self::$address;
		return self::code();
	}

	public static function code(){
		// return self::wakeup();
		return (new self)->time();
	}
}

$st = new Student;
//var_dump($st->phone);
// echo(Student::$gender);
// $action = $st->time();
// echo($action);
$a = $st::goHome();
echo($a);