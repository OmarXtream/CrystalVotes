<?php
require_once("../inc/req.php");

if($_SERVER['REQUEST_METHOD'] == "POST"){
	if(!isset($_SESSION['_token']) OR !isset($_POST['token']) OR $_POST['token'] != $_SESSION['_token']){
		returnJSON(array('tp' => 'error', 't' => 'خطأ', 'm' => 'حدث خطأ غير معروف من فضلك أعد تحميل هذه الصفحة','b' => true));
	}


if(isset($_POST['id'])){
		if(antiSpam("Vote:vote.php")){
			returnJSON(array('t'=>'خطأ','m'=>'من فضلك انتظر قليلا ثم حاول مجدداً', 's'=>'error', 'b'=>'موافق'));
		}
	if(!ctype_digit($_POST['id']) OR mb_strlen($_POST['id']) > 50){
		returnJSON(array('t' => 'عفواً','m' => 'تأكد من المدخلات!','tp' => 'danger','refresh' => false));
	}else{
		$conn = Database::getInstance();
		$check = $conn->query("SELECT votes FROM Customers WHERE id='{$_SESSION['memberId:vote']}'");
		if($check->rowCount() > 0){
			$data = $check->fetch();
			if($data['votes'] != 0){
				$updateStatus = $conn->query("UPDATE Customers SET votes = votes - 1 WHERE id='{$_SESSION['memberId:vote']}'");
				if($updateStatus->rowCount() > 0){
          $stmtz1=$conn->prepare("SELECT id FROM Candidates WHERE num =:num");
          $stmtz1->bindValue(":num", $_POST['id']);
          $stmtz1->execute();

          if($stmtz1->rowCount() > 0){

          $stmtz=$conn->prepare("INSERT INTO votes (cid,mid) VALUES (:cid,:mid)");
          $stmtz->bindValue(":cid", $_POST['id']);
          $stmtz->bindValue(":mid", $_SESSION['memberId:vote']);

          $stmtz->execute();

          if($stmtz->rowCount() > 0){
            returnJSON(array('tp' => 'success', 't' => 'حسناً', 'm' => 'تم تسجيل صوتك بنجاح !','b' => true,'test' => $rndno));

          }
        }

				}
			} else {
        returnJSON(array('t'=>'خطأ','m'=>'لا يوجد لديك اصوات متبقيه', 'tp'=>'error', 'b'=>'موافق'));
			}
			/* 0 => Closed, 1 => Opened, 2 => Admin Reply , 3 => Customer Reply */
		}else{
      returnJSON(array('tp' => 'error', 't' => 'خطأ', 'm' => 'حدث خطأ غير معروف من فضلك أعد تحميل هذه الصفحة','b' => true));
		}
	}
}

}

?>
