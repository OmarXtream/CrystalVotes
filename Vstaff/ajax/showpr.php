<?php
$amstaff = true;

require_once("../../inc/db.php");
require_once("../../inc/functions.php");
require_once("../inc/protection.php");
if($_SERVER['REQUEST_METHOD'] == "GET"){

	if(!isset($_SESSION['_token']) OR !isset($_GET['token']) OR $_GET['token'] != $_SESSION['_token']){
		returnJSON(array('t'=>'خطأ', 'm'=>'حدث خطأ غير متوقع ، رجاءً قم بتحديث الصفحة.', 'tp'=>'error'));
	}
	if(isset($_GET['q'],$_SESSION['staffId:fort'])){
					if(antiSpam('showpr:showpr.php')){
            echo' من فضلك إنتظر بين محاولاتك';
				die;


			} else if(!rankPermission($_SESSION['staffId:fort'],5,true) OR rankPermission($_SESSION['staffId:fort'],1,true)){
			    				echo"لا تمتلك صلاحيات كافيه";
die;


			} else	if(!ctype_digit($_GET['q']) OR strlen($_GET['q']) > 32){
			    			echo' محاولة جيده , لا تكررها ';

die;
			}

$prid = (int)$_GET['q'];
$db = Database::getInstance();

    $response = $db->prepare('SELECT name,des,img,num,job
            FROM Candidates
            WHERE id = :nom
           ');
    $response->bindValue(':nom',$prid,PDO::PARAM_INT);
    $response->execute();
    $member = $response->fetch();
    $response->CloseCursor();
if($member){
$id = $prid;
$item = (int)$member['num'];
$name = htmlspecialchars($member['name']);
$des = htmlspecialchars($member['des']);
$img = htmlspecialchars($member['img']);
$job = htmlspecialchars($member['job']);
echo'
                       <form  method="post" onsubmit="return false;">
                        <div class="form-group row">
                            <div class="col-12">
                                <div class="form-group row">
                            <div class="col-md-9">
                                <div class="form-material form-material-primary ">
                                    <input type="text" class="form-control" id="pr_name2" name="pr_name2" value="'.$name.'">
                                    <label for="material-color-primary2">إسم المرشح</label>
                                </div>
                                </div>

                            </div>

                                <div class="form-material">
                                    <textarea class="form-control" id="pr_rules2" name="pr_rules2" rows="3">'.$des.'</textarea>
                                    <label for="material-textarea-small2">معلومات مختصره للمرشح</label>
                                </div>
                            </div>
                        </div>

                        <div class="form-group row">
                            <div class="col-md-9">
                                <div class="form-material form-material-sm ">
                                    <input type="number" class="form-control form-control-sm" id="pr_id2" name="pr_id2" value="'.$item.'">
                                    <label for="material-input-size-sm2"> رقم المرشح</label>
                                </div>
                            </div>

                            <div class="col-md-9">
                                <div class="form-material form-material-sm ">
                                    <input type="text" class="form-control form-control-sm" id="pr_img2" name="pr_img2" value="'.$img.'">
                                    <label for="material-input-size-sm2"> صورة مصغره للمرشح</label>
                                </div>
                            </div>

														<div class="col-md-9">
																<div class="form-material form-material-sm">
																		<input type="text" class="form-control form-control-sm" id="pr_job2" name="pr_job2" value="'.$job.'">
																		<label for="material-input-size-sm2"> وظيفة المرشح</label>
																</div>
														</div>

                        </div>


                        <div class="form-group row">
                            <div class="col-md-9">
<center>
    <button onClick="_predit('.$id.')" type="submit" class="btn btn-alt-info"> تعديل المرشح <i class="si si-pencil"></i> </button>

        <button type="submit" onClick="_prdel('.$id.')" class="btn btn-alt-danger"> حذف المرشح <i class="si si-close"></i> </button>

</center>
';





}else{
echo 'لم يتم العثور على المرشح';
}
}
}
 ?>
