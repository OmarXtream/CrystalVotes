<?php
  include_once 'inc/header.php';
 ?>
    <!-- Swup Div, Page transition section (children)-->
     <div id="swup" class="transition-fade">
       <img src="imgs/pc.png" class="img-fluid position-fixed mainPic" alt="Main" style="width:45%; opacity: 0.5; bottom: 16px; left: 16px; top: auto">

       <!-- register Page Section -->
       <div class="candidates">
         <div class="container">
           <div class="crystalVotesBorder rounded">
             <h2 class="mt-3 mb-4">قائمة المرشحين وبرامجهم</h2>
             <h4 class="mb-3">مرحباً بك <?=$clientnickname?></h4>
             <h5 class="mb-5">عدد الأصوات المتبقية: <div id="countit"><?=$clientVotes?></div></h5>
             <div class="row">
<?php
$all = $conn->query("SELECT * FROM Candidates ")->fetchAll();

$allV = $conn->query("SELECT cid FROM votes WHERE mid='{$_SESSION['memberId:vote']}' ")->fetchAll();
$MyVotes = array();
foreach($allV as $vote){
  $Vcid = $vote['cid'];
  array_push($MyVotes,$Vcid);
}
foreach($all as $al){
  $Aname = htmlspecialchars($al['name']);
  $Anum = (int)$al['num'];
  $Aimg = htmlspecialchars($al['img']);
  $Ades = htmlspecialchars($al['des']);
  $Ajob = htmlspecialchars($al['job']);
?>
               <div class="col-md-6 mb-4">
                 <div class="list rounded">
                   <h3 class="title rounded my-auto"> <?=$Aname?>
                     <span class="post"> - <?=$Ajob?> - <?=$Anum?></span>
                   </h3>
                    <div class="pic">
                        <img class="img-fluid" src="<?=$Aimg?>" alt="User">
                    </div>
                    <p class="description">
                        <?=$Ades?>
                    </p>
                    <div class="text-right mt-4">
                      <?php if (in_array($Anum, $MyVotes)) { ?>
                        <a class="crystalVotesButton rounded d-inline-block mx-auto disabled" style="width: auto; padding: 4px 16px; font-size: 0.9rem;">تم التصويت</a>
                      <?php }else if($clientVotes == 0){ ?>

                      <?php }else{ ?>
                      <a class="crystalVotesButton rounded d-inline-block mx-auto" id="btn-<?=$Anum?>" onClick="Vote(<?=$Anum?>)" style="width: auto; padding: 4px 16px; font-size: 0.9rem;">تصويت</a>

                      <?php } ?>
                    </div>
                  </div>
               </div>
<?php } ?>



             </div>
           </div>
         </div>
       </div>

     </div>
<?php
 include_once 'inc/footer.php';
?>

<script>
function Vote(vid){
Swal.fire({
    title: 'هل انت متأكد؟',
    text: "لا يمكنك سحب التصويت بعد ذلك",
    icon: 'info',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    cancelButtonText: 'تراجع',
    confirmButtonText: 'تأكيد'
}).then((result) => {
if(result.value){

sendData("vote.php", "id="+vid)
.then(function(response){
  Swal.fire({
    title: response.t,
    text: response.m,
    icon: response.tp,
    showConfirmButton: response.b,
    confirmButtonText: 'موافق'
  });
  if(response.tp == 'success'){
    document.getElementById("btn-"+vid).innerHTML = 'تم التصويت';
    $('#btn-'+vid).addClass('disabled');
    var count =	document.getElementById('countit');
    count.innerHTML = count.innerHTML - 1;

  }
});
}
});
}



</script>
</body>
</html>
