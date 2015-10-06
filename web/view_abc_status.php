<?php
header('Access-Control-Allow-Origin: *');
$servername = "localhost";
$username = "root";
$password = "";
$conn = mysqli_connect($servername, $username, $password);
mysqli_select_db($conn, "db_listo");
$sql = "SELECT * FROM tbl_abc_status WHERE fld_alertlevel = 'bravo' ";
$result = mysqli_query($conn, $sql);
echo "<table class='table'>";
echo "<tr>";
	echo "<td>Alpha</td>";
	echo "<td>Bravo</td>";
	echo "<td>Charlie</td>";
echo "</tr>";
if(mysqli_num_rows($result) > 0){
	while($row = mysqli_fetch_assoc($result)){
		echo "<tr>";
		echo "<td>".$row["fld_lgu"]."</td>";
		echo "</tr>";
	}

echo "</table>";
}
else{
	echo "No Record Found";
}


?>
