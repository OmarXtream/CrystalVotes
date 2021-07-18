<?php
$amstaff = true;
require_once("../../inc/db.php");
require_once("../../inc/functions.php");
require_once("../inc/protection.php");
if($_SERVER['REQUEST_METHOD'] == "POST"){

	if(!isset($_SESSION['_token']) OR !isset($_POST['token']) OR $_POST['token'] != $_SESSION['_token']){
		returnJSON(array('t' => 'خطأ', 'm' => 'حدث خطأ غير متوقع من فضلك أعد تحميل الصفحة', 'tp'=>'error', 'b' => true));
	}

	if(isset($_POST['clear'])){
		$option = $_POST['clear'];
		if(!filter_var($option, FILTER_VALIDATE_INT, array("options" => array("min_range"=>1, "max_range"=>2)))){
			returnJSON(array('t' => 'خطأ', 'm' => 'من فضلك تأكد من القيم المرسلة', 'tp'=>'error', 'b' => true));
		}elseif(antiSpam('clear.php:changeSettings')){
			returnJSON(array('t' => 'خطأ', 'm' => 'من فضلك أنتظر بين محاولاتك', 'tp'=>'error', 'b' => true));
		}elseif(!rankPermission($_SESSION['staffId:fort'],5,true)){
			returnJSON(array('t' => 'خطأ', 'm' => 'عفوا ولكن أنت لا تملك صلاحية', 'tp'=>'error', 'b' => true));
		}else{

			$conn = Database::getInstance();
			$conn->query('UPDATE Customers SET votes = 3');
      $conn->query('DELETE FROM votes');
      $conn->query('DELETE FROM Candidates');


      returnJSON(array('tp' => 'success', 't' => 'حسناً', 'm' => 'تمت إعادة ضبط المصنع <3','b' => true));



		}
	}
}



?>
