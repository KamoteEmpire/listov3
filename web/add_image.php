<?php
if(count($_FILES) > 0) {
if(is_uploaded_file($_FILES['userImage']['tmp_name'])) {
mysql_connect("localhost", "root", "");
mysql_select_db ("db_listo");
$typhoon=$_POST['txtTyphoon'];

$imgData =addslashes(file_get_contents($_FILES['userImage']['tmp_name']));
$imageProperties = getimageSize($_FILES['userImage']['tmp_name']);
$sql = "INSERT INTO tbl_cpaalert2( fld_alertid, fld_imageType, fld_hotdogpath, fld_typhoon, fld_timestamp)
VALUES(NULL, '{$imageProperties['mime']}', '{$imgData}', '".$typhoon."', CURRENT_TIMESTAMP)";
	if (!mysql_query($sql))
	  {
	  echo 'Fail';
	  }
	else
	{
		echo "<link href='css/bootstrap.min.css' rel='stylesheet'>";
		echo "<script src='js/jquery.js'></script>";
		echo "<script src='js/bootstrap.js'></script>";
		echo "<script type='text/javascript'>
		$(document).ready(function(){
		$('#myModalImageSuccess').modal('show');
		});
		</script>";
		
		//header("Location: index.html");
		
		echo "<div class='modal fade' id='myModalImageSuccess' role='dialog'>
						<div class='modal-dialog'>
    
						
						  <div class='modal-content'>
							<div class='modal-header'>
							  <h4 class='modal-title'>Success</h4>
							</div>
							<div class='modal-body'>
							  <p>Hotdog Path Image Submitted</h1>
							</div>
							<div class='modal-footer'>
							  <a role='button' class='btn btn-info' href=index.html#about>Close</a>
							</div>
						  </div>
						  
						</div>
		</div>";
		
		
		//
	}

}
}
?>