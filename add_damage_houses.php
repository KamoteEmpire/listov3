<?php
	
include_once("db.php");

header('Access-Control-Allow-Origin: *');

$category=$_REQUEST["category"];


if($category == "partially"){
$username=$_POST["txt_damagedP_city"];
$typhoon=$_POST["txt_damagedP_typhoon"];
$location=$_POST["txt_damagedP_location"];
$reso_num=$_POST["txt_damagedP_number"];
}

else if($category == "totally"){
	
$username=$_POST["txt_damagedT_city"];
$typhoon=$_POST["txt_damagedT_typhoon"];
$location=$_POST["txt_damagedT_location"];
$reso_num=$_POST["txt_damagedT_number"];
}

$sql="INSERT INTO tbl_damage_houses VALUES (NULL, '".$username."', '".$typhoon."', '".$location."', '".$reso_num."','".$category."',CURRENT_TIMESTAMP);";
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
