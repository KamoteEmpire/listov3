<?php
	
include_once("db.php");

header('Access-Control-Allow-Origin: *');

$username=$_POST["txt_affected_city"];
$barangay=$_POST["txt_affected_barangay"];
$families=$_POST["txt_affected_families"];



$sql="INSERT INTO tbl_affected_population VALUES (NULL, '".$username."', '".$barangay."', '".$families."',CURRENT_TIMESTAMP);";
//$result = mysql_query($sql);
	
if (!mysql_query($sql))
  {
  echo 'Data was not submitted, please check your internet connection';
  echo http_response_code();
  }
else
{
	echo 'Data submitted to DILG. Please click submit again once data is updated ';
	
}


?>