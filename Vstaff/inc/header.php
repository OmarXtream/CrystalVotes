<?php

if(count(get_included_files()) == 1){
	header('HTTP/1.0 403 Forbidden');
	exit;
}
$amstaff = true;
require_once("req.php");

if(isset($pageName) && $pageName == "home"){

	$conn= Database::getInstance();
	$homeInfo= $conn->query('Select (select count(*) from Customers WHERE verify = 0) as CNotActivated, (select count(*) from Customers WHERE verify = 1) as CActivated,   (SELECT count(*)  FROM Customers WHERE isStaff = 1) as StaffCount,  (SELECT count(*)  FROM Candidates) as Candidates, (SELECT count(*)  FROM votes) as votes')->fetch();

}
$conn = Database::getInstance();
$clientData=$conn->query("SELECT rank,username,img FROM Customers WHERE id={$_SESSION['staffId:fort']}");

if($clientData->rowCount() > 0){
		$row = $clientData->fetch();
		$username=htmlspecialchars($row["username"]);
		$img=$row['img'] ?: 'https://png.icons8.com/color/128/000000/user-male-circle.png';
		$rank=$row["rank"];
} else { exit; }
?>
<!DOCTYPE html>
<!--[if lte IE 9]>         <html lang="en" class="lt-ie10 lt-ie10-msg no-focus"> <![endif]-->
<!--[if gt IE 9]><!--> <html lang="en" class="no-focus"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0">

        <title>CrystalVotes- Staff</title>

        <meta name="description" content="">
        <meta name="author" content="MaSafat">
        <meta name="robots" content="noindex, nofollow">
        <meta name="token" content="<?php if(isset($_SESSION['_token'])) { echo $_SESSION['_token']; } ?>">
<link rel="shortcut icon" href="<?=$Config["icon"];?>">
<link rel="icon" href="<?=$Config["icon"];?>">
<link rel="apple-touch-icon-precomposed" href="<?=$Config["icon"];?>">

		  <link data-require="sweet-alert@*" data-semver="0.4.2" rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/1.1.3/sweetalert.min.css" />
  <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>

        <link rel="stylesheet" id="css-main" href="assets\css\codebase.min.css">
		<link rel="stylesheet" href="assets/js/plugins/select2/select2.min.css">
		<link rel="stylesheet" href="assets/js/plugins/select2/select2-bootstrap.min.css">
        <link rel="stylesheet" href="assets/js/plugins/dropzonejs/min/dropzone.min.css">
		<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
		<script src='https://www.google.com/recaptcha/api.js?hl=ar'></script>
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/dropzone/5.4.0/dropzone.css" />
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/dropzone/5.4.0/min/dropzone.min.css" />
		<script src="https://cdnjs.cloudflare.com/ajax/libs/dropzone/5.4.0/min/dropzone.min.js"></script>
		<script src="https://unpkg.com/sweetalert2@7.21.1/dist/sweetalert2.all.js"></script>
		<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>

        <style>
			@font-face {
			  font-family: "nes";
			  font-style: normal;
			  font-weight: bold;
			  src: url("fonts/NeoSansArabic.woff") format("woff");
			}
			.material-icons {
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;
  font-size: 18px;  /* Preferred icon size */
  display: inline-block;
  line-height: 1;
  text-transform: none;
  letter-spacing: normal;
  word-wrap: normal;
  white-space: nowrap;
  direction: ltr;

  /* Support for all WebKit browsers. */
  -webkit-font-smoothing: antialiased;
  /* Support for Safari and Chrome. */
  text-rendering: optimizeLegibility;

  /* Support for Firefox. */
  -moz-osx-font-smoothing: grayscale;

  /* Support for IE. */
  font-feature-settings: 'liga';
}

			div h1, div h2, div h3, div h4, div h6, div p, div align, div i, div li, div.h1, div.h2, div.h3 ,div.h3 , div.h4 ,div.h6, div.p ,div.align ,div.a ,div.li ,div.i ,div.li ,div ,label ,button ,input {
			   font-family: 'Open Sans', nes;
			}

            html {
				font-family: nes;
                direction: rtl;
                text-align: right;
            }

            body {
				font-family: nes !important;
                text-align: right;
            }

			h1,h2,h3,h4,h5,h6,p,button {
				font-family: nes !important;
			}

            @media (min-width: 992px) {
                .sidebar-o.sidebar-mini #sidebar .sidebar-content {
                    -webkit-transform: translateX(0) translateY(0) translateZ(0);
                    transform: translateX(0) translateY(0) translateZ(0);
                }

                .sidebar-r.sidebar-o.sidebar-mini #sidebar .sidebar-content {
                    -webkit-transform: translateX(-166px) translateY(0) translateZ(0);
                    transform: translateX(-166px) translateY(0) translateZ(0);
                }

                .sidebar-r.sidebar-o.sidebar-mini #sidebar:hover .sidebar-content {
                  -webkit-transform: translateX(0) translateY(0) translateZ(0);
                          transform: translateX(0) translateY(0) translateZ(0);
                }
            }

            /* Main Sidebar Navigation */
            .nav-main a {
                padding-right: 40px;
                padding-left: 18px;
            }

            .nav-main a > i {
                right: 19px;
                left: auto;
            }

            .nav-main a.nav-submenu {
                padding-right: 40px;
                padding-left: 35px;
            }

            .nav-main a.nav-submenu::before, .nav-main a.nav-submenu::after {
                right: auto;
                left: 15px;
            }

            .nav-main a.nav-submenu::before {
                content: '\f105';
            }

            .nav-main a.nav-submenu::after {
                -webkit-transform: rotate(-90deg);
                -o-transform: rotate(-90deg);
                transform: rotate(-90deg);
            }

            .nav-main ul {
                padding-right: 40px;
                padding-left: 0;
            }

            .nav-main ul a,
            .nav-main ul a.nav-submenu {
                padding-right: 0;
                padding-left: 8px;
            }

            .nav-main ul a > i {
                margin-right: 0;
                margin-left: 15px;
            }

            .nav-main ul ul {
                padding-right: 12px;
            }

            /* Main Header Navigation */
            @media (min-width: 992px) {
                .nav-main-header a > i {
                    margin-right: 0;
                    margin-left: 8px;
                }

                .nav-main-header a.nav-submenu {
                    padding-right: 14px;
                    padding-left: 28px;
                }

                .nav-main-header a.nav-submenu::before {
                    right: auto;
                    left: 6px;
                }

                .nav-main-header ul {
                    right: 0;
                    left: auto;
                }

                .nav-main-header ul a.nav-submenu::before {
                    content: '\f104';
                }

                .nav-main-header ul ul {
                    right: 100%;
                    left: auto;
                }

                .nav-main-header > li:last-child ul {
                    right: auto;
                    left: 0;
                }

                .nav-main-header > li:last-child ul a.nav-submenu::before {
                    content: '\f105';
                }

                .nav-main-header > li:last-child ul ul {
                    right: auto;
                    left: 100%;
                }
            }
        </style>
    </head>
    <body>
        <!-- Page Container -->
        <!--
            Available classes for #page-container:

        GENERIC

            'enable-cookies'                            Remembers active color theme between pages (when set through color theme helper Codebase() -> uiHandleTheme())

        SIDEBAR & SIDE OVERLAY

            'sidebar-r'                                 Right Sidebar and left Side Overlay (default is left Sidebar and right Side Overlay)
            'sidebar-mini'                              Mini hoverable Sidebar (screen width > 991px)
            'sidebar-o'                                 Visible Sidebar by default (screen width > 991px)
            'sidebar-o-xs'                              Visible Sidebar by default (screen width < 992px)
            'sidebar-inverse'                           Dark themed sidebar

            'side-overlay-hover'                        Hoverable Side Overlay (screen width > 991px)
            'side-overlay-o'                            Visible Side Overlay by default

            'side-scroll'                               Enables custom scrolling on Sidebar and Side Overlay instead of native scrolling (screen width > 991px)

        HEADER

            ''                                          Static Header if no class is added
            'page-header-fixed'                         Fixed Header

        HEADER STYLE

            ''                                          Classic Header style if no class is added
            'page-header-modern'                        Modern Header style
            'page-header-inverse'                       Dark themed Header (works only with classic Header style)
            'page-header-glass'                         Light themed Header with transparency by default
                                                        (absolute position, perfect for light images underneath - solid light background on scroll if the Header is also set as fixed)
            'page-header-glass page-header-inverse'     Dark themed Header with transparency by default
                                                        (absolute position, perfect for dark images underneath - solid dark background on scroll if the Header is also set as fixed)

        MAIN CONTENT LAYOUT

            ''                                          Full width Main Content if no class is added
            'main-content-boxed'                        Full width Main Content with a specific maximum width (screen width > 1200px)
            'main-content-narrow'                       Full width Main Content with a percentage width (screen width > 1200px)
        -->
        <div id="page-container" class="sidebar-o sidebar-r side-scroll main-content-boxed enable-cookies">
            <!-- Sidebar -->
            <!--
                Helper classes

                Adding .sidebar-mini-hide to an element will make it invisible (opacity: 0) when the sidebar is in mini mode
                Adding .sidebar-mini-show to an element will make it visible (opacity: 1) when the sidebar is in mini mode
                    If you would like to disable the transition, just add the .sidebar-mini-notrans along with one of the previous 2 classes

                Adding .sidebar-mini-hidden to an element will hide it when the sidebar is in mini mode
                Adding .sidebar-mini-visible to an element will show it only when the sidebar is in mini mode
                    - use .sidebar-mini-visible-b if you would like to be a block when visible (display: block)
            -->
            <nav id="sidebar">
                <!-- Sidebar Scroll Container -->
                <div id="sidebar-scroll">
                    <!-- Sidebar Content -->
                    <div class="sidebar-content">
                        <!-- Side Header -->
                        <div class="content-header content-header-fullrow px-15">
                            <!-- Mini Mode -->
                            <div class="content-header-section sidebar-mini-visible-b">
                                <!-- Logo -->
                                <span class="content-header-item font-w700 font-size-xl float-left animated fadeIn">
                                    <span class="text-dual-primary-dark">c</span><span class="text-primary">b</span>
                                </span>
                                <!-- END Logo -->
                            </div>
                            <!-- END Mini Mode -->

                            <!-- Normal Mode -->
                            <div class="content-header-section text-center align-parent sidebar-mini-hidden">
                                <!-- Close Sidebar, Visible only on mobile screens -->
                                <!-- Layout API, functionality initialized in Codebase() -> uiApiLayout() -->
                                <button type="button" class="btn btn-circle btn-dual-secondary d-lg-none align-v-r" data-toggle="layout" data-action="sidebar_close">
                                    <i class="fa fa-times text-danger"></i>
                                </button>
                                <!-- END Close Sidebar -->

                                <!-- Logo -->
                                <div class="content-header-item">
                                    <a class="link-effect font-w700" href="#">
<span class="font-size-xl text-dual-primary-dark">CrystalVotes</span>&nbsp;<span class="font-size-xl text-primary">الإدارة</span>
</a>
                                </div>
                                <!-- END Logo -->
                            </div>
                            <!-- END Normal Mode -->
                        </div>
                        <!-- END Side Header -->

                        <!-- Side User -->
                        <div class="content-side content-side-full content-side-user px-10 align-parent">
                            <!-- Visible only in mini mode -->
                            <div class="sidebar-mini-visible-b align-v animated fadeIn">
                                <img class="img-avatar img-avatar32" src="https://png.icons8.com/color/128/000000/user-male-circle.png" alt="">
                            </div>
                            <!-- END Visible only in mini mode -->

                            <!-- Visible only in normal mode -->
                            <div class="sidebar-mini-hidden-b text-center">
                                <a class="img-link" href="">
                                    <img class="img-avatar img-avatar" src="<?=$img?>" alt="">
                                </a>
                                <ul class="list-inline mt-10">
									<li class="list-inline-item">
                                        <a class="link-effect text-dual-primary-dark font-size-xs font-w600 text-uppercase" href=""><?php if(isset($username)){ echo $username; }?></a><br/>
                                        <a class="link-effect text-dual-primary-dark font-size-xs font-w600 text-uppercase" href=""><?=getRank($_SESSION['staffId:fort']);?></a>
                                    </li>
                                    <li class="list-inline-item">
                                        <!-- Layout API, functionality initialized in Codebase() -> uiApiLayout() -->
                                        <a class="link-effect text-dual-primary-dark" data-toggle="layout" data-action="sidebar_style_inverse_toggle" href="javascript:void(0)">
                                            <i class="si si-drop"></i>
                                        </a>
                                    </li>
                                    <li class="list-inline-item">
                                        <a class="link-effect text-dual-primary-dark" href="logout">
                                            <i class="si si-logout"></i>
                                        </a>
                                    </li>

                                </ul>
                            </div>
                            <!-- END Visible only in normal mode -->
                        </div>
                        <!-- END Side User -->

                        <!-- Side Navigation -->
                        <div class="content-side content-side-full">
                            <ul class="nav-main">
									<li>
										<a href="home" <?php if($pageName == "home"){ echo 'class="active"'; } ?>><i class="si si-home"></i><span class="sidebar-mini-hide">الرئيسية</span></a>
									</li>
									<li>
<a href="AddC" <?php if($pageName == "AddC"){ echo 'class="active"'; } ?>> <i class="si si-event"></i><span class="sidebar-mini-hide">المرشحين</span></a>
									</li>
										<?php if(rankPermission($_SESSION['staffId:fort'],4)){?>


																		<?php } ?>

																		<?php if(rankPermission($_SESSION['staffId:fort'],5,true)){?>

									<li>
										<a href="members" <?php if($pageName == "members"){ echo 'class="active"'; } ?>> <i class="fa fa-users"></i><span class="sidebar-mini-hide">الأعضاء</span></a>
									</li>
									<li>
										<a href="status" <?php if($pageName == "status"){ echo 'class="active"'; } ?>> <i class="fa fa-bar-chart"></i><span class="sidebar-mini-hide">الإحصائيات</span></a>
									</li>




									<?php } ?>
									<?php if(rankPermission($_SESSION['staffId:fort'],2,true) || rankPermission($_SESSION['staffId:fort'],4,true) || rankPermission($_SESSION['staffId:fort'],3,true) || rankPermission($_SESSION['staffId:fort'],1,true) || rankPermission($_SESSION['staffId:fort'],5,true)){ ?>
									<?php } ?>
																		<li>
										<a href="logout"> <i class="si si-logout "></i><span class="sidebar-mini-hide">تسجيل الخروج</span></a>
									</li>

                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <!-- END Side Navigation -->
                    </div>
                    <!-- Sidebar Content -->
                </div>
                <!-- END Sidebar Scroll Container -->
            </nav>
            <!-- END Sidebar -->

            <!-- Header -->
            <header id="page-header">
                <!-- Header Content -->
                <div class="content-header">
                    <!-- Left Section -->
                    <div class="content-header-section">
                        <!-- Toggle Sidebar -->
                        <!-- Layout API, functionality initialized in Codebase() -> uiApiLayout() -->
                        <button type="button" class="btn btn-circle btn-dual-secondary" data-toggle="layout" data-action="sidebar_toggle">
                            <i class="fa fa-navicon"></i>
                        </button>
                        <!-- END Toggle Sidebar -->

                        <!-- Layout Options (used just for demonstration) -->
                        <!-- Layout API, functionality initialized in Codebase() -> uiApiLayout() -->
                        <!-- END Layout Options -->
                    </div>
                    <!-- END Left Section -->

                    <!-- Right Section -->
                    <div class="content-header-section">
                        <!-- User Dropdown -->
                        <div class="btn-group" role="group">
                            <button type="button" class="btn btn-rounded btn-dual-secondary" id="page-header-user-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="fa fa-user d-sm-none"></i>
                                <span class="d-none d-sm-inline-block"><?php if(isset($username)) { echo $username; }?></span>
                                <i class="fa fa-angle-down ml-5"></i>
                            </button>
                            <div class="dropdown-menu dropdown-menu-right min-width-200" aria-labelledby="page-header-user-dropdown" dir="ltr">
                                <h5 class="h6 text-center py-10 mb-5 border-b text-uppercase">الخيارات الجانبية</h5>
                                <!-- Toggle Side Overlay -->
                                <!-- Layout API, functionality initialized in Codebase() -> uiApiLayout() -->
                                <a class="dropdown-item" href="javascript:void(0)" data-toggle="layout" data-action="side_overlay_toggle">
                                    <i class="si si-wrench mr-5"></i> الإعدادات
                                </a>
                                <!-- END Side Overlay -->
                                <a class="dropdown-item" href="logout">
                                    <i class="si si-logout mr-5"></i> تسجيل الخروج
                                </a>
                            </div>
                        </div>
                        <!-- END User Dropdown -->

                        <!-- Toggle Side Overlay -->
                        <!-- Layout API, functionality initialized in Codebase() -> uiApiLayout() -->
						                        <div class="btn-group" role="group">
                            <button type="button" class="btn btn-circle btn-dual-secondary" id="page-header-options-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="fa fa-wrench"></i>
                            </button>
                            <div class="dropdown-menu min-width-300" aria-labelledby="page-header-options-dropdown" style="text-align: right;">
                                <h5 class="h6 text-center py-10 mb-10 border-b text-uppercase">الإعدادات</h5>
                                <h6 class="dropdown-header">الالوان</h6>
                                <div class="row no-gutters text-center mb-5">
                                    <div class="col-2 mb-5">
                                        <a class="text-default" data-toggle="theme" data-theme="default" href="javascript:void(0)">
                                            <i class="fa fa-2x fa-circle"></i>
                                        </a>
                                    </div>
                                    <div class="col-2 mb-5">
                                        <a class="text-elegance" data-toggle="theme" data-theme="assets/css/themes/elegance.min.css" href="javascript:void(0)">
                                            <i class="fa fa-2x fa-circle"></i>
                                        </a>
                                    </div>
                                    <div class="col-2 mb-5">
                                        <a class="text-pulse" data-toggle="theme" data-theme="assets/css/themes/pulse.min.css" href="javascript:void(0)">
                                            <i class="fa fa-2x fa-circle"></i>
                                        </a>
                                    </div>
                                    <div class="col-2 mb-5">
                                        <a class="text-flat" data-toggle="theme" data-theme="assets/css/themes/flat.min.css" href="javascript:void(0)">
                                            <i class="fa fa-2x fa-circle"></i>
                                        </a>
                                    </div>
                                    <div class="col-2 mb-5">
                                        <a class="text-corporate" data-toggle="theme" data-theme="assets/css/themes/corporate.min.css" href="javascript:void(0)">
                                            <i class="fa fa-2x fa-circle"></i>
                                        </a>
                                    </div>
                                    <div class="col-2 mb-5">
                                        <a class="text-earth" data-toggle="theme" data-theme="assets/css/themes/earth.min.css" href="javascript:void(0)">
                                            <i class="fa fa-2x fa-circle"></i>
                                        </a>
                                    </div>
                                </div>
                                <h6 class="dropdown-header">الرأسي</h6>
                                <div class="row gutters-tiny text-center mb-5">
                                    <div class="col-6">
                                        <button type="button" class="btn btn-sm btn-block btn-alt-secondary" data-toggle="layout" data-action="header_fixed_toggle">وضع ثابت</button>
                                    </div>
                                    <div class="col-6">
                                        <button type="button" class="btn btn-sm btn-block btn-alt-secondary d-none d-lg-block mb-10" data-toggle="layout" data-action="header_style_classic">النمط الكلاسيكي</button>
                                    </div>
                                </div>
                                <h6 class="dropdown-header">الشريط الجانبي</h6>
                                <div class="row gutters-tiny text-center mb-5">
                                    <div class="col-6">
                                        <button type="button" class="btn btn-sm btn-block btn-alt-secondary mb-10" data-toggle="layout" data-action="sidebar_style_inverse_off">مضيء</button>
                                    </div>
                                    <div class="col-6">
                                        <button type="button" class="btn btn-sm btn-block btn-alt-secondary mb-10" data-toggle="layout" data-action="sidebar_style_inverse_on">داكن</button>
                                    </div>
                                </div>
                                <div class="d-none d-xl-block">
                                    <h6 class="dropdown-header">المحتوى الرئيسي</h6>
                                    <button type="button" class="btn btn-sm btn-block btn-alt-secondary mb-10" data-toggle="layout" data-action="content_layout_toggle">تبديل المخطط</button>
                                </div>
                            </div>
                        </div>
                        <!-- END Toggle Side Overlay -->
                    </div>
                    <!-- END Right Section -->
                </div>
                <!-- END Header Content -->

                <!-- Header Search -->
                <div id="page-header-search" class="overlay-header">
                    <div class="content-header content-header-fullrow">
                        <form action="be_pages_generic_search.html" method="post">
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <!-- Close Search Section -->
                                    <!-- Layout API, functionality initialized in Codebase() -> uiApiLayout() -->
                                    <button type="button" class="btn btn-secondary" data-toggle="layout" data-action="header_search_off">
                                        <i class="fa fa-times"></i>
                                    </button>
                                    <!-- END Close Search Section -->
                                </div>
                                <input type="text" class="form-control" placeholder="Search or hit ESC.." id="page-header-search-input" name="page-header-search-input">
                                <div class="input-group-append">
                                    <button type="submit" class="btn btn-secondary">
                                        <i class="fa fa-search"></i>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <!-- END Header Search -->

                <!-- Header Loader -->
                <!-- Please check out the Activity page under Elements category to see examples of showing/hiding it -->
                <div id="page-header-loader" class="overlay-header bg-primary">
                    <div class="content-header content-header-fullrow text-center">
                        <div class="content-header-item">
                            <i class="fa fa-sun-o fa-spin text-white"></i>
                        </div>
                    </div>
                </div>
                <!-- END Header Loader -->
            </header>
