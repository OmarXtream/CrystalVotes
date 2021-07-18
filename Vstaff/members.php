<?php

$pageName = "members";
require_once("inc/header.php");
if(!rankPermission($_SESSION['staffId:fort'],5,true)){
	exit('? ._. May i help you');
}

$conn = Database::getInstance();
/*
if(!apcu_exists('mems')){
$allmems = $conn->query("SELECT id,username,email,phonenumber,verify,createdTime FROM Customers ")->fetchAll();
apcu_store('mems', $allmems, 1200 /* 4 HOUR );

} else {
$allmems = apcu_fetch('mems');
}*/
$allmems = $conn->query("SELECT id,username,email,phonenumber,verify,createdTime FROM Customers ")->fetchAll();

 ?>
 <link rel="stylesheet" href="assets/js/plugins/datatables/dataTables.bootstrap4.min.css">
<main id="main-container">

                <!-- Page Content -->
                <div class="content">
                    <h2 class="content-heading">الأعضاء &mdash; الإدارة</h2>

                    <!-- Dynamic Table Full -->
                    <div class="block">
                        <div class="block-header block-header-default">
                            <h3 class="block-title">قائمة الأعضاء » <small>:)</small></h3>
                        </div>
                        <div class="block-content block-content-full">
                            <!-- DataTables init on table by adding .js-dataTable-full class, functionality initialized in js/pages/be_tables_datatables.js -->
                            <table class="table table-bordered table-striped table-vcenter js-dataTable-full" data-order='[[ 1, "desc" ]]' dir="ltr">
                                <thead>
                                    <tr>
                                        <th class="d-none d-sm-table-cell text-center">منذ</th>
										<th class="d-none d-sm-table-cell text-center">الحالة</th>
										<th class="text-center">الجوال</th>
										<th class="text-center">الإيميل</th>
										<th >الإسم</th>
										<th class="d-none d-sm-table-cell" style="width: 100px;" >#</th>
                                    </tr>
                                </thead>
                                <tbody>
							<?php foreach($allmems as $row){
								$id = sprintf("%06d", $row['id']);
                                                                $name = htmlspecialchars($row['username']);
                                                                $email = htmlspecialchars($row['email']);
                                                                $phone = (int)$row['phonenumber'];
                                                                if($row['verify'] == 1){ $status = 'مفعل';$bdgcolor= 'success'; }else{ $status = 'غير مفعل'; $bdgcolor= 'danger';}
                                                                $time = (int)$row['createdTime'];




							?>
                                <tr>
									<td class="text-center">
                                        <a class="text-gray-dark" href="javascript:void(0)"><i class="fa fa-clock-o"></i> <?=ago($time)?></a>
                                    </td>
									<td class="text-center">
                                        <a class="text-gray-dark" href="javascript:void(0)"><span class='badge badge-<?=$bdgcolor?>'><?=$status?></span></a>
                                    </td>



									<td class="text-center">
                                        <a class="text-gray-dark" href="javascript:void(0)"><?=$phone?></a>
                                    </td>
									<td class="text-center">
                                        <a class="text-gray-dark" href="javascript:void(0)"><?=$email?></a>
                                    </td>
									<td>
                                        <a class="text-gray-dark" href="javascript:void(0)"><?=$name?></a>
                                    </td>
                                    <td class="d-none d-sm-table-cell">
                                        <a class="text-gray-dark" href="javascript:void(0)"><?=$id?></a>
                                    </td>

                                </tr>
							<?php } ?>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <!-- END Dynamic Table Full -->



                </div>
                <!-- END Page Content -->

            </main>
<?php require_once("inc/footer.php"); ?>
