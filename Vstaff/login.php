<?php
require_once("../inc/Vdata.php");

if (session_status() !== PHP_SESSION_ACTIVE) {
    ini_set('session.name','STAFFSESSID');
    ini_set('session.cookie_httponly', true);
    session_start();
}
$amstaff = true;
require_once("../inc/db.php");

if(isset($_SESSION['staffId:fort'])){
	exit(header('Location: home'));
}


$_SESSION['_token']=bin2hex(openssl_random_pseudo_bytes(16));

?>
<!DOCTYPE html>
<html lang="en" class="no-focus">
    <head>
		<meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0">
        <title>CrystalVotes &bull; Staff Login</title>
        <meta name="robots" content="noindex, nofollow">
		<meta name="token" content="<?php if(isset($_SESSION['_token'])) { echo $_SESSION['_token']; } ?>">
<link rel="shortcut icon" href="<?=$Config["icon"];?>">
<link rel="icon" href="<?=$Config["icon"];?>">
<link rel="apple-touch-icon-precomposed" href="<?=$Config["icon"];?>">
		<link rel="stylesheet" id="css-main" href="css/codebase.min-2.1.css">
		<script src="https://www.google.com/recaptcha/api.js?render=<?=$Config['reCAPTCHA']?>"></script>
		            <link rel="stylesheet" href="  https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.4.1/css/simple-line-icons.css">
<link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">

		<style>

		html {direction: rtl;}

		</style>
    </head>
<body style="overflow-x: hidden;"><div id="page-container" class="main-content-boxed">
                <main id="main-container">
<div class="bg-body-dark bg-pattern" style="background-image: url('../assets/media/various/bg-pattern-inverse.png');">
    <div class="row mx-0 justify-content-center">
        <div class="hero-static col-lg-6 col-xl-4">
            <div class="content content-full overflow-hidden">
                <div class="py-30 text-center">
                    <a class="link-effect font-w700" href="#">
                        <span class="font-size-xl text-primary-dark">CrystalVotes</span>&nbsp;&nbsp;<span class="font-size-xl">تسجيل دخول الإدارة</span>
                    </a>
                </div>
                <form class="js-validation-signin text-right" autocomplete="off" onSubmit="return false;">
                    <div class="block block-themed block-rounded block-shadow">
                        <div class="block-header bg-gd-emerald">
                            <h3 class="block-title">يرجى إضافة التفاصيل الخاصة بك</h3>
                            <div class="block-options">
                                <button type="button" class="btn-block-option">
                                    <i class="si si-wrench"></i>
                                </button>
                            </div>
                        </div>
                        <div class="block-content">
                            <div class="form-group row">
                                <div class="col-12">
                                    <label for="login-username">البريد الإلكتروني</label>
                                    <input type="text" class="form-control" id="login-username" name="login-username">
                                </div>
                            </div>
                            <div class="form-group row">
                                <div class="col-12">
                                    <label for="login-password">كلمة المرور</label>
                                    <input type="password" class="form-control" id="login-password" name="login-password">
                                </div>
                            </div><hr/>
                                <div class="col-sm-6 text-center push" style="margin-left: auto; margin-right: auto;">
                                    <button class="btn btn-alt-success" onClick="login()"><i class="fa fa-plus mr-10"></i> تسجيل الدخول </button>
                                </div>
                            </div>
							<div class="block-content bg-body-light">
								<div class="form-group text-center">
									<a class="link-effect text-muted mr-10 mb-5 d-inline-block" href="#">
										<i class="fa fa-key text-muted mr-5"></i> نسيت كلمة المرور
									</a>
								</div>
							</div>
                        </div>
					</form>
                    </div>
            </div>
        </div>
    </div>
</div>
    </main>
    </div>
<div class="modal fade" id="modal-terms" tabindex="-1" role="dialog" aria-labelledby="modal-terms" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-slidedown" role="document">
        <div class="modal-content text-center">
            <div class="block block-themed block-transparent mb-0">
                <div class="block-header bg-primary-dark">
                    <h3 class="block-title">شروط اتفاقية الخدمة</h3>
                    <div class="block-options">
                        <button type="button" class="btn-block-option" data-dismiss="modal" aria-label="Close">
                            <i class="si si-close"></i>
                        </button>
                    </div>
                </div>
                <div class="block-content">
                 <p>*نحن غير مسؤولين*

- على أي شخص قام بسرقة حسابك عن طريق تسريب الا اذا كانت ثغرة لدى الموقع</p>
                </div>
            </div>
            <div class="modal-footer text-center">
                <button type="button" class="btn btn-alt-secondary" data-dismiss="modal">اغلاق</button>
                <button type="button" class="btn btn-alt-success" data-dismiss="modal">
                    <i class="fa fa-check"></i> موافق
                </button>
            </div>
        </div>
    </div>
</div>
		<?php if(isset($_GET['timeout']) && $_GET['timeout'] == 1){ ?><script src="https://cdn.rawgit.com/alertifyjs/alertify.js/v1.0.10/dist/js/alertify.js"></script> <?php } ?>
		<script>
		<?php if(isset($_GET['timeout']) && $_GET['timeout'] == 1){ ?>
		alertify.logPosition("top right");
		alertify.error("تم تسجيل خروجك بنجاح، نظرًأ لعدم تفاعلك سجل مججدا!");
		<?php } ?>
		var token=document.getElementsByTagName('meta')["token"].content;
		function login(){
				var useroremail=document.getElementById("login-username").value;
				var password=document.getElementById("login-password").value;
				if(useroremail !== null && useroremail !== "" && password !== "" && password !== null){


				if (window.XMLHttpRequest) {
					xmlhttp = new XMLHttpRequest();
				} else {
					xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
				}
			    grecaptcha.ready(function() {
                grecaptcha.execute('<?=$Config['reCAPTCHA']?>', {action: 'homepage'}).then(function(token) {

			    xmlhttp.onreadystatechange = function() {
					if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
						var response = JSON.parse(xmlhttp.responseText);

						if(response.b === null){
							setTimeout(function () { location.href = "./home";}, 3000);
							var showb = false;
						}else{var showb = true;}


						swal({
						  title: response.t,
						  text: response.m,
						  type: response.tp,
						  showConfirmButton: showb,
						  confirmButtonText: response.b
						});

						if(response.tp != 'success'){
							grecaptcha.reset();
						}


					}
				}

				xmlhttp.open("POST", "ajax/login.php", false);
				xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
				xmlhttp.send("useroremail="+useroremail+"&password="+password+"&reCAPTCHA="+token);

            });
            });

				}
		}



		</script>


		<script src="js/codebase.min-2.1.js"></script>
<script src="https://unpkg.com/sweetalert2@7.21.1/dist/sweetalert2.all.js"></script>
    </body>
</html>
