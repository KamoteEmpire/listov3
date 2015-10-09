<?php
header('Access-Control-Allow-Origin: *');
$servername = "localhost";
$username = "root";
$password = "";
$conn = mysqli_connect($servername, $username, $password);
mysqli_select_db($conn, "db_listo");
$region = $_GET['selectedRegions'];


echo "</tr>";
$sql = "SELECT DISTINCT(fld_lgu) FROM tbl_abc_status WHERE fld_region = '". $region."' AND fld_alertlevel = 'charlie' ";
$result = mysqli_query($conn, $sql);

echo "<table class='table table-striped'>";
echo "<tr>";
	echo "<th style='background-color: red;'>Charlie</th>";
echo "</tr>";

if(mysqli_num_rows($result) > 0){
	while($row = mysqli_fetch_assoc($result)){
		echo "<tr>";
		echo "<td>".$row["fld_lgu"]."</td>";
	}
	echo "</tr>";
	echo "</table>";
}
else{
	echo "No Record Found";
}


?>
