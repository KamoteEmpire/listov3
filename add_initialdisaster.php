<?php
	
include_once("db.php");

header('Access-Control-Allow-Origin: *');


$month=$_POST["txt_initd_month"];
$day=$_POST["txt_initd_day"];
$year=$_POST["txt_initd_year"];

$incident_array = array($year,$month,$day);


$username=$_POST["txt_initd_city"];
$typhoon=$_POST["txt_initd_typhoon"];
$date= implode("-",$incident_array);
$subject=$_POST["txt_initd_subject"];
$incident=$_POST["txt_initd_incident"];
$where=$_POST["txt_initd_where"];
$actions=$_POST["txt_initd_actions"];


$sql="INSERT INTO tbl_initial_disaster VALUES (NULL, '".$username."','".$typhoon."', '".$date."', '".$subject."', '".$incident."','".$where."','".$actions."',CURRENT_TIMESTAMP);";
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


?>
