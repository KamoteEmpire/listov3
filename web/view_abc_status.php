<?php
header('Access-Control-Allow-Origin: *');
$servername = "localhost";
$username = "root";
$password = "";
$conn = mysqli_connect($servername, $username, $password);
mysqli_select_db($conn, "db_listo");
$region = $_GET['selectedRegions'];

$sql = "SELECT DISTINCT(fld_lgu) FROM tbl_abc_status WHERE fld_region = '". $region."' AND fld_alertlevel = 'alpha' ";
$result = mysqli_query($conn, $sql);

$sqlb = "SELECT DISTINCT(fld_lgu) FROM tbl_abc_status WHERE fld_region = '". $region."' AND fld_alertlevel = 'bravo' ";
$resultb = mysqli_query($conn, $sqlb);

$sqlc = "SELECT DISTINCT(fld_lgu) FROM tbl_abc_status WHERE fld_region = '". $region."' AND fld_alertlevel = 'charlie' ";
$resultc = mysqli_query($conn, $sqlc);

echo "<table class='table'>";
echo "<tr>";
	echo "<td>Alpha</td>";
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
