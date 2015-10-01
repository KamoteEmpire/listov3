<?php

include_once("db.php");
header('Access-Control-Allow-Origin: *');
header("Content-Type: application/json");


if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
mysqli_select_db($conn,"db_listo");
$sql = "SELECT * FROM tbl_initial_disaster";
$result = mysqli_query($conn, $sql);

$posts = array();

while($row=mysqli_fetch_array($result)) 
{ 
$date=$row['fld_initd_date'];
$subject=$row['fld_initd_subject'];
$incident=$row['fld_initd_incident'];
$where=$row['fld_initd_where'];
$actions=$row['fld_initd_actions'];
$timestamp=$row['fld_timestamp'];

$posts[] = array('date'=> $date,
'subject'=> $subject,
'incident'=> $incident,
'where'=> $where,
'actions'=> $actions,
'timestamp'=> $timestamp);
}

echo json_encode($posts);

?>