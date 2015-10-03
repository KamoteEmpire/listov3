<?php
	
include_once("db.php");

header('Access-Control-Allow-Origin: *');
if (isset($_POST["txt_cancel_pre"])) {
    $category=$_POST["txt_cancel_pre"];
$username=$_POST["txt_cancelPre_city"];
$location=$_POST["txt_cancelPre_location"];
$date=$_POST["txt_cancelPre_date"];

$sql="INSERT INTO tbl_cancellation VALUES (NULL, '".$username."','".$category."', '".$location."', '".$date."',CURRENT_TIMESTAMP);";
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
}

if (isset($_POST["txt_cancel_elem"])) {
$username=$_POST["txt_cancelElem_city"];
$category=$_POST["txt_cancel_elem"];
$location=$_POST["txt_cancelElem_location"];
$date=$_POST["txt_cancelElem_date"];

$sql="INSERT INTO tbl_cancellation VALUES (NULL, '".$username."','".$category."', '".$location."', '".$date."',CURRENT_TIMESTAMP);";
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
}

if (isset($_POST["txt_cancel_sec"])) {
$username=$_POST["txt_cancelSec_city"];
$category=$_POST["txt_cancel_sec"];
$location=$_POST["txt_cancelSec_location"];
$date=$_POST["txt_cancelSec_date"];

$sql="INSERT INTO tbl_cancellation VALUES (NULL, '".$username."','".$category."', '".$location."', '".$date."',CURRENT_TIMESTAMP);";
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
}

if (isset($_POST["txt_cancel_ter"])) {
$username=$_POST["txt_cancelTer_city"];
$category=$_POST["txt_cancel_ter"];
$location=$_POST["txt_cancelTer_location"];
$date=$_POST["txt_cancelTer_date"];

$sql="INSERT INTO tbl_cancellation VALUES (NULL, '".$username."','".$category."', '".$location."', '".$date."',CURRENT_TIMESTAMP);";
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
}
if (isset($_POST["txt_cancel_gov"])) {
$username=$_POST["txt_cancelGov_city"];
$category=$_POST["txt_cancel_gov"];
$location=$_POST["txt_cancelGov_location"];
$date=$_POST["txt_cancelGov_date"];

$sql="INSERT INTO tbl_cancellation VALUES (NULL, '".$username."','".$category."', '".$location."', '".$date."',CURRENT_TIMESTAMP);";
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
}



?>
