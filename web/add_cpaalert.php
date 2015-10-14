<?php
header('Access-Control-Allow-Origin: *');
$servername = "localhost";
$username = "root";
$password = "";
$conn = mysqli_connect($servername, $username, $password);
mysqli_select_db($conn, "db_listo");

$typhoonStatus=$_GET['txtTyphoonStatus'];
$alertLevel=$_GET['txtAlertLevel'];
$region=$_GET['txtRegion'];
$province=$_GET['txtProvince'];
$lgus=$_GET['myLGUS'];
$length = $_GET['length'];

for( $i = 0 ; $i < $length ; $i++){
$sql = "INSERT INTO tbl_abc_status(fld_id, fld_typhoon, fld_alertlevel, fld_region, fld_province, fld_lgu, fld_timestamp) VALUES (NULL, '".$typhoonStatus."', '".$alertLevel."', '".$region."', '".$province."', '".$lgus[$i]."', CURRENT_TIMESTAMP)";
$result = mysqli_query($conn, $sql);	
}
if($result){
	echo "Success";
}
else{
	echo "Failed";
}
?>