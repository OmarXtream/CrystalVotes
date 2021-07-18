<?php
$amstaff = true;
require_once("../../inc/db.php");
require_once("../../inc/functions.php");

if (session_status() !== PHP_SESSION_ACTIVE) {
    ini_set('session.name','STAFFSESSID');
    ini_set('session.cookie_httponly', true);
	#ini_set('session.cookie_domain', '.'.$Config['domain'].'');
    session_start();
}

if($_SERVER['REQUEST_METHOD'] == "POST"){



if(isset($_POST['useroremail'],$_POST['password'],$_POST['reCAPTCHA'])){
	if(isset($_SESSION['staffId:fort'])){
		exit(header('Location: ../index.php'));
	}

	$responses = $_POST['reCAPTCHA'];
	$post = http_build_query(
		array (
			'response' => $responses,
			'secret' => $Config["SecreTreCAPTCHA"],
			'remoteip' => $_SERVER['REMOTE_ADDR']
		)
	);
	$opts = array('http' =>
		array (
			'method' => 'POST',
			'header' => 'application/x-www-form-urlencoded',
			'content' => $post
		)
	);
	$context = stream_context_create($opts);
	$serverResponse = @file_get_contents('https://www.google.com/recaptcha/api/siteverify', false, $context);
	if (!$serverResponse) {
		returnJSON(array('tp' => 'error', 't' => 'خطأ','m' => 'رجاءَ تحقق من أنك لست روبوت',"updateCAPTCHA" => true));
	}
	$result = json_decode($serverResponse);
	if (!$result -> success) {
		returnJSON(array('tp' => 'error', 't' => 'خطأ','m' => 'رجاءَ تحقق من أنك لست روبوت',"updateCAPTCHA" => true));
	}else{

		$dbh = Database::getInstance();
		$result = $dbh->prepare("SELECT verify,username,password,id,isStaff FROM Customers WHERE email=:email");
		$result->bindParam(":email", $_POST['useroremail'], PDO::PARAM_STR);
		$result->execute();
		if($result->rowCount() !== 0){
			$row = $result->fetch();
			$isStaff = $row['isStaff'];
			$verify = $row['verify'];
			$id = $row['id'];
			$username = $row['username'];
			$password = $row['password'];
			$passwordd = password_verify($_POST['password'], $password);
			if($passwordd){
			if($isStaff == 1){
			$_SESSION['staffId:fort'] = $id;
			returnJSON(array('tp' => 'success','t' => 'حسناً','m' => 'لقد قمت بتسجيل دخولك بنجاح،  تهانينا!','b' => null));
			}else{
			returnJSON(array('tp' => 'error','t' => 'خطأ','m' => 'إنت لست من طاقم الإدارة..','b' => 'موافق'));
			}
			}else{
			returnJSON(array('tp' => 'error', 't' => 'خطأ','m' => 'تفاصيل تسجيل الدخول الخاصة بك خاطئة ، حاول مرة أخرى.','b' => 'موافق'));
			}
			}else{
			returnJSON(array('tp' => 'error', 't' => 'خطأ','m' => 'تفاصيل تسجيل الدخول الخاصة بك خاطئة ، حاول مرة أخرى.','b' => 'موافق'));
			}
		}
	}
}
?>
