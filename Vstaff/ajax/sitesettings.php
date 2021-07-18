<?php
$amstaff = true;
require_once("../../inc/db.php");
require_once("../../inc/functions.php");
require_once("../inc/protection.php");
if($_SERVER['REQUEST_METHOD'] == "POST"){

	if(!isset($_SESSION['_token']) OR !isset($_POST['token']) OR $_POST['token'] != $_SESSION['_token']){
		returnJSON(array('t' => 'خطأ', 'm' => 'حدث خطأ غير متوقع من فضلك أعد تحميل الصفحة', 'tp'=>'error', 'b' => true));
	}

	if(isset($_POST['sitesettings'])){
		$option = $_POST['sitesettings'];
		if(!filter_var($option, FILTER_VALIDATE_INT, array("options" => array("min_range"=>1, "max_range"=>6)))){
			returnJSON(array('t' => 'خطأ', 'm' => 'من فضلك تأكد من القيم المرسلة', 'tp'=>'error', 'b' => true));
		}elseif(antiSpam('sitesettings.php:changeSettings')){
			returnJSON(array('t' => 'خطأ', 'm' => 'من فضلك أنتظر بين محاولاتك', 'tp'=>'error', 'b' => true));
		}elseif(!rankPermission($_SESSION['staffId:fort'],5,true)){
			returnJSON(array('t' => 'خطأ', 'm' => 'عفوا ولكن أنت لا تملك صلاحية', 'tp'=>'error', 'b' => true));
		}else{
			switch ($option){
				case 1:
					$rowName = 'closeSite';
				break;
				case 2:
					$rowName = 'closepaypal';
				break;
				case 3:
					$rowName = 'closemc';
				break;
				case 4:
					$rowName = 'closeps';
				break;
				case 5:
					$rowName = 'closestc';
				break;
				case 6:
					$rowName = 'closerw';
				break;


			}
			$conn = Database::getInstance();
			$conn->query('UPDATE sitesettings SET '.$rowName.' = CASE WHEN '.$rowName.' = 1 THEN 0 ELSE 1 END');
			$newValue = current($conn->query('SELECT '.$rowName.' FROM sitesettings')->fetch());
			$newStatus = $newValue == 1 ? 'فتح' : 'إغلاق';
			returnJSON(array('t' => 'حسناً', 'm' => 'تم تغيير الحالة بنجاح', 'tp'=>'success', 'b' => true, 'newStatus' => $newStatus));
		}
	}
}



?>
