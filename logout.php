<?php
	if (session_status() == PHP_SESSION_NONE) {
	ini_set('session.cookie_httponly', true);
	ini_set('session.cookie_secure', true);
	//ini_set('session.cookie_domain', '.example.net');
	session_name('__Secure-PHPSESSID');
		session_start();
	}

	if(isset($_SESSION['memberId:vote'])) {
		session_unset();
		session_destroy();
		exit(header("Refresh:0; url=login"));
	} else {
		exit(header("Refresh:0; url=login"));
	}
?>
