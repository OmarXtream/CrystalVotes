<?php
mb_internal_encoding('UTF-8');

ini_set('session.cookie_httponly', true);
ini_set('session.cookie_secure', true);
//ini_set('session.cookie_domain', '.example.net');
session_name('__Secure-PHPSESSID');
session_start();
require_once("../inc/db.php");
require_once("../inc/functions.php");
require_once('../inc/src/Twilio/autoload.php');
use Twilio\Rest\Client;

if($_SERVER['REQUEST_METHOD'] == "POST"){

	if (isset($_SERVER["HTTP_CF_CONNECTING_IP"])) {
		$_SERVER['REMOTE_ADDR'] = $_SERVER["HTTP_CF_CONNECTING_IP"];
	}

	if(!isset($_SESSION['_token']) OR !isset($_POST['token']) OR $_POST['token'] !== $_SESSION['_token']){
		returnJSON(array('tp' => 'error', 't' => 'خطأ', 'm' => 'حدث خطأ غير معروف من فضلك أعد تحميل هذه الصفحة','b' => true));
	} else if (isset($_SESSION['memberId:vote'])) {
		returnJSON(array('tp' => 'error', 't' => 'خطأ', 'm' => 'حدث خطأ غير معروف من فضلك أعد تحميل هذه الصفحة','b' => true));
	} else if(isset($_POST['username'],$_POST['password'],$_POST['email'],$_POST['reCAPTCHA'],$_POST['phonenumber'])){
		if(antiSpam("register:reg.php")){
			returnJSON(array('t'=>'خطأ','m'=>'من فضلك انتظر قليلا ثم حاول مجدداً', 's'=>'error', 'b'=>'موافق'));
		}
		$post = http_build_query(
			array (
				'response' => $_POST['reCAPTCHA'],
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
		$response = file_get_contents('https://www.google.com/recaptcha/api/siteverify', false, $context);
		$result = json_decode($response);
		if (!$result -> success) {
			returnJSON(array('tp' => 'error', 't' => 'خطأ', 'm' => 'رجاءَ تحقق من أنك لست روبوت','b' => true));
		}

	if(empty($_POST['username']) OR empty($_POST['password']) OR empty($_POST['email']) OR empty($_POST['phonenumber'])){
		returnJSON(array('tp' => 'error', 't' => 'خطأ', 'm' => 'تاكد من المدخلات','b' => true));
	}elseif(mb_strlen($_POST['username'], 'UTF-8') < 3 || mb_strlen($_POST['username'], 'UTF-8') > 16){
		returnJSON(array('tp' => 'error', 't' => 'خطأ', 'm' => 'يجب إن يكون اسم المستخدم مكون من 3 حروف ولا يتعدى 16 حرف','b' => true));
	}elseif(!password_strength($_POST['password'])){
		returnJSON(array('isSuccess' => false,'t' => 'خطأ','m' => 'يجب إن تحتوي كلمة المرور على حروف كبيرة وصغيره وأرقام.','s' => 'error', 'b' => 'موافق'));
	}elseif(strlen($_POST['password']) > 36 || strlen($_POST['password']) < 8){
		returnJSON(array('tp' => 'error', 't' => 'خطأ', 'm' => 'يجب إن تكون كلمة مرورك أكبر من 8 إحرف ولا تتعدى 36 حرف','b' => true));
	}elseif(!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)){
		returnJSON(array('tp' => 'error', 't' => 'خطأ', 'm' => 'يجب إن يكون بريد الإلكتروني الخاص بك صحيح. يرجى التأكد','b' => true));
  }elseif(!validateMobile($_POST['phonenumber'])){
    returnJSON(array('tp' => 'error', 't' => 'خطأ', 'm' => 'يجب إن يكون رقم الهاتف صحيح','b' => true));

	}else{

              $conn = Database::getInstance();
		$stmt=$conn->prepare("SELECT username,email FROM Customers WHERE email=:email or phonenumber=:phonenumber");
		$stmt->bindValue(":email", $_POST['email']);
    $stmt->bindValue(":phonenumber", $_POST['phonenumber']);
		$stmt->execute();

		if($stmt->rowCount() == 0){
        $rndno=rand(1000, 9999);

        $_SESSION['check:email'] = $_POST['email'];
        $_SESSION['check:username'] = $_POST['username'];
        $_SESSION['check:password'] = $_POST['password'];
        $_SESSION['check:phonenumber'] = $_POST['phonenumber'];
        $_SESSION['check:code'] = $rndno;


				$n = ltrim($_SESSION['check:phonenumber'], '0');

				// Your Account SID and Auth Token from twilio.com/console
				$client = new Client($Ssid, $Stoken);

				// Use the client to do fun stuff like send text messages!
				$client->messages->create(
				    // the number you'd like to send the message to
				    '+966'.$n,
				    array(
				        'from' => $Sfrom,
				        // the body of the text message you'd like to send
				        'body' => "".$_SESSION['check:code']." رقم التحقق"
				    )
				);


        // Send the OTP here then
				returnJSON(array('tp' => 'success', 't' => 'حسناً', 'm' => 'فضلا قم بتحقق من رقم الهاتف','b' => true));



		}else{
			returnJSON(array('tp' => 'error', 't' => 'خطأ', 'm' => 'البريد الإلكتروني او رقم الهاتف مستخدم مسبقا','b' => true));
		}

	}
} else {}

	if (isset($_SERVER["HTTP_CF_CONNECTING_IP"])) {
		$_SERVER['REMOTE_ADDR'] = $_SERVER["HTTP_CF_CONNECTING_IP"];
	}

	if(!isset($_SESSION['_token']) OR !isset($_POST['token']) OR $_POST['token'] !== $_SESSION['_token']){
		returnJSON(array('tp' => 'error', 't' => 'خطأ', 'm' => 'حدث خطأ غير معروف من فضلك أعد تحميل هذه الصفحة','b' => true));
	} else if (isset($_SESSION['memberId:vote'])) {
		returnJSON(array('tp' => 'error', 't' => 'خطأ', 'm' => 'حدث خطأ غير معروف من فضلك أعد تحميل هذه الصفحة','b' => true));
	} else if(isset($_POST['otp'],$_SESSION['check:email'],$_SESSION['check:username'],$_SESSION['check:password'],$_SESSION['check:phonenumber'],$_SESSION['check:code'])){
		if(antiSpam("Oregister:reg.php")){
			returnJSON(array('t'=>'خطأ','m'=>'من فضلك انتظر قليلا ثم حاول مجدداً', 's'=>'error', 'b'=>'موافق'));
		}
		$otp = (int)$_POST['otp'];
		if($otp === $_SESSION['check:code']){

		$passwordHashed=password_hash($_SESSION['check:password'], PASSWORD_DEFAULT);
		$stmtz=$conn->prepare("INSERT INTO Customers (username,password,email,phonenumber,createdTime) VALUES (:username,:password,:email,:phonenumber,".time().")");
		$stmtz->bindValue(":username", $_SESSION['check:username']);
		$stmtz->bindValue(":password", $passwordHashed);
		$stmtz->bindValue(":email", $_SESSION['check:email']);
		$stmtz->bindValue(":phonenumber", $_SESSION['check:phonenumber']);

		$stmtz->execute();

		if($stmtz->rowCount() > 0){
			$_SESSION['account'] = true;
			$_SESSION['name'] = $_POST['username'];
			$MID = $conn->lastInsertId();
			$_SESSION['memberId:vote'] = $MID;
			returnJSON(array('tp' => 'success', 't' => 'حسناً', 'm' => 'تم التسجيل بنجاح ! , مرحبا بك','b' => true,'test' => $rndno));

		}else{
			returnJSON(array('t'=>'خطأ','m'=>'من فضلك انتظر قليلا ثم حاول مجدداً', 'tp'=>'error', 'b'=>'موافق'));

		}
	}else{
		returnJSON(array('t'=>'خطأ','m'=>'الرجاء التأكد من صحة الرقم المدخل', 'tp'=>'error', 'b'=>'موافق'));

	}
}

}



?>
