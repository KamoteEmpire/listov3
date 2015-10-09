<?php
header('Access-Control-Allow-Origin: *');
header("Content-Type: application/json");

$servername = "localhost";
$username = "root";
$password = "";
$conn = mysqli_connect($servername, $username, $password);
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
mysqli_select_db($conn,"db_listo");

$region = $_GET['selectedRegions'];
$sql = "SELECT DISTINCT(fld_lgu),fld_alertlevel  FROM tbl_abc_status WHERE fld_region = '". $region."' ";
$result = mysqli_query($conn, $sql);
$posts = array();
while($row=mysqli_fetch_array($result)) 
{ 
$lgu=$row['fld_lgu'];
$alertlevel=$row['fld_alertlevel'];
$posts[] = array('lgu'=> $lgu,
'alertlevel'=> $alertlevel);
}

echo json_encode($posts);

?>