<?php
	
include_once("db.php");

header('Access-Control-Allow-Origin: *');

if (isset($_POST["txt_cancel_pre"])) {
$month=$_POST["txt_cancelPre_month"];
$day=$_POST["txt_cancelPre_day"];
$year=$_POST["txt_cancelPre_year"];

$date_array = array($year,$month,$day);
	
$category=$_POST["txt_cancel_pre"];
$username=$_POST["txt_cancelPre_city"];
$typhoon=$_POST["txt_cancelPre_typhoon"];
$location=$_POST["txt_cancelPre_location"];
$date=implode("-",$date_array);

$sql="INSERT INTO tbl_cancellation VALUES (NULL, '".$username."','".$typhoon."','".$category."', '".$location."', '".$date."',CURRENT_TIMESTAMP);";
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

if (isset($_POST["txt_cancel_elem"])) {
	
$month=$_POST["txt_cancelElem_month"];
$day=$_POST["txt_cancelElem_day"];
$year=$_POST["txt_cancelElem_year"];

$date_array = array($year,$month,$day);
$username=$_POST["txt_cancelElem_city"];
$typhoon=$_POST["txt_cancelElem_typhoon"];
$category=$_POST["txt_cancel_elem"];
$location=$_POST["txt_cancelElem_location"];
$date=implode("-",$date_array);

$sql="INSERT INTO tbl_cancellation VALUES (NULL, '".$username."','".$typhoon."','".$category."', '".$location."', '".$date."',CURRENT_TIMESTAMP);";
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

if (isset($_POST["txt_cancel_sec"])) {
$month=$_POST["txt_cancelSec_month"];
$day=$_POST["txt_cancelSec_day"];
$year=$_POST["txt_cancelSec_year"];

$date_array = array($year,$month,$day);
	
	
$username=$_POST["txt_cancelSec_city"];
$typhoon=$_POST["txt_cancelSec_typhoon"];
$category=$_POST["txt_cancel_sec"];
$location=$_POST["txt_cancelSec_location"];
$date=implode("-",$date_array);

$sql="INSERT INTO tbl_cancellation VALUES (NULL, '".$username."','".$typhoon."','".$category."', '".$location."', '".$date."',CURRENT_TIMESTAMP);";
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

if (isset($_POST["txt_cancel_ter"])) {
$month=$_POST["txt_cancelTer_month"];
$day=$_POST["txt_cancelTer_day"];
$year=$_POST["txt_cancelTer_year"];

$date_array = array($year,$month,$day);
	
$username=$_POST["txt_cancelTer_city"];
$typhoon=$_POST["txt_cancelTer_typhoon"];
$category=$_POST["txt_cancel_ter"];
$location=$_POST["txt_cancelTer_location"];
$date=implode("-",$date_array);

$sql="INSERT INTO tbl_cancellation VALUES (NULL,'".$username."','".$typhoon."','".$category."', '".$location."', '".$date."',CURRENT_TIMESTAMP);";
	
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

if (isset($_POST["txt_cancel_gov"])) {
	
$month=$_POST["txt_cancelGov_month"];
$day=$_POST["txt_cancelGov_day"];
$year=$_POST["txt_cancelGov_year"];

$date_array = array($year,$month,$day);

$username=$_POST["txt_cancelGov_city"];
$typhoon=$_POST["txt_cancelGov_typhoon"];
$category=$_POST["txt_cancel_gov"];
$location=$_POST["txt_cancelGov_location"];
$date=implode("-",$date_array);

$sql="INSERT INTO tbl_cancellation VALUES (NULL, '".$username."', '".$typhoon."','".$category."', '".$location."', '".$date."',CURRENT_TIMESTAMP);";

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
