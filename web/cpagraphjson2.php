<?php
	
include_once("db.php");

header('Access-Control-Allow-Origin: *');
header("Content-Type: application/json");

$sql="SELECT fld_city, fld_typhoon, fld_cpalevel, fld_region, fld_province, fld_percentage, fld_total
FROM tbl_premonitor2
WHERE fld_reportid
IN (

SELECT MAX( fld_reportid ) 
FROM tbl_premonitor2
GROUP BY fld_city
)
ORDER BY fld_city ASC";

$posts = array();
$result=mysql_query($sql);
while($row=mysql_fetch_array($result)) 
{ 
$typhoon=$row['fld_typhoon'];
$cpalevel=$row['fld_cpalevel'];
$region=$row['fld_region'];
$province=$row['fld_province'];
$city=$row['fld_city'];
$percentage=$row['fld_percentage'];
$counter=$row['fld_total'];


$posts[] = array('typhoon'=> $typhoon,
'cpalevel'=> $cpalevel,
'region'=> $region,
 'province'=> $province,
 'city'=> $city,
 'percentage'=> $percentage,
'counter'=> $counter);
}

echo json_encode($posts);
?>



	