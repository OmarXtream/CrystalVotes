<?php
$amstaff = true;

require_once("../../inc/db.php");
require_once("../../inc/functions.php");
require_once("../inc/protection.php");

if($_SERVER['REQUEST_METHOD'] == "POST"){

	if (isset($_SERVER["HTTP_CF_CONNECTING_IP"])) {
		$_SERVER['REMOTE_ADDR'] = $_SERVER["HTTP_CF_CONNECTING_IP"];
	}

	if(!isset($_SESSION['_token']) OR !isset($_POST['token']) OR $_POST['token'] != $_SESSION['_token'] OR !isset($_SESSION['staffId:fort'])){

		returnJSON(array('tp' => 'error', 't' => 'خطأ', 'm' => 'حدث خطأ غير معروف من فضلك أعد تحميل هذه الصفحة','b' => true));


	} else if(isset($_POST['name'],$_POST['rules'],$_POST['img'],$_POST['id'],$_POST['job'])){
		if(antiSpam("product:product.php")){
			returnJSON(array('t'=>'خطأ','m'=>'من فضلك انتظر قليلا ثم حاول مجدداً', 's'=>'error', 'b'=>'موافق'));
		}

	if(empty($_POST['name']) OR empty($_POST['rules']) OR empty($_POST['img']) OR empty($_POST['id']) OR empty($_POST['job'])){
		returnJSON(array('tp' => 'error', 't' => 'خطأ', 'm' => 'تاكد من المدخلات','b' => true));
	}elseif(!ctype_digit($_POST['id'])){
			returnJSON(array('tp' => 'error', 't' => 'خطأ', 'm' => 'حدث خلل والظاهر انك تعرفه','b' => true));

	}elseif(!rankPermission($_SESSION['staffId:fort'],5,true)){
			returnJSON(array('tp' => 'error', 't' => 'خطأ', 'm' => 'خير؟ ماعندك صلاحيات','b' => true));


	}else{

		$conn=Database::getInstance();
		$stmt=$conn->prepare("SELECT id FROM Candidates WHERE name=:user or num=:num");
		$stmt->bindValue(":user", $_POST['name']);
		$stmt->bindValue(":num", $_POST['id']);
		$stmt->execute();

		if($stmt->rowCount() == 0){


			$stmtz=$conn->prepare("INSERT INTO Candidates (name,img,num,des,job) VALUES (:name,:img,:num,:des,:job)");
			$stmtz->bindValue(":name", $_POST['name']);
			$stmtz->bindValue(":img", $_POST['img']);
			$stmtz->bindValue(":num", $_POST['id']);
			$stmtz->bindValue(":des", $_POST['rules']);
			$stmtz->bindValue(":job", $_POST['job']);

			$stmtz->execute();

			if($stmtz->rowCount() > 0){

returnJSON(array('tp' => 'success', 't' => 'حسناً', 'm' => 'تم تسجيل المرشح بنجاح !','b' => true));


    }else{
        returnJSON(array('tp' => 'error', 't' => 'خطأ', 'm' => 'error recording person','b' => true));
    }





}else{ returnJSON(array('tp' => 'error', 't' => 'خطأ', 'm' => 'يوجد مرشح بنفس البيانات بالفعل ّ!','b' => true)); }






	}

} else {}}
?>
