<?php
header('Access-Control-Allow-Origin: *');
$servername = "localhost";
$username = "root";
$password = "";
$conn = mysqli_connect($servername, $username, $password);
mysqli_select_db($conn, "enlistment");
$studid=$_GET['studidnum'];
$subjects=$_GET['subject'];
$length = $_GET['length'];
for( $i = 0 ; $i < $length ; $i++){
$sql = "DELETE FROM user_enlist WHERE user_id='". $studid."' AND subject_enlisted= '".$subjects[$i]."' ";
$result = mysqli_query($conn, $sql);	
}
for( $i = 0 ; $i < $length ; $i++){
$sql = "INSERT INTO user_enlist(id, subject_enlisted, user_id) VALUES (NULL, '".$subjects[$i]."', '".$studid."')";
$result = mysqli_query($conn, $sql);	
}

?>