<?php
	
include_once("db.php");

header('Access-Control-Allow-Origin: *');

$username=$_POST["txt_statusComm_city"];
$location=$_POST["txt_comm_location"];
$status=$_POST["txt_comm_status"];

$sql="INSERT INTO tbl_lifeline_comm VALUES (NULL, '".$username."', '".$location."', '".$status."',CURRENT_TIMESTAMP);";
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
