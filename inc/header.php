<?php
if(count(get_included_files()) == 1){
	header('HTTP/1.0 403 Forbidden');
	exit;
}
	if (!isset($loginPage) and !isset($main)) {

	require 'req.php';

	$conn = Database::getInstance();
	$sql = $conn->query("SELECT username,email,img,phonenumber,createdTime,votes FROM Customers WHERE id='{$_SESSION['memberId:vote']}'");

	if($sql->rowCount() > 0){

		$row = $sql->fetch();
			$clientnickname = htmlspecialchars($row['username']);
			$clientVotes = (int)$row['votes'];
			$clientemail = $row['email'];
			$clientimage = $row['img'];
			$clientPhoneNumber = $row['phonenumber'];
			$clientImage = $row['img'];
			$clienttime = $row['createdTime'];

		if($clientimage == ""){
		$clientImage = 'https://png.icons8.com/cotton/64/000000/gender-neutral-user.png';
		}

	} else {
		exit(header("Refresh:0; url=logout.php"));
	}
	}else{
		require_once("inc/Vdata.php");
		require_once("inc/db.php");

	}
?>
<!doctype html>
<html lang="ar" dir="ltr">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- General CSS -->
    <link rel="stylesheet" href="https://cdn.rtlcss.com/bootstrap/v4.2.1/css/bootstrap.min.css" integrity="sha384-vus3nQHTD+5mpDiZ4rkEPlnkcyTP+49BhJ4wJeJunw06ZAp+wzzeBPUXr42fi8If" crossorigin="anonymous">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css">
    <!-- Custom CSS -->
    <link rel="stylesheet" href="css/style.css">


    <!-- Page Title -->
		<title><?=$Config["title"];?></title>
		<meta name="description" content="<?=$Config["description"];?>">
		<meta name="token" content="<?=$_SESSION['_token']?>">
		<meta property="og:title" content="<?=$Config["title"];?>">
		<meta property="og:site_name" content="<?=$Config["title"];?>">
		<meta property="og:description" content="<?=$Config["description"];?>">
		<meta property="og:type" content="website">
		<meta property="og:url" content="">
		<meta property="og:image" content="<?=$Config["icon"];?>">
		<link rel="shortcut icon" href="<?=$Config["icon"];?>">
		<link rel="icon" href="<?=$Config["icon"];?>">
		<link rel="apple-touch-icon-precomposed" href="<?=$Config["icon"];?>">
		<noscript><meta HTTP-EQUIV="refresh" content=0;url="javascriptErr.php"></noscript>

  </head>
  <body>
