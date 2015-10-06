<?php
	
include_once("db.php");

header('Access-Control-Allow-Origin: *');
$category = $_REQUEST["category"];

if($category == "dead"){
$txt_death_month=$_POST["txt_death_month"];
$txt_death_day=$_POST["txt_death_day"];
$txt_death_year=$_POST["txt_death_year"];

$death_array = array($txt_death_year,$txt_death_month,$txt_death_day);

$txt_incident_month=$_POST["txt_incident_month"];
$txt_incident_day=$_POST["txt_incident_day"];
$txt_incident_year=$_POST["txt_incident_year"];
$incident_array = array($txt_incident_year,$txt_incident_month,$txt_incident_day);

$username=$_POST["txt_casd_city"];
$typhoon=$_POST["txt_casd_typhoon"];
$name=$_POST["txt_cd_name"];
$age=$_POST["txt_cd_age"];
$gender=$_POST["txt_cd_gender"];
$address=$_POST["txt_cd_address"];
$cause=$_POST["txt_cause_of_death"];

$death_date= implode("-",$death_array);
$incident=$_POST["txt_cd_incident"];


$incident_date= implode("-",$incident_array);
$warnings=$_POST["txt_cd_warnings"];



$sql="INSERT INTO tbl_casualties_dead VALUES (NULL, '".$username."', '".$typhoon."','".$name."', '".$age."', '".$gender."', '".$address."','".$cause."','".$death_date."','".$incident."','".$incident_date."','".$warnings."',CURRENT_TIMESTAMP);";
if (!mysqli_query($conn,$sql))
  {
  echo 'Data was not submitted, please check your internet connection';
  echo http_response_code();
  }
else
{
	echo 'Data submitted to DILG. Please click submit again once data is updated ';
	
}
}

else if($category == "injured"){
	
	
$month=$_POST["txt_ciIncident_month"];
$day=$_POST["txt_ciIncident_day"];
$year=$_POST["txt_ciIncident_year"];

$incident_array = array($year,$month,$day);

$username=$_POST["txt_casi_city"];
$typhoon=$_POST["txt_casi_typhoon"];
$name=$_POST["txt_ci_name"];
$age=$_POST["txt_ci_age"];
$gender=$_POST["txt_ci_gender"];
$address=$_POST["txt_ci_address"];
$injury=$_POST["txt_ci_injury"];
$incident=$_POST["txt_ci_incident"];
$incident_date= implode("-",$incident_array);
$warnings=$_POST["txt_ci_warnings"];



$sql="INSERT INTO tbl_casualties_injured VALUES (NULL, '".$username."','".$typhoon."', '".$name."', '".$age."', '".$gender."', '".$address."','".$injury."','".$incident."','".$incident_date."','".$warnings."',CURRENT_TIMESTAMP);";
	
if (!mysqli_query($conn,$sql))
  {
  echo 'Data was not submitted, please check your internet connection';
  echo http_response_code();
  }
else
{
	echo 'Data submitted to DILG. Please click submit again once data is updated ';
	
}

	
}

else if($category == "missing"){
	
	
$month=$_POST["txt_cmIncident_month"];
$day=$_POST["txt_cmIncident_day"];
$year=$_POST["txt_cmIncident_year"];

$incident_array = array($year,$month,$day);

$username=$_POST["txt_casm_city"];
$typhoon=$_POST["txt_casm_typhoon"];
$name=$_POST["txt_cm_name"];
$age=$_POST["txt_cm_age"];
$address=$_POST["txt_cm_address"];
$incident=$_POST["txt_cm_incident"];
$incident_date= implode("-",$incident_array);
$status=$_POST["txt_cm_status"];
$warnings=$_POST["txt_cm_warnings"];

$sql="INSERT INTO tbl_casualties_missing VALUES (NULL, '".$username."', '".$typhoon."', '".$name."', '".$age."','".$address."','".$incident."','".$incident_date."','".$status."','".$warnings."',CURRENT_TIMESTAMP);";
//$result = mysql_query($sql);
	
if (!mysqli_query($conn,$sql))
  {
  echo 'Data was not submitted, please check your internet connection';
  echo http_response_code();
  }
else
{
	echo 'Data submitted to DILG. Please click submit again once data is updated ';
	
}

	
}

?>
