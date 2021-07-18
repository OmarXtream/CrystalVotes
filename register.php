<?php
ini_set('session.cookie_httponly', true);
ini_set('session.cookie_secure', true);
#ini_set('session.cookie_domain', '.example.net');
session_name('__Secure-PHPSESSID');
session_start();
require_once("inc/db.php");
$loginPage = true;


if(isset($_SESSION['memberId:vote'])){
	exit(header('Location: home'));
}else if(isset($_SESSION['account'])){
	exit(header('Location: login'));
}else{}

if(!isset($_SESSION['_token'])){
	$_SESSION['_token']=bin2hex(openssl_random_pseudo_bytes(16));
}
if(isset($_GET['verify'])){

	$verifyToken=$_GET['verify'];

	if(strlen($verifyToken) > 70){
		die("<center><p style='color: red;'>HOLD DOWN!!, ARE YOU TRYING TO HACK OUR WEBSITE? HAHA DON'T TRY!</p><a href='index'>Click here to back...</a>"); // Some bitch trying to hack the website. //
	}else{

              $conn = Database::getInstance();

	$stmt=$conn->prepare('SELECT verifyCode FROM Customers WHERE verifyCode=:verify');

	$stmt->bindValue(':verify', $verifyToken);
	$stmt->execute();

	if($stmt->rowCount() == 0){

		exit(header("Refresh:0; url=register"));
	}else{

		$stmtz=$conn->prepare('UPDATE Customers SET verify="1" WHERE verifyCode=:verify');
		$stmtz->bindValue(':verify', $verifyToken);
		$stmtz->execute();

		if($stmtz->rowCount() > 0){
			$_SESSION['verifiedNow'] = true;
			exit(header("Refresh:0; url=login?status=4"));

		}else{

			exit(header("Refresh:0; url=register"));

		}




	}
	}

}


  include_once 'inc/header.php'

 ?>
    <!-- Swup Div, Page transition section (children)-->
     <div id="swup" class="transition-fade">
       <!-- register Page Section -->
       <div class="register">
         <img src="imgs/pc.png" class="img-fluid position-absolute mainPic" alt="Main">
         <div class="container d-flex justify-content-start">
           <div class="row d-flex align-items-center">
             <div class="col-12">
               <form class="registerForm rounded" onSubmit="return false;">
                 <h2 class="mb-5">تسجيل جديد</h2>
                 <div class="form-group mb-3">
                   <input type="text"  id="username" name="signup-username" placeholder="الإسم الكامل">
                 </div>
                 <div class="form-group mb-3">
                   <input type="number" id="phonenumber" name="signup-phonenumber" placeholder="رقم الهاتف">
                 </div>
                 <div class="form-group mb-3">
                   <input type="email"  id="email" name="signup-email" placeholder="البريد الإلكتروني">
                 </div>
                 <div class="form-group mb-3">
                   <input type="password" id="signup-password" name="signup-password" placeholder="كلمة السر">
                 </div>
                 <div class="form-group">
                   <input type="password" id="signup-password-confirm" name="signup-password-confirm" placeholder="تأكيد كلمة السر">
                 </div>
                 <a href="/terms.php" class="d-block mt-5 mb-4">عند نقرك على زر التسجيل، فإنك توافق على شروط الإستخدام</a>
                 <button onclick="register();" class="crystalVotesButton rounded mx-auto">تسجيل حساب</button>
               </form>

							 <form class="authenticationForm rounded d-none" onSubmit="return false;">
								 <h2 class="mb-2">التحقق</h2>
								 <p class="mb-5"> الرجاء ادخال الرقم السري المرسل على رقم الجوال المسجل</p>
								 <div class="form-group mb-5">
									 <input type="number" name="otp" id="otp" placeholder="الرقم السري">
								 </div>
								 <input type="button" onclick="Confirm();" value="تأكيد" class="crystalVotesButton rounded mx-auto">
							 </form>

            </div>
           </div>
         </div>
       </div>
     </div>
		 <script src="https://www.google.com/recaptcha/api.js?render=<?=$Config['reCAPTCHA']?>"></script>
		<?php

		 include_once 'inc/footer.php';

		?>
		<script>


		const toast = swal.mixin({
			toast: true,
			position: 'top-end',
			showConfirmButton: false,
			timer: 3000
		});

		function validatePwd(pwd){
				// at least one number, one lowercase and one uppercase letter
				// at least six characters
				var re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
				return re.test(pwd);
			 }
			function validateEmail(email) {
				var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
				return re.test(String(email).toLowerCase());
			}
			function register(){
				var username=$('#username').val();
				var password=$('#signup-password').val();
				var phonenumber=$('#phonenumber').val();
				var email=$('#email').val();

					if(!validateEmail(email)){
						new toast({
							icon: 'info',
							title: 'من فضلك تأكد من صحة البريد'
						});
							throw new Error("invalid email");

					}else if(!validatePwd(password)){
						new toast({
							icon: 'info',
							title: 'يجب أن تحتوي كلمة المرور على حرف صغير وكبير ورقم على الأقل وأن تكون اكثر من 8 أحرف'
						});
							throw new Error("bad pass");

					}else if(username == null || username == ""){
						new toast({
							icon: 'info',
							title: 'من فضلك تأكد من المدخلات'
						});
							throw new Error("Empty inputs");

					}else{
						grecaptcha.ready(function() {
			grecaptcha.execute('<?=$Config['reCAPTCHA']?>', {action: 'homepage'}).then(function(token) {

						sendData("reg.php", "email="+email+"&password="+password+"&username="+username+"&reCAPTCHA="+token+"&phonenumber="+phonenumber)
						.then(function(response){
							swal.fire({
								title: response.t,
								text: response.m,
								icon: response.tp,
								showConfirmButton: response.b,
								confirmButtonText: 'موافق'
							});
							if(response.tp == 'error'){

							}else if(response.tp == 'success'){
								    animateCSS(".registerForm", "fadeOut", function() {
								      $(".registerForm").addClass("d-none");
											$(".authenticationForm").removeClass("d-none");
											animateCSS(".authenticationForm", "fadeIn")
								    });

					//setTimeout(function () { location.href = "./home";}, 3000);
							}
						});
					});
					});

					}

			}


			function Confirm(){
				var otp=$('#otp').val();
				sendData("reg.php", "otp="+otp)
				.then(function(response){
					swal.fire({
						title: response.t,
						text: response.m,
						icon: response.tp,
						showConfirmButton: response.b,
						confirmButtonText: 'موافق'
					});
					if(response.tp == 'error'){

					}else if(response.tp == 'success'){

						setTimeout(function () { location.href = "./home";}, 3000);
					}
				});


			}

		</script>
	</body>
</html>
