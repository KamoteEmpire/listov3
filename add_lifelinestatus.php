<?php
	
include_once("db.php");

header('Access-Control-Allow-Origin: *');
$category = $_REQUEST['category'];

if($category=="road"){
$username=$_POST["txt_statusroad_city"];
$typhoon=$_POST["txt_statusroad_typhoon"];
$location=$_POST["txt_road_location"];
$status=$_POST["txt_road_status"];

$sql="INSERT INTO tbl_lifeline_road VALUES (NULL, '".$username."','".$typhoon."', '".$location."', '".$status."',CURRENT_TIMESTAMP);";
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

else if($category =="power"){
	
$username=$_POST["txt_statusPower_city"];
$typhoon=$_POST["txt_statusPower_typhoon"];
$location=$_POST["txt_power_location"];
$status=$_POST["txt_power_status"];

$sql="INSERT INTO tbl_lifeline_power VALUES (NULL, '".$username."','".$typhoon."', '".$location."', '".$status."',CURRENT_TIMESTAMP);";
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

else if($category =="comm"){

$username=$_POST["txt_statusComm_city"];
$typhoon=$_POST["txt_statusComm_typhoon"];
$location=$_POST["txt_comm_location"];
$status=$_POST["txt_comm_status"];

$sql="INSERT INTO tbl_lifeline_comm VALUES (NULL, '".$username."','".$typhoon."', '".$location."', '".$status."',CURRENT_TIMESTAMP);";
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
