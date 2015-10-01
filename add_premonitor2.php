<?php
	
include_once("db.php");

header('Access-Control-Allow-Origin: *');

$typhoon=$_POST["hiddenPreMonitorTyphoon"];
$cpalevel="Alpha";
$region=$_POST["hiddenPreMonitorRegion"];
$province=$_POST["hiddenPreMonitorProvince"];
$city=$_POST["hiddenPreMonitorCity"];

$a1=$_POST["hiddenpreMonitor-a-1"];
$a2=$_POST["hiddenpreMonitor-a-2"];


$b1=$_POST["hiddenpreMonitor-b-1"];
$b2=$_POST["hiddenpreMonitor-b-2"];
$b3=$_POST["hiddenpreMonitor-b-3"];
$b4=$_POST["hiddenpreMonitor-b-4"];
$b5=$_POST["hiddenpreMonitor-b-5"];
$b6=$_POST["hiddenpreMonitor-b-6"];
$b7=$_POST["hiddenpreMonitor-b-7"];
$b8=$_POST["hiddenpreMonitor-b-8"];
$b9=$_POST["hiddenpreMonitor-b-9"];
$b10=$_POST["hiddenpreMonitor-b-10"];
$b11=$_POST["hiddenpreMonitor-b-11"];
$b12=$_POST["hiddenpreMonitor-b-12"];
$b13=$_POST["hiddenpreMonitor-b-13"];
$b14=$_POST["hiddenpreMonitor-b-14"];
$b15=$_POST["hiddenpreMonitor-b-15"];
$b16=$_POST["hiddenpreMonitor-b-16"];

$c1=$_POST["hiddenpreMonitor-c-1"];
$c2=$_POST["hiddenpreMonitor-c-2"];
$c3=$_POST["hiddenpreMonitor-c-3"];
$c4=$_POST["hiddenpreMonitor-c-4"];
$c5=$_POST["hiddenpreMonitor-c-5"];
$c6=$_POST["hiddenpreMonitor-c-6"];


$d1=$_POST["hiddenpreMonitor-d-1"];
$d2=$_POST["hiddenpreMonitor-d-2"];
$d3=$_POST["hiddenpreMonitor-d-3"];
$d4=$_POST["hiddenpreMonitor-d-4"];
$d5=$_POST["hiddenpreMonitor-d-5"];
$d6=$_POST["hiddenpreMonitor-d-6"];
$d7=$_POST["hiddenpreMonitor-d-7"];
$d8=$_POST["hiddenpreMonitor-d-8"];
$d9=$_POST["hiddenpreMonitor-d-9"];
$d10=$_POST["hiddenpreMonitor-d-10"];
$d11=$_POST["hiddenpreMonitor-d-11"];


$counter=$_POST["hiddenPreMonitorCounter"];
$percentage=$_POST["hiddenPreMonitorPercentage"];

$sql="INSERT INTO tbl_premonitor2 VALUES (NULL, '".$typhoon."', '".$cpalevel."', '".$region."', '".$province."','".$city."',
$a1,$a2,
$b1,$b2,$b3,$b4,$b5,$b6,$b7,$b8,$b9,$b10,$b11,$b12,$b13,$b14,$b15,$b16,
$c1,$c2,$c3,$c4,$c5,$c6,
$d1,$d2,$d3,$d4,$d5,$d6,$d7,$d8,$d9,$d10,$d11,
CURRENT_TIMESTAMP, '".$percentage."', '".$counter."');";
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
	