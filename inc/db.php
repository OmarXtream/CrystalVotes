<?php
 include 'Vdata.php';
class Database
{


    protected $_db;
    static $_instance;

    private function __construct() {
		try{
        $this->_db = new PDO('mysql:host=localhost;dbname=;charset=utf8mb4', '', '', [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC]);
		}catch(PDOException $e){
			$errorId = 6;
			require 'error.php';
			 exit;
		}
    }

    private function __clone(){}

    public static function getInstance() {
        if (!(self::$_instance instanceof self)) {
            self::$_instance = new self();
        }
        return self::$_instance;
    }


	public function __call ( $method, $args ) {
		if ( is_callable(array($this->_db, $method)) ) {
			return call_user_func_array(array($this->_db, $method), $args);
		}
		else {
			throw new BadMethodCallException('Undefined method Database::' . $method);
		}
	}

        public static function run($sql) {
                 return parent::getInstance()->query($sql);
		 }


}



$conn = Database::getInstance();
$stmt = $conn->query('SELECT * FROM sitesettings')->fetch();
$closeSite = $stmt['closeSite'];
if($closeSite and !isset($amstaff)){
?>

<html>
  <head>
    <title> CrystalVotes </title>
    <style>
    *{
      transition: all 0.6s;
    }

    html {
      height: 100%;
    }

    body{
      font-family: "Lato", sans-serif;
      color: #888;
      margin: 0;
    }

    #main{
      display: table;
      width: 100%;
      height: 100vh;
      text-align: center;
    }

    .fof{
      display: table-cell;
      vertical-align: middle;
    }

    .fof h1{
      font-size: 50px;
      display: inline-block;
      padding-right: 12px;
      animation: type .5s alternate infinite;
    }

    @keyframes type{
      from{box-shadow: inset -3px 0px 0px #888;}
      to{box-shadow: inset -3px 0px 0px transparent;}
    }
    </style>
  </head>
  <body>
    <div id="main">
    	<div class="fof">
      		<h1> الموقع مغلق حاليا <br>  .. (ᵔᴥᵔ)  من فضلك يرجى الانتظار والتحلي بالصبر </h1>
    	</div>
    </div>
  </body>
</html>

<?php
exit();
}
?>
