<?php
	ini_set('session.cookie_httponly', true);
	ini_set('session.cookie_secure', true);
	#ini_set('session.cookie_domain', '.example.net');
	session_name('__Secure-PHPSESSID');
	session_start();
	require_once("inc/db.php");


	if(isset($_SESSION['memberId:vote'])) {
		exit(header('Location: home'));

	} else if(isset($_GET['status'])) {
		if($_GET['status'] == 1){
			$what = 1;
		} else if ($_GET['status'] == 2){
			$what = 2;
		} else if ($_GET['status'] == 3){
			$what = 3;
		} else if ($_GET['status'] == 4){
			$what = 4;
		}
	}

	$_SESSION['_token']=bin2hex(openssl_random_pseudo_bytes(16));
	$loginPage = true;

	include 'inc/header.php';

?>
		<!-- Swup Div, Page transition section (children)-->
		<div id="swup" class="transition-fade">
			<script src="https://www.google.com/recaptcha/api.js?render=<?=$Config['reCAPTCHA']?>"></script>

		  <!-- login Page Section -->
		  <div class="login">
		    <img src="imgs/pc.png" class="img-fluid position-absolute mainPic" alt="Main">
		    <div class="container d-flex justify-content-start">
		     <div class="row d-flex align-items-center">
		       <div class="col-12">
		         <form class="loginForm rounded" onSubmit="return false">
		           <h2 class="mb-5">تسجيل الدخول</h2>
		           <div class="form-group mb-3">
		             <input type="text" id="login-username" name="login-username" placeholder="البريد الإلكتروني">
		           </div>
		           <div class="form-group mb-5">
		             <input type="password" id="login-password" name="login-password" placeholder="كلمة المرور">
		           </div>
		           <input type="submit" onClick="login()" value="تسجيل الدخول" class="crystalVotesButton rounded mx-auto">
		         </form>
		      </div>
		     </div>
		    </div>
				<a href="/votes/home" class="d-none" id="goHome">Go 2 Home</a>
		  </div>

			<?php
				include_once 'inc/footer.php';
			?>

			<script>
					<?php if(isset($_GET['timeout']) && $_GET['timeout'] == 1){ ?>
						alertify.logPosition("top right");
						alertify.error("تم تسجيل خروجك بنجاح، نظرًأ لعدم تفاعلك سجل مجددا!");
					<?php } ?>

						const toast = swal.mixin({
						  toast: true,
						  position: 'top-end',
						  showConfirmButton: false,
						  timer: 3000
						});

					<?php if(isset($what) && $what == 1) { ?>
						new toast({
							icon: 'success',
							title: 'تم إرسال كلمة مرور جديدة إلى البريد الإلكتروني'
						});
					<?php } else if(isset($what) && $what == 2){ ?>
						new toast({
							icon: 'error',
							title: 'حدث خطأ إثناء ارسال البريد الإلكتروني، اعد المحاولة.'
						});
					<?php } else if(isset($what) && $what == 3){?>
						new toast({
							icon: 'warning',
							title: 'انتهت صلاحية رابط التحقق الخاصة بالبريد الإلكتروني'
						});
					<?php } else if(isset($what) && $what == 4){?>
						new toast({
							icon: 'success',
							title: 'تم تفعيل حسابك بنجاح !'
						});

					<?php } ?>
						function login(){

							var useroremail=document.getElementById("login-username").value;
							var password=document.getElementById("login-password").value;
							if(useroremail == null || useroremail == "" || password == "" || password == null){
								new toast({
									icon: 'info',
									text: "قم بملأ الحقول المطلوبة"
								});
					            throw new Error("Empty Inputs");

							}
					    grecaptcha.ready(function() {
						    grecaptcha.execute('<?=$Config['reCAPTCHA']?>', {action: 'homepage'}).then(function(token) {

								sendData("login.php", "useroremail="+useroremail+"&password="+password+"&reCAPTCHA="+token)
								.then(function(response){

									swal.fire({
										title: response.t,
										text: response.m,
										icon: response.tp,
										showConfirmButton: response.b,
										confirmButtonText: 'موافق'
									});

									if(response.tp == 'error'){
									} else if (response.tp == 'success'){
										document.getElementById('goHome').click();
									}
								});

							});
						});
					}
			</script>
		</div>
	</body>
</html>
