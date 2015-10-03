<?php
	
include_once("db.php");

header('Access-Control-Allow-Origin: *');

$username=$_POST["txt_casm_city"];
$name=$_POST["txt_cm_name"];
$age=$_POST["txt_cm_age"];
$address=$_POST["txt_cm_address"];
$incident=$_POST["txt_cm_incident"];
$incident_date=$_POST["txt_cm_incident_date"];
$status=$_POST["txt_cm_status"];
$warnings=$_POST["txt_cm_warnings"];



$sql="INSERT INTO tbl_casualties_missing VALUES (NULL, '".$username."', '".$name."', '".$age."','".$address."','".$incident."','".$incident_date."','".$status."','".$warnings."',CURRENT_TIMESTAMP);";
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
