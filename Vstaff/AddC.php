<?php

$pageName = "AddC";
require_once("inc/header.php");
if(!rankPermission($_SESSION['staffId:fort'],5,true)){
	exit('? ._. May i help you');
}

$conn = Database::getInstance();

 ?>
    <main id="main-container">
<div class="content">
    <center><h2 class="content-heading">المرشحين</h2></center>
    <div class="row">
        <div class="col-md-6">
            <div class="block">
                <div class="block-header block-header-default">
                    <h3 class="block-title">إضافة مرشح</h3>
                    <div class="block-options">
                        <button type="button" class="btn-block-option">
                            <i class="si si-user"></i>
                        </button>
                    </div>
                </div>
                <div class="block-content">
                    <form  method="post" enctype="multipart/form-data" onsubmit="return false;">
                        <div class="form-group row">
                            <div class="col-12">
                                <div class="form-group row">
                            <div class="col-md-9">
                                <div class="form-material form-material-primary floating">
                                    <input type="text" class="form-control" id="pr_name" name="pr_name">
                                    <label for="material-color-primary2">إسم المرشح</label>
                                </div>
                             <div class="form-text text-muted text-right"> من لا اسم له لاحضور له</div>
                                </div>

                            </div>

                                <div class="form-material floating">
                                    <textarea class="form-control" id="pr_rules" name="pr_rules" rows="3"></textarea>
                                    <label for="material-textarea-small2">معلومات مختصره للمرشح</label>
                                </div>
                            </div>
                        </div>

                        <div class="form-group row">
                            <div class="col-md-9">
                                <div class="form-material form-material-sm floating">
                                    <input type="number" class="form-control form-control-sm" id="pr_id" name="pr_id">
                                    <label for="material-input-size-sm2"> رقم المرشح</label>
                                </div>
                            </div>

                            <div class="col-md-9">
                                <div class="form-material form-material-sm floating">
                                    <input type="text" class="form-control form-control-sm" id="pr_img" name="pr_img">
                                    <label for="material-input-size-sm2"> صورة مصغره للمرشح</label>
                                </div>
                            </div>
														<div class="col-md-9">
																<div class="form-material form-material-sm floating">
																		<input type="text" class="form-control form-control-sm" id="pr_job" name="pr_job">
																		<label for="material-input-size-sm2"> وظيفة المرشح</label>
																</div>
														</div>

                        </div>

                        <div class="form-group row">
                            <div class="col-md-9">
<center>
    <button type="submit" onClick="_prlunch()" class="btn btn-alt-primary"> تسجيل المرشح<i class="si si-rocket"></i> </button>


</center>

</div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div class="col-md-6">
            <div class="block">
                <div class="block-header block-header-default">
                    <h3 class="block-title">تعديل مرشح</h3>
                    <div class="block-options">
                        <button type="button" class="btn-block-option">
                            <i class="si si-wrench"></i>
                        </button>
                    </div>
                </div>
                <div class="block-content">
                    <form  method="post" onsubmit="return false;">
  <div class="form-group">
    <label for="exampleFormControlSelect1">إختر المرشح</label>
<form id="membersform" method="post" onsubmit="return false;" autocomplete="off">
<select class="form-control" name="pr_edit" onchange="showProduct(this.value)" data-placeholder="إختر المنتج" ><option value="">إسم المرشح</option>

<?php

$db = Database::getInstance();

    $response = $db->prepare('SELECT id,name,num FROM Candidates');
$response->execute();
$pr = $response->fetchAll();
$response->CloseCursor();

if($response->rowCount() > 0 )
{
foreach($pr as $product){
$pr_id = (int)$product['id'];
$pr_item = (int)$product['num'];

$pr_name = htmlspecialchars($product['name']);

echo '<option value="'.$pr_id.'">'.$pr_name.' » '.$pr_item.'</option>';

}
}

?>

   </select>


   <br>
   <div id="txtHint">

                        </div>

</form>
</div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
    </main>

<script>
function showProduct(str) {
    if (str == "") {
        document.getElementById("txtHint").innerHTML = "";
        return;
    } else {
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","ajax/showpr.php?q=" + str + "&token=" + document.getElementsByName('token')[0].getAttribute('content'),true);
        xmlhttp.send();
    }
}
</script>
	<script>
		function _predit(id){


				var pname2=document.getElementById("pr_name2").value;
				var prules2=document.getElementById("pr_rules2").value;
				var pimg2=document.getElementById("pr_img2").value;
				var pid2=document.getElementById("pr_id2").value;
				var pjob2=document.getElementById("pr_job2").value;

				 if(pname2 == null || pname2 == "" || prules2 == "" || prules2 == null || pimg2 == "" || pimg2 == null || pjob2 == "" || pjob2 == null || pid2 == '' || typeof pid2 == 'undefined'){
					toast({
					  type: 'error',
					  title: 'من فضلك تأكد من المدخلات'
					});




				}else{
					sendData("editC.php", "id="+id+"&name="+pname2+"&rules="+prules2+"&img="+pimg2+"&newid="+pid2+"&job="+pjob2)
					.then(function(response){
						swal({
							title: response.t,
							text: response.m,
							type: response.tp,
							showConfirmButton: response.b,
							confirmButtonText: 'موافق'
						});
						if(response.tp == 'error'){
						            document.getElementById("txtHint").innerHTML = "";

						}else if(response.tp == 'success'){
        document.getElementById("txtHint").innerHTML = "";
						}
					});
				}
		}


	</script>
    	<script>

		function _prdel(id) {
			if(typeof id !== 'undefined') {
				sendData("editC", "pid="+id,'GET')
					.then(function(response){
						swal({
							title: response.t,
							text: response.m,
							type: response.tp,
							showConfirmButton: response.b,
							confirmButtonText: 'موافق'
						});
					 if(response.tp == 'success'){
        document.getElementById("txtHint").innerHTML = "";
						}
					});
			}
		}


	</script>


	<script>
		function _prlunch(){


				var pname=document.getElementById("pr_name").value;
				var prules=document.getElementById("pr_rules").value;
				var pimg=document.getElementById("pr_img").value;
				var pid=document.getElementById("pr_id").value;
				var pjob=document.getElementById("pr_job").value;

				 if(pname == null || pname == "" || prules == "" || prules == null || pimg== "" || pimg== null ||  pjob== "" || pjob== null || pid == '' || typeof pid == 'undefined'){
					toast({
					  type: 'error',
					  title: 'من فضلك تأكد من المدخلات'
					});




				}else{
					sendData("AddC.php", "id="+pid+"&name="+pname+"&rules="+prules+"&img="+pimg+"&job="+pjob)
					.then(function(response){
						swal({
							title: response.t,
							text: response.m,
							type: response.tp,
							showConfirmButton: response.b,
							confirmButtonText: 'موافق'
						});
						if(response.tp == 'error'){

						}else if(response.tp == 'success'){
							document.getElementById("pr_name").value = '';
							document.getElementById("pr_rules").value = '';
							document.getElementById("pr_img").value = '';
							document.getElementById("pr_id").value = '';
							document.getElementById("pr_job").value = '';

						}
					});
				}
		}


	</script>

<?php require_once("inc/footer.php"); ?>
