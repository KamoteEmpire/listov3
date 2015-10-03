<?php
	
include_once("db.php");

header('Access-Control-Allow-Origin: *');

$username=$_POST["txt_calamity_city"];
$location=$_POST["txt_calamity_location"];
$reso_num=$_POST["txt_calamity_resonum"];



$sql="INSERT INTO tbl_declaresc VALUES (NULL, '".$username."', '".$location."', '".$reso_num."',CURRENT_TIMESTAMP);";
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
