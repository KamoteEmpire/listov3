<?php
	
include_once("db.php");

header('Access-Control-Allow-Origin: *');

$username=$_POST["txt_initd_city"];
$date=$_POST["txt_initd_date"];
$subject=$_POST["txt_initd_subject"];
$incident=$_POST["txt_initd_incident"];
$where=$_POST["txt_initd_where"];
$actions=$_POST["txt_initd_actions"];


$sql="INSERT INTO tbl_initial_disaster VALUES (NULL, '".$username."', '".$date."', '".$subject."', '".$incident."','".$where."','".$actions."',CURRENT_TIMESTAMP);";
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