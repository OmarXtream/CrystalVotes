<?php
require_once("../inc/Vdata.php");


if (session_status() !== PHP_SESSION_ACTIVE) {
    ini_set('session.name','STAFFSESSID');
    ini_set('session.cookie_httponly', true);
    session_start();
}

if(isset($_SESSION['staffId:fort'])){

	session_unset();
	session_destroy();
	header("Refresh:0; url=login");
	die;

}else{
	header("Refresh:0; url=login");
}

?>
