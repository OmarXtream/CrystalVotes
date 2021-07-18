<?php
  $main = true;
  include_once 'inc/header.php';
 ?>

<!-- Swup Div, Page transition section (children)-->
  <div id="swup" class="transition-fade">

     <!-- index Page Section -->
     <div class="main">
       <img src="imgs/mainpic.png" class="img-fluid position-absolute mainPic" alt="Main">
       <div class="container d-flex justify-content-start">
         <div class="row d-flex align-items-center">
           <div class="col-12 text-center text-md-left">
             <img src="imgs/logo.png" alt="logo" style="width: 65%">
             <h4 class="mt-3">مرحباً بكم في نظام كريستال للتصويت الإلكتروني</h4>
             <p class="mt-3">لنبدأ!</p>
             <a href="/votes/register.php" class="crystalVotesButton rounded mt-4 mx-auto mx-auto mx-md-0">إنشاء حساب</a>
             <a href="/votes/login.php" class="crystalVotesButton outline rounded mt-3 mx-auto mx-md-0">تسجيل دخول</a>
           </div>
        </div>
       </div>
     </div>
  </div>

<?php
  include_once 'inc/footer.php';
 ?>
