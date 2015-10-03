<?php
	
include_once("db.php");

header('Access-Control-Allow-Origin: *');

$username=$_POST["txt_casd_city"];
$name=$_POST["txt_cd_name"];
$age=$_POST["txt_cd_age"];
$gender=$_POST["txt_cd_gender"];
$address=$_POST["txt_cd_address"];
$cause=$_POST["txt_cause_of_death"];
$death_date=$_POST["txt_date_of_death"];
$incident=$_POST["txt_cd_incident"];
$incident_date=$_POST["txt_cd_incident_date"];
$warnings=$_POST["txt_cd_warnings"];



$sql="INSERT INTO tbl_casualties_dead VALUES (NULL, '".$username."', '".$name."', '".$age."', '".$gender."', '".$address."','".$cause."','".$death_date."','".$incident."','".$incident_date."','".$warnings."',CURRENT_TIMESTAMP);";
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
