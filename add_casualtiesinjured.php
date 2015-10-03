<?php
	
include_once("db.php");

header('Access-Control-Allow-Origin: *');

$username=$_POST["txt_casi_city"];
$name=$_POST["txt_ci_name"];
$age=$_POST["txt_ci_age"];
$gender=$_POST["txt_ci_gender"];
$address=$_POST["txt_ci_address"];
$injury=$_POST["txt_ci_injury"];
$incident=$_POST["txt_ci_incident"];
$incident_date=$_POST["txt_ci_incident_date"];
$warnings=$_POST["txt_ci_warnings"];



$sql="INSERT INTO tbl_casualties_injured VALUES (NULL, '".$username."', '".$name."', '".$age."', '".$gender."', '".$address."','".$injury."','".$incident."','".$incident_date."','".$warnings."',CURRENT_TIMESTAMP);";
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
