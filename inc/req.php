<?php
#ini_set('display_errors', 1);
if(!isset($req) || $req == false){
  ini_set('session.cookie_httponly', true);
  ini_set('session.cookie_secure', true);
  #ini_set('session.cookie_domain', '.example.net');
  session_name('__Secure-PHPSESSID');
  session_start();

require_once("db.php");
require_once("Vdata.php");
require_once("functions.php");
if(!isset($withOutProtection)){
require_once("protection.php");
}
}
?>
