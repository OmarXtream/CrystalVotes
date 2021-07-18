<?php
$amstaff = true;

require_once("../../inc/db.php");
require_once("../../inc/functions.php");
require_once("../inc/protection.php");

if($_SERVER['REQUEST_METHOD'] == "GET" and isset($_GET['pid']) and ctype_digit($_GET['pid'])){

	if(!isset($_SESSION['_token']) OR !isset($_GET['token']) OR $_GET['token'] != $_SESSION['_token'] OR !isset($_SESSION['staffId:fort'])){
		returnJSON(array('t'=>'خطأ', 'm'=>'حدث خطأ غير متوقع ، رجاءً قم بتحديث الصفحة.', 'tp'=>'error'));
	}

		if(isset($_GET['pid'],$_SESSION['staffId:fort'])){

			if(antiSpam('editproduct:editproduct.php')){
				returnJSON(array('t' => 'خطأ','m' => 'من فضلك أنتظر قليلا بين محاولاتك','tp' => 'error','b' => 'موافق'));
			} else if(!rankPermission($_SESSION['staffId:fort'],5,true) OR rankPermission($_SESSION['staffId:fort'],1,true)){
				returnJSON(array('t'=>'خطأ','m'=>'عذرًا، لا تمتلك صلاحيات كافية','tp'=>'error','b'=>'موافق'));
			} else	if(!ctype_digit($_GET['pid']) OR strlen($_GET['pid']) > 32){
				returnJSON(array('t' => 'خطأ','m' => 'محاولة جيدة، نرجو عدم تكرارها','tp' => 'error','b' => 'موافق'));
			}
					$conn = Database::getInstance();
		$stmt=$conn->prepare("SELECT name FROM Candidates WHERE id=:user");
		$stmt->bindValue(":user", (int)$_GET['pid']);
		$stmt->execute();

		if($stmt->rowCount() != 0){

	$stmt = $conn->prepare('DELETE FROM Candidates WHERE id = :id');
    $stmt->bindValue(':id',(int)$_GET['pid'],PDO::PARAM_INT);
    $stmt->execute();
    $stmt->CloseCursor();

	if($stmt->rowCount() > 0){

returnJSON(array('tp' => 'success', 't' => 'حسناً', 'm' => 'تم حذف المرشح بنجاح !','b' => true));
	}else{
				returnJSON(array('t'=>'خطأ', 'm'=>'فشلت العملية.', 'tp'=>'error'));


	}
		}else{

							returnJSON(array('t'=>'خطأ', 'm'=>'لم يتم العثور على المرشح', 'tp'=>'error'));

		}
}
}
if($_SERVER['REQUEST_METHOD'] == "POST"){

	if (isset($_SERVER["HTTP_CF_CONNECTING_IP"])) {
		$_SERVER['REMOTE_ADDR'] = $_SERVER["HTTP_CF_CONNECTING_IP"];
	}

	if(!isset($_SESSION['_token']) OR !isset($_POST['token']) OR $_POST['token'] != $_SESSION['_token'] OR !isset($_SESSION['staffId:fort'])){

		returnJSON(array('tp' => 'error', 't' => 'خطأ', 'm' => 'حدث خطأ غير معروف من فضلك أعد تحميل هذه الصفحة','b' => true));


	} else if(isset($_POST['name'],$_POST['rules'],$_POST['img'],$_POST['id'],$_POST['newid'])){
		if(antiSpam("editproduct:editproduct.php")){
			returnJSON(array('t'=>'خطأ','m'=>'من فضلك انتظر قليلا ثم حاول مجدداً', 's'=>'error', 'b'=>'موافق'));
		}

	if(empty($_POST['name']) OR empty($_POST['rules']) OR empty($_POST['img']) OR empty($_POST['id']) OR empty($_POST['newid']) ){
		returnJSON(array('tp' => 'error', 't' => 'خطأ', 'm' => 'تاكد من المدخلات','b' => true));
	}elseif(!ctype_digit($_POST['id']) OR !ctype_digit($_POST['newid'])){
			returnJSON(array('tp' => 'error', 't' => 'خطأ', 'm' => 'حدث خلل والظاهر انك تعرفه','b' => true));

	}elseif(!rankPermission($_SESSION['staffId:fort'],5,true)){
			returnJSON(array('tp' => 'error', 't' => 'خطأ', 'm' => 'خير؟ ماعندك صلاحيات','b' => true));


	}else{

		$conn=Database::getInstance();
		$stmt=$conn->prepare("SELECT name FROM Candidates WHERE id=:user");
		$stmt->bindValue(":user", (int)$_POST['id']);
		$stmt->execute();

				$stmt2=$conn->prepare("SELECT id FROM Candidates WHERE name=:name AND id != :theid");
		$stmt2->bindValue(":name", $_POST['name']);
		$stmt2->bindValue(":theid", (int)$_POST['id']);

		$stmt2->execute();

		if($stmt->rowCount() != 0 and $stmt2->rowCount() == 0){


$data = [
    'name' => $_POST['name'],
    'item' => (int)$_POST['newid'],
    'rules' => $_POST['rules'],
    'image' => $_POST['img'],
		'job' => $_POST['job'],
    'id' => (int)$_POST['id']
];
$sql = "UPDATE Candidates SET name=:name,num=:item,des=:rules,img=:image,job=:job WHERE id=:id";
$stmtz= $conn->prepare($sql);
$stmtz->execute($data);



			if($stmtz->rowCount() > 0){

returnJSON(array('tp' => 'success', 't' => 'حسناً', 'm' => 'تم تعديل المرشح بنجاح !','b' => true));


    }else{
                returnJSON(array('tp' => 'error', 't' => 'خطأ', 'm' => 'error recorded person !','b' => true));

    }





}else{ returnJSON(array('tp' => 'error', 't' => 'خطأ', 'm' => 'لم يتم العثور على المرشح !','b' => true)); }





	}

} else {}}
?>
